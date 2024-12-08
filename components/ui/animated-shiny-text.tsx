import { CSSProperties, FC, ReactNode } from "react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80",
        className,
      )}
    >
      {children}
    </p>
  );
};

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex min-h-64 items-center">
      <div
        className={cn(
          "group flex items-center transition-all ease-in hover:cursor-pointer",
        )}
      >
        <div className="ml-2 flex h-5 w-5 items-center justify-center rounded-full border border-black/70 text-black/70 dark:border-white/70 dark:text-white/70">
          <ArrowLeftIcon className="size-3 transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5" />
        </div>
        <AnimatedShinyText 
          className="inline-flex items-center justify-center py-1 pl-2 text-black transition ease-out dark:text-white"
          shimmerWidth={200}
        >
          <span>fcr.ryukyu / Username</span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}

export default AnimatedShinyText;
