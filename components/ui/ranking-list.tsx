"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { RankingItem } from "./ranking-item";

interface RankingData {
  rank: number;
  nickname: string;
  avatarPath: string;
  fcr: number;
  previousRank?: number;
}

const sampleRankingData: RankingData[] = [
  {
    rank: 1,
    nickname: "ファン1",
    avatarPath: "/avatars/user-01.png",
    fcr: 100000,
    previousRank: 2,
  },
  {
    rank: 2,
    nickname: "ファン2",
    avatarPath: "/avatars/user-02.png",
    fcr: 80000,
    previousRank: 1,
  },
  {
    rank: 3,
    nickname: "ファン3",
    avatarPath: "/avatars/user-03.png",
    fcr: 60000,
    previousRank: 3,
  },
  // ... 追加のランキングデータ
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 子要素のアニメーションを0.1秒ずつ遅延
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.8 
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

// 上位3位用の特別なスタイル
const getTopRankStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 scale-105";
    case 2:
      return "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900/30 dark:to-gray-800/30 scale-[1.03]";
    case 3:
      return "bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 scale-[1.01]";
    default:
      return "";
  }
};

export function RankingList() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-3 p-4"
    >
      <AnimatePresence>
        {sampleRankingData.map((item) => (
          <motion.div
            key={item.rank}
            variants={itemVariants}
            layout
            className={cn(
              "transform transition-all duration-300",
              getTopRankStyle(item.rank)
            )}
          >
            <RankingItem {...item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
} 