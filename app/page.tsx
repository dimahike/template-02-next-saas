import { Alert } from "@/components/ui/Alert/Alert";
import { Badge } from "@/components/ui/Badge/Badge";
import { Card } from "@/components/ui/Card/Card";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 p-8">
      <Card title="Next SaaS Fullstack Starter">
        <p className="text-sm text-muted">
          Architecture is ready for reusable UI, typed API boundaries, validation, and server/client separation.
        </p>
      </Card>

      <div className="flex flex-wrap items-center gap-2">
        <Badge>Mock Data First</Badge>
        <Badge tone="success">TypeScript Strict</Badge>
        <Badge tone="warning">Auth Planned</Badge>
      </div>

      <Alert kind="info">Use this template to start scalable SaaS products without product-specific screens.</Alert>
    </main>
  );
}
