/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-400 text-slate-950 shadow-[0_0_0_1px_rgba(52,211,153,0.6)] hover:bg-emerald-300",
        secondary:
          "bg-slate-800 text-slate-100 shadow-[0_0_0_1px_rgba(148,163,184,0.2)] hover:bg-slate-700",
        outline:
          "border border-slate-700 bg-transparent text-slate-100 hover:border-emerald-300 hover:text-emerald-300",
        ghost: "text-slate-200 hover:bg-slate-800/70 hover:text-white",
        link: "text-emerald-300 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
