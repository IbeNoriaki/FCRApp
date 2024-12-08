"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";

interface FCRHistoryChartProps {
  data: {
    month: string;
    received: number;
    sent: number;
  }[];
}

export function FCRHistoryChart({ 
  data = [] 
}: FCRHistoryChartProps) {
  const total = React.useMemo(
    () => ({
      received: data.reduce((acc, curr) => acc + curr.received, 0),
      sent: data.reduce((acc, curr) => acc + curr.sent, 0),
    }),
    [data]
  );

  return (
    <div className="w-full rounded-lg bg-white/50 backdrop-blur-sm dark:bg-black/50">
      <div className="grid grid-cols-2 divide-x divide-black/10 border-b border-black/10 dark:divide-white/10 dark:border-white/10">
        <div className="flex items-center gap-1.5 p-2">
          <ArrowDownIcon className="h-3 w-3 text-blue-500" />
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-neutral-600 dark:text-neutral-400">Received</span>
            <div className="text-xs font-medium text-black dark:text-white">
              {total.received.toLocaleString()}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 p-2">
          <ArrowUpIcon className="h-3 w-3 text-emerald-500" />
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-neutral-600 dark:text-neutral-400">Sent</span>
            <div className="text-xs font-medium text-black dark:text-white">
              {total.sent.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="h-[120px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid vertical={false} stroke="#333" strokeOpacity={0.1} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={4}
                height={20}
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Bar 
                dataKey="received" 
                fill="#3b82f6" 
                radius={[2, 2, 0, 0]}
                maxBarSize={12}
              />
              <Bar 
                dataKey="sent" 
                fill="#10b981" 
                radius={[2, 2, 0, 0]}
                maxBarSize={12}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 