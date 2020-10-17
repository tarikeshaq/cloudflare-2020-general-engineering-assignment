import { LinksTransformer, DisplayTransformer, NameTransformer, ImageTransformer, SocialTransformer, BackgroundTransformer } from './transformer';

/**
 * ================= Constants used throughout the application ========================
 */

/**
 * The links displayed on the website
 */
const links = [
  { "name": "Cloudflare", "url": "https://www.cloudflare.com/en-ca/" },
  { "name": "Tarik", "url": "https://tarikeshaq.com" },
  { "name": "Magic Link", "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
];

/**
 * Social links that are displayed as icons
 */
const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tarikeshaq/", svg: "https://simpleicons.org/icons/linkedin.svg"},
  { name: "Github", url: "https://github.com/tarikeshaq", svg: "https://simpleicons.org/icons/github.svg" },
  {name: "Twitter", url: "https://twitter.com/tarikeshaq", svg: "https://simpleicons.org/icons/twitter.svg"}
];

/**
 * The location where the HTML is retrieved from
 */
const HTML_STATIC_URL = "https://static-links-page.signalnerve.workers.dev"

/**
 * My... uhhh name
 */
const TARIK_NAME = "Tarik Eshaq";
/**
 * My image, retrieved from my personal website as a webp
 */
const TARIK_IMAGE_URL = "https://tarikeshaq.com/images/teshaq.webp";
/**
 * Background color for the website
 */
const BACKGROUND_COLOR = "bg-blue-400";


/**
 * Entery point to the application, all requests
 * pass through this
 */
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Handle a request and respond with the appropriate value
 * @param {Request} request
 */
async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  if (path === "/links") {
    // We handle routing here since there is only one route
    // had there been more, it may have required using more complex routing
    return new Response(JSON.stringify(links), {
      headers: { 'content-type': 'application/json' }
    });
  } else {
    return handleHtmlRequest();
  }
}


/**
 * Handle a request for the HTML, and respond appropriately
 * 
 * We apply multiple transformations to the HTML to prepare it for
 * displays
 */
async function handleHtmlRequest() {
  const response = await fetch(HTML_STATIC_URL);
  return new HTMLRewriter().on('div#links', new LinksTransformer(links))
    .on('div#profile', new DisplayTransformer())
    .on('div#social', new DisplayTransformer())
    .on('div#social', new SocialTransformer(socialLinks))
    .on('img#avatar', new ImageTransformer(TARIK_IMAGE_URL))
    .on('h1#name', new NameTransformer(TARIK_NAME))
    .on('title', new NameTransformer(TARIK_NAME))
    .on('body', new BackgroundTransformer(BACKGROUND_COLOR))
    .transform(response)
}
