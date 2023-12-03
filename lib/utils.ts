import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatViews = (views: number) => {
  let text = "";
  if (views < 1000) {
    text = views.toString();
  }
  if (views > 1000) {
    text = `${(views / 1000).toFixed(1)}K`;
  }
  if (views > 1000000) {
    text = `${(views / 1000000).toFixed(1)}M`;
  }
  if (views > 1000000000) {
    text = `${(views / 1000).toFixed(1)}B`;
  }

  return text;
};
