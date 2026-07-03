"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SKILLS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/utils/animations";

const categories = [
  "Programming",
  "Frontend",
  "Backend",
  "AI/ML",
  "Database",
  "Cloud",
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
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {categories.map((category) => {
            const categorySkills = SKILLS.filter((s) => s.category === category);
            return (
              <motion.div key={category} variants={staggerItem}>
                <h3 className="mb-6 text-2xl font-bold text-white">{category}</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-3 rounded-lg bg-slate-800/50 p-4 backdrop-blur-sm border border-slate-700/50"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="text-sm font-medium text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-600"
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.1 }}
                        />
                      </div>
                    </motion.div>
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
