"use client";

import FlickeringGrid from "@/components/ui/flickering-grid";
import { Header } from "@/components/ui/header";
import { FCRMessageList } from "@/components/ui/fcr-message-list";
import { FCRTopDonorsGrid } from "@/components/ui/fcr-top-donors-grid";
import { useRouter } from "next/navigation";
import { AnimatedShinyTextDemo } from "@/components/ui/animated-shiny-text";
import { ProfileGrid } from "@/components/ui/profile/profile-grid";
import { FCRHistoryChart } from "@/components/ui/profile/fcr-history-chart";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <>
      <Header />
      <main className="relative min-h-screen pt-12">
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
              <AnimatedShinyTextDemo />
            </div>
          </div>

          <div className="w-full px-4 md:px-6 lg:px-8">
            <ProfileGrid />
          </div>

          <div className="w-full px-4 md:px-6 lg:px-8 mt-4">
            <FCRHistoryChart />
          </div>

          <div className="w-full mt-4 px-4 md:px-6 lg:px-8">
            <FCRMessageList className="w-full" />
          </div>

          <div className="w-full mt-4 px-4 md:px-6 lg:px-8">
            <FCRTopDonorsGrid className="w-full" />
          </div>
        </div>
      </main>
    </>
  );
} 