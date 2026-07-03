"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-40 rounded-full bg-blue-500 p-3 text-white shadow-lg hover:bg-blue-600"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}
