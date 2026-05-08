import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/Button/Button";
import { toast, ToastProvider } from "@/components/ui/Toast/Toast";

const meta: Meta<typeof ToastProvider> = {
  title: "UI/Toast",
  component: ToastProvider,
  args: {
    position: "bottom-right"
  },
  argTypes: {
    position: {
      control: "select",
      options: ["top-left", "top-right", "bottom-left", "bottom-right"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

export const Preview: Story = {
  render: (args) => (
    <div className="p-6">
      <ToastProvider {...args} />
      <Button onClick={() => toast("Saved", { description: "Your changes were successfully saved." })}>Show toast</Button>
    </div>
  )
};
