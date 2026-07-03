"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <motion.div
        className="space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            404
          </h1>
          <p className="mt-4 text-2xl font-bold text-white">Page Not Found</p>
          <p className="mt-2 text-gray-400">
            Sorry, the page you're looking for doesn't exist.
          </p>
        </div>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50"
        >
          <Home size={20} />
          Go Home
        </a>
      </motion.div>
    </div>
  );
}
