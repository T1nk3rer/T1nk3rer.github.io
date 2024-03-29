var cacheName = 'link-margin-pwa';
var filesToCache = [
		'./index.html',
		'./compass.png',
		'./ShortStack.woff2',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  //console.log('Service worker install event!');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  //console.log('Service worker activate event!');
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  //console.log('Service worker fetch event!');
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
