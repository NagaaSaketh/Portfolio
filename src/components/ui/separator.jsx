import { cn } from "@/lib/utils";

function Separator({ className, orientation = "horizontal", ...props }) {
  const horizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "shrink-0 bg-slate-800/90",
        horizontal ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
