if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const n=e=>a(e,r),o={module:{uri:r},exports:t,require:n};i[r]=Promise.all(c.map((e=>o[e]||n(e)))).then((e=>(s(...e),t)))}}define(["./workbox-5c88d481"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"asset-manifest.json",revision:"21ad6f40cd2d7d607c0425ace3885b7f"},{url:"favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"index.html",revision:"8471060b0b596534eb851e16d75f9324"},{url:"logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"manifest.json",revision:"d9d975cebe2ec20b6c652e1e4c12ccf0"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"static/css/main.87403a63.css",revision:"a68e37f024a5edb4b40e785b6f1baead"},{url:"static/js/main.9b7c2e24.js",revision:"52c76c2af632463389a504dadb767712"},{url:"static/js/main.9b7c2e24.js.LICENSE.txt",revision:"ea7f56542781ffa3e6ea86219f568222"},{url:"static/media/Clear.6e4f36b6f663ff2d4d6a.png",revision:"a8528a868d461f09ee29a47e4c5323c8"},{url:"static/media/Cloud-background.f88244c26c2492e3c5f1.png",revision:"11452cab98ccf2a171a36da25360ba1b"},{url:"static/media/LightCloud.edc43777fbbf36684278.png",revision:"c6d1cb3616b92442a99eb3acd4063a89"},{url:"static/media/Shower.ea1e199aedb22fe4dd92.png",revision:"b62e950be97488071f86695792d1a919"},{url:"static/media/Sleet.6ef96c5a2098a6b1a146.png",revision:"e1202bb6505e7b4c7a9fac14eafe4162"},{url:"weatherIco.ico",revision:"d6c6832644898e32ff9580f28a7799bc"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
