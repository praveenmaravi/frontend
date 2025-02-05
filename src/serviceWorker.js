// The cache name
const CACHE_NAME = 'vision-ai-chatbot-v1';

// Files to cache during the install phase
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/styles.css',
  '/assets/script.js',
  '/assets/logo.png',
  '/favicon.ico',
  '/assets/fonts/Roboto.woff2',
  '/assets/images/default-avatar.png',
  '/service-worker.js', // Ensure the service worker script itself is cached
];

// Installing the Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching files...');
        return cache.addAll(URLS_TO_CACHE);
      })
      .then(() => self.skipWaiting()) // Skip waiting to activate the worker immediately
  );
});

// Activating the Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              console.log(`Deleting old cache: ${cacheName}`);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim()) // Claim all clients to start controlling them
  );
});

// Fetching resources from the cache or network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log(`Serving cached resource: ${event.request.url}`);
          return cachedResponse;
        }

        // Fetch the resource from the network if not in cache
        return fetch(event.request).then((networkResponse) => {
          // Cache the newly fetched resource for future use
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, networkResponse.clone());
              });
          }
          return networkResponse;
        });
      })
  );
});

// Background sync: Try syncing data with the server when online
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-chat-data') {
    event.waitUntil(syncChatData());
  }
});

// Function to sync chat data with the backend (e.g., messages sent during offline)
const syncChatData = async () => {
  const chatData = await getOfflineChatData(); // This would be your local storage or indexedDB
  if (chatData) {
    // Send chat data to the server
    fetch('/api/sync-chat', {
      method: 'POST',
      body: JSON.stringify(chatData),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then((data) => {
      console.log('Chat data synced successfully:', data);
    })
    .catch((error) => {
      console.error('Failed to sync chat data:', error);
    });
  }
};

// Push notifications (optional)
self.addEventListener('push', (event) => {
  const notificationData = event.data ? event.data.json() : {};
  const options = {
    body: notificationData.body,
    icon: notificationData.icon || '/favicon.ico',
    badge: '/assets/images/badge.png',
  };

  event.waitUntil(
    self.registration.showNotification(notificationData.title, options)
  );
});
