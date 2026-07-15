interface BadgeProps {
  label: string;
  variant?: "default" | "indigo" | "violet" | "cyan" | "emerald" | "amber";
}

const variantStyles: Record<string, string> = {
  default:
    "bg-slate-800/60 text-slate-300 border-slate-700/50",
  indigo:
    "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  violet:
    "bg-violet-500/10 text-violet-300 border-violet-500/20",
  cyan:
    "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  emerald:
    "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  amber:
    "bg-amber-500/10 text-amber-300 border-amber-500/20",
};

export default function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium
        border transition-colors duration-200
        ${variantStyles[variant]}
      `}
    >
      {label}
    </span>
  );
}
