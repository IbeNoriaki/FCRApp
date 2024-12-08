import { cn } from "@/lib/utils";
import Image from "next/image";
import { Pencil1Icon, CopyIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface ProfileGridProps {
  className?: string;
  profileImage?: string;
  username?: string;
  walletAddress?: string;
  supporterCount?: number;
  messageCount?: number;
}

export function ProfileGrid({
  className,
  profileImage = "/avatars/user-06.png",
  username = "Username",
  walletAddress = "0x1234...5678",
  supporterCount = 42,
  messageCount = 156,
}: ProfileGridProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-[96px_1fr] gap-4">
        {/* 左側: プロフィール画像 */}
        <div className="relative aspect-square w-24 overflow-hidden rounded-lg">
          <Image
            src={profileImage}
            alt={username}
            fill
            className="object-cover"
            sizes="96px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* 右側: プロフィール情報 */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-medium text-black dark:text-white">
              {username}
            </h2>
            <button 
              className="rounded-full p-0.5 hover:bg-black/5 dark:hover:bg-white/5"
              onClick={() => console.log('Edit username')}
            >
              <Pencil1Icon className="h-3 w-3 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300" />
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs text-neutral-600 dark:text-neutral-400">
              {walletAddress}
            </span>
            <button 
              className="rounded-full p-0.5 hover:bg-black/5 dark:hover:bg-white/5"
              onClick={handleCopyClick}
            >
              <CopyIcon className={cn(
                "h-3 w-3 transition-colors",
                copySuccess 
                  ? "text-green-500 dark:text-green-400" 
                  : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
              )} />
            </button>
          </div>

          <div className="mt-1.5 flex items-center space-x-3 text-[10px]">
            <div className="flex items-center space-x-1">
              <span className="text-neutral-600 dark:text-neutral-400">Supporter:</span>
              <span className="font-medium text-black dark:text-white">{supporterCount}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-neutral-600 dark:text-neutral-400">Message:</span>
              <span className="font-medium text-black dark:text-white">{messageCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 