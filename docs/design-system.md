# Design System v1

## Source of truth

Design tokens live in `app/globals.css` and are exposed through `tailwind.config.ts`.

Storybook documentation is colocated in:
- `components/design-system/foundations` for tokens and usage guidance
- `components/design-system/patterns` for multi-component patterns
- `components/ui/<ComponentName>` for primitive-level component stories

## Color tokens

- Background: `bg`
- Surface: `surface`
- Text: `text`
- Border: `border`
- Primary action: `primary`
- Secondary action: `secondary`
- Muted/supporting text: `muted`
- Success: `success`
- Warning: `warning`
- Danger: `danger`
- Focus ring: `focus`

## Radius tokens

- `sm`
- `md`
- `lg`
- `xl`

## Spacing

Use the Tailwind spacing scale on a 4px base. Prefer `1`, `2`, `3`, `4`, `5`, `6`, `8`, and `10` for reusable primitives.

## Typography

Use the app font stack from `app/globals.css`. Keep headings compact inside cards, dialogs, popovers, and Storybook examples.

## Component inventory

- Button
- Input
- Badge
- Alert
- Card
- EmptyState
- LoadingState
- Dialog
- DropdownMenu
- Tooltip
- Tabs
- Popover
- ToastProvider

## State rules

Every interactive primitive should preserve focus-visible styling, disabled styling, and semantic error or danger styling where applicable.

## Customization

Brand customization starts with CSS variables in `app/globals.css`. Component variants should continue to reference token names instead of hard-coded brand colors.
