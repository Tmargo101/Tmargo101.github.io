import React from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className, isDarkMode }: React.HTMLAttributes<HTMLDivElement> & { isDarkMode?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl shadow-md border transition-colors",
        isDarkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-200 text-black",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className, isDarkMode }: React.HTMLAttributes<HTMLDivElement> & { isDarkMode?: boolean }) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
}
