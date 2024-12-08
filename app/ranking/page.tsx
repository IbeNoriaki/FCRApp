"use client";

import { FCRRankingGrid } from "@/components/ui/fcr-ranking-grid";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { Header } from "@/components/ui/header";
import { StatsGrid } from "@/components/ui/dashboard/stats-grid";
import { FCRMessageList } from "@/components/ui/fcr-message-list";
import { FCRTopDonorsGrid } from "@/components/ui/fcr-top-donors-grid";

export default function RankingPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <FlickeringGrid 
            squareSize={4}
            gridGap={6}
            flickerChance={0.3}
            color="rgb(0, 0, 0)"
            maxOpacity={0.1}
          />
        </div>
        
        <div className="relative z-10 flex min-h-screen flex-col pt-16">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <StatsGrid />
          </div>

          <div className="w-full mt-2 px-4 md:px-6 lg:px-8">
            <FCRRankingGrid />
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