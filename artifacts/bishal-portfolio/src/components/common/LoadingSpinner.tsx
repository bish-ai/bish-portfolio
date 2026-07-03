"use client";

import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="h-12 w-12 rounded-full border-4 border-gray-700 border-t-blue-500"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
