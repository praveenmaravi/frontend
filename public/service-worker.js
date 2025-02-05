const CACHE_NAME = 'vision-ai-cache-v1';
const API_CACHE_NAME = 'vision-ai-api-cache-v1';
const STATIC_FILES = [
  '/', // Root HTML
  '/index.html', // Main HTML
  '/styles.css', // Main CSS
  '/app.js', // Main JS
  '/favicon.ico', // Favicon
  '/logo192.png', // App logo
  '/logo512.png', // Larger app logo
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(STATIC_FILES);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME && cache !== API_CACHE_NAME) {
            console.log('Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event: Serve Cached Content or Fallback
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/')) {
    // Cache API responses
    event.respondWith(
      caches.open(API_CACHE_NAME).then((cache) => {
        return fetch(event.request)
          .then((response) => {
            if (response.status === 200) {
              cache.put(event.request, response.clone());
            }
            return response;
          })
          .catch(() => {
            return cache.match(event.request);
          });
      })
    );
  } else {
    // Cache static files
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});

// Background Sync: Retry Failed API Requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-requests') {
    event.waitUntil(
      // Implement retry logic for failed requests
      fetchFailedRequests().then(() => {
        console.log('Retry successful for failed requests.');
      }).catch((err) => {
        console.error('Retry failed:', err);
      })
    );
  }
});

// Push Notification Event
self.addEventListener('push', (event) => {
  const data = event.data.json();
  console.log('Push Received:', data);

  const title = data.title || 'Vision AI Notification';
  const options = {
    body: data.body,
    icon: '/logo192.png',
    badge: '/logo192.png',
    data: data.url || '/',
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Notification Click Event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data)
  );
});

// Helper Function: Retry Failed Requests (Simplified Example)
async function fetchFailedRequests() {
  const requests = await getFailedRequestsFromDB(); // Replace with indexedDB or storage logic
  const promises = requests.map((req) => fetch(req));
  return Promise.all(promises);
}

// Helper Function: Store Failed Requests in IndexedDB
function getFailedRequestsFromDB() {
  // Logic to get failed requests from IndexedDB or localStorage
  return Promise.resolve([]);
}
