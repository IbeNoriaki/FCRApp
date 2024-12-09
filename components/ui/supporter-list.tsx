"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Supporter {
  id: string;
  avatar: string;
  nickname: string;
  totalFcr: number;
}

// サンプルデータを12名に減らす
const supporters: Supporter[] = Array.from({ length: 12 }, (_, i) => ({
  id: `supporter-${i + 1}`,
  avatar: `/avatars/user-0${(i % 5) + 1}.png`,
  nickname: `サポーター${i + 1}`,
  totalFcr: Math.floor(Math.random() * 100000) + 10000,
}));

export function SupporterList() {
  return (
    <div className={cn("space-y-2")}>
      <div className="flex justify-end">
        <h2 className="text-sm font-bold text-black">
          Supporter List
        </h2>
      </div>

      <Table>
        <TableBody>
          {supporters.map((supporter) => (
            <TableRow 
              key={supporter.id}
              className="border-b border-gray-50/30 dark:border-gray-800/30 h-8 hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
            >
              <TableCell className="py-0.5">
                <div className="relative h-5 w-5 overflow-hidden rounded-full">
                  <Image
                    src={supporter.avatar}
                    alt={supporter.nickname}
                    fill
                    className="object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className="py-0.5 text-xs">{supporter.nickname}</TableCell>
              <TableCell className="py-0.5 text-right text-xs tabular-nums">
                {supporter.totalFcr.toLocaleString()} FCR
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="pt-1">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="h-7 w-7 p-0" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="h-7 w-7">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="h-7 w-7">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="h-7 w-7 p-0" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
} 