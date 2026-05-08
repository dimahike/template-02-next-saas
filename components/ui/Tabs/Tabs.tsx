"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { ComponentPropsWithoutRef } from "react";

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className = "", ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.List>) {
  return <TabsPrimitive.List className={`inline-flex rounded-md border border-border bg-surface p-1 ${className}`} {...props} />;
}

export function TabsTrigger({ className = "", ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={`rounded-sm px-3 py-1.5 text-sm font-medium text-muted outline-none transition data-[state=active]:bg-primary data-[state=active]:text-white focus-visible:ring-2 focus-visible:ring-focus ${className}`}
      {...props}
    />
  );
}

export function TabsContent({ className = "", ...props }: ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={`mt-3 outline-none focus-visible:ring-2 focus-visible:ring-focus ${className}`} {...props} />;
}
