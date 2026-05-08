# Codex Workflow

## Before implementation
1. Read `AGENTS.md` and scoped nested `AGENTS.md` files.
2. Validate architecture boundaries for impacted files.
3. Prefer extending existing primitives/helpers before creating new ones.

## During implementation
- Keep changes small, typed, and scoped.
- Follow server/client boundaries (`lib/server` is server-only).
- Do not add product-specific routes or feature workflows.

## Verification
Run in order:
1. `npm run typecheck`
2. `npm run lint`
3. `npm run build`
4. `npm run build-storybook`

## Handoff
- Summarize changed files.
- Report quality gate statuses.
- Report contract alignment and residual risks.
