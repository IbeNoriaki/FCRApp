"use client";

import { cn } from "@/lib/utils";

interface TopDonor {
  imagePath: string;
  nickname: string;
  fcr: number;
}

const topDonors: TopDonor[] = [
  {
    imagePath: "/avatars/supporter-00.png",
    nickname: "ファン1",
    fcr: 25000,
  },
  {
    imagePath: "/avatars/supporter-02.png",
    nickname: "ファン2",
    fcr: 22000,
  },
  {
    imagePath: "/avatars/supporter-03.png",
    nickname: "ファン3",
    fcr: 20000,
  },
];

export function FCRTopDonorsGrid({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-start">
        <h2 className="text-sm font-bold text-black">
          Supporter Top 3
        </h2>
      </div>

      <div
        className={cn(
          "relative h-[120px] w-full rounded-lg border border-black bg-background/50",
        )}
      >
        <div className="grid h-full grid-cols-3 divide-x-2 divide-black">
          {topDonors.map((donor, idx) => (
            <div
              key={idx}
              className="relative h-full w-full"
            >
              <img
                src={donor.imagePath}
                alt={donor.nickname}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 