import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/Button/Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "Button",
    disabled: false,
    isLoading: false,
    size: "md",
    type: "button",
    variant: "primary"
  },
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
    isLoading: { control: "boolean" },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"]
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

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
