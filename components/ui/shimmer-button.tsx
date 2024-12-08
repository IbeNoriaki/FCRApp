"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  background?: string;
  borderRadius?: string;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "rgba(255, 255, 255, 0.2)",
  background = "rgba(0, 0, 0, 0.8)",
  borderRadius = "9999px",
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden",
        className
      )}
      style={{ borderRadius }}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{ background }}
      />
      <div
        className="absolute inset-0 animate-[shimmer_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
          backgroundSize: "200% 100%",
        }}
      />
      {children}
    </button>
  );
}
