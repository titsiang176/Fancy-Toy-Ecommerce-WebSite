const cacheName = 'cache-v1';
const precacheResources = [
  '/',
  'index.html',
  'styles/main.css',
  'images/products-1.jpg',
  'images/products-2.jpg',
  'images/products-3.jpg',
  'images/products-4.jpg',
  'images/product2-1.jpg',
  'images/product2-2.jpg',
  'images/product2-3.jpg',
  'images/product2-4.jpg',
  'images/product3-1.jpg',
  'images/product3-2.jpg',
  'images/product3-3.jpg',
  'images/product3-4.jpg',
  'images/logo.png',
  'images/logo-footer.png',
  'images/favicon.png'
 
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
      );
    });
    
    self.addEventListener('activate', event => {
      console.log('Service worker activate event!');
    });
    
    self.addEventListener('fetch', event => {
      console.log('Fetch intercepted for:', event.request.url);
      event.respondWith(caches.match(event.request)
        .then(cachedResponse => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return fetch(event.request);
          })
        );
    });
    
