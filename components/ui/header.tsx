"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "./shimmer-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex h-12 items-center justify-between border-b border-red-300 bg-red-200/80 px-4 backdrop-blur-sm dark:bg-red-900/50",
        className
      )}
    >
      <Link href="/" className="flex flex-col items-start gap-0.5">
        <ShimmerButton
          shimmerColor="rgba(255, 255, 255, 0.2)"
          background="rgba(239, 68, 68, 0.9)"
          className="h-6 px-3 py-0 shadow-sm"
          borderRadius="6px"
        >
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
            </span>
            <span className="text-[13px] font-bold tracking-wide text-white drop-shadow-sm">
              Live v0.1
            </span>
          </div>
        </ShimmerButton>
        <span className="text-xs font-semibold text-black dark:text-white">
          fcr.ryukyu/sakura
        </span>
      </Link>

      <nav className="flex items-center gap-6">
        <Link 
          href="/"
          className={cn(
            "group relative flex h-8 w-8 items-center justify-center rounded-full transition-colors",
            "hover:bg-red-100 dark:hover:bg-red-900/50",
            pathname === "/" && "bg-red-100 dark:bg-red-900/50"
          )}
        >
          <svg
            className={cn(
              "h-4 w-4 transition-colors",
              "text-gray-600 group-hover:text-red-600",
              "dark:text-gray-400 dark:group-hover:text-red-400",
              pathname === "/" && "text-red-600 dark:text-red-400"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        </Link>
        <Link 
          href="/profile"
          className={cn(
            "group relative flex h-8 w-8 items-center justify-center rounded-full transition-colors",
            "hover:bg-red-100 dark:hover:bg-red-900/50",
            pathname === "/profile" && "bg-red-100 dark:bg-red-900/50"
          )}
        >
          <svg
            className={cn(
              "h-4 w-4 transition-colors",
              "text-gray-600 group-hover:text-red-600",
              "dark:text-gray-400 dark:group-hover:text-red-400",
              pathname === "/profile" && "text-red-600 dark:text-red-400"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Link>
        <Link 
          href="/message"
          className={cn(
            "group relative flex h-8 w-8 items-center justify-center rounded-full transition-colors",
            "hover:bg-red-100 dark:hover:bg-red-900/50",
            pathname === "/message" && "bg-red-100 dark:bg-red-900/50"
          )}
        >
          <svg
            className={cn(
              "h-4 w-4 transition-colors",
              "text-gray-600 group-hover:text-red-600",
              "dark:text-gray-400 dark:group-hover:text-red-400",
              pathname === "/message" && "text-red-600 dark:text-red-400"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </Link>
      </nav>
    </header>
  );
} 