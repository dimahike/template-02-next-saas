export type LoadingStateProps = {
  label?: string;
};

export function LoadingState({ label = "Loading..." }: LoadingStateProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted" role="status" aria-live="polite">
      <span className="h-3 w-3 animate-pulse rounded-full bg-muted" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
