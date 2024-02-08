var cacheName = 'link-margin-pwa';
var filesToCache = [
  '/link-pwd/index.html'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  console.log('Service worker install event!');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
