"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from 'next/image';

interface RankingItemProps {
  rank: number;
  nickname: string;
  avatarPath: string;
  fcr: number;
  previousRank?: number;
}

export function RankingItem({ rank, nickname, avatarPath, fcr, previousRank }: RankingItemProps) {
  const rankChange = previousRank ? previousRank - rank : 0;

  return (
    <div
      className={cn(
        "relative flex items-center gap-4 rounded-lg bg-white/80 backdrop-blur-sm p-4",
        "dark:bg-gray-800/50 dark:backdrop-blur-sm",
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "hover:scale-[1.02] transition-transform duration-200"
      )}
    >
      {/* Rank */}
      <div className="flex w-12 flex-col items-center">
        <motion.span 
          className="text-2xl font-bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          {rank}
        </motion.span>
        {rankChange !== 0 && (
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "text-sm",
              rankChange > 0 ? "text-green-500" : "text-red-500"
            )}
          >
            {rankChange > 0 ? `↑${rankChange}` : `↓${Math.abs(rankChange)}`}
          </motion.span>
        )}
      </div>

      {/* Avatar with shine effect */}
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
          <Image
            src={avatarPath}
            alt={nickname}
            width={500}
            height={300}
          />
        </div>
      </div>

      {/* Nickname */}
      <div className="flex-1">
        <motion.span 
          className="font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {nickname}
        </motion.span>
      </div>

      {/* FCR with counting animation */}
      <motion.div 
        className="text-right"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.4 }}
      >
        <span className="text-lg font-bold text-blue-500">
          {fcr.toLocaleString()} FCR
        </span>
      </motion.div>
    </div>
  );
} 