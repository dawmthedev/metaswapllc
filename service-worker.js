if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const l=e=>a(e,n),r={module:{uri:n},exports:i,require:l};s[n]=Promise.all(c.map((e=>r[e]||l(e)))).then((e=>(t(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/metaswapllc/CNAME",revision:"51dabe60d898d2c4d01189db38e6abd4"},{url:"/metaswapllc/_next/dynamic-css-manifest.json",revision:"d751713988987e9331980363e24189ce"},{url:"/metaswapllc/_next/static/chunks/119.8e79bfdd8d11cd3d.js",revision:"8e79bfdd8d11cd3d"},{url:"/metaswapllc/_next/static/chunks/218-305c739dfe4e9f68.js",revision:"305c739dfe4e9f68"},{url:"/metaswapllc/_next/static/chunks/325-ef8d404f62e2b25c.js",revision:"ef8d404f62e2b25c"},{url:"/metaswapllc/_next/static/chunks/342.2ac6c9dda6074572.js",revision:"2ac6c9dda6074572"},{url:"/metaswapllc/_next/static/chunks/417-6861ff720b0da6f0.js",revision:"6861ff720b0da6f0"},{url:"/metaswapllc/_next/static/chunks/486.9b72aef15339a36b.js",revision:"9b72aef15339a36b"},{url:"/metaswapllc/_next/static/chunks/58a3678d-0c22a0e8797d06ac.js",revision:"0c22a0e8797d06ac"},{url:"/metaswapllc/_next/static/chunks/609.b9dd9f96fe723a62.js",revision:"b9dd9f96fe723a62"},{url:"/metaswapllc/_next/static/chunks/61905917.d27714fbc1c952aa.js",revision:"d27714fbc1c952aa"},{url:"/metaswapllc/_next/static/chunks/750.86fff912999a5759.js",revision:"86fff912999a5759"},{url:"/metaswapllc/_next/static/chunks/858.e29031fd5685dcb8.js",revision:"e29031fd5685dcb8"},{url:"/metaswapllc/_next/static/chunks/919.74b84c1dae4b05e7.js",revision:"74b84c1dae4b05e7"},{url:"/metaswapllc/_next/static/chunks/e39c296e.a9e1737834717192.js",revision:"a9e1737834717192"},{url:"/metaswapllc/_next/static/chunks/ee9ce975-366b9448872f8af8.js",revision:"366b9448872f8af8"},{url:"/metaswapllc/_next/static/chunks/framework-052b50cd3d4947f2.js",revision:"052b50cd3d4947f2"},{url:"/metaswapllc/_next/static/chunks/main-2495087f313aa99a.js",revision:"2495087f313aa99a"},{url:"/metaswapllc/_next/static/chunks/pages/_app-9fa255167c030d49.js",revision:"9fa255167c030d49"},{url:"/metaswapllc/_next/static/chunks/pages/_error-93f9765b6c29012c.js",revision:"93f9765b6c29012c"},{url:"/metaswapllc/_next/static/chunks/pages/contact-1512ecd4215d4d81.js",revision:"1512ecd4215d4d81"},{url:"/metaswapllc/_next/static/chunks/pages/index-606cb40fa57f2eec.js",revision:"606cb40fa57f2eec"},{url:"/metaswapllc/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/metaswapllc/_next/static/chunks/webpack-ac5ff550b0d54f96.js",revision:"ac5ff550b0d54f96"},{url:"/metaswapllc/_next/static/css/065cc0b08898cfce.css",revision:"065cc0b08898cfce"},{url:"/metaswapllc/_next/static/css/8ee6980f99b59c40.css",revision:"8ee6980f99b59c40"},{url:"/metaswapllc/_next/static/css/d19030271119e46d.css",revision:"d19030271119e46d"},{url:"/metaswapllc/_next/static/lyhenqBu_G5ekzOyPflPi/_buildManifest.js",revision:"8fdd1e4e9c10b14039fa75996da31389"},{url:"/metaswapllc/_next/static/lyhenqBu_G5ekzOyPflPi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/metaswapllc/assets/Metaswap.png",revision:"24fb79fa985f40fad529f158602bc127"},{url:"/metaswapllc/assets/infinitevps.webm",revision:"f7b371e070057472204ab2ae0b8915d4"},{url:"/metaswapllc/assets/logo.webp",revision:"65c9a0758232b4ebb67062c77dc51dd4"},{url:"/metaswapllc/assets/portfolio.webm",revision:"3c5c99872974c5db962f4aa1d8da08ce"},{url:"/metaswapllc/assets/scene.splinecode",revision:"a86155ea39bd500447e9c825ef110b58"},{url:"/metaswapllc/assets/translate_bot.webm",revision:"9fc3ca04ec7b1aa9e328d64f5a0532ca"},{url:"/metaswapllc/assets/unqueue.webm",revision:"04cd7ece4cb5b88a718605b596046cc9"},{url:"/metaswapllc/assets/wrona.jpeg",revision:"89872f2806610edde5ea90ee8afbace6"},{url:"/metaswapllc/favicon.ico",revision:"9f394dd2d1f01ab67d08ad0a0d2fc977"},{url:"/metaswapllc/fonts/ClashGrotesk-Variable.woff2",revision:"218f4f81bdee5932a127929c6d693f0c"},{url:"/metaswapllc/icon-192x192.png",revision:"3d82a3c3a8f93ada0df0fac471f90a04"},{url:"/metaswapllc/icon-256x256.png",revision:"163a0793bd04edca75d788db5be7e16f"},{url:"/metaswapllc/icon-384x384.png",revision:"60d91c093fdce918a995cebcf4cfe957"},{url:"/metaswapllc/icon-512x512.png",revision:"2d8845afaf9400bfd34c4b160c448e36"},{url:"/metaswapllc/manifest.json",revision:"059b1e460e723a882d6e68f4175bdea7"},{url:"/metaswapllc/robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/metaswapllc",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
