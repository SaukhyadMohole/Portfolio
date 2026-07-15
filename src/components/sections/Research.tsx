"use client";

import { motion } from "framer-motion";
import { FileText, BookOpen, Tag, ExternalLink } from "lucide-react";
import { research } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Research() {
  return (
    <section id="research" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Research"
          subtitle="Academic research and publications"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-6 md:p-10">
            {/* Paper header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-400 flex-shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge label={research.status} variant="emerald" />
                  <Badge label={research.conference} variant="violet" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-100">
                  {research.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Role: <span className="text-slate-300">{research.role}</span>
                </p>
              </div>
            </div>

            {/* Abstract */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} className="text-indigo-400" />
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Abstract
                </h4>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed pl-6 border-l-2 border-indigo-500/20">
                {research.abstract}
              </p>
            </div>

            {/* Keywords */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Tag size={16} className="text-indigo-400" />
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Keywords
                </h4>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 pl-6"
              >
                {research.keywords.map((keyword) => (
                  <motion.span key={keyword} variants={staggerItem}>
                    <Badge label={keyword} variant="indigo" />
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
