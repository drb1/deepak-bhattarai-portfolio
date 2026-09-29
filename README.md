# Deepak Bhattarai — GSAP Portfolio

Complete portfolio website built with **Next.js + TypeScript + Tailwind CSS + GSAP / ScrollTrigger**.

## Included

- Premium responsive one-page homepage
- GSAP hero reveal, parallax, section reveals, animated timeline and pinned horizontal project showcase
- Reduced-motion accessibility support
- Responsive mobile navigation
- All-projects index
- Dynamic case-study pages for Language Vision, Driver Monitoring, Nepal Disaster Relief, Wizam.com, Jodinee.com, Environmental Monitoring and NepalUK.com
- Downloadable CV
- LinkedIn / GitHub / email links
- SEO metadata, structured Person JSON-LD, sitemap and robots
- Self-contained SVG project visuals that can be replaced with real screenshots later
- Data-driven content in `data/portfolio.ts`
- Docker / Dokploy deployment support
- Health endpoint at `/api/health`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run lint
npm run build
npm start
```

## Deploy to Vercel

1. Import this repository into Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to your final domain.
3. Deploy.

Example:

```text
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Update your content

All main portfolio content lives in:

```text
data/portfolio.ts
```

Update `profile`, `experience`, `projects`, `skills` and `stats` there.

## Replace project visuals

Current visuals live in:

```text
public/projects/
```

Replace them with real screenshots and update each `visual` path in `data/portfolio.ts` if the filename changes.

Recommended screenshot ratio: about **16:10**.

## CV

Current download:

```text
public/files/Deepak_Bhattarai_CV.docx
```

Replace the file whenever your CV changes. If you want a PDF download instead, add the PDF to `public/files/` and update `profile.cv`.

## Docker / Dokploy deployment

This package includes a multi-stage `Dockerfile` and Next.js standalone output.

### Docker locally

```bash
docker build -t deepak-portfolio .
docker run --rm -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://yourdomain.com \
  deepak-portfolio
```

### Dokploy

1. Create a new application in Dokploy from this GitHub repository.
2. Choose **Dockerfile** as the build method.
3. Expose container port **3000**.
4. Add environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

5. Configure the domain and HTTPS in Dokploy.
6. Health endpoint: `/api/health`.

## Recommended launch checklist

- [ ] Set the real domain in `NEXT_PUBLIC_SITE_URL`.
- [ ] Test `/api/health` after deployment.
- [ ] Verify LinkedIn and GitHub links.
- [ ] Verify Wizam, Relief Nepal, Jodinee and NepalUK live URLs.
- [ ] Replace generic SVG visuals with real screenshots where possible.
- [ ] Decide whether the public CV should be DOCX or PDF.
- [ ] Check mobile layout on iPhone and Android widths.
- [ ] Run Lighthouse and fix any production-specific performance warnings.
