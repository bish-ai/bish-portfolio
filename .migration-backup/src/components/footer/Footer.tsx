"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS, NAVIGATION_ITEMS } from "@/lib/constants";
import * as Icons from "lucide-react";

const getIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Github: <Icons.Github size={20} />,
    Linkedin: <Icons.Linkedin size={20} />,
    Code2: <Icons.Code2 size={20} />,
    Badge: <Icons.Badge size={20} />,
  };
  return iconMap[iconName] || <Icons.Link2 size={20} />;
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-gray-800 bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Bishal
              </span>
            </h3>
            <p className="text-sm text-gray-400">
              AI Engineer & Full Stack Developer passionate about building intelligent systems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-blue-400"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-white">Follow</h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition-all hover:border-blue-400 hover:bg-blue-400/10 hover:text-blue-400"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                >
                  {getIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Copyright */}
        <motion.div
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Bishal Mondal. All rights reserved.
          </p>
          <p className="text-center text-xs text-gray-600">
            Built with <span className="text-red-400">❤</span> using Next.js, React, TypeScript, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
