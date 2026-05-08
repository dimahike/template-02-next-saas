import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@/components/ui/Alert/Alert";
import { Badge } from "@/components/ui/Badge/Badge";
import { Button } from "@/components/ui/Button/Button";
import { EmptyState } from "@/components/ui/EmptyState/EmptyState";
import { LoadingState } from "@/components/ui/LoadingState/LoadingState";
import { ToastProvider, toast } from "@/components/ui/Toast/Toast";

const meta: Meta = {
  title: "Design System/Patterns/Feedback"
};

export default meta;
type Story = StoryObj;

export const AlertsAndBadges: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <div className="grid gap-3 max-w-xl">
        <Alert kind="info" title="Information">Informational status message.</Alert>
        <Alert kind="success" title="Success">Operation completed successfully.</Alert>
        <Alert kind="warning" title="Warning">Action may require attention.</Alert>
        <Alert kind="danger" title="Danger">Action failed and needs correction.</Alert>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge tone="default">Default</Badge>
        <Badge tone="info">Info</Badge>
        <Badge tone="success">Success</Badge>
        <Badge tone="warning">Warning</Badge>
        <Badge tone="danger">Danger</Badge>
      </div>
    </div>
  )
};

export const LoadingAndEmpty: Story = {
  render: () => (
    <div className="space-y-6 p-6">
      <LoadingState label="Loading results" />
      <EmptyState
        title="No items available"
        description="This area is intentionally empty to demonstrate reusable empty states."
        action={<Button variant="outline">Add item</Button>}
      />
    </div>
  )
};

export const Toasts: Story = {
  render: () => (
    <div className="p-6">
      <ToastProvider />
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => toast.success("Success toast", { description: "Task completed." })}>Success toast</Button>
        <Button variant="secondary" onClick={() => toast.info("Info toast", { description: "Status update." })}>
          Info toast
        </Button>
        <Button variant="outline" onClick={() => toast.warning("Warning toast", { description: "Review this change." })}>
          Warning toast
        </Button>
        <Button variant="danger" onClick={() => toast.error("Error toast", { description: "Something went wrong." })}>
          Error toast
        </Button>
      </div>
    </div>
  )
};
