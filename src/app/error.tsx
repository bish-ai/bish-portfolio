"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <motion.div
        className="space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center">
          <AlertCircle
            size={64}
            className="text-red-500"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">Something went wrong!</h1>
          <p className="mt-2 text-gray-400">
            An error occurred while rendering this page.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-600"
          >
            Try again
          </button>
          <a
            href="/"
            className="flex items-center gap-2 rounded-lg border border-blue-400 px-6 py-3 font-semibold text-blue-400 transition-all hover:bg-blue-400/10"
          >
            <Home size={20} />
            Go Home
          </a>
        </div>
      </motion.div>
    </div>
  );
}
