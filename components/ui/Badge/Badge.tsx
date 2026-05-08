import type { ReactNode } from "react";

export type BadgeTone = "default" | "info" | "success" | "warning" | "danger";

export type BadgeProps = {
  tone?: BadgeTone;
  children: ReactNode;
};

const toneMap: Record<BadgeTone, string> = {
  default: "bg-secondary/10 text-secondary",
  info: "bg-focus/10 text-focus",
  success: "bg-success/10 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/10 text-danger"
};

export function Badge({ tone = "default", children }: BadgeProps) {
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${toneMap[tone]}`}>{children}</span>;
}
