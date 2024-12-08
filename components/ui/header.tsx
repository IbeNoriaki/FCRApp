"use client";

import { cn } from "@/lib/utils";
import ShimmerButton from "@/components/ui/shimmer-button";
import { TwitterIcon, InstagramIcon } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex h-12 items-center justify-between border-b border-red-300 bg-red-200/80 px-4 backdrop-blur-sm dark:bg-red-900/50",
        className
      )}
    >
      <div className="flex flex-col items-start gap-0.5">
        <ShimmerButton
          shimmerColor="rgba(255, 0, 0, 0.5)"
          background="rgba(255, 0, 0, 0.8)"
          className="h-6 px-3 py-0"
          borderRadius="6px"
        >
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
            </span>
            <span className="text-xs font-medium text-white">Live v0.1</span>
          </div>
        </ShimmerButton>
        <span className="text-xs font-semibold text-black dark:text-white">
          fcr.ryukyu/bomberz - FCR for Bom
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a 
          href="https://twitter.com/bomberz_fcr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:text-red-600 transition-colors dark:text-white dark:hover:text-red-400"
        >
          <TwitterIcon className="h-5 w-5" />
        </a>
        <a 
          href="https://instagram.com/bomberz_fcr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:text-red-600 transition-colors dark:text-white dark:hover:text-red-400"
        >
          <InstagramIcon className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
} 