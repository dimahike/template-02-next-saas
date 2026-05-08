# Project Rules — Next SaaS Fullstack Starter

Project type: reusable Next.js SaaS fullstack starter.

## Architecture rules
- Keep UI primitives in `components/ui` only.
- Keep layout composition in `components/layout`.
- Keep feature composition in `components/features`.
- Keep Storybook stories colocated with components in `components/**` (`*.stories.tsx`).
- Reserve root `stories/` for temporary migration only; do not add new stories there.
- Keep API helpers in `lib/api`, validation in `lib/validation`, and server-only logic in `lib/server`.
- Keep mock-first domain examples in `lib/mock-data`.
- Keep API route handlers thin and typed in `app/api`.

## Skill and implementation guardrails
- Use TypeScript strict mode and explicit exported types for shared utilities.
- Do not add product-specific screens, routes, or workflows in starter baseline.
- Do not add dependencies unless directly needed by current scope.
- Do not import server-only modules into client components.
- Reuse tokenized styling and primitives before introducing new components.
- Avoid arbitrary Tailwind values for core colors, spacing, and radii.
- Treat `app/globals.css` as the source of truth for global foundation tokens (color, radius, spacing, motion, layout).
- If you add, rename, or remove global tokens in `app/globals.css`, update `components/design-system/foundations/Tokens.stories.tsx` in the same task so token changes remain visually documented.
- For reusable UI and feature styling, use token aliases (Tailwind token classes and CSS vars) instead of hard-coded values.
- Allow local custom spacing or one-off visual tuning only when it is decorative/presentation-specific and not a reusable design token.

## Before task workflow
1. Inspect existing structure and docs.
2. Confirm boundaries: `ui`, `features`, `api`, `server`, `validation`, `mock-data`.
3. List files to change and unchanged areas.
4. Implement smallest reusable change set.

## After task workflow
1. Run `npm run typecheck`.
2. Run `npm run lint`.
3. Run `npm run build`.
4. Run `npm run build-storybook`.
5. Summarize file changes, architecture impact, and contract alignment.
