# clever-technical-writing

Portfolio site for Andrew Cleverly, live at https://clever-technical-writing.com.

## Stack
- **Next.js 14** (App Router) with **TypeScript**
- **Tailwind CSS** for all styling (the classes in each page's `className`)
- Pages live in `src/app/`; shared components in `src/app/(site)/components/`; static files (images, CV, favicons) in `public/`

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — run before opening a PR
```

## Hosting and deployment
| Piece | Where |
|---|---|
| Hosting and builds | **Vercel**, connected to this GitHub repo |
| DNS | **Vercel** (nameservers `ns1.vercel-dns.com`, `ns2.vercel-dns.com`) |
| Domain registration | **AWS Route 53** (Registered domains only; renews each February) |

- A push or merged PR to `main` deploys to production automatically.
- Any other branch or PR gets its own Vercel preview URL.
- `clever-technical-writing.com` is the main address; `www.` permanently redirects (308) to it.
- There is no GitHub Actions workflow and no other cloud hosting.

## Third-party services
- **Contact and access-request forms** post to [Formspree](https://formspree.io). Each form's ID is in its page's `fetch("https://formspree.io/f/...")` call.
- **Analytics:** Microsoft Clarity, loaded in `src/app/layout.tsx`.

Both run in the browser, so they need no server or environment variables.
