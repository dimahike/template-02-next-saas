import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@/components/ui/Card/Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  args: {
    title: "Card title",
    children: "Card content goes here."
  },
  argTypes: {
    children: { control: "text" },
    title: { control: "text" }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithoutTitle: Story = {
  args: {
    title: undefined,
    children: "A simple card body without heading."
  }
};
