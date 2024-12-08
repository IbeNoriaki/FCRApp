"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { motion } from "framer-motion";

interface Message {
  imagePath: string;
  nickname: string;
  fcr: number;
  receiverImage: string;
  time: string;
}

const messages: Message[] = [
  {
    imagePath: "/avatars/user-01.png",
    nickname: "ファン1",
    fcr: 20000,
    receiverImage: "/avatars/user-06.png",
    time: "2m ago",
  },
  {
    imagePath: "/avatars/user-02.png",
    nickname: "ファン2",
    fcr: 15000,
    receiverImage: "/avatars/user-06.png",
    time: "3m ago",
  },
  {
    imagePath: "/avatars/user-03.png",
    nickname: "ファン3",
    fcr: 12000,
    receiverImage: "/avatars/user-06.png",
    time: "4m ago",
  },
  {
    imagePath: "/avatars/user-04.png",
    nickname: "ファン4",
    fcr: 18000,
    receiverImage: "/avatars/user-06.png",
    time: "5m ago",
  },
  {
    imagePath: "/avatars/user-05.png",
    nickname: "ファン5",
    fcr: 9000,
    receiverImage: "/avatars/user-06.png",
    time: "6m ago",
  },
  {
    imagePath: "/avatars/user-01.png",
    nickname: "ファン6",
    fcr: 25000,
    receiverImage: "/avatars/user-06.png",
    time: "7m ago",
  },
  {
    imagePath: "/avatars/user-02.png",
    nickname: "ファン7",
    fcr: 11000,
    receiverImage: "/avatars/user-06.png",
    time: "8m ago",
  },
  {
    imagePath: "/avatars/user-03.png",
    nickname: "ファン8",
    fcr: 16000,
    receiverImage: "/avatars/user-06.png",
    time: "9m ago",
  },
  {
    imagePath: "/avatars/user-04.png",
    nickname: "ファン9",
    fcr: 13000,
    receiverImage: "/avatars/user-06.png",
    time: "10m ago",
  },
  {
    imagePath: "/avatars/user-05.png",
    nickname: "ファン10",
    fcr: 22000,
    receiverImage: "/avatars/user-06.png",
    time: "11m ago",
  },
];

const MessageItem = ({ imagePath, nickname, fcr, receiverImage, time }: Message) => {
  return (
    <div>
      <motion.div
        className="flex items-center gap-2 rounded-lg bg-white/80 p-1 backdrop-blur-sm hover:bg-white/90"
      >
        <img
          src={imagePath}
          alt={nickname}
          className="h-5 w-5 rounded-full object-cover"
        />
        <span className="text-xs font-medium w-16">{nickname}</span>
        <span className="text-xs font-bold text-red-500">
          {fcr.toLocaleString()} FCR
        </span>
        <span className="text-xs text-gray-500 ml-1">{time}</span>
        <div className="flex-1" />
        <img
          src={receiverImage}
          alt="receiver"
          className="h-5 w-5 rounded-full object-cover"
        />
      </motion.div>
      <div className="h-[1px] bg-gray-200" />
    </div>
  );
};

export function FCRMessageList({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-end">
        <h2 className="text-sm font-bold text-black">
          Timeline
        </h2>
      </div>

      <div className="relative flex h-[140px] w-full flex-col rounded-lg border bg-background/50">
        <div className="flex-1 overflow-y-auto p-4">
          <AnimatedList delay={1000}>
            {messages.map((message, idx) => (
              <MessageItem key={idx} {...message} />
            ))}
          </AnimatedList>
        </div>
      </div>
    </div>
  );
} 