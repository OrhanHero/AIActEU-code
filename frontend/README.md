This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Statischer Export

`next build` läuft mit `output: "export"` (siehe `next.config.ts`) und erzeugt
einen rein statischen Export in `out/`, der ohne laufenden Node.js-Prozess
ausgeliefert werden kann:

```bash
npm run build
# out/ enthält den fertigen statischen Export
```

`npm run build` ruft automatisch `scripts/clean-export.mjs` als `postbuild`-Hook auf: Next.js
schreibt pro Route mehrere `.txt`-Dateien für sein eigenes Client-Router-Prefetching
(`__next.*.txt`, `index.txt` – reine Navigations-Performance, kein Seiteninhalt, im Code nirgends
referenziert). Ohne serverseitige Revalidierung bringt dieser Prefetch ohnehin nichts, macht aber
~75% der Export-Dateien aus (293 → 73 Dateien). `robots.txt` bleibt davon unberührt.

Da `output: "export"` ISR/SSR deaktiviert, ist dieser Modus als Zwischenschritt
gedacht – die geplante Produktivumgebung ist laut
[`ARCHITECTURE.md`](../ARCHITECTURE.md) weiterhin Vercel (mit ISR).

