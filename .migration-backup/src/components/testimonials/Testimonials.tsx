"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/utils/animations";
import { Star } from "lucide-react";

export function Testimonials() {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative scroll-mt-20 bg-gradient-to-b from-slate-950 to-black px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItem}
              className="rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm border border-slate-700/50"
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Message */}
              <p className="mb-6 text-gray-300">"{testimonial.message}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
