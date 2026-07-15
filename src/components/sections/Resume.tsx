"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/effects/MagneticButton";
import { fadeInUp } from "@/lib/animations";

const highlights = [
  "B.Tech CSE — Data Science, VIT Vellore (CGPA 9.03)",
  "NUS AI & ML Programme — Best Capstone Project",
  "IEEE Co-author — Multimodal AI for Cancer Detection",
  "3× Oracle Cloud Infrastructure Certifications",
  "AWS Serverless RAG Chatbot Development",
  "Full-stack ML applications with React, FastAPI, Docker",
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Resume"
          subtitle="Download my resume for a comprehensive overview"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <GlassCard className="p-6 md:p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-4">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-sm text-slate-400">
                Software Developer • AI Engineer • Cloud Enthusiast
              </p>
            </div>

            {/* Key highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <CheckCircle
                    size={14}
                    className="text-indigo-400 mt-0.5 flex-shrink-0"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Download button */}
            <div className="text-center">
              <MagneticButton>
                <a
                  href={personalInfo.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
                    bg-gradient-to-r from-indigo-500 to-violet-500
                    text-white font-medium
                    hover:from-indigo-400 hover:to-violet-400
                    transition-all duration-300 shadow-lg shadow-indigo-500/20"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </MagneticButton>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
