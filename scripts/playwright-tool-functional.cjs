const { chromium } = require('playwright');
const fs = require('node:fs');
const BASE = process.env.TOLVIX_BASE_URL || 'https://tolvix.in';
const results = [];
const failures = [];
async function run(name, fn) {
  try { const detail = await fn(); results.push({name, status:'PASS', detail:detail||''}); console.log('PASS',name,detail||''); }
  catch (e) { failures.push({name,error:e.message}); results.push({name,status:'FAIL',error:e.message}); console.error('FAIL',name,e.message); }
}
async function pageFor(browser, path) {
  const p = await browser.newPage({viewport:{width:1365,height:900}});
  p.setDefaultTimeout(15000);
  const errors=[]; p.on('pageerror',e=>errors.push(e.message));
  const r=await p.goto(BASE+path,{waitUntil:'domcontentloaded',timeout:30000});
  if(!r || r.status()!==200) throw Error('HTTP '+(r&&r.status()));
  await p.waitForTimeout(350);
  return {p,errors};
}
async function basic(browser, slug, values, expected, selector='[data-run]') {
  const {p,errors}=await pageFor(browser,'/tools/'+slug+'.html');
  for(const [id,value] of Object.entries(values)) {
    const el=p.locator('#'+id);
    if(await el.evaluate(e=>e.tagName==='SELECT')) await el.selectOption(String(value));
    else await el.fill(String(value));
  }
  await p.locator(selector).click();
  await p.waitForFunction(()=>{const x=document.querySelector('#result');return x&&x.textContent.trim()&&x.textContent.trim()!=='Your result will appear here.'});
  const out=await p.locator('#result').innerText();
  if(!expected.test(out)) throw Error('Unexpected output: '+out.slice(0,250));
  if(errors.length) throw Error('JS exception: '+errors.join('; '));
  await p.close(); return out.slice(0,160);
}
async function main() {
 const browser=await chromium.launch({headless:true});
 const cases=[
  ['case','case',{inputText:'hello tolVix',caseMode:'upper'},/HELLO TOLVIX/],
  ['duplicates','duplicates',{inputText:'apple\nbanana\napple'},/apple[\s\S]*banana/],
  ['json','json',{inputText:'{"name":"Tolvix","ok":true}',jsonMode:'minify'},/"name":"Tolvix"/],
  ['discount','discount',{price:'1500',discountPct:'20'},/Final price:\s*₹?1200\.00/],
  ['percentage','percentage',{pctA:'20',pctB:'150',pctMode:'of'},/30/],
  ['gst','gst',{gstAmount:'1000',gstRate:'18',gstMode:'exclusive'},/GST:\s*₹?180\.00/],
  ['bmi','bmi',{weight:'70',height:'175'},/BMI:\s*22\.9/],
  ['age','age',{dob:'2000-01-01'},/Age:/],
  ['slug','slug',{inputText:'Hello Tolvix World!'},/^hello-tolvix-world$/],
  ['reverse','reverse',{inputText:'hello world',reverseMode:'words'},/world hello/],
  ['replace','replace',{inputText:'red blue red',findText:'red',replaceText:'green'},/green blue green/],
  ['spaces','spaces',{inputText:'  hello   world  \n  test  '},/hello world[\s\S]*test/],
  ['sort','sort',{inputText:'pear\napple\nbanana',sortOrder:'asc',sortRemove:'no'},/apple[\s\S]*banana[\s\S]*pear/],
  ['base64','base64',{inputText:'Tolvix',base64Mode:'encode'},/VG9sdml4/],
  ['tip','tip-calculator',{billAmount:'1000',tipPercent:'10',peopleCount:'2'},/50/],
  ['negative-marking','negative-marking-calculator',{},/.+/],
 ];
 for(const [label,slug,vals,expect] of cases) await run('standard:'+label,()=>basic(browser,slug,vals,expect));
 await run('word-counter:unicode-and-empty',async()=>{
  const {p}=await pageFor(browser,'/tools/word.html');
  await p.locator('#inputText').fill('Hello 🌍 Tolvix\nSecond line.');
  await p.waitForTimeout(300);
  const words=await p.locator('#wc-words').innerText();
  const chars=await p.locator('#wc-characters').innerText();
  if(words!=='4'||chars!=='27') throw Error('Expected 4 words and 27 characters, received '+words+' words and '+chars+' characters');
  await p.locator('#inputText').fill(''); await p.waitForTimeout(150);
  if(await p.locator('#wc-words').innerText()!=='0') throw Error('Empty input did not reset count');
  await p.close(); return 'unicode text and empty input';
 });
 await run('url-encoder-decoder',async()=>{
  const {p}=await pageFor(browser,'/tools/url-encoder-decoder.html');
  await p.locator('#source').fill('hello world & Tolvix');
  await p.locator('#run').click();
  const out=await p.locator('#output').inputValue();
  if(!out.includes('hello%20world')) throw Error('Unexpected encoded output: '+out);
  await p.close(); return out;
 });
 // All 19 physics calculators: default values are valid and must produce result rows.
 const physics=['circular-motion','doppler','free-fall','inclined-plane','kinematics','lens-mirror','momentum-collision','newtons-second-law','ohms-law','pendulum','projectile-motion','resistors','significant-figures','snells-law','spring-shm','uncertainty','unit-converter','vector','wave','work-energy-power'];
 for(const id of physics) await run('physics:'+id,async()=>{
  const {p,errors}=await pageFor(browser,'/tools/physics/'+id+'.html');
  await p.locator('form button[type=submit]').click();
  await p.waitForFunction(()=>{const b=document.querySelector('.physics-results');return b&&!b.hidden&&b.innerText.trim().length>0});
  const out=await p.locator('.physics-results').innerText();
  if(/must be greater|must be a finite|Error|NaN|Infinity/.test(out)) throw Error('Invalid default calculation: '+out);
  if(errors.length) throw Error(errors.join('; '));
  await p.close(); return out.slice(0,120);
 });
 // Chemistry calculators, with explicit safe examples for formula-dependent fields.
 const chemistry=['combined-gas-law','concentration-converter','density','dilution','electron-configuration','empirical-formula','ideal-gas','limiting-reactant','molar-mass','molarity','mole','molecular-formula','oxidation-number','percent-composition','percent-yield','ph','poh','stoichiometry','theoretical-yield'];
 for(const id of chemistry) await run('chemistry:'+id,async()=>{
  const {p,errors}=await pageFor(browser,'/tools/chemistry/'+id+'.html');
  const fills={formula:'H2O',composition:'C:40,H:6.7,O:53.3',element:'O',known:'2',charge:'0',empirical:'CH2O',molarMass:'180.156',reactant:'H2',product:'H2O',r1:'H2',r2:'O2',z:'26'};
  for(const [k,v] of Object.entries(fills)){const el=p.locator('[name="'+k+'"]');if(await el.count()) await el.fill(v);}
  await p.locator('form button[type=submit]').click();
  await p.waitForFunction(()=>{const b=document.querySelector('.chem-results');return b&&!b.hidden&&b.innerText.trim().length>0});
  const out=await p.locator('.chem-results').innerText();
  if(/Unknown chemistry|Enter a valid|must be greater|Could not parse|not close/.test(out)) throw Error('Rejected test inputs: '+out);
  if(errors.length) throw Error(errors.join('; '));
  await p.close(); return out.slice(0,120);
 });
 // Advanced text/code utilities.
 for(const [id,src,rx] of [
  ['html-minifier','<div>Hello   world</div>',/<div>Hello world<\/div>/],
  ['css-minifier','body { color: red; margin: 0; }',/color:red/],
  ['js-minifier','function add ( a, b ) { return a + b; }',/return\s+\w+\+\w+/]
 ]) await run('advanced:'+id,async()=>{
  const {p,errors}=await pageFor(browser,'/tools/'+id+'.html');
  await p.locator('#source').fill(src); await p.locator('#run').click();
  await p.waitForFunction(()=>document.querySelector('#output')?.value?.length>0);
  const out=await p.locator('#output').inputValue();
  if(!rx.test(out)) throw Error('Unexpected minified output: '+out);
  if(errors.length) throw Error(errors.join('; '));
  await p.close(); return out;
 });
 await run('advanced:number-base-converter',async()=>{
  const {p}=await pageFor(browser,'/tools/number-base-converter.html');
  await p.locator('#number').fill('255'); await p.locator('#base').selectOption('10'); await p.locator('#run').click();
  const out=await p.locator('#output').innerText();
  if(!out.includes('11111111')) throw Error('Unexpected conversion: '+out);
  await p.close(); return out;
 });
 // Image and PDF fixture tests: create tiny real files in the browser, then validate downloads.
 const imagePage=await pageFor(browser,'/tools/image-compressor.html');
 const png64=await imagePage.p.evaluate(()=>{const c=document.createElement('canvas');c.width=4;c.height=4;const x=c.getContext('2d');x.fillStyle='#336699';x.fillRect(0,0,4,4);return c.toDataURL('image/png').split(',')[1]});
 const jpg64=await imagePage.p.evaluate(()=>{const c=document.createElement('canvas');c.width=4;c.height=4;const x=c.getContext('2d');x.fillStyle='#cc8844';x.fillRect(0,0,4,4);return c.toDataURL('image/jpeg',.9).split(',')[1]});
 await imagePage.p.close();
 const png=Buffer.from(png64,'base64'),jpg=Buffer.from(jpg64,'base64');
 async function imageDownload(id,file,values={}) {
  const {p,errors}=await pageFor(browser,'/tools/'+id+'.html');
  for(const [k,v] of Object.entries(values)){const el=p.locator('#'+k);if(await el.count()){if(await el.evaluate(e=>e.tagName==='SELECT')) await el.selectOption(String(v));else await el.fill(String(v));}}
  await p.locator('#files').setInputFiles({name:file.name,mimeType:file.type,buffer:file.buffer});
  const dl=p.waitForEvent('download',{timeout:25000});
  await p.locator('#run').click(); const download=await dl;
  const path=await download.path(); const stat=fs.statSync(path);
  if(stat.size<20) throw Error('Output download is empty');
  if(errors.length) throw Error(errors.join('; '));
  await p.close(); return download.suggestedFilename()+' ('+stat.size+' bytes)';
 }
 await run('image-compressor:valid-png-download',()=>imageDownload('image-compressor',{name:'fixture.png',type:'image/png',buffer:png},{quality:'75',format:'image/webp'}));
 await run('image-converter:valid-png-download',()=>imageDownload('image-converter',{name:'fixture.png',type:'image/png',buffer:png},{format:'image/jpeg'}));
 await run('image-cropper:valid-png-download',()=>imageDownload('image-cropper',{name:'fixture.png',type:'image/png',buffer:png},{x:'0',y:'0',w:'2',h:'2'}));
 await run('image-resizer:valid-png-download',()=>imageDownload('image-resizer',{name:'fixture.png',type:'image/png',buffer:png},{w:'8',h:'8',format:'image/png'}));
 await run('jpg-to-png:valid-jpeg-download',()=>imageDownload('jpg-to-png',{name:'fixture.jpg',type:'image/jpeg',buffer:jpg}));
 await run('png-to-jpg:valid-png-download',()=>imageDownload('png-to-jpg',{name:'fixture.png',type:'image/png',buffer:png}));
 // Build valid one-page PDFs using the same pdf-lib version the site loads.
 const pdfPage=await pageFor(browser,'/tools/pdf-merge.html');
 await pdfPage.p.waitForFunction(()=>!!window.PDFLib,{timeout:20000});
 const pdfs=await pdfPage.p.evaluate(async()=>{
  const make=async(text)=>{const d=await PDFLib.PDFDocument.create();const page=d.addPage([300,400]);page.drawText(text,{x:30,y:350});return Array.from(new Uint8Array(await d.save()));};
  const a=await make('Tolvix fixture A'),b=await make('Tolvix fixture B');
  return [a,b].map(bytes=>btoa(bytes.map(x=>String.fromCharCode(x)).join('')));
 });
 await pdfPage.p.close();
 const pdfA=Buffer.from(pdfs[0],'base64'),pdfB=Buffer.from(pdfs[1],'base64');
 async function pdfDownload(id, files, values={}) {
  const {p,errors}=await pageFor(browser,'/tools/'+id+'.html');
  await p.waitForFunction(()=>!!window.PDFLib,{timeout:20000});
  for(const [k,v] of Object.entries(values)){const el=p.locator('#'+k);if(await el.count()){if(await el.evaluate(e=>e.tagName==='SELECT')) await el.selectOption(String(v));else await el.fill(String(v));}}
  await p.locator('#files').setInputFiles(files.map((f,i)=>({name:f.name,type:'application/pdf',mimeType:'application/pdf',buffer:f.buffer})));
  const dl=p.waitForEvent('download',{timeout:30000});
  await p.locator('#run').click(); const download=await dl;
  const path=await download.path(); const stat=fs.statSync(path);
  if(stat.size<100) throw Error('PDF output too small: '+stat.size);
  if(errors.length) throw Error(errors.join('; '));
  await p.close(); return download.suggestedFilename()+' ('+stat.size+' bytes)';
 }
 await run('pdf-merge:two-valid-pdfs-download',()=>pdfDownload('pdf-merge',[{name:'a.pdf',buffer:pdfA},{name:'b.pdf',buffer:pdfB}]));
 await run('pdf-split:valid-pdf-download',()=>pdfDownload('pdf-split',[{name:'a.pdf',buffer:pdfA}],{pages:'1'}));
 await run('pdf-watermark:valid-pdf-download',()=>pdfDownload('pdf-watermark',[{name:'a.pdf',buffer:pdfA}],{text:'TOLVIX QA'}));
 await run('pdf-page-number:valid-pdf-download',()=>pdfDownload('pdf-page-number',[{name:'a.pdf',buffer:pdfA}],{start:'1'}));
 await run('pdf-metadata:valid-pdf-download',()=>pdfDownload('pdf-metadata',[{name:'a.pdf',buffer:pdfA}],{title:'Tolvix QA'}));
 await run('pdf-add-text:valid-pdf-download',()=>pdfDownload('pdf-add-text',[{name:'a.pdf',buffer:pdfA}],{text:'Tolvix QA',page:'0'}));
 // Explicit malformed-file validation check.
 await run('pdf-merge:invalid-file-rejected',async()=>{
  const {p}=await pageFor(browser,'/tools/pdf-merge.html');
  await p.locator('#files').setInputFiles([
   {name:'bad-a.pdf',mimeType:'application/pdf',buffer:Buffer.from('not a PDF')},
   {name:'bad-b.pdf',mimeType:'application/pdf',buffer:Buffer.from('still not a PDF')}
  ]);
  await p.locator('#run').click(); await p.waitForTimeout(1200);
  const status=await p.locator('#status').innerText();
  if(!status.trim()||/Select at least two PDF files/i.test(status)) throw Error('Malformed PDF did not reach parser validation: '+status);
  await p.close(); return status;
 });
 await browser.close();
 fs.mkdirSync('playwright-report',{recursive:true});
 fs.writeFileSync('playwright-report/tool-functional-results.json',JSON.stringify({testedAt:new Date().toISOString(),tests:results.length,passed:results.filter(x=>x.status==='PASS').length,failed:failures.length,failures,results},null,2));
 console.log('Functional tests:',results.length,'passed:',results.filter(x=>x.status==='PASS').length,'failed:',failures.length);
 if(failures.length) process.exitCode=1;
}
main().catch(e=>{console.error(e);process.exitCode=1;});
