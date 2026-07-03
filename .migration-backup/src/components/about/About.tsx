"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { fadeInUp, staggerContainer, staggerItem } from "@/utils/animations";

const expertise = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Full Stack Development",
  "Cloud Computing",
  "DevOps & Infrastructure",
];

export function About() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="about"
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
              About Me
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="grid gap-12 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Column */}
          <motion.div variants={staggerItem} className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              I'm a passionate AI Engineer and Full Stack Developer with a strong foundation in Machine Learning and Deep Learning. Currently pursuing my B.Tech in Computer Science and Engineering, specializing in AI/ML.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              With hands-on experience through multiple internships at leading tech companies, I've developed expertise in building intelligent systems that solve real-world problems. I'm driven by the challenge of translating complex AI concepts into practical, scalable solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              My passion lies in exploring the intersection of AI and full-stack development, where I can leverage both fields to create innovative applications that make a meaningful impact.
            </p>
          </motion.div>

          {/* Right Column - Expertise */}
          <motion.div variants={staggerItem} className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Areas of Expertise</h3>
            <div className="grid gap-3">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 rounded-lg bg-slate-800/50 px-4 py-2 backdrop-blur-sm border border-slate-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  <span className="text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
