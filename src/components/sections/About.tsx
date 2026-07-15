"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Languages } from "lucide-react";
import { personalInfo, education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const stats = [
  { label: "CGPA", value: 9.03, suffix: "", decimals: true },
  { label: "Projects", value: 10, suffix: "+" },
  { label: "Certifications", value: 7, suffix: "" },
  { label: "Repositories", value: 16, suffix: "" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A snapshot of who I am and what drives me"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Bio */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 md:p-8 h-full">
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                {personalInfo.bio}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {personalInfo.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 text-xs rounded-full bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Education card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-100">
                  Education
                </h3>
              </div>

              <h4 className="text-base font-medium text-slate-200 mb-1">
                {education.university}
              </h4>
              <p className="text-sm text-slate-400 mb-3">
                {education.degree} — {education.branch}
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={14} className="text-indigo-400" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={14} className="text-indigo-400" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Languages size={14} className="text-indigo-400" />
                  <span>
                    CGPA: <span className="text-indigo-300 font-semibold">{education.cgpa}</span> / {education.scale}
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <GlassCard className="p-6 text-center" hover={false}>
                <div className="text-3xl md:text-4xl font-bold text-slate-100 mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
