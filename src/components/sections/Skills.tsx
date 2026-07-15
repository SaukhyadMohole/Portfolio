"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Brain,
  Database,
  Globe,
  Wrench,
  Monitor,
} from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 size={20} />,
  cloud: <Cloud size={20} />,
  brain: <Brain size={20} />,
  database: <Database size={20} />,
  globe: <Globe size={20} />,
  wrench: <Wrench size={20} />,
  monitor: <Monitor size={20} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skills.map((category) => (
            <motion.div key={category.title} variants={staggerItem}>
              <GlassCard className="p-5 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                    {iconMap[category.icon] || <Code2 size={20} />}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 text-xs rounded-lg
                        bg-white/[0.04] text-slate-300 border border-white/[0.06]
                        hover:bg-indigo-500/10 hover:text-indigo-300 hover:border-indigo-500/20
                        transition-all duration-200 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
