"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cloud, Brain, Globe, Shield, BarChart3 } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "ai-ml", label: "AI / ML", icon: <Brain size={14} /> },
  { id: "cloud", label: "Cloud", icon: <Cloud size={14} /> },
  { id: "web", label: "Web", icon: <Globe size={14} /> },
  { id: "security", label: "Security", icon: <Shield size={14} /> },
  { id: "data", label: "Data", icon: <BarChart3 size={14} /> },
];

const categoryVariants: Record<string, "indigo" | "violet" | "cyan" | "emerald" | "amber"> = {
  "ai-ml": "violet",
  cloud: "cyan",
  web: "emerald",
  security: "amber",
  data: "indigo",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects.filter((p) => p.featured)
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A selection of projects I've built"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium
                transition-all duration-200 border
                ${
                  activeCategory === cat.id
                    ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
                    : "bg-white/[0.02] text-slate-400 border-white/[0.06] hover:bg-white/[0.05] hover:text-slate-300"
                }
              `}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={staggerItem} layout>
                <GlassCard className="p-0 overflow-hidden h-full flex flex-col">
                  {/* Project header gradient */}
                  <div
                    className={`h-32 relative flex items-center justify-center ${
                      project.category === "cloud"
                        ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
                        : project.category === "ai-ml"
                        ? "bg-gradient-to-br from-violet-500/10 to-purple-500/10"
                        : project.category === "security"
                        ? "bg-gradient-to-br from-amber-500/10 to-orange-500/10"
                        : project.category === "data"
                        ? "bg-gradient-to-br from-indigo-500/10 to-blue-500/10"
                        : "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                    }`}
                  >
                    <div className="text-4xl opacity-30">
                      {project.category === "cloud" && <Cloud size={48} />}
                      {project.category === "ai-ml" && <Brain size={48} />}
                      {project.category === "security" && <Shield size={48} />}
                      {project.category === "web" && <Globe size={48} />}
                      {project.category === "data" && <BarChart3 size={48} />}
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge
                        label={project.category.replace("-", "/")}
                        variant={categoryVariants[project.category] || "default"}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 flex-1">
                      {project.shortDescription}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.04] text-slate-500 border border-white/[0.04]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 text-[10px] rounded-md bg-white/[0.04] text-slate-500">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                            rounded-lg border border-white/[0.08] text-slate-300
                            hover:border-indigo-500/30 hover:text-indigo-300
                            transition-all duration-200"
                        >
                          <GitHubIcon size={12} />
                          Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium
                            rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300
                            hover:bg-indigo-500/20 transition-all duration-200"
                        >
                          <ExternalLink size={12} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
