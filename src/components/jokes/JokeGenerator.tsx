"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Laugh, RotateCw, Copy, Check } from "lucide-react";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";

interface Joke {
  setup: string;
  punchline: string;
  type: string;
  id: number;
}

export function JokeGenerator() {
  const { ref, isVisible } = useInView();
  const [joke, setJoke] = useState<Joke | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showPunchline, setShowPunchline] = useState(false);

  const fetchJoke = async () => {
    setIsLoading(true);
    setShowPunchline(false);
    try {
      const response = await fetch("/api/jokes/random");
      const data = await response.json();
      setJoke(data.error ? data.fallback : data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (joke) {
      const text = `${joke.setup}\n${joke.punchline}`;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="jokes"
      ref={ref}
      className="relative scroll-mt-20 bg-gradient-to-b from-black to-slate-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Joke Generator
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Get a random laugh while exploring the portfolio
          </p>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Joke Card */}
        <motion.div
          className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={staggerItem} className="mb-8 space-y-6">
            {/* Joke Setup */}
            <div className="min-h-24 space-y-4">
              {joke ? (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <Laugh className="flex-shrink-0 text-yellow-400" size={32} />
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-white">{joke.setup}</p>
                      <p className="mt-1 text-sm text-gray-400">Type: {joke.type}</p>
                    </div>
                  </div>

                  {/* Punchline */}
                  <motion.div
                    className="ml-12 space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={showPunchline ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {showPunchline && (
                      <div className="rounded-lg bg-blue-500/10 p-4 border border-blue-400/30">
                        <p className="text-lg text-blue-300">{joke.punchline}</p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center py-8 text-gray-400">
                  <p>Click the button below to generate a joke!</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-700/50">
              <button
                onClick={fetchJoke}
                disabled={isLoading}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <RotateCw size={20} />
                    </motion.div>
                    Loading...
                  </>
                ) : (
                  <>
                    <Laugh size={20} />
                    Get a Joke
                  </>
                )}
              </button>

              {joke && !showPunchline && (
                <button
                  onClick={() => setShowPunchline(true)}
                  className="flex items-center gap-2 rounded-lg border border-purple-400 px-6 py-3 font-semibold text-purple-400 transition-all hover:bg-purple-400/10"
                >
                  Show Punchline
                </button>
              )}

              {joke && showPunchline && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 rounded-lg border border-green-400 px-6 py-3 font-semibold text-green-400 transition-all hover:bg-green-400/10"
                >
                  {copied ? (
                    <>
                      <Check size={20} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={20} />
                      Copy Joke
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          className="mt-8 rounded-lg border border-blue-400/30 bg-blue-400/5 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-blue-400">💡 Fun Fact:</span> This joke generator
            uses the Official Joke API to fetch random jokes from a curated database. Each joke is
            carefully selected to ensure quality humor!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
