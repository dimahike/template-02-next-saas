import type { ReactNode } from "react";

export type AlertKind = "info" | "success" | "warning" | "danger";

export type AlertProps = {
  kind?: AlertKind;
  title?: string;
  children: ReactNode;
};

const kindMap: Record<AlertKind, string> = {
  info: "border-focus/40 bg-focus/10 text-text",
  success: "border-success/40 bg-success/10 text-text",
  warning: "border-warning/40 bg-warning/10 text-text",
  danger: "border-danger/40 bg-danger/10 text-text"
};

export function Alert({ kind = "info", title, children }: AlertProps) {
  return (
    <div className={`rounded-md border px-3 py-2 text-sm ${kindMap[kind]}`} role="status">
      {title ? <p className="mb-1 font-medium">{title}</p> : null}
      <div>{children}</div>
    </div>
  );
}
