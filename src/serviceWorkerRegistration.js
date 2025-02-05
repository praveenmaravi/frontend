// frontend/src/serviceWorkerRegistration.js
// This file is responsible for registering the service worker for PWA.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname === '127.0.0.1'
);

export function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL to the service worker file is relative to the root.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // Check if the service worker is already registered in localhost.
        checkValidServiceWorker(swUrl);
      } else {
        // Register the service worker in production.
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker file exists for localhost.
  fetch(swUrl)
    .then(response => {
      // Ensure the service worker is valid.
      if (response.status === 404 || response.type === 'error') {
        console.log('No valid service worker found. Creating one...');
      } else {
        // Register the service worker.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log('No internet connection. Service Worker cannot be registered.');
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
