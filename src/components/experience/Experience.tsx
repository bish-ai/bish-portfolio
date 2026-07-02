"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { EXPERIENCES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { Briefcase, MapPin } from "lucide-react";

export function Experience() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="experience"
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
              Work Experience
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={staggerItem}
              className="group relative"
            >
              {/* Timeline Line */}
              {index !== EXPERIENCES.length - 1 && (
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
                  <Briefcase size={24} className="text-white" />
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
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-gray-400">{exp.duration}</p>
                  <p className="mb-4 text-gray-300">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
