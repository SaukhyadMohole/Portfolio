"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // EmailJS integration — replace with your credentials in .env
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <LinkedInIcon size={18} />,
      label: "LinkedIn",
      value: "saukhyad-mohole",
      href: personalInfo.links.linkedin,
    },
    {
      icon: <GitHubIcon size={18} />,
      label: "GitHub",
      value: "SaukhyadMohole",
      href: personalInfo.links.github,
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Drop me a message."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 md:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl text-sm
                        bg-white/[0.03] border border-white/[0.08] text-slate-200
                        placeholder:text-slate-600
                        focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20
                        transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl text-sm
                        bg-white/[0.03] border border-white/[0.08] text-slate-200
                        placeholder:text-slate-600
                        focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20
                        transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl text-sm
                      bg-white/[0.03] border border-white/[0.08] text-slate-200
                      placeholder:text-slate-600
                      focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20
                      transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl text-sm resize-none
                      bg-white/[0.03] border border-white/[0.08] text-slate-200
                      placeholder:text-slate-600
                      focus:outline-none focus:border-indigo-500/40 focus:ring-1 focus:ring-indigo-500/20
                      transition-all duration-200"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
                    bg-gradient-to-r from-indigo-500 to-violet-500
                    text-white text-sm font-medium
                    hover:from-indigo-400 hover:to-violet-400
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-300 shadow-lg shadow-indigo-500/20"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={16} />
                      Sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle size={16} />
                      Failed — try again
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            {contactInfo.map((info) => (
              <motion.div key={info.label} variants={staggerItem}>
                <GlassCard className="p-4">
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-sm text-slate-300 group-hover:text-indigo-300 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-sm text-slate-300">{info.value}</p>
                      </div>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
