"use client";

import { MembersType } from "@/types/member.type";

const roleColor = {
  leader: "bg-[#792CA2] text-[#FFA6FB]",
  "vice leader": "bg-[#547792] text-[#BED4CB]",
  admiral: "bg-[#FDEB9E] text-[#C44A3A]",
  officer: "bg-[#2C5EAD] text-[#39B1D1]",
  member: "bg-[#2B5748]/20 text-[#2B5748]",
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
