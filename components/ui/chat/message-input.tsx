"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaperPlaneIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

export function MessageInput() {
  const [message, setMessage] = useState("");
  const [fcr, setFcr] = useState(1000);
  const [isEditingFcr, setIsEditingFcr] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sending message:", message, "with FCR:", fcr);
      setMessage("");
    }
  };

  return (
    <div className="sticky bottom-0 left-0 right-0 z-20 border-t bg-white dark:bg-gray-950 shadow-lg">
      <form 
        onSubmit={handleSubmit}
        className="container flex items-center gap-2 px-4 py-2 mx-auto max-w-7xl"
      >
        <Input
          type="text"
          inputMode="text"
          placeholder="メッセージを入力"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 h-8 text-sm"
        />
        <div className="flex items-center gap-1 min-w-[100px]">
          {isEditingFcr ? (
            <Input
              type="number"
              value={fcr}
              onChange={(e) => setFcr(Number(e.target.value))}
              onBlur={() => setIsEditingFcr(false)}
              autoFocus
              className="h-8 text-sm w-[80px] text-right pr-1"
              min={0}
              step={100}
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsEditingFcr(true)}
              className="h-8 px-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-md dark:hover:bg-red-950/50 flex items-center"
            >
              <span className="underline">{fcr.toLocaleString()} FCR</span>
              <Pencil1Icon className="ml-1 h-3 w-3" />
            </button>
          )}
          <Button 
            type="submit" 
            size="icon"
            variant="ghost"
            className="h-8 w-8"
            disabled={!message.trim()}
          >
            <PaperPlaneIcon className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
} 