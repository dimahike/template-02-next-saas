import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/Button/Button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip/Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  args: {
    defaultOpen: false,
    delayDuration: 700
  },
  argTypes: {
    defaultOpen: { control: "boolean" },
    delayDuration: { control: { type: "number", min: 0, step: 100 } }
  }
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Preview: Story = {
  render: (args) => (
    <TooltipProvider>
      <div className="p-6">
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>Helpful context appears here.</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
};
