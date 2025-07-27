import { AlertCircle } from "lucide-react";

function ErrorDisplay({ error }: { error: Error | null }) {
  if (!error) return null;
  return (
    <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3">
      <div className="flex items-center gap-2">
        <AlertCircle className="h-4 w-4 text-destructive" />
        <p className="text-sm text-destructive font-medium">{error.message}</p>
      </div>
    </div>
  );
}

export default ErrorDisplay;
