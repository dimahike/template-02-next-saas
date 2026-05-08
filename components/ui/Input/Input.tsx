import type { InputHTMLAttributes, ReactNode } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: ReactNode;
  errorText?: ReactNode;
  hasError?: boolean;
};

export function Input({ label, helperText, errorText, hasError = false, className = "", id, ...props }: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const describedBy = errorText ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined;
  const isInvalid = hasError || Boolean(errorText);

  return (
    <label className="block space-y-1.5">
      {label ? <span className="text-sm font-medium text-text">{label}</span> : null}
      <input
        id={inputId}
        aria-invalid={isInvalid || undefined}
        aria-describedby={describedBy}
        className={`w-full rounded-md border bg-surface px-3 py-2 text-sm text-text outline-none transition placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-focus ${
          isInvalid ? "border-danger" : "border-border"
        } ${className}`}
        {...props}
      />
      {errorText ? (
        <p id={inputId ? `${inputId}-error` : undefined} className="text-xs text-danger">
          {errorText}
        </p>
      ) : helperText ? (
        <p id={inputId ? `${inputId}-helper` : undefined} className="text-xs text-muted">
          {helperText}
        </p>
      ) : null}
    </label>
  );
}
