import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/components/ui/Input/Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  args: {
    disabled: false,
    hasError: false,
    label: "Email",
    placeholder: "you@example.com",
    type: "email"
  },
  argTypes: {
    defaultValue: { control: "text" },
    disabled: { control: "boolean" },
    errorText: { control: "text" },
    hasError: { control: "boolean" },
    helperText: { control: "text" },
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: ["email", "password", "search", "text", "url"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: "We will use this email for account notifications."
  }
};

export const Error: Story = {
  args: {
    errorText: "Please provide a valid email address.",
    defaultValue: "invalid-email"
  }
};
