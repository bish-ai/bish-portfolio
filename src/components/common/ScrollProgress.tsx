"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
      style={{
        width: `${progress}%`,
        transition: "width 0.1s ease-out",
      }}
    />
  );
}
