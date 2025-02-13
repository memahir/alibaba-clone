import * as React from "react";
import { cn } from "@/lib/utils"; // Ensure this utility function exists, or remove it

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"; // ✅ Define allowed variants
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    // Define styles for different variants
    const variantClasses = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
      ghost: "text-blue-600 hover:bg-blue-100",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-md transition",
          variantClasses[variant], // ✅ Apply the correct variant class
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
