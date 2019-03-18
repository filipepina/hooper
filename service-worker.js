/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6e5c7c32e8fc0e423b1da863679dcf79"
  },
  {
    "url": "api.html",
    "revision": "d3904e13a4b32bc9ea1598aced13d8c9"
  },
  {
    "url": "assets/css/0.styles.005ae058.css",
    "revision": "77864790f958471d1754fa33b98235ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.ee91756f.js",
    "revision": "9e8d4a1d4a7a93d12b324a13e4e51c53"
  },
  {
    "url": "assets/js/3.e283cd5e.js",
    "revision": "a86a8f63d5ad6e9f4be9098482a6b1db"
  },
  {
    "url": "assets/js/4.2bec89dc.js",
    "revision": "efa021c2c7e9024bc421182b4bab13b8"
  },
  {
    "url": "assets/js/5.d82b3269.js",
    "revision": "9e67d0276704ac8088b13a1dc8d085b3"
  },
  {
    "url": "assets/js/6.0a244a82.js",
    "revision": "cad92673b2930329507c75c83509a471"
  },
  {
    "url": "assets/js/7.d236ab7b.js",
    "revision": "486a7ad3ee093e788c3bad20bc3f6e02"
  },
  {
    "url": "assets/js/app.c82aa71b.js",
    "revision": "4ce92da6945ccff02e78e891b176000a"
  },
  {
    "url": "examples.html",
    "revision": "77f79d6f2fd66a59195ab05b7f1f0936"
  },
  {
    "url": "getting-started.html",
    "revision": "d103d1f3a5b0386726317f988b4820ad"
  },
  {
    "url": "hooper.svg",
    "revision": "e138dfdb27cd6a48518049a5571ce28d"
  },
  {
    "url": "index.html",
    "revision": "67fbeb75db9c23a83e5dce64ad00a766"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
