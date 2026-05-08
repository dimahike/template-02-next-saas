import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingState } from "@/components/ui/LoadingState/LoadingState";

const meta: Meta<typeof LoadingState> = {
  title: "UI/LoadingState",
  component: LoadingState,
  args: {
    label: "Loading..."
  },
  argTypes: {
    label: { control: "text" }
  }
};

export default meta;
type Story = StoryObj<typeof LoadingState>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: {
    label: "Syncing records..."
  }
};
