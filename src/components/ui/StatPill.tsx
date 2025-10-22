import { ReactNode } from "react";

interface StatPillProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function StatPill({ icon, label, value }: StatPillProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white px-3 py-4 shadow-sm ring-1 ring-zinc-100">
      <div className="text-zinc-600 mb-1">{icon}</div>
      <div className="text-[13px] text-zinc-400">{label}</div>
      <div className="text-[14px] font-semibold text-zinc-800 mt-1">{value}</div>
    </div>
  );
}
