const { chromium, firefox, webkit } = require('playwright');
const fs = require('node:fs');

const BASE = 'https://tolvix.in';
const errors = [];
const results = [];
const engines = [
  ['chromium', chromium],
  ['firefox', firefox],
  ['webkit', webkit],
];

async function getToolUrls() {
  const response = await fetch(BASE + '/sitemap.xml');
  if (!response.ok) throw new Error('Sitemap HTTP ' + response.status);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>\\s*(.*?)\\s*<\\/loc>/g)]
    .map(m => m[1].trim())
    .filter(url => new URL(url).pathname.startsWith('/tools/'));
}

async function inspectPage(browser, engine, url, viewport, mobile = false) {
  const page = await browser.newPage({ viewport, isMobile: mobile, hasTouch: mobile });
  const pageErrors = [];
  const consoleErrors = [];
  page.on('pageerror', e => pageErrors.push(e.message));
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 300));
  });
  let responseStatus = 0;
  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    responseStatus = response ? response.status() : 0;
    await page.waitForTimeout(700);
    const metrics = await page.evaluate(() => ({
      title: document.title.trim(),
      h1: [...document.querySelectorAll('h1')].some(x => x.innerText.trim()),
      bodyText: (document.body?.innerText || '').trim().length,
      viewportWidth: document.documentElement.clientWidth,
      documentWidth: document.documentElement.scrollWidth,
      controls: document.querySelectorAll('input,textarea,select,button').length,
      fileInputs: document.querySelectorAll('input[type=file]').length,
      downloadLinks: document.querySelectorAll('a[download]').length,
    }));
    const issues = [];
    if (responseStatus !== 200) issues.push('HTTP ' + responseStatus);
    if (!metrics.title) issues.push('missing document title');
    if (!metrics.h1) issues.push('missing visible-text h1');
    if (metrics.bodyText < 40) issues.push('very little body text');
    if (metrics.documentWidth > metrics.viewportWidth + 2) {
      issues.push('horizontal overflow (' + metrics.documentWidth + ' > ' + metrics.viewportWidth + ')');
    }
    for (const e of pageErrors) issues.push('uncaught JS: ' + e);
    results.push({ engine, url, viewport: mobile ? 'mobile-390' : 'desktop-1365', status: responseStatus, ...metrics, pageErrors, consoleErrors, issues });
    if (issues.length) errors.push(...issues.map(issue => engine + ' ' + url + ': ' + issue));
  } catch (e) {
    errors.push(engine + ' ' + url + ': navigation/test failure: ' + e.message);
    results.push({ engine, url, viewport: mobile ? 'mobile-390' : 'desktop-1365', status: responseStatus, issues: [e.message] });
  } finally {
    await page.close();
  }
}

(async () => {
  const urls = await getToolUrls();
  console.log('Found ' + urls.length + ' tool URLs in live sitemap.');
  if (urls.length !== 100) console.warn('Inventory differs from expected 100; testing every discovered tool URL.');
  if (!urls.length) throw new Error('No tool URLs found.');
  for (const [name, engineType] of engines) {
    const browser = await engineType.launch({ headless: true });
    for (const url of urls) {
      await inspectPage(browser, name, url, { width: 1365, height: 900 });
      if (name === 'chromium') {
        await inspectPage(browser, name, url, { width: 390, height: 844 }, true);
      }
    }
    await browser.close();
  }
  fs.mkdirSync('playwright-report', { recursive: true });
  fs.writeFileSync('playwright-report/tool-smoke-results.json', JSON.stringify({
    testedAt: new Date().toISOString(), discoveredTools: urls.length,
    pageRuns: results.length, failures: errors.length, errors, results,
  }, null, 2));
  console.log('Runs: ' + results.length + '; failures: ' + errors.length);
  if (errors.length) {
    console.error(errors.slice(0, 100).join('\\n'));
    process.exitCode = 1;
  } else {
    console.log('PASS: all discovered tool pages loaded without detected smoke-test failures.');
  }
})();
