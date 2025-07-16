// src/components/ui/button.tsx
import React from "react";
import { cn } from "@/lib/utils"; // optional utility function

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", className, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-2xl font-medium transition-colors";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
    ghost: "text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
};