"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ContactForm } from "./ContactForm";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Contact() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative scroll-mt-20 bg-gradient-to-b from-slate-950 to-black px-4 py-20 sm:px-6 lg:px-8"
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
              Get In Touch
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="flex items-center gap-3 text-lg text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400/10 border border-blue-400/50">
                  <Mail size={20} className="text-blue-400" />
                </div>
                Email
              </div>
              <p className="ml-13 text-gray-400">
                <a
                  href="mailto:bishalmondal804@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  bishalmondal804@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="flex items-center gap-3 text-lg text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-400/10 border border-purple-400/50">
                  <Phone size={20} className="text-purple-400" />
                </div>
                Phone
              </div>
              <p className="ml-13 text-gray-400">
                <a href="tel:+919930858795" className="hover:text-purple-400 transition-colors">
                  +91 9930858795
                </a>
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="flex items-center gap-3 text-lg text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/50">
                  <Linkedin size={20} className="text-blue-500" />
                </div>
                LinkedIn
              </div>
              <p className="ml-13 text-gray-400">
                <a
                  href="https://www.linkedin.com/in/bishal-biplab-mondal-1b90b8399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  bishal-biplab-mondal
                </a>
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="flex items-center gap-3 text-lg text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-400/10 border border-pink-400/50">
                  <MapPin size={20} className="text-pink-400" />
                </div>
                Location
              </div>
              <p className="ml-13 text-gray-400">India</p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              variants={fadeInUp}
              className="rounded-lg bg-blue-400/5 border border-blue-400/30 p-4"
            >
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-blue-400">Response Time:</span> I typically respond within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-slate-800/50 p-8 backdrop-blur-sm border border-slate-700/50"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
