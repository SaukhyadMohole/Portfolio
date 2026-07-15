"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

const langColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  HTML: "#e34c26",
  "Jupyter Notebook": "#DA5B0B",
  CSS: "#563d7c",
};

export default function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/SaukhyadMohole"),
          fetch(
            "https://api.github.com/users/SaukhyadMohole/repos?sort=updated&per_page=6"
          ),
        ]);

        if (userRes.ok) setUser(await userRes.json());
        if (reposRes.ok) setRepos(await reposRes.json());
      } catch (err) {
        console.error("GitHub API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  // Calculate language distribution
  const languageCount: Record<string, number> = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });

  return (
    <section id="github" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="GitHub"
          subtitle="My open source contributions and repositories"
        />

        {/* Stats */}
        {user && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12"
          >
            {[
              { label: "Repositories", value: user.public_repos },
              { label: "Followers", value: user.followers },
              { label: "Following", value: user.following },
            ].map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <GlassCard className="p-4 text-center" hover={false}>
                  <div className="text-2xl font-bold text-slate-100">
                    {stat.value}
                  </div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Repos grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-40 rounded-2xl bg-white/[0.02] animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {repos.map((repo) => (
              <motion.div key={repo.id} variants={staggerItem}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <GlassCard className="p-5 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-sm font-semibold text-slate-200 truncate flex-1">
                        {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                      </h3>
                      <ExternalLink
                        size={14}
                        className="text-slate-500 flex-shrink-0 ml-2"
                      />
                    </div>

                    <p className="text-xs text-slate-400 flex-1 mb-4 line-clamp-2">
                      {repo.description || "No description available"}
                    </p>

                    <div className="flex items-center justify-between">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor:
                                langColors[repo.language] || "#94a3b8",
                            }}
                          />
                          <span className="text-[11px] text-slate-400">
                            {repo.language}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center gap-3 text-[11px] text-slate-500">
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-1">
                            <Star size={11} />
                            {repo.stargazers_count}
                          </span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="flex items-center gap-1">
                            <GitFork size={11} />
                            {repo.forks_count}
                          </span>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View all link */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/SaukhyadMohole"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
              border border-white/[0.08] text-slate-300 text-sm font-medium
              hover:border-indigo-500/30 hover:text-indigo-300
              transition-all duration-200"
          >
            <GitHubIcon size={16} />
            View all repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
