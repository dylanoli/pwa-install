const chacheName = "cache-v1";
const resourcesToPrecache = [
  '/',
  'css/style.css',
  'images/icon.png',
  'js/script.js',
  'index.html'
];
self.addEventListener('install', (event) => {
  console.log('Install');
  event.waitUntil(
    caches.open(chacheName)
      .then((cache) => {
        return cache.addAll(resourcesToPrecache);
      })
  );
});

self.addEventListener('activate', (event) => {
    console.log('Activate');
});

  
self.addEventListener('fetch', (event) => {
  console.log('fetch ' + event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse =>{
      return cachedResponse || fetch(event.request);
    })
  );
});