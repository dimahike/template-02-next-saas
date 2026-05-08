import type { Meta, StoryObj } from "@storybook/react-vite";

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
] as const;

const radii = ["rounded-sm", "rounded-md", "rounded-lg", "rounded-xl"] as const;
const spacing = [
  { name: "p-1", className: "p-1" },
  { name: "p-2", className: "p-2" },
  { name: "p-3", className: "p-3" },
  { name: "p-4", className: "p-4" },
  { name: "p-5", className: "p-5" },
  { name: "p-6", className: "p-6" },
  { name: "p-8", className: "p-8" },
  { name: "p-10", className: "p-10" }
] as const;

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
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">State examples</h2>
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-md border border-border px-4 py-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus">
            Focus ring sample
          </button>
          <div className="rounded-md border border-danger bg-danger/10 px-3 py-2 text-sm text-danger">Error state sample</div>
        </div>
      </section>
    </div>
  )
};
