# Template Contract Snapshot — template-02-next-saas

## 1. Classification
- Project type: `next-saas-fullstack`
- Product stage: `long-term`
- UI complexity: `ui-heavy`
- Expected growth: `high`

## 2. Core Stack
- Language: `TypeScript`
- Frontend: `React`
- Framework: `Next.js App Router`
- Styling: `Tailwind CSS`
- Tokens: `CSS variables`

## 3. UI Foundation
- Required primitives: Button, Input, Card, Badge, Alert, LoadingState, EmptyState
- Complex interactions: use Radix primitives when behavior/accessibility is non-trivial
- One-off styles: forbidden for colors/spacing

## 4. Design System v0
- Token groups: color/radius/spacing/typography/state
- Source of truth: docs and token files, not screenshot references

## 5. Product Start Toggles
- i18n mode: `planned`
- theme mode: `light+dark`
- data source mode: `mock-data-first`
- auth mode: `planned`
- access model: `org/roles planned`

## 6. Data / Forms / State Defaults
- Forms: `React Hook Form`
- Validation: `Zod`
- Server state: planned/optional, use TanStack Query when product API caching is needed
- Complex client state: planned/optional, use Redux Toolkit when structured shared app state is needed

## 7. Required Quality Gates
- `lint` passes
- `typecheck` passes
- `build` passes
- Storybook builds and runs
- Required docs exist
