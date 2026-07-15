"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* Aurora gradient orbs */}
      <div
        className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)",
          animation: "aurora1 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.5) 0%, transparent 70%)",
          animation: "aurora2 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[50%] h-[50%] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.4) 0%, transparent 70%)",
          animation: "aurora3 35s ease-in-out infinite",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
