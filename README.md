# SlimHuisWonen.nl – Next.js + SEO

Dit is een Next.js 14 (App Router) project voor SlimHuisWonen.nl met:

- Homepagina met hero, categorieën, aanraders, tips en contactformulier
- Productoverzicht: /producten
- Productdetailpagina’s: /producten/[slug]
- SEO-structuur (metadata, OpenGraph, sitemap, robots)
- Voorbereid op Amazon affiliate links (nog zonder Product Advertising API)

## Installatie

```bash
npm install
npm run dev
```


Ga daarna naar: http://localhost:3000

## Amazon affiliate links instellen

Open `data/products.js` en vul per product de juiste Amazon URL in:

```js
affiliateUrl: "https://www.amazon.nl/dp/XXXXXX/?tag=slimhuiswonen-21"
```

Sla op, commit en push naar GitHub. Vercel deployt automatisch.

## Belangrijk

- Zodra je 3 verkopen hebt via Amazon, kun je de Product Advertising API gaan gebruiken.
- Voor nu werkt alles met gewone affiliate links.
