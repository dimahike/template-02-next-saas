import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/ui/Badge/Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  args: {
    tone: "default",
    children: "Status"
  },
  argTypes: {
    children: { control: "text" },
    tone: {
      control: "select",
      options: ["default", "info", "success", "warning", "danger"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Tones: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 p-6">
      <Badge tone="default">Default</Badge>
      <Badge tone="info">Info</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="danger">Danger</Badge>
    </div>
  )
};
