/* global workbox */

// Write your custom SW code here

// Note: in a real world example, you shouldn't skip waiting on each SW update.
// It would be better to skip waiting only after notifying the user that a new version of the app is available.
workbox.skipWaiting();
workbox.clientsClaim();
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest);
workbox.routing.registerNavigationRoute('index.html');
