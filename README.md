# clever-technical-writing — Next.js + Tailwind Portfolio

## Brand Positioning (Hybrid)
I design and build API documentation ecosystems that connect engineering, product, and business — unifying OpenAPI governance, CI/CD DocOps, and SDK generation to empower customers from day one. Every implementation aligns documentation delivery with strategic goals and AI-enabled knowledge flows.

## Getting Started
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run start
```

## Deploy to AWS S3 + CloudFront
Use the provided GitHub Action (`.github/workflows/deploy.yml`) to build and sync the `.next`/output or `out/` directory to S3, then invalidate CloudFront.
