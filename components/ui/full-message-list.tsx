"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface Message {
  description: string;
  time: string;
  imagePath: string;
  nickname: string;
  receiverImage: string;
  receiverNickname: string;
  fcr: number;
}

const messages: Message[] = [
  {
    description: "新衣装とても素敵でした！",
    time: "10m ago",
    imagePath: "/avatars/user-05.png",
    nickname: "ファン5",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 12000,
  },
  {
    description: "ダンスがキレキレでした！練習の成果が出てますね！",
    time: "12m ago",
    imagePath: "/avatars/user-01.png",
    nickname: "ファン6",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 20000,
  },
  // ... 他のメッセージデータ
];

const MessageItem = ({ description, time, imagePath, nickname, receiverImage, receiverNickname, fcr }: Message) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex items-center gap-4 rounded-lg bg-white/80 p-4 backdrop-blur-sm"
    >
      <img
        src={imagePath}
        alt={nickname}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <span className="text-sm font-medium">{nickname}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-xs text-gray-700">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-red-500">{fcr.toLocaleString()} FCR</span>
        <img
          src={receiverImage}
          alt={receiverNickname}
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
};

export const FullMessageList = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col rounded-lg border bg-background/50",
        className,
      )}
    >
      <div className="flex-1 space-y-2 overflow-y-auto p-4">
        <AnimatePresence initial={false}>
          {messages.map((message, idx) => (
            <MessageItem key={idx} {...message} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}; 