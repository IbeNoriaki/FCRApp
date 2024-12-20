"use client";

import FlickeringGrid from "@/components/ui/flickering-grid";
import { Header } from "@/components/ui/header";
import { AnimatedShinyTextDemo } from "@/components/ui/animated-shiny-text";
import { ProfileGrid } from "@/components/ui/profile/profile-grid";
import { MessageHistory } from "@/components/ui/chat/message-history";
import { MessageInput } from "@/components/ui/chat/message-input";

export default function MessagePage() {
  const path = "fcr.ryukyu / username / message";

  return (
    <>
      <Header />
      <main className="relative min-h-screen pt-12 pb-20">
        <div className="fixed inset-0 z-0">
          <FlickeringGrid 
            squareSize={4}
            gridGap={6}
            flickerChance={0.3}
            color="rgb(0, 0, 0)"
            maxOpacity={0.1}
          />
        </div>
        
        <div className="relative z-10 flex min-h-screen flex-col">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <div className="h-12 flex items-center">
              <AnimatedShinyTextDemo text={path} />
            </div>
          </div>

          <div className="w-full px-4 md:px-6 lg:px-8">
            <ProfileGrid />
          </div>

          <div className="w-full px-4 md:px-6 lg:px-8 mt-4">
            <MessageHistory />
          </div>
        </div>
      </main>
      <MessageInput />
    </>
  );
}