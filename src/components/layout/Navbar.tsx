"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navSections } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navbarVariants, mobileMenuVariants } from "@/lib/animations";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sectionIds = useMemo(() => navSections.map((s) => s.id), []);
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-[100] border-b border-white/[0.04]"
    >
      <div className="backdrop-blur-2xl bg-[#050507]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-violet-300 transition-all duration-300"
            >
              SM
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    relative px-3 py-1.5 text-sm rounded-lg transition-colors duration-200
                    ${
                      activeSection === section.id
                        ? "text-indigo-300"
                        : "text-slate-400 hover:text-slate-200"
                    }
                  `}
                >
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/[0.05] rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden border-t border-white/[0.04] overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors
                      ${
                        activeSection === section.id
                          ? "text-indigo-300 bg-white/[0.05]"
                          : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]"
                      }
                    `}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
