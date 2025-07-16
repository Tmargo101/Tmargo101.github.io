import React from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-2xl shadow-md border bg-white dark:bg-gray-800 dark:border-gray-700", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
}
