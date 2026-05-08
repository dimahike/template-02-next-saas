# UI Foundation Kit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a reusable, token-driven UI foundation kit for the Next SaaS starter with Storybook coverage for design tokens, core primitives, Radix interactions, toast, and form examples.

**Architecture:** Keep all reusable UI primitives in `components/ui` and all visual references in `stories`. Use Tailwind classes backed by existing CSS variables in `app/globals.css` and `tailwind.config.ts`; add only UI behavior dependencies approved in the design spec.

**Tech Stack:** Next.js App Router, React 19, TypeScript strict mode, Tailwind CSS, Storybook 8, Radix UI primitives, Sonner, React Hook Form, Zod.

---

## File Map

- Modify `package.json` and `package-lock.json`: add approved UI dependencies.
- Create `.storybook/preview.ts`: import global Tailwind styles and provide Storybook parameters.
- Modify `components/ui/Button.tsx`: add variants, sizes, loading state, and exported prop types.
- Modify `components/ui/Input.tsx`: add label/helper/error support while keeping input generic.
- Modify `components/ui/Alert.tsx`: export explicit types and include semantic tone styling.
- Modify `components/ui/Badge.tsx`: add `info` tone and exported types.
- Modify `components/ui/LoadingState.tsx`: export props and support size-neutral loading copy.
- Modify `components/ui/EmptyState.tsx`: export props.
- Create `components/ui/Dialog.tsx`: thin Radix Dialog wrapper.
- Create `components/ui/DropdownMenu.tsx`: thin Radix DropdownMenu wrapper.
- Create `components/ui/Tooltip.tsx`: thin Radix Tooltip wrapper.
- Create `components/ui/Tabs.tsx`: thin Radix Tabs wrapper.
- Create `components/ui/Popover.tsx`: thin Radix Popover wrapper.
- Create `components/ui/Toast.tsx`: Sonner toaster export and typed toast helper.
- Replace `stories/ui.stories.tsx` with focused story files under `stories/`.
- Modify `docs/design-system.md`, `docs/ui-rules.md`, `docs/template-contract.snapshot.md`, and `components/ui/AGENTS.md`.

---

### Task 1: Add Dependencies And Storybook Globals

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `.storybook/preview.ts`

- [ ] **Step 1: Install approved UI dependencies**

Run:

```bash
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip @radix-ui/react-tabs @radix-ui/react-popover sonner react-hook-form
```

Expected: `package.json` and `package-lock.json` include the new dependencies.

- [ ] **Step 2: Create Storybook preview globals**

Create `.storybook/preview.ts`:

```ts
import type { Preview } from "@storybook/react";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: "app",
      values: [
        { name: "app", value: "rgb(var(--color-bg))" },
        { name: "surface", value: "rgb(var(--color-surface))" }
      ]
    }
  }
};

export default preview;
```

- [ ] **Step 3: Verify dependency install and Storybook config**

Run:

```bash
npm run typecheck
```

Expected: TypeScript passes or only reports errors from files changed in later tasks not yet implemented. At this step it should pass.

- [ ] **Step 4: Commit task 1**

```bash
git add package.json package-lock.json .storybook/preview.ts
git commit -m "chore: add ui foundation dependencies"
```

---

### Task 2: Upgrade Core UI Primitive APIs

**Files:**
- Modify: `components/ui/Button.tsx`
- Modify: `components/ui/Input.tsx`
- Modify: `components/ui/Alert.tsx`
- Modify: `components/ui/Badge.tsx`
- Modify: `components/ui/LoadingState.tsx`
- Modify: `components/ui/EmptyState.tsx`

- [ ] **Step 1: Update `Button.tsx`**

Replace `components/ui/Button.tsx` with:

```tsx
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  loadingLabel?: string;
  children: ReactNode;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:opacity-90",
  secondary: "bg-secondary text-white hover:opacity-90",
  outline: "border border-border bg-surface text-text hover:bg-secondary/10",
  ghost: "bg-transparent text-text hover:bg-secondary/10",
  danger: "bg-danger text-white hover:opacity-90"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base"
};

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  loadingLabel = "Loading",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading ? (
        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
      ) : null}
      <span>{isLoading ? loadingLabel : children}</span>
    </button>
  );
}
```

- [ ] **Step 2: Update `Input.tsx`**

Replace `components/ui/Input.tsx` with:

```tsx
import type { InputHTMLAttributes, ReactNode } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: ReactNode;
  errorText?: ReactNode;
  hasError?: boolean;
};

export function Input({ label, helperText, errorText, hasError = false, className = "", id, ...props }: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const describedBy = errorText ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined;
  const isInvalid = hasError || Boolean(errorText);

  return (
    <label className="block space-y-1.5">
      {label ? <span className="text-sm font-medium text-text">{label}</span> : null}
      <input
        id={inputId}
        aria-invalid={isInvalid || undefined}
        aria-describedby={describedBy}
        className={`w-full rounded-md border bg-surface px-3 py-2 text-sm text-text outline-none transition placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-focus ${
          isInvalid ? "border-danger" : "border-border"
        } ${className}`}
        {...props}
      />
      {errorText ? (
        <p id={inputId ? `${inputId}-error` : undefined} className="text-xs text-danger">
          {errorText}
        </p>
      ) : helperText ? (
        <p id={inputId ? `${inputId}-helper` : undefined} className="text-xs text-muted">
          {helperText}
        </p>
      ) : null}
    </label>
  );
}
```

- [ ] **Step 3: Update feedback primitives**

Replace `components/ui/Alert.tsx`:

```tsx
import type { ReactNode } from "react";

export type AlertKind = "info" | "success" | "warning" | "danger";

export type AlertProps = {
  kind?: AlertKind;
  title?: string;
  children: ReactNode;
};

const kindMap: Record<AlertKind, string> = {
  info: "border-focus/40 bg-focus/10 text-text",
  success: "border-success/40 bg-success/10 text-text",
  warning: "border-warning/40 bg-warning/10 text-text",
  danger: "border-danger/40 bg-danger/10 text-text"
};

export function Alert({ kind = "info", title, children }: AlertProps) {
  return (
    <div className={`rounded-md border px-3 py-2 text-sm ${kindMap[kind]}`} role="status">
      {title ? <p className="mb-1 font-medium">{title}</p> : null}
      <div>{children}</div>
    </div>
  );
}
```

Replace `components/ui/Badge.tsx`:

```tsx
import type { ReactNode } from "react";

export type BadgeTone = "default" | "info" | "success" | "warning" | "danger";

export type BadgeProps = {
  tone?: BadgeTone;
  children: ReactNode;
};

const toneMap: Record<BadgeTone, string> = {
  default: "bg-secondary/10 text-secondary",
  info: "bg-focus/10 text-focus",
  success: "bg-success/10 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/10 text-danger"
};

export function Badge({ tone = "default", children }: BadgeProps) {
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${toneMap[tone]}`}>{children}</span>;
}
```

Replace `components/ui/LoadingState.tsx`:

```tsx
export type LoadingStateProps = {
  label?: string;
};

export function LoadingState({ label = "Loading..." }: LoadingStateProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted" role="status" aria-live="polite">
      <span className="h-3 w-3 animate-pulse rounded-full bg-muted" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
```

Replace `components/ui/EmptyState.tsx`:

```tsx
import type { ReactNode } from "react";

export type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-surface p-6 text-center">
      <h3 className="text-base font-semibold">{title}</h3>
      {description ? <p className="mt-2 text-sm text-muted">{description}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
```

- [ ] **Step 4: Run typecheck**

Run:

```bash
npm run typecheck
```

Expected: PASS.

- [ ] **Step 5: Commit task 2**

```bash
git add components/ui/Button.tsx components/ui/Input.tsx components/ui/Alert.tsx components/ui/Badge.tsx components/ui/LoadingState.tsx components/ui/EmptyState.tsx
git commit -m "feat: upgrade core ui primitives"
```

---

### Task 3: Add Radix UI Wrappers

**Files:**
- Create: `components/ui/Dialog.tsx`
- Create: `components/ui/DropdownMenu.tsx`
- Create: `components/ui/Tooltip.tsx`
- Create: `components/ui/Tabs.tsx`
- Create: `components/ui/Popover.tsx`

- [ ] **Step 1: Create `Dialog.tsx`**

```tsx
"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef } from "react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export function DialogContent({ className = "", ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-text/40" />
      <DialogPrimitive.Content
        className={`fixed left-1/2 top-1/2 z-50 w-[min(92vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-surface p-5 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus ${className}`}
        {...props}
      />
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`mb-4 space-y-1 ${className}`} {...props} />;
}

export function DialogTitle(props: ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className="text-base font-semibold text-text" {...props} />;
}

export function DialogDescription(props: ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description className="text-sm text-muted" {...props} />;
}

export function DialogFooter({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`mt-5 flex justify-end gap-2 ${className}`} {...props} />;
}
```

- [ ] **Step 2: Create `DropdownMenu.tsx`**

```tsx
"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ComponentPropsWithoutRef } from "react";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;

export function DropdownMenuContent({ className = "", sideOffset = 6, ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={`z-50 min-w-44 rounded-md border border-border bg-surface p-1 shadow-lg ${className}`}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

export function DropdownMenuItem({ className = "", ...props }: ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>) {
  return (
    <DropdownMenuPrimitive.Item
      className={`cursor-default rounded-sm px-2.5 py-2 text-sm text-text outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-secondary/10 data-[disabled]:opacity-50 ${className}`}
      {...props}
    />
  );
}
```

- [ ] **Step 3: Create `Tooltip.tsx`, `Tabs.tsx`, and `Popover.tsx`**

Create `components/ui/Tooltip.tsx`:

```tsx
"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ComponentPropsWithoutRef } from "react";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent({ className = "", sideOffset = 6, ...props }: ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={`z-50 max-w-xs rounded-md bg-text px-2.5 py-1.5 text-xs text-surface shadow-md ${className}`}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}
```

Create `components/ui/Tabs.tsx`:

```tsx
"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { ComponentPropsWithoutRef } from "react";

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className = "", ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.List>) {
  return <TabsPrimitive.List className={`inline-flex rounded-md border border-border bg-surface p-1 ${className}`} {...props} />;
}

export function TabsTrigger({ className = "", ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={`rounded-sm px-3 py-1.5 text-sm font-medium text-muted outline-none transition data-[state=active]:bg-primary data-[state=active]:text-white focus-visible:ring-2 focus-visible:ring-focus ${className}`}
      {...props}
    />
  );
}

export function TabsContent({ className = "", ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={`mt-3 outline-none focus-visible:ring-2 focus-visible:ring-focus ${className}`} {...props} />;
}
```

Create `components/ui/Popover.tsx`:

```tsx
"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { ComponentPropsWithoutRef } from "react";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

export function PopoverContent({ className = "", sideOffset = 8, ...props }: ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        sideOffset={sideOffset}
        className={`z-50 w-72 rounded-md border border-border bg-surface p-4 text-sm text-text shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-focus ${className}`}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
```

- [ ] **Step 4: Run typecheck**

```bash
npm run typecheck
```

Expected: PASS.

- [ ] **Step 5: Commit task 3**

```bash
git add components/ui/Dialog.tsx components/ui/DropdownMenu.tsx components/ui/Tooltip.tsx components/ui/Tabs.tsx components/ui/Popover.tsx
git commit -m "feat: add radix ui wrappers"
```

---

### Task 4: Add Toast Foundation

**Files:**
- Create: `components/ui/Toast.tsx`

- [ ] **Step 1: Create Sonner wrapper**

Create `components/ui/Toast.tsx`:

```tsx
"use client";

import { Toaster, toast } from "sonner";

export { toast };

export type ToastProviderProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export function ToastProvider({ position = "bottom-right" }: ToastProviderProps) {
  return (
    <Toaster
      position={position}
      toastOptions={{
        classNames: {
          toast: "border border-border bg-surface text-text",
          title: "text-sm font-medium text-text",
          description: "text-sm text-muted",
          actionButton: "bg-primary text-white",
          cancelButton: "bg-secondary/10 text-text"
        }
      }}
    />
  );
}
```

- [ ] **Step 2: Run typecheck**

```bash
npm run typecheck
```

Expected: PASS.

- [ ] **Step 3: Commit task 4**

```bash
git add components/ui/Toast.tsx
git commit -m "feat: add toast foundation"
```

---

### Task 5: Replace Storybook Overview With Focused Stories

**Files:**
- Delete: `stories/ui.stories.tsx`
- Create: `stories/design-system-tokens.stories.tsx`
- Create: `stories/design-system-usage.stories.tsx`
- Create: `stories/button.stories.tsx`
- Create: `stories/forms.stories.tsx`
- Create: `stories/feedback.stories.tsx`
- Create: `stories/overlays.stories.tsx`
- Create: `stories/navigation.stories.tsx`

- [ ] **Step 1: Remove old overview story**

```bash
rm stories/ui.stories.tsx
```

- [ ] **Step 2: Create Design System token stories**

Create `stories/design-system-tokens.stories.tsx` with token swatches and examples:

```tsx
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Design System/Tokens"
};

export default meta;
type Story = StoryObj;

const colors = [
  { name: "bg", className: "bg-bg" },
  { name: "surface", className: "bg-surface" },
  { name: "text", className: "bg-text" },
  { name: "border", className: "bg-border" },
  { name: "primary", className: "bg-primary" },
  { name: "secondary", className: "bg-secondary" },
  { name: "muted", className: "bg-muted" },
  { name: "success", className: "bg-success" },
  { name: "warning", className: "bg-warning" },
  { name: "danger", className: "bg-danger" },
  { name: "focus", className: "bg-focus" }
];
const radii = ["rounded-sm", "rounded-md", "rounded-lg", "rounded-xl"];
const spacing = [
  { name: "p-1", className: "p-1" },
  { name: "p-2", className: "p-2" },
  { name: "p-3", className: "p-3" },
  { name: "p-4", className: "p-4" },
  { name: "p-5", className: "p-5" },
  { name: "p-6", className: "p-6" },
  { name: "p-8", className: "p-8" },
  { name: "p-10", className: "p-10" }
];

export const Tokens: Story = {
  render: () => (
    <div className="space-y-8 p-6 text-text">
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Color tokens</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {colors.map((color) => (
            <div key={color.name} className="rounded-md border border-border bg-surface p-3">
              <div className={`mb-2 h-12 rounded-md border border-border ${color.className}`} />
              <code className="text-sm">bg-{color.name}</code>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Radius tokens</h2>
        <div className="flex flex-wrap gap-3">
          {radii.map((radius) => (
            <div key={radius} className={`${radius} border border-border bg-surface p-5 text-sm`}>
              {radius}
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Spacing scale</h2>
        <div className="space-y-2">
          {spacing.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <code className="w-12 text-sm">{item.name}</code>
              <div className={`bg-primary ${item.className}`}>
                <div className="h-3 w-24 bg-surface" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Typography</h2>
        <div className="space-y-2 rounded-md border border-border bg-surface p-4">
          <p className="text-2xl font-semibold">Display heading</p>
          <p className="text-lg font-semibold">Section heading</p>
          <p className="text-base">Body text uses the application text token.</p>
          <p className="text-sm text-muted">Muted supporting text uses the muted token.</p>
        </div>
      </section>
    </div>
  )
};
```

- [ ] **Step 3: Create component stories**

Create focused story files using current component APIs:

```tsx
// stories/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  )
};

export const SizesAndStates: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-6">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>
      <Button isLoading>Saving</Button>
    </div>
  )
};
```

Use the same pattern for `forms`, `feedback`, `overlays`, and `navigation`: import only `components/ui` primitives, use neutral labels, and avoid product workflows.

- [ ] **Step 4: Create usage guideline story**

Create `stories/design-system-usage.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Design System/Usage Guidelines"
};

export default meta;
type Story = StoryObj;

export const Guidelines: Story = {
  render: () => (
    <div className="max-w-3xl space-y-5 p-6 text-text">
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Primitive selection</h2>
        <p className="text-sm text-muted">Use custom primitives for simple visual components. Use Radix wrappers when keyboard behavior, focus management, or ARIA behavior is non-trivial.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Forms</h2>
        <p className="text-sm text-muted">Compose forms with React Hook Form and shared inputs. Keep validation schemas in validation boundaries when reused outside the UI.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Feedback</h2>
        <p className="text-sm text-muted">Use alerts for persistent page feedback and toasts for transient feedback after user actions.</p>
      </section>
    </div>
  )
};
```

- [ ] **Step 5: Run Storybook build**

```bash
npm run build-storybook
```

Expected: PASS and `storybook-static` is regenerated.

- [ ] **Step 6: Commit task 5**

```bash
git add stories .storybook/preview.ts
git rm --ignore-unmatch stories/ui.stories.tsx
git commit -m "docs: add ui foundation storybook stories"
```

---

### Task 6: Update Design-System Documentation And Agent Rules

**Files:**
- Modify: `docs/design-system.md`
- Modify: `docs/ui-rules.md`
- Modify: `docs/template-contract.snapshot.md`
- Modify: `components/ui/AGENTS.md`

- [ ] **Step 1: Update `docs/design-system.md`**

Rewrite the document with these sections:

```md
# Design System v1

## Source of truth

Design tokens live in `app/globals.css` and are exposed through `tailwind.config.ts`.

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
```

- [ ] **Step 2: Update `docs/ui-rules.md` and contract snapshot**

Ensure `docs/ui-rules.md` contains:

```md
# UI Rules

- Use shared primitives from `components/ui` before creating feature-local alternatives.
- Keep simple visual primitives custom and token-driven.
- Use Radix wrappers from `components/ui` for non-trivial accessibility, keyboard behavior, focus management, or overlay positioning.
- Use `ToastProvider` and `toast` from `components/ui/Toast` for transient feedback.
- Use React Hook Form for reusable form examples and production form composition.
- Keep reusable validation schemas in `lib/validation`.
- Avoid arbitrary Tailwind values for core colors, spacing, and radii.
- Keep one source of truth for design tokens in `app/globals.css` and `tailwind.config.ts`.
- Keep feature and data logic out of `components/ui`.
- Any reusable visual pattern should have Storybook coverage.
- Keep starter screens neutral and product-agnostic.
```

Update `docs/template-contract.snapshot.md` so section `6. Data / Forms / State Defaults` includes:

```md
- Forms: `React Hook Form`
- Validation: `Zod`
- Server state: planned/optional, use TanStack Query when product API caching is needed
- Complex client state: planned/optional, use Redux Toolkit when structured shared app state is needed
```

- [ ] **Step 3: Update `components/ui/AGENTS.md`**

Use this content:

```md
# UI Primitives Rules

- Keep components generic and reusable.
- No feature, product, routing, data-fetching, or server-only logic.
- Use tokenized colors, radius, spacing, and focus styles.
- Keep accessibility states: focus-visible, disabled, loading, error, and danger.
- Use Radix only through wrappers in `components/ui` for complex interactive behavior.
- Keep wrappers thin and preserve Radix accessibility behavior.
- Add or update Storybook coverage for every reusable variant or state.
```

- [ ] **Step 4: Commit task 6**

```bash
git add docs/design-system.md docs/ui-rules.md docs/template-contract.snapshot.md components/ui/AGENTS.md
git commit -m "docs: update ui foundation rules"
```

---

### Task 7: Final Verification

**Files:**
- Verify all changed files.

- [ ] **Step 1: Run typecheck**

```bash
npm run typecheck
```

Expected: PASS.

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

Expected: PASS.

- [ ] **Step 3: Run app build**

```bash
npm run build
```

Expected: PASS.

- [ ] **Step 4: Run Storybook build**

```bash
npm run build-storybook
```

Expected: PASS.

- [ ] **Step 5: Inspect final diff**

```bash
git status --short
git diff --stat HEAD
```

Expected: no unstaged changes if all task commits were made, or only intentional final edits ready to commit.

- [ ] **Step 6: Commit final verification fixes**

When verification required small fixes, stage the final intentional diff:

```bash
git add -A
git commit -m "chore: verify ui foundation kit"
```

Expected: all implementation changes are committed in focused commits. Skip this step when `git status --short` is empty.

---

## Self-Review Notes

- Spec coverage: dependencies, core primitives, Radix wrappers, toast, React Hook Form examples, Storybook token docs, written docs, AGENTS rules, and verification commands are covered.
- Scope check: tables, TanStack Query, Redux Toolkit, product screens, server/API changes, and feature workflows are intentionally excluded.
- Ambiguity check: button variants, button sizes, badge tones, required Radix packages, and Storybook structure are explicit.
