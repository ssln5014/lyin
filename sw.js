if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-78503f86"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/about.06743d33.css",revision:"f2d1765a4d99cab896ffe9eb4b56dba6"},{url:"assets/about.297eceb6.js",revision:"41071f28883927d0bd57de8ca360ec75"},{url:"assets/index.15461753.js",revision:"63a254251da5a0e019e8bf9fc7385f72"},{url:"assets/index.e56ad9e2.css",revision:"4c139a32cfc0d91411f91ababe0086d8"},{url:"assets/vendor.95e2edb8.js",revision:"a4d46d7cf5bf9d4c1a55de0eb847954c"},{url:"assets/vendor.997c9f4b.css",revision:"6fca344b53986f0fc90efdc7c662fefb"},{url:"index.html",revision:"b0802b2ae272b8bdcac1797e52d88fd5"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"./logo@192x192.png",revision:"2141830aeff90ef6988f4e01aba62fad"},{url:"manifest.webmanifest",revision:"d756afaa08532ee66890bc528374b6f6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));