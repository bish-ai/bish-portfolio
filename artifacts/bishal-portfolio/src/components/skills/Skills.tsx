"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SKILLS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/utils/animations";

const categories = [
  "Languages",
  "ML Frameworks",
  "MLOps & Deployment",
  "Deep Learning / AI",
  "NLP",
  "Data & Pipelines",
];

export function Skills() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="skills"
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
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="space-y-10"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {categories.map((category) => {
            const categorySkills = SKILLS.filter((s) => s.category === category);
            if (!categorySkills.length) return null;
            return (
              <motion.div key={category} variants={staggerItem}>
                <h3 className="mb-4 text-lg font-semibold text-blue-400 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      className="rounded-full border border-slate-700/60 bg-slate-800/60 px-4 py-2 text-sm font-medium text-gray-200 backdrop-blur-sm transition-colors duration-200 hover:border-blue-400/60 hover:bg-blue-400/10 hover:text-blue-300"
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
