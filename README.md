# Template 02 — Next SaaS Fullstack Starter

Purpose: reusable baseline for scalable SaaS products with Next.js App Router and fullstack-ready boundaries.

## When to use
- Building a long-term SaaS product with server + API + UI in one repo.
- You need strict typing, reusable primitives, and mock-data-first development.
- You want auth-ready architecture without locking into a provider yet.

## When not to use
- Pure landing pages or static marketing sites.
- Frontend-only SPA prototypes (prefer Vite starter).
- Product work that already requires a fixed backend platform integration day one.

## Stack
- Next.js (App Router)
- React + TypeScript (strict)
- Tailwind CSS with tokenized CSS variables
- Zod for validation
- Storybook for UI review

## Run locally
```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run typecheck
npm run lint
npm run build
npm run build-storybook
```
