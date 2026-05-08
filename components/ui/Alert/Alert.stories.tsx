import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@/components/ui/Alert/Alert";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  args: {
    kind: "info",
    title: "System notice",
    children: "This is an informational alert."
  },
  argTypes: {
    children: { control: "text" },
    kind: {
      control: "select",
      options: ["info", "success", "warning", "danger"]
    },
    title: { control: "text" }
  }
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const Kinds: Story = {
  render: () => (
    <div className="space-y-3 p-6">
      <Alert kind="info" title="Info">Informational message.</Alert>
      <Alert kind="success" title="Success">Action completed successfully.</Alert>
      <Alert kind="warning" title="Warning">Please review this configuration.</Alert>
      <Alert kind="danger" title="Danger">A critical error happened.</Alert>
    </div>
  )
};
