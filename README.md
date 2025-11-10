# Mint-X Rodent Repellent Trash Bags — Static Landing Page

A lightweight HTML/CSS/JS landing page for paid traffic. Primary CTA routes to Amazon with optional Amazon Attribution + UTM passthrough.

## Files
```
mintx-landing/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── pack-33gal-90ct.jpg
    ├── problem-solution-results.jpg
    ├── dumpster-banner.jpg
    ├── benefits-green.jpg
    ├── size-chart.jpg
    ├── explore-more.jpg
    ├── rodent-repellent-graphic.jpg
    ├── how-mintx-works.jpg
    └── drawstring-epa.jpg
```

## Setup
1. Open `script.js` and set the DP and Attribution tag:
```js
const AMAZON_BASE = 'https://www.amazon.com/dp/YOUR_ASIN';
const AMAZON_ATTR = 'tag=amznattr-XXXX&asc_source=meta&asc_refurl='+encodeURIComponent(document.referrer||location.origin);
```
2. Update any copy as needed. Claims mirror your provided bullets (EPA-registered, natural mint oils, rodent repellent, Mint-Flex, drawstring).
3. Serve locally:
```bash
cd mintx-landing && python3 -m http.server 5173
```
4. Deploy to any static host (S3/CloudFront, Netlify, Vercel static, etc.).

## Notes
- Reviews are paraphrased/snippet-based with dates provided.
- Keep all regulatory phrasing consistent with packaging/listing. Do not imply efficacy beyond rodent repellent claims.
- Images here are placeholders from your provided assets—swap for final CDN paths.

## Customization ideas
- Add a sticky bottom buy bar on mobile.
- Swap hero to lifestyle vs. pack.
- Insert video/GIF demo under “How it works.”
