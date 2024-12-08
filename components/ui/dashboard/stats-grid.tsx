"use client";

import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import ShinyButton from "@/components/ui/shiny-button";

// サンプルデータ - 累積的な増加を表現
const fcrData = [
  { day: '6/1', fcr: 10000 },
  { day: '6/2', fcr: 15000 },
  { day: '6/3', fcr: 22000 },
  { day: '6/4', fcr: 28000 },
  { day: '6/5', fcr: 35000 },
  { day: '6/6', fcr: 42000 },
  { day: '6/7', fcr: 50000 },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {/* Supporter Count */}
      <motion.div 
        className="bg-white/90 rounded-lg p-4 flex flex-col aspect-square"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 flex flex-col">
          <h3 className="text-sm font-medium mb-1">Supporter</h3>
          <div className="text-lg font-bold mb-1">400</div>
          <div className="text-xs text-green-500">
            +23
          </div>
        </div>
        
        <div className="mt-auto">
          <ShinyButton className="w-full justify-center">
            Support
          </ShinyButton>
        </div>
      </motion.div>

      {/* Total FCR Chart */}
      <motion.div 
        className="bg-white/90 rounded-lg p-4 aspect-square"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-sm font-medium mb-1">Total FCR Assisted</h3>
        <div className="text-lg font-bold mb-1">50,000</div>
        <div className="text-xs text-green-500 mb-4">
          +8,000
        </div>
        <div className="h-[calc(100%-6rem)]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={fcrData}>
              <Tooltip 
                formatter={(value) => [`${value.toLocaleString()} FCR`]}
                labelFormatter={() => ''}
              />
              <Line 
                type="stepAfter" 
                dataKey="fcr" 
                stroke="#ef4444" 
                strokeWidth={2}
                dot={false}
                isAnimationActive={true}
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
} 