"use client";

import Motion from "@/components/helper/Motion";
import { MembersData } from "@/data/members";
import MemberCard from "@/components/ui/MemberCard";

export default function MemberSection() {
  return (
    <section id="members" className="min-h-screen pt-20 pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        <Motion animation="fadeUp">
          <h3 className="mb-2 text-3xl font-bold">Members</h3>
        </Motion>

        <Motion animation="fadeUp" delay={0.2}>
          <p className="mb-8 opacity-70">Clan hierarchy & members list</p>
        </Motion>

        <div className="grid gap-4">
          {MembersData.slice(0, 5).map((member, index) => (
            <Motion
              key={member.username + index}
              animation="pop"
              delay={index * 0.05}
            >
              <MemberCard member={member} />
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}
