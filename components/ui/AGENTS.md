# UI Primitives Rules

- Keep components generic and reusable.
- No feature, product, routing, data-fetching, or server-only logic.
- Use tokenized colors, radius, spacing, and focus styles.
- Prefer token aliases/CSS variables over hard-coded style values for reusable primitives.
- If global tokens are changed in `app/globals.css`, keep `components/design-system/foundations/Tokens.stories.tsx` updated so usage is visible in Storybook.
- One-off decorative spacing tweaks are allowed when they are local to a specific composition and not reusable token candidates.
- Keep accessibility states: focus-visible, disabled, loading, error, and danger.
- Use Radix only through wrappers in `components/ui` for complex interactive behavior.
- Keep wrappers thin and preserve Radix accessibility behavior.
- Add or update Storybook coverage for every reusable variant or state.
- For UI primitives with controllable props, include a `Default` story backed by `args` and `argTypes` so Storybook controls can customize the baseline example.
- Keep static variant/state matrices as additional stories after `Default`; do not make them the only way to inspect a component.
- Keep each primitive in its own folder: `components/ui/<ComponentName>/<ComponentName>.tsx` and `components/ui/<ComponentName>/<ComponentName>.stories.tsx`.
- Keep `components/ui` stories component-scoped only; move multi-component demos to `components/design-system/patterns`.
