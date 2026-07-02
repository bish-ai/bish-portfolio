"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { PROJECTS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { Github, ExternalLink, Tag } from "lucide-react";

export function Projects() {
  const { ref, isVisible } = useInView();
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => (
    <motion.div
      className="group h-full rounded-lg bg-slate-800/50 overflow-hidden backdrop-blur-sm border border-slate-700/50 transition-all duration-300"
      whileHover={{
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
      }}
    >
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 text-gray-300 text-sm">{project.description}</p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-300 border border-blue-400/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <div key={tag} className="flex items-center gap-1">
              <Tag size={12} className="text-purple-400" />
              <span className="text-xs text-gray-400">{tag}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-700/50">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="projects"
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
              Featured Projects
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-white">Other Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <motion.div key={project.id} variants={staggerItem}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
