export default {
 async fetch(request, env) {
  const url = new URL(request.url);

  // Keep the former URL Encoder path working after the tool was renamed.
  // Use a permanent redirect so browsers and search engines reach its canonical URL.
  if (url.pathname === "/tools/url-encoder.html") {
   url.pathname = "/tools/url-encoder-decoder.html";
   return Response.redirect(url.toString(), 301);
  }

  // This project uses Cloudflare Workers Static Assets for all other requests.
  return env.ASSETS.fetch(request);
 }
};
