"use client";

import { MembersType } from "@/types/member.type";

const roleColor = {
  leader: "bg-[#4A154B] text-[#FFD700] border border-[#FFD700]/30 font-bold",
  "vice leader": "bg-[#008080] text-[#E0FFF6] border border-[#00A3A3]/20",
  admiral: "bg-[#C2412D] text-[#FFEBE7] border border-[#8F2C1D]/40",
  officer: "bg-[#1E3A8A] text-[#93C5FD] border border-[#2563EB]/30",
  member: "bg-(--card) text-(--muted) border border-(--outline)",
};

export default function MemberCard({ member }: { member: MembersType }) {
  return (
    <a
      href={member.contact}
      target="_blank"
      rel="noopener noreferrer"
      className="card-torii group flex items-center justify-between p-5"
    >
      <div>
        <h3 className="text-lg font-semibold transition-all group-hover:translate-x-1">
          {member.username}
        </h3>

        <p className="text-sm text-muted opacity-70">{member.role}</p>
      </div>

      <span
        className={`rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${roleColor[member.role]}`}
      >
        {member.role}
      </span>
    </a>
  );
}
