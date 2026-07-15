"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categoryColors: Record<string, string> = {
  academic: "from-indigo-500/10 to-blue-500/10 border-indigo-500/20",
  research: "from-violet-500/10 to-purple-500/10 border-violet-500/20",
  hackathon: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
  music: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
  leadership: "from-cyan-500/10 to-sky-500/10 border-cyan-500/20",
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements"
          subtitle="Recognitions, competitions, and leadership"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={staggerItem}>
              <GlassCard className="p-5 h-full">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4
                    bg-gradient-to-br ${categoryColors[achievement.category] || ""}`}
                >
                  <span className="text-lg">{achievement.icon}</span>
                </div>

                <h3 className="text-sm font-semibold text-slate-100 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="mt-3">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                    {achievement.category}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
