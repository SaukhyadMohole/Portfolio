"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categoryVariants: Record<string, "indigo" | "violet" | "cyan" | "emerald" | "amber"> = {
  "ai-ml": "violet",
  cloud: "cyan",
  programming: "emerald",
  language: "amber",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and credentials"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={staggerItem}>
              <GlassCard className="p-5 h-full">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 flex-shrink-0 mt-0.5">
                    <Award size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-slate-100 mb-1 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-3">
                      {cert.organization}
                    </p>
                    <Badge
                      label={cert.category.replace("-", "/")}
                      variant={categoryVariants[cert.category] || "default"}
                    />
                  </div>
                  <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
