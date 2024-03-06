import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type HeatmapData = { x: string; y: string; value: number }[];

export const heatMapDataGenerator = () => {
  let data: HeatmapData = [];
  const nCol = 12;
  const nRow = 4;

  for (let x = 0; x < nCol; x++) {
    for (let y = 0; y < nRow; y++) {
      data.push({
        x: `${x}`,
        y: `${y}`,
        value: Math.floor(Math.random() * 40),
      });
    }
  }
  return data;
};

export const barGraphDataGenerator = () => {
  const nCol = 14;
  return Array.from({ length: nCol }, (_, i) => i + 1).map((d) => {
    return {
      name: `${d}`,
      value: Math.floor(Math.random() * 100) + 1,
    };
  });
};
