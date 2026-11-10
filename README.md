# Der Engel in Erbenheim

Statische Website (HTML, CSS, JS) für den Traditionsgasthof Der Engel in Wiesbaden-Erbenheim. Kein Build-Schritt nötig.

## Struktur

```
index.html          Startseite (Onepager)
impressum.html      Impressum
datenschutz.html    Datenschutzerklärung
assets/css/         Stylesheet
assets/js/          Navigation, Scroll-Reveal, Karte, Öffnungszeiten
assets/fonts/       Schriften (lokal gehostet, DSGVO)
assets/img/         Bilder (WebP), Logo, Favicon, OG-Bild
```

## Hinweis zur Umsetzung

Dieses Repo ist die Design-Referenz. Live geht die Seite als WordPress/Elementor-Umsetzung bei Strato unter engelwiesbaden.de.

## Lokal ansehen

Einfach `index.html` im Browser öffnen oder `npx serve .` im Projektordner.

## Offene Punkte (TODO im Code markiert)

- Speisekarte als PDF unter `assets/speisekarte.pdf` ablegen
- Link zum Online-Reservierungstool
- Datenschutz: Hoster-Angabe von "Google LLC" auf Strato ändern
- Bewertungen: Google-Rezensionen per Trustindex-Widget einbinden
- Bilder in höherer Auflösung, eigene Fotos statt Stockbilder bei "Regionale Qualität"
