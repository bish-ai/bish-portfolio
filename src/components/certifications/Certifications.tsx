"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { CERTIFICATIONS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="certifications"
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
              Certifications
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={staggerItem}
              className="rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm border border-slate-700/50"
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-purple-600">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                    <p className="text-blue-400">{cert.issuer}</p>
                  </div>
                </div>
              </div>
              <p className="mb-3 text-sm text-gray-400">
                Issued: {new Date(cert.issueDate).toLocaleDateString()}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={14} />
                  View Credential
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
