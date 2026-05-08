import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs/Tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  args: {
    activationMode: "automatic",
    defaultValue: "overview",
    orientation: "horizontal"
  },
  argTypes: {
    activationMode: {
      control: "select",
      options: ["automatic", "manual"]
    },
    defaultValue: {
      control: "select",
      options: ["overview", "activity", "settings"]
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Preview: Story = {
  render: (args) => (
    <Tabs {...args} className="w-full max-w-xl p-6">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content.</TabsContent>
      <TabsContent value="activity">Recent activity content.</TabsContent>
      <TabsContent value="settings">Settings content.</TabsContent>
    </Tabs>
  )
};
