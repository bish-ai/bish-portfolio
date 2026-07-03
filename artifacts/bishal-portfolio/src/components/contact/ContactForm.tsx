"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MessageSquare, User, FileText } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validators";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import emailjs from "emailjs-com";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Initialize EmailJS with your public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: import.meta.env.VITE_EMAIL,
        }
      );

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Name Field */}
      <motion.div variants={fadeInUp} className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-200">
          Name
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            {...register("name")}
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border border-gray-700 bg-slate-800/50 py-3 pl-10 pr-4 text-white placeholder-gray-500 outline-none transition-all focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50"
          />
        </div>
        {errors.name && (
          <p className="text-sm text-red-400">{errors.name.message}</p>
        )}
      </motion.div>

      {/* Email Field */}
      <motion.div variants={fadeInUp} className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            {...register("email")}
            type="email"
            placeholder="your.email@example.com"
            className="w-full rounded-lg border border-gray-700 bg-slate-800/50 py-3 pl-10 pr-4 text-white placeholder-gray-500 outline-none transition-all focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50"
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}
      </motion.div>

      {/* Subject Field */}
      <motion.div variants={fadeInUp} className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-200">
          Subject
        </label>
        <div className="relative">
          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            {...register("subject")}
            type="text"
            placeholder="What is this about?"
            className="w-full rounded-lg border border-gray-700 bg-slate-800/50 py-3 pl-10 pr-4 text-white placeholder-gray-500 outline-none transition-all focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50"
          />
        </div>
        {errors.subject && (
          <p className="text-sm text-red-400">{errors.subject.message}</p>
        )}
      </motion.div>

      {/* Message Field */}
      <motion.div variants={fadeInUp} className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-200">
          Message
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
          <textarea
            {...register("message")}
            placeholder="Your message here..."
            rows={5}
            className="w-full rounded-lg border border-gray-700 bg-slate-800/50 py-3 pl-10 pr-4 text-white placeholder-gray-500 outline-none transition-all focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 resize-none"
          />
        </div>
        {errors.message && (
          <p className="text-sm text-red-400">{errors.message.message}</p>
        )}
      </motion.div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <motion.div
          className="rounded-lg bg-green-500/10 border border-green-500/50 p-4 text-sm text-green-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✓ Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}
      {submitStatus === "error" && (
        <motion.div
          className="rounded-lg bg-red-500/10 border border-red-500/50 p-4 text-sm text-red-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ✕ Error sending message. Please try again.
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        variants={fadeInUp}
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </motion.form>
  );
}
