import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/Button/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/Dialog/Dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover/Popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip/Tooltip";

const meta: Meta = {
  title: "Design System/Patterns/Overlays"
};

export default meta;
type Story = StoryObj;

export const DialogPopoverTooltip: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-4 p-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog title</DialogTitle>
              <DialogDescription>Reusable dialog for generic confirmations or forms.</DialogDescription>
            </DialogHeader>
            <p className="text-sm text-muted">Dialog content stays neutral and starter-friendly.</p>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="font-medium">Popover title</p>
            <p className="mt-2 text-muted">Popover content for contextual details or small controls.</p>
          </PopoverContent>
        </Popover>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost">Hover tooltip</Button>
          </TooltipTrigger>
          <TooltipContent>Tooltip helper text</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
};
