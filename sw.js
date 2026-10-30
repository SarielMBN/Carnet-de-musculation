// Service worker : ouverture sans connexion et notifications.
// Change le numéro de version après chaque mise à jour du site.
const CACHE = "carnet-muscu-v15";
const SHELL = [
  "./",
  "./index.html",
  "./coach.webp",
  "./coach-f.webp",
  "./coach-thomas.webp",
  "./coach-erika.webp",
  "./coach-jade.webp",
  "./coach-marc.webp",
  "./coach-nina.webp",
  "./coach-maya.webp",
  "./coach-victor.webp",
  "./logo.webp",
  "./a0.webp",
  "./a1.webp",
  "./a2.webp",
  "./a3.webp",
  "./a4.webp",
  "./a5.webp",
  "./a6.webp",
  "./a7.webp",
  "./c0.webp",
  "./c1.webp",
  "./c2.webp",
  "./c3.webp",
  "./c4.webp",
  "./c5.webp",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./apple-touch-icon.png",
  "./favicon-64.png",
  "./fonts.css",
  "./leaflet.js",
  "./leaflet.css",
  "./barlow-condensed-latin-600-normal.woff2",
  "./barlow-condensed-latin-700-normal.woff2",
  "./inter-latin-400-normal.woff2",
  "./inter-latin-500-normal.woff2",
  "./inter-latin-600-normal.woff2",
  "./inter-latin-700-normal.woff2",
  "./poppins-latin-500-normal.woff2",
  "./poppins-latin-600-normal.woff2",
  "./poppins-latin-700-normal.woff2"
];

self.addEventListener("install", (e) => {
  // Tout est téléchargé dès la première ouverture (images comprises) ; un fichier manquant ne bloque pas les autres
  e.waitUntil(caches.open(CACHE).then((c) => Promise.allSettled(SHELL.map((u) => c.add(new Request(u, { cache: "reload" }))))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET") return;
  // La carte et la recherche de salles passent toujours par le réseau
  if (url.origin !== self.location.origin) return;
  // Vérification des fichiers depuis l'appli : toujours le réseau, rien n'est gardé
  if (url.searchParams.has("check")) return;
  // Page : réseau d'abord (pour recevoir les mises à jour), copie locale si hors ligne
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then((res) => {
      const copy = res.clone(); caches.open(CACHE).then((c) => c.put("./index.html", copy));
      return res;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  // Images, polices, librairie de carte : copie locale d'abord, gardée après le premier affichage
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
    return res;
  })));
});

// Notifications envoyées par le serveur (phrase de motivation du jour)
self.addEventListener("push", (e) => {
  let data = {};
  try { data = e.data ? e.data.json() : {}; } catch { data = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(data.title || "Hustle", {
    body: data.body || "C'est l'heure de ta séance !", icon: "icon-192.png", badge: "icon-192.png", tag: "cm-daily"
  }));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
    for (const c of list) if ("focus" in c) return c.focus();
    return self.clients.openWindow("./");
  }));
});
