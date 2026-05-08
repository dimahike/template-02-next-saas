import type { Meta, StoryObj } from "@storybook/react-vite";

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
        <p className="text-sm text-muted">
          Use custom primitives for simple visual components. Use Radix wrappers when keyboard behavior, focus management, or ARIA
          behavior is non-trivial.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Forms</h2>
        <p className="text-sm text-muted">
          Compose forms with React Hook Form and shared inputs. Keep validation schemas in validation boundaries when reused outside
          the UI.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Feedback</h2>
        <p className="text-sm text-muted">Use alerts for persistent page feedback and toasts for transient feedback after user actions.</p>
      </section>
    </div>
  )
};
