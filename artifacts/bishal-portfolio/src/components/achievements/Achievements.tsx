"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { ACHIEVEMENTS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/utils/animations";
import * as Icons from "lucide-react";

export function Achievements() {
  const { ref, isVisible } = useInView();

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Trophy: <Icons.Trophy size={32} />,
      Target: <Icons.Target size={32} />,
      Briefcase: <Icons.Briefcase size={32} />,
      GitBranch: <Icons.GitBranch size={32} />,
      Zap: <Icons.Zap size={32} />,
      Database: <Icons.Database size={32} />,
      Server: <Icons.Server size={32} />,
      Award: <Icons.Award size={32} />,
      Brain: <Icons.Brain size={32} />,
    };
    return iconMap[iconName] || <Icons.Award size={32} />;
  };

  return (
    <section
      id="achievements"
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
              Achievements
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {ACHIEVEMENTS.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={staggerItem}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 border border-blue-400/30"
                whileHover={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
              >
                <div className="text-blue-400">{getIcon(achievement.icon)}</div>
              </motion.div>
              <motion.div
                className="mb-2 text-4xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                {achievement.count}+
              </motion.div>
              <h3 className="mb-2 text-lg font-bold text-white">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
