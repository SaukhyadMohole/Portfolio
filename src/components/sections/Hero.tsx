"use client";

import { motion } from "framer-motion";
import { FileText, Mail, ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolio";
import TypeWriter from "@/components/ui/TypeWriter";
import MagneticButton from "@/components/effects/MagneticButton";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
      >
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            variants={staggerItem}
            className="text-sm font-mono text-slate-500 mb-4 tracking-wider"
          >
            HI THERE, I&apos;M
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          <motion.div
            variants={staggerItem}
            className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 h-10"
          >
            <TypeWriter words={personalInfo.roles} />
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            B.Tech CSE — Data Science at VIT Vellore • CGPA 9.03 • Building
            intelligent systems with AI, Cloud & Full-Stack Engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <MagneticButton>
              <a
                href={personalInfo.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  bg-gradient-to-r from-indigo-500 to-violet-500
                  text-white text-sm font-medium
                  hover:from-indigo-400 hover:to-violet-400
                  transition-all duration-300 shadow-lg shadow-indigo-500/20"
              >
                <FileText size={16} />
                Resume
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  border border-white/[0.08] bg-white/[0.03]
                  text-slate-300 text-sm font-medium
                  hover:border-indigo-500/30 hover:bg-white/[0.06]
                  transition-all duration-300"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  border border-white/[0.08] bg-white/[0.03]
                  text-slate-300 text-sm font-medium
                  hover:border-indigo-500/30 hover:bg-white/[0.06]
                  transition-all duration-300"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  border border-white/[0.08] bg-white/[0.03]
                  text-slate-300 text-sm font-medium
                  hover:border-indigo-500/30 hover:bg-white/[0.06]
                  transition-all duration-300"
              >
                <Mail size={16} />
                Contact
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div variants={fadeInUp} className="relative flex-shrink-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />
            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/[0.08] shadow-2xl">
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-indigo-500/10 animate-spin-slow" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-500"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
