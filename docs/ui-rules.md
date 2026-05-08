# UI Rules

- Use shared primitives from `components/ui` before creating feature-local alternatives.
- Keep simple visual primitives custom and token-driven.
- Use Radix wrappers from `components/ui` for non-trivial accessibility, keyboard behavior, focus management, or overlay positioning.
- Use `ToastProvider` and `toast` from `components/ui/Toast/Toast` for transient feedback.
- Use React Hook Form for reusable form examples and production form composition.
- Keep reusable validation schemas in `lib/validation`.
- Avoid arbitrary Tailwind values for core colors, spacing, and radii.
- Keep one source of truth for design tokens in `app/globals.css` and `tailwind.config.ts`.
- Keep feature and data logic out of `components/ui`.
- Any reusable visual pattern should have Storybook coverage.
- Keep starter screens neutral and product-agnostic.
