"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const roles = ["AI Engineer", "Full Stack Developer", "ML Engineer"];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Bishal_Mondal_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-slate-950 to-black px-4 pt-32 sm:px-6 lg:px-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/2 -top-1/2 h-full w-full rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
        <div className="absolute -right-1/2 -bottom-1/2 h-full w-full rounded-full bg-gradient-to-l from-purple-500/20 to-blue-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-blue-400"
          >
            👋 Welcome to my portfolio
          </motion.p>

          {/* Main Title */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
              <span className="block text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Bishal Mondal
              </span>
            </h1>
          </motion.div>

          {/* Typing Role */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2 text-xl sm:text-2xl">
            <span className="text-gray-300">I'm a</span>
            <motion.span
              key={currentRole}
              className="text-blue-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-lg text-gray-400"
          >
            Passionate about building intelligent systems and solving complex problems through AI, Machine Learning, and Full-Stack Development. With expertise in Deep Learning, NLP, Computer Vision, and Cloud Technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <Download size={20} />
              Download Resume
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 rounded-lg border border-blue-400 px-6 py-3 font-semibold text-blue-400 transition-all hover:bg-blue-400/10"
            >
              <Mail size={20} />
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -right-20 top-20 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute -left-20 bottom-20 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll to explore</span>
          <div className="h-8 w-5 rounded-full border-2 border-gray-600 p-2">
            <motion.div
              className="h-1 w-1 rounded-full bg-gray-400"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
