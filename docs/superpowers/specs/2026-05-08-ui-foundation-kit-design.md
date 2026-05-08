# UI Foundation Kit Design

Date: 2026-05-08
Project: `template-02-next-saas`
Status: Approved for implementation planning

## Goal

Polish the reusable Next.js SaaS starter with a practical UI foundation kit that can be opened in Storybook, inspected visually, and adapted for future brands without rewriting baseline primitives.

The work should make the design system feel connected: tokens, component variants, interaction states, documentation, and Storybook examples should all refer to the same source of truth.

## Non-goals

- Do not add product-specific screens, routes, workflows, or SaaS business flows.
- Do not add data/state architecture libraries such as TanStack Query or Redux Toolkit in this scope.
- Do not add table/data-grid primitives yet.
- Do not change API, server, validation, mock-data, or feature-layer boundaries except documentation references if needed.

## Architecture

Keep the existing starter boundaries:

- `components/ui`: reusable UI primitives only.
- `components/layout`: route-agnostic layout composition only.
- `components/features`: feature composition only.
- `lib/api`, `lib/server`, `lib/validation`, `lib/mock-data`: unchanged by this UI foundation work.
- `stories`: Storybook documentation and visual examples.
- `docs`: written design-system and starter contract documentation.

The implementation should use tokenized styling from `app/globals.css` and `tailwind.config.ts`. Component variants should not introduce one-off colors or spacing values when an existing token or Tailwind scale value fits.

## Dependencies

Add only dependencies that directly support the UI foundation kit:

- Radix primitives for complex accessible behavior:
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-tooltip`
  - `@radix-ui/react-tabs`
  - `@radix-ui/react-popover`
- `sonner` for toast notifications.
- `react-hook-form` for form examples and form foundation.

Do not add Redux Toolkit, TanStack Query, table libraries, or icon libraries in this scope.

## UI Components

### Existing Primitives

Enhance the current generic primitives without making them product-specific:

- `Button`
  - Variants: `primary`, `secondary`, `outline`, `ghost`, `danger`.
  - Sizes: `sm`, `md`, `lg`.
  - States: default, hover, focus-visible, disabled, loading.
  - Loading state should be reusable and accessible.
- `Input`
  - States: default, placeholder, disabled, error, helper text examples.
  - Keep the primitive generic and compatible with React Hook Form.
- `Badge`
  - Tones: default, info, success, warning, danger.
- `Alert`
  - Kinds: info, success, warning, danger.
  - Use semantic token colors.
- `Card`
  - Keep as a simple generic content container.
- `EmptyState`
  - Support optional action content.
- `LoadingState`
  - Keep generic and reusable.

### New Radix Wrappers

Add thin, styled wrappers in `components/ui`:

- `Dialog`
- `DropdownMenu`
- `Tooltip`
- `Tabs`
- `Popover`

These wrappers should expose reusable composition APIs, preserve Radix accessibility behavior, and apply the starter's tokenized visual style. They must not contain feature logic or product copy.

### Toast Foundation

Add a `Toast` foundation using `sonner`.

The implementation should provide the minimal reusable setup needed for apps to render toasts consistently. Storybook should demonstrate common toast types: success, error, info, and warning.

### Form Foundation

Use `react-hook-form` in Storybook examples to show how the starter expects forms to be composed.

The form example should be neutral and reusable, such as a short profile/contact form. Validation can use the existing Zod direction if it remains small and does not require extra dependencies beyond the current project.

## Storybook Structure

Replace the single overview-only story with a clearer structure:

- `Design System/Tokens`
  - Color tokens with swatches for light and dark modes where practical.
  - Radius tokens.
  - Spacing scale.
  - Typography examples.
  - State tokens and focus/error examples.
- `Design System/Usage Guidelines`
  - Short guidance for choosing custom primitives, Radix wrappers, Sonner, and React Hook Form.
- `UI/Button`
  - Variants, sizes, disabled, loading, focus examples.
- `UI/Forms`
  - Input states and a React Hook Form example.
- `UI/Feedback`
  - Alert, Badge, LoadingState, EmptyState, Toast.
- `UI/Overlays`
  - Dialog, Popover, Tooltip.
- `UI/Navigation`
  - DropdownMenu and Tabs.

Stories should be visual references, not product demos. They should use neutral text and sample labels.

## Documentation

Update:

- `docs/design-system.md`
  - Token groups, semantic usage, component inventory, state rules, and customization guidance.
- `docs/ui-rules.md`
  - Rules for custom primitives vs Radix wrappers.
  - Sonner as toast default.
  - React Hook Form as form default.
  - Zod as validation direction.
- `docs/template-contract.snapshot.md`
  - Record the UI foundation dependencies and clarify that data/state libraries remain optional/planned.
- `components/ui/AGENTS.md`
  - Add concise local guardrails:
    - Keep UI primitives generic.
    - Use tokenized styling.
    - Put complex accessible behavior behind Radix wrappers.
    - Cover reusable variants in Storybook.

Do not over-expand AGENTS rules. They should guide future agents without becoming a full manual.

## Expected Files To Change

Likely changed or added:

- `package.json`
- `package-lock.json`
- `.storybook/preview.ts` to import global styles and provide Storybook decorators required by UI primitives.
- `components/ui/Button.tsx`
- `components/ui/Input.tsx`
- `components/ui/Alert.tsx`
- `components/ui/Badge.tsx`
- `components/ui/LoadingState.tsx`
- `components/ui/EmptyState.tsx`
- `components/ui/Dialog.tsx`
- `components/ui/DropdownMenu.tsx`
- `components/ui/Tooltip.tsx`
- `components/ui/Tabs.tsx`
- `components/ui/Popover.tsx`
- `components/ui/Toast.tsx`
- `components/ui/AGENTS.md`
- `stories/*.stories.tsx`
- `docs/design-system.md`
- `docs/ui-rules.md`
- `docs/template-contract.snapshot.md`

Expected unchanged areas:

- `app/api`
- `lib/api`
- `lib/server`
- `lib/mock-data`
- `components/features`
- product-specific routes and workflows

## Testing And Verification

Run after implementation:

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm run build-storybook`

Storybook should build successfully and show token-driven examples. If a local Storybook server is started during implementation, use it only to verify visual structure and then report the URL.

## Risks And Constraints

- Adding many primitives can expand the starter API surface. Keep wrappers thin and predictable.
- Radix requires client components for interactive wrappers. Mark only those component files with `"use client"` where required.
- Storybook should import `app/globals.css` through `.storybook/preview.ts` so tokenized Tailwind styles render consistently.
- Avoid product-specific examples, especially SaaS workflows such as billing, teams, roles, or analytics.
- Avoid styling drift by keeping colors, radius, and focus/error states token-driven.

## Implementation Decision

Use the UI foundation kit approach:

- Build reusable UI primitives and wrappers.
- Document tokens and usage in Storybook.
- Add only UI/accessibility/form dependencies.
- Keep data/state libraries out of scope.
- Keep future table support as a documented extension, not part of this pass.
