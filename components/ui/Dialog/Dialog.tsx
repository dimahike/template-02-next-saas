"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef } from "react";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export function DialogContent({ className = "", ...props }: ComponentPropsWithoutRef<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-text/40" />
      <DialogPrimitive.Content
        className={`fixed left-1/2 top-1/2 z-50 w-[min(92vw,32rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-surface p-5 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus ${className}`}
        {...props}
      />
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`mb-4 space-y-1 ${className}`} {...props} />;
}

export function DialogTitle(props: ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title className="text-base font-semibold text-text" {...props} />;
}

export function DialogDescription(props: ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description className="text-sm text-muted" {...props} />;
}

export function DialogFooter({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`mt-5 flex justify-end gap-2 ${className}`} {...props} />;
}
