"use client";

import { Toaster, toast } from "sonner";

export { toast };

export type ToastProviderProps = {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export function ToastProvider({ position = "bottom-right" }: ToastProviderProps) {
  return (
    <Toaster
      position={position}
      toastOptions={{
        classNames: {
          toast: "border border-border bg-surface text-text",
          title: "text-sm font-medium text-text",
          description: "text-sm text-muted",
          actionButton: "bg-primary text-white",
          cancelButton: "bg-secondary/10 text-text"
        }
      }}
    />
  );
}
