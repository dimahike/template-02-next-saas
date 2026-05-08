"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { ComponentPropsWithoutRef } from "react";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

export function PopoverContent({
  className = "",
  sideOffset = 8,
  ...props
}: ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        sideOffset={sideOffset}
        className={`z-50 w-72 rounded-md border border-border bg-surface p-4 text-sm text-text shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-focus ${className}`}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}
