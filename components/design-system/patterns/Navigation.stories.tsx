import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/Button/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/DropdownMenu/DropdownMenu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs/Tabs";

const meta: Meta = {
  title: "Design System/Patterns/Navigation"
};

export default meta;
type Story = StoryObj;

export const DropdownAndTabs: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>First option</DropdownMenuItem>
            <DropdownMenuItem>Second option</DropdownMenuItem>
            <DropdownMenuItem>Third option</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tabs defaultValue="overview" className="max-w-lg">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="rounded-md border border-border bg-surface p-3 text-sm text-muted">
          Overview tab content.
        </TabsContent>
        <TabsContent value="details" className="rounded-md border border-border bg-surface p-3 text-sm text-muted">
          Details tab content.
        </TabsContent>
        <TabsContent value="settings" className="rounded-md border border-border bg-surface p-3 text-sm text-muted">
          Settings tab content.
        </TabsContent>
      </Tabs>
    </div>
  )
};
