export default {
 async fetch(request, env) {
  // This project uses Cloudflare Workers Static Assets only.
  // The writing tool runs entirely in the visitor's browser; no AI API or secret is required.
  return env.ASSETS.fetch(request);
 }
};
