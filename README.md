# Inkoopcheck website

De publieke marketingwebsite van Inkoopcheck. Dit is een dependency-vrije statische website, geschikt voor GitHub Pages.

## Lokaal bekijken

Open `index.html` direct in een browser, of start een lokale HTTP-server vanuit deze map:

```powershell
python -m http.server 8080
```

Open daarna <http://localhost:8080>.

## Structuur

- `index.html` - semantische pagina, SEO-metadata en alle secties
- `styles.css` - responsive vormgeving en dashboardvisualisatie
- `website-extension.css` - publieke-site-uitbreidingen, waaronder de productpreview en Over ons-sectie
- `script.js` - mobiele navigatie en lokaal demoformulier zonder backend
- `favicon.svg` - lokaal favicon

## GitHub Pages

1. Push deze bestanden naar de `main`-branch van de publieke repository.
2. Open in GitHub **Settings > Pages**.
3. Kies bij **Build and deployment** voor **Deploy from a branch**.
4. Kies branch `main` en map `/ (root)` en klik op **Save**.
5. Stel eventueel een custom domain in via GitHub Pages. DNS-configuratie valt buiten deze repository.

De site gebruikt geen buildstap, externe API's, tracking, secrets of backend. Het demoformulier toont lokaal een bevestiging, maar verstuurt nog geen gegevens. Koppel vóór live gebruik een contactkanaal of formulierdienst aan dit formulier.
