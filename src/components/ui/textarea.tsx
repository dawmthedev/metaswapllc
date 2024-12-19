// filepath: /src/components/ui/textarea.tsx
import React from "react";

// filepath: /src/components/ui/textarea.tsx
// ...existing code...
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
// ...existing code...
// export interface TextareaProps
//   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    function cn(...classes: (string | undefined)[]): string {
      return classes.filter(Boolean).join(" ");
    }
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
