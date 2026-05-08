import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/Button/Button";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/Popover/Popover";

const meta: Meta<typeof Popover> = {
  title: "UI/Popover",
  component: Popover,
  args: {
    defaultOpen: false,
    modal: false
  },
  argTypes: {
    defaultOpen: { control: "boolean" },
    modal: { control: "boolean" }
  }
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Preview: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="space-y-3">
        <p className="text-sm">Use popovers for short contextual content.</p>
        <PopoverClose asChild>
          <Button size="sm" variant="secondary">
            Close
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
};
