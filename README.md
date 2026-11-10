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

## Aktuelles bearbeiten

**Prototyp:** Meldungen stehen in `assets/data/aktuelles.json` (Titel, Datum, Text, optional Ablaufdatum `bis`). Abgelaufene Meldungen werden automatisch ausgeblendet; ist keine aktiv, verschwindet der Abschnitt.

**Elementor (Live-Seite):** Aktuelles als normale WordPress-Beiträge in der Kategorie „Aktuelles“ anlegen und auf der Startseite per Loop Grid (oder Posts-Widget) mit Filter auf diese Kategorie anzeigen, 1 bis 3 Beiträge. Der Inhaber legt dann einfach einen neuen Beitrag an (auch per WordPress-App vom Handy). Für ihn eine Redakteur-Rolle anlegen, damit er nur Beiträge bearbeiten kann. Optional: Plugin „Post Expirator“ für ein automatisches Ablaufdatum.

## Lokal ansehen

`npx serve .` im Projektordner (direkt per Doppelklick geöffnet lädt die Aktuelles-Datei nicht, dann erscheint der Standardtext).

## Offene Punkte (TODO im Code markiert)

- Speisekarte als PDF unter `assets/speisekarte.pdf` ablegen
- Link zum Online-Reservierungstool
- Bewertungen: Google-Rezensionen per Trustindex-Widget einbinden
- Bilder in höherer Auflösung, eigene Fotos statt Stockbilder bei "Regionale Qualität"
