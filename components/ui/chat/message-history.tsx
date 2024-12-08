"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { DrawingPinIcon } from "@radix-ui/react-icons";

interface MessageHistoryProps {
  className?: string;
}

interface ChatMessage {
  id: string;
  sender: {
    id?: string;
    name: string;
    image: string;
    isProfile?: boolean;
  };
  message: string;
  fcr: number;
  timestamp: string;
}

const allMessages: ChatMessage[] = [
  {
    id: "8",
    sender: {
      id: "fan6",
      name: "ファン6",
      image: "/avatars/user-01.png",
      isProfile: false
    },
    message: "アンコールでのパフォーマンスが最高でした！感動しました！",
    fcr: 30000,
    timestamp: "15m ago",
  },
  {
    id: "1",
    sender: {
      name: "ファン1",
      image: "/avatars/user-01.png",
      isProfile: false
    },
    message: "今日のライブ最高でした！特にダンスがキレキレでした！",
    fcr: 15000,
    timestamp: "2m ago",
  },
  {
    id: "2",
    sender: {
      name: "推し",
      image: "/avatars/user-06.png",
      isProfile: true
    },
    message: "ありがとうございます！練習の成果を出せて嬉しいです！",
    fcr: 0,
    timestamp: "2m ago",
  },
  {
    id: "3",
    sender: {
      name: "ファン2",
      image: "/avatars/user-02.png",
      isProfile: false
    },
    message: "新衣装とても素敵でした！",
    fcr: 12000,
    timestamp: "5m ago",
  },
  {
    id: "4",
    sender: {
      name: "ファン3",
      image: "/avatars/user-03.png",
      isProfile: false
    },
    message: "MCでの話が面白かったです！もっと聞きたかったです！",
    fcr: 20000,
    timestamp: "7m ago",
  },
  {
    id: "5",
    sender: {
      name: "推し",
      image: "/avatars/user-06.png",
      isProfile: true
    },
    message: "あなさん、本当にありがとうございます！これからも頑張ります！",
    fcr: 0,
    timestamp: "8m ago",
  },
  {
    id: "6",
    sender: {
      name: "ファン4",
      image: "/avatars/user-04.png",
      isProfile: false
    },
    message: "握手会でお話できて嬉しかったです！次のライブも楽しみにしています！",
    fcr: 18000,
    timestamp: "10m ago",
  },
  {
    id: "7",
    sender: {
      name: "ファン5",
      image: "/avatars/user-05.png",
      isProfile: false
    },
    message: "声量が素晴らしかったです！歌唱力の向上を感じました！",
    fcr: 25000,
    timestamp: "12m ago",
  },
];

// 最大FCRのメッセージを見つける
const topMessage = [...allMessages].sort((a, b) => b.fcr - a.fcr)[0];
// トップメッセージを除いた通常のメッセージリスト
const regularMessages = allMessages.filter(msg => msg.id !== topMessage.id);

// 自分（ファン1）と推しのメッセージのみをフィルタリング
const personalMessages: ChatMessage[] = allMessages.filter(
  msg => msg.sender.name === "ファン1" || msg.sender.name === "推し"
);

export function MessageHistory({ className }: MessageHistoryProps) {
  const [showPersonal, setShowPersonal] = useState(false);

  return (
    <div className={cn("relative flex h-[500px] w-full flex-col rounded-lg border bg-background/50", className)}>
      {/* 切り替えボタン */}
      <div className="absolute right-4 top-4 z-10 flex space-x-2">
        <button
          onClick={() => setShowPersonal(false)}
          className={cn(
            "rounded-md px-3 py-1 text-sm transition-colors",
            !showPersonal 
              ? "bg-primary text-white" 
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          )}
        >
          すべて
        </button>
        <button
          onClick={() => setShowPersonal(true)}
          className={cn(
            "rounded-md px-3 py-1 text-sm transition-colors",
            showPersonal 
              ? "bg-primary text-white" 
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          )}
        >
          自分のみ
        </button>
      </div>

      {/* メ���セージ一覧 */}
      <div className="flex-1 space-y-6 overflow-y-auto p-4 pt-16">
        {!showPersonal && (
          <motion.div
            key={topMessage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            {/* Pin表示 */}
            <div className="absolute -top-2 left-12 z-10 flex items-center space-x-1 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
              <DrawingPinIcon className="h-3 w-3" />
              <span>Top FCR</span>
            </div>
            
            <div className={cn(
              "flex items-start space-x-4",
              "bg-gradient-to-r from-red-50 to-transparent dark:from-red-950/10 dark:to-transparent",
              "rounded-lg p-4"
            )}>
              {/* アバター */}
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-red-500">
                  <Image
                    src={topMessage.sender.image}
                    alt={topMessage.sender.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* メッセージコンテンツ */}
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-sm">
                    {topMessage.sender.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {topMessage.timestamp}
                  </span>
                  <span className="text-xs font-semibold text-red-500">
                    {topMessage.fcr.toLocaleString()} FCR
                  </span>
                </div>

                <div className="relative">
                  <div className="inline-block rounded-lg bg-white/90 dark:bg-gray-800/90 px-4 py-2 text-sm">
                    {topMessage.message}
                  </div>
                  <div className="absolute -top-1.5 left-4 h-3 w-3 rotate-45 bg-white/90 dark:bg-gray-800/90" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 通常のメッセージ一覧 */}
        {(showPersonal ? personalMessages : regularMessages).map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex items-start space-x-4",
              msg.sender.isProfile && "flex-row-reverse space-x-reverse"
            )}
          >
            {/* アバター */}
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                <Image
                  src={msg.sender.image}
                  alt={msg.sender.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>

            {/* メッセージコンテンツ */}
            <div className={cn(
              "flex-1 space-y-1.5",
              msg.sender.isProfile && "flex flex-col items-end"
            )}>
              {/* ヘッダー: 名前とタイムスタンプ */}
              <div className={cn(
                "flex items-center space-x-2",
                msg.sender.isProfile && "flex-row-reverse space-x-reverse"
              )}>
                <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
                  {msg.sender.name}
                </span>
                <span className="text-xs text-gray-500">
                  {msg.timestamp}
                </span>
                {msg.fcr > 0 && (
                  <span className="text-xs font-semibold text-red-500">
                    {msg.fcr.toLocaleString()} FCR
                  </span>
                )}
              </div>

              {/* メッセージ本文 */}
              <div className="relative">
                <div className={cn(
                  "inline-block rounded-lg px-4 py-2 text-sm shadow-sm",
                  msg.sender.isProfile
                    ? "bg-primary/10 text-gray-900 dark:text-gray-100"
                    : "bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100"
                )}>
                  {msg.message}
                </div>
                {/* 吹き出しの三角形 */}
                <div className={cn(
                  "absolute -top-1.5 h-3 w-3 rotate-45",
                  msg.sender.isProfile
                    ? "right-4 bg-primary/10"
                    : "left-4 bg-white/90 dark:bg-gray-800/90"
                )} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 