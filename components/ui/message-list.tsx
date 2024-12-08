"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useState, useRef, useCallback } from "react";
import Image from 'next/image';

interface MessageItem {
  description: string;
  imagePath: string;
  nickname: string;
  time: string;
  receiverImage: string;
  receiverNickname: string;
  fcr: number;
  status: 'new' | 'recent' | 'older' | 'condensed';
}

const notifications = [
  {
    description: "今日のライブ最高でした！また観に行きます！",
    time: "1m ago",
    imagePath: "/avatars/user-01.png",
    nickname: "ファン1",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 10000,
  },
  {
    description: "新曲発売おめでとう！ずっと応援してます！",
    time: "3m ago",
    imagePath: "/avatars/user-02.png",
    nickname: "ファン2",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 5000,
  },
  {
    description: "アンコールまで最高でした！次も必ず行きます！",
    time: "5m ago",
    imagePath: "/avatars/user-03.png",
    nickname: "ファン3",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 15000,
  },
  {
    description: "握手会でお話できて嬉しかったです！",
    time: "7m ago",
    imagePath: "/avatars/user-04.png",
    nickname: "ファン4",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 8000,
  },
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
  {
    description: "声量が増えてて感動しました！",
    time: "15m ago",
    imagePath: "/avatars/user-02.png",
    nickname: "ファン7",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 7000,
  },
  {
    description: "MCでの話が面白かったです！",
    time: "18m ago",
    imagePath: "/avatars/user-03.png",
    nickname: "ファン8",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 9000,
  },
  {
    description: "サイリウムの演出が綺麗でした！",
    time: "20m ago",
    imagePath: "/avatars/user-04.png",
    nickname: "ファン9",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 11000,
  },
  {
    description: "ファンサ最高です！ありがとう！",
    time: "23m ago",
    imagePath: "/avatars/user-05.png",
    nickname: "ファン10",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 15000,
  },
  {
    description: "新曲のサビの振り付けが可愛い！",
    time: "25m ago",
    imagePath: "/avatars/user-01.png",
    nickname: "ファン11",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 13000,
  },
  {
    description: "ソロパートの歌唱力が素晴らしかった！",
    time: "28m ago",
    imagePath: "/avatars/user-02.png",
    nickname: "ファン12",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 18000,
  },
  {
    description: "笑顔が最高に可愛かったです！",
    time: "30m ago",
    imagePath: "/avatars/user-03.png",
    nickname: "ファン13",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 25000,
  },
  {
    description: "アンコールでのサプライズ感動しました！",
    time: "33m ago",
    imagePath: "/avatars/user-04.png",
    nickname: "ファン14",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 30000,
  },
  {
    description: "次のライブも必ず行きます！",
    time: "35m ago",
    imagePath: "/avatars/user-05.png",
    nickname: "ファン15",
    receiverImage: "/avatars/user-06.png",
    receiverNickname: "推し",
    fcr: 22000,
  },
];

interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const Notification = ({ description, imagePath, nickname, time, receiverImage, receiverNickname, fcr, status }: MessageItem) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const handleExpand = useCallback(() => {
    setIsExpanded(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 2000);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const getStylesByStatus = (status: 'new' | 'recent' | 'older' | 'condensed', expanded: boolean) => {
    if (expanded) {
      return {
        descriptionClass: "text-sm leading-snug",
        fcrClass: "text-lg",
        containerClass: "p-4"
      };
    }

    switch (status) {
      case 'new':
        return {
          descriptionClass: "text-sm leading-snug",
          fcrClass: "text-lg",
          containerClass: "p-4"
        };
      case 'recent':
        return {
          descriptionClass: "text-xs leading-snug",
          fcrClass: "text-base",
          containerClass: "p-3"
        };
      case 'older':
        return {
          descriptionClass: "text-xs leading-tight",
          fcrClass: "text-sm",
          containerClass: "p-2"
        };
      case 'condensed':
      default:
        return {
          descriptionClass: "hidden",
          fcrClass: "text-base",
          containerClass: "p-2"
        };
    }
  };

  const styles = getStylesByStatus(status, isExpanded);
  const showNames = status === 'new' || status === 'recent' || status === 'older';

  return (
    <figure
      onClick={handleExpand}
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        status === 'condensed' && !isExpanded && "min-h-[60px]",
        styles.containerClass
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col items-center">
          <div className="relative flex size-10 items-center justify-center rounded-2xl overflow-hidden">
            <Image
              src={imagePath}
              alt={nickname}
              width={100}
              height={100}
            />
          </div>
          {showNames && (
            <span className="w-[10ch] text-xs text-gray-500 dark:text-gray-400 truncate text-center" title={nickname}>
              {nickname}
            </span>
          )}
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          {(status !== 'condensed' || isExpanded) ? (
            <>
              <p className={`${styles.descriptionClass} font-normal dark:text-white/60 mb-2`}>
                {description}
              </p>
              <div className="flex items-center gap-2">
                <span className={`${styles.fcrClass} font-bold text-blue-500`}>
                  {fcr.toLocaleString()} FCR
                </span>
                <span className="text-xs text-gray-500">
                  {time}
                </span>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span className={`${styles.fcrClass} font-bold text-blue-500`}>
                {fcr.toLocaleString()} FCR
              </span>
              <span className="text-xs text-gray-500">
                {time}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div className="flex size-10 items-center justify-center rounded-2xl overflow-hidden">
            <Image
              src={receiverImage}
              alt={receiverNickname}
              width={100}
              height={100}
            />
          </div>
          {showNames && (
            <span className="w-[10ch] text-xs text-gray-500 dark:text-gray-400 truncate text-center" title={receiverNickname}>
              {receiverNickname}
            </span>
          )}
        </div>
      </div>
    </figure>
  );
};

function AnimatedListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, originY: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 350, damping: 40 }}
      layout
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  );
}

const AnimatedList = React.memo(
  ({ className, children, delay = 1000 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children],
    );

    useEffect(() => {
      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => prevIndex + 1);
        }, delay);

        return () => clearTimeout(timeout);
      }
    }, [index, delay, childrenArray.length]);

    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);

    const itemsWithStatus = useMemo(() => {
      return itemsToShow.map((item, idx) => {
        if (React.isValidElement(item)) {
          let status: 'new' | 'recent' | 'older' | 'condensed' = 'condensed';
          if (idx === 0) status = 'new';
          else if (idx === 1) status = 'recent';
          else if (idx === 2) status = 'older';
          
          return React.cloneElement(item, {
            ...item.props,
            status
          });
        }
        return item;
      });
    }, [itemsToShow]);

    return (
      <div className={`flex flex-col items-center gap-4 ${className}`}>
        <AnimatePresence>
          {itemsWithStatus.map((item, idx) => (
            <AnimatedListItem key={idx}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

export const MessageListDemo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <div className="flex-1 overflow-y-auto p-6">
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification key={idx} {...item} status="new" />
          ))}
        </AnimatedList>
      </div>
    </div>
  );
};