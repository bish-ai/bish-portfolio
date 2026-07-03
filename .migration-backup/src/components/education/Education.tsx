"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { EDUCATION } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { GraduationCap } from "lucide-react";

export function Education() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="education"
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
              Education
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={staggerItem}
              className="group relative"
            >
              {/* Timeline Line */}
              {index !== EDUCATION.length - 1 && (
                <div className="absolute left-6 top-20 h-16 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600" />
              )}

              {/* Card */}
              <div className="relative flex gap-6">
                {/* Icon */}
                <motion.div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-600"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <GraduationCap size={24} className="text-white" />
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1 rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm border border-slate-700/50"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="mb-2 text-blue-400">{edu.institution}</p>
                  <p className="mb-4 text-sm text-gray-400">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  <p className="mb-2 text-gray-300">
                    <span className="font-semibold">Field:</span> {edu.field}
                  </p>
                  {edu.grade && (
                    <p className="mb-3 text-gray-300">
                      <span className="font-semibold">Grade:</span> {edu.grade}
                    </p>
                  )}
                  {edu.description && (
                    <p className="text-gray-400">{edu.description}</p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
