"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { BLOG_POSTS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function Blog() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="blog"
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
              Latest Articles
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.id}
              variants={staggerItem}
              className="group rounded-lg bg-slate-800/50 overflow-hidden backdrop-blur-sm border border-slate-700/50 transition-all duration-300"
              whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
              }}
            >
              <div className="p-6">
                <div className="mb-3 inline-block rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-400/20">
                  {post.category}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-400 text-sm">{post.description}</p>

                <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-500 border-t border-slate-700/50 pt-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <button className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  Read More
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
