"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Sparkles, Brain, Zap, TrendingUp } from "lucide-react";
import { staggerContainer, staggerItem } from "@/utils/animations";

export function AIHighlights() {
  const { ref, isVisible } = useInView();
  const [loadingIndex, setLoadingIndex] = useState(-1);

  const highlights = [
    {
      icon: Brain,
      title: "AI-Powered Assistant",
      description: "Chat with AI to learn about Bishal's expertise and projects in real-time",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Sparkles,
      title: "Portfolio Insights",
      description: "Get AI-generated insights about skills, experience, and career trajectory",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Smart Recommendations",
      description: "Receive AI-powered project and learning path recommendations",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Zap,
      title: "Job Analyzer",
      description: "Analyze job descriptions and get skill match insights powered by AI",
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <section
      id="ai-highlights"
      ref={ref}
      className="relative scroll-mt-20 bg-gradient-to-b from-slate-950 to-black px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-400/10 px-4 py-2 border border-purple-400/30 mb-4">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-semibold text-purple-400">AI Features</span>
          </div>
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Intelligent Portfolio Experience
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Powered by advanced AI to enhance your exploration of Bishal's work
          </p>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group relative rounded-lg border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50"
                onMouseEnter={() => setLoadingIndex(index)}
                onMouseLeave={() => setLoadingIndex(-1)}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 rounded-lg bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-white`}
                    animate={loadingIndex === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{
                      duration: loadingIndex === index ? 0.8 : 0.3,
                      repeat: loadingIndex === index ? Infinity : 0,
                    }}
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>

                  {/* Arrow */}
                  <motion.div
                    className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: 0 }}
                    animate={loadingIndex === index ? { x: 5 } : { x: 0 }}
                  >
                    <span className="text-xs font-semibold">Explore</span>
                    <span>→</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-6 text-gray-400">
            Scroll down to interact with AI-powered tools and learn more about Bishal
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#ai-features"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Explore AI Tools
            </a>
            <button
              onClick={() => {
                const chatBtn = document.querySelector("[class*='fixed bottom-8']");
                if (chatBtn) (chatBtn as HTMLElement).click();
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-blue-400 px-6 py-3 font-semibold text-blue-400 transition-all hover:bg-blue-400/10"
            >
              Chat with AI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
