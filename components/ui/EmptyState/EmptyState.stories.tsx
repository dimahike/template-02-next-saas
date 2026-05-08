import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/Button/Button";
import { EmptyState } from "@/components/ui/EmptyState/EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "UI/EmptyState",
  component: EmptyState,
  args: {
    title: "No items yet",
    description: "Create your first item to get started."
  },
  argTypes: {
    action: { control: false },
    description: { control: "text" },
    title: { control: "text" }
  }
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const WithAction: Story = {
  args: {
    action: <Button size="sm">Create item</Button>
  }
};
