"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Sparkles, Zap, Brain, TrendingUp, Loader } from "lucide-react";
import { staggerContainer, staggerItem, fadeInUp } from "@/utils/animations";

export function AIFeatures() {
  const { ref, isVisible } = useInView();
  const [activeTab, setActiveTab] = useState<"insights" | "recommendations" | "job">("insights");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [jobDescription, setJobDescription] = useState("");

  const handleInsightsSubmit = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/ai/insights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      setResult(data.insights);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error fetching insights. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecommendations = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/ai/recommendations");
      const data = await response.json();
      setResult(data.recommendations);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error fetching recommendations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleJobAnalysis = async () => {
    if (!jobDescription.trim()) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/ai/analyze-job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription }),
      });
      const data = await response.json();
      setResult(data.analysis);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error analyzing job description. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="ai-features"
      ref={ref}
      className="relative scroll-mt-20 bg-gradient-to-b from-black to-slate-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Tools
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Explore intelligent features powered by advanced AI
          </p>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-12 grid gap-6 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.button
            variants={staggerItem}
            onClick={() => setActiveTab("insights")}
            className={`rounded-lg p-6 border transition-all ${
              activeTab === "insights"
                ? "border-blue-400 bg-blue-400/10"
                : "border-slate-700 bg-slate-800/50 hover:border-blue-400/50"
            }`}
          >
            <Sparkles className="mx-auto mb-3 text-blue-400" size={32} />
            <h3 className="font-semibold text-white">Portfolio Insights</h3>
            <p className="mt-2 text-xs text-gray-400">
              Get AI-powered insights about the portfolio
            </p>
          </motion.button>

          <motion.button
            variants={staggerItem}
            onClick={() => setActiveTab("recommendations")}
            className={`rounded-lg p-6 border transition-all ${
              activeTab === "recommendations"
                ? "border-purple-400 bg-purple-400/10"
                : "border-slate-700 bg-slate-800/50 hover:border-purple-400/50"
            }`}
          >
            <TrendingUp className="mx-auto mb-3 text-purple-400" size={32} />
            <h3 className="font-semibold text-white">Recommendations</h3>
            <p className="mt-2 text-xs text-gray-400">
              Get project recommendations based on trends
            </p>
          </motion.button>

          <motion.button
            variants={staggerItem}
            onClick={() => setActiveTab("job")}
            className={`rounded-lg p-6 border transition-all ${
              activeTab === "job"
                ? "border-pink-400 bg-pink-400/10"
                : "border-slate-700 bg-slate-800/50 hover:border-pink-400/50"
            }`}
          >
            <Zap className="mx-auto mb-3 text-pink-400" size={32} />
            <h3 className="font-semibold text-white">Job Analyzer</h3>
            <p className="mt-2 text-xs text-gray-400">
              Analyze job descriptions and get insights
            </p>
          </motion.button>
        </motion.div>

        {/* Tool Content */}
        <motion.div
          className="rounded-lg border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Portfolio Insights */}
          {activeTab === "insights" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Ask about the portfolio:
                </label>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., What are Bishal's main strengths? What projects showcase ML expertise?"
                  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 resize-none"
                  rows={4}
                />
              </div>
              <button
                onClick={handleInsightsSubmit}
                disabled={isLoading || !query.trim()}
                className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Brain size={20} />
                    Get Insights
                  </>
                )}
              </button>
            </div>
          )}

          {/* Recommendations */}
          {activeTab === "recommendations" && (
            <div className="space-y-6">
              <p className="text-gray-300">
                Click the button below to get AI-generated project recommendations for career growth.
              </p>
              <button
                onClick={handleRecommendations}
                disabled={isLoading}
                className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <TrendingUp size={20} />
                    Generate Recommendations
                  </>
                )}
              </button>
            </div>
          )}

          {/* Job Analyzer */}
          {activeTab === "job" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Paste job description:
                </label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the job description here..."
                  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400/50 resize-none"
                  rows={6}
                />
              </div>
              <button
                onClick={handleJobAnalysis}
                disabled={isLoading || !jobDescription.trim()}
                className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-pink-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap size={20} />
                    Analyze Job
                  </>
                )}
              </button>
            </div>
          )}

          {/* Result Display */}
          {result && (
            <motion.div
              className="mt-8 rounded-lg border border-blue-400/30 bg-blue-400/5 p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="prose prose-invert max-w-none text-sm text-gray-200">
                {result.split("\n").map((line, idx) => (
                  line.trim() && (
                    <p key={idx} className="mb-2 leading-relaxed">
                      {line}
                    </p>
                  )
                ))}
              </div>
              <button
                onClick={() => setResult("")}
                className="mt-4 text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                Clear Result
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
