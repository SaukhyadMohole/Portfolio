"use client";

import { motion } from "framer-motion";
import { cardHover } from "@/lib/animations";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      variants={hover ? cardHover : undefined}
      initial="rest"
      whileHover={hover ? "hover" : undefined}
      className={`
        relative rounded-2xl border border-white/[0.06]
        bg-white/[0.03] backdrop-blur-md
        shadow-[0_0_1px_0_rgba(148,163,184,0.1)]
        transition-colors duration-300
        hover:border-indigo-500/20 hover:bg-white/[0.05]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
