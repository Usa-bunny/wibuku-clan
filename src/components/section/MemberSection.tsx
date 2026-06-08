"use client";

import { useMemo, useState } from "react";
import Motion from "@/components/helper/Motion";
import { MembersData } from "@/data/members";
import MemberCard from "@/components/ui/MemberCard";

const rolePriority: Record<string, number> = {
  leader: 1,
  "vice leader": 2,
  admiral: 3,
  officer: 4,
  member: 5,
};

const roles = ["all", "leader", "vice leader", "admiral", "officer", "member"];

export default function MemberSection() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [visible, setVisible] = useState(10);

  const filteredMembers = useMemo(() => {
    return [...MembersData]
      .filter((m) => {
        const matchSearch = m.username
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchRole =
          roleFilter === "all" ? true : m.role === roleFilter;

        return matchSearch && matchRole;
      })
      .sort((a, b) => rolePriority[a.role] - rolePriority[b.role]);
  }, [search, roleFilter]);

  const visibleMembers = filteredMembers.slice(0, visible);

  return (
    <section className="min-h-screen pt-20 pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">

        {/* TITLE */}
        <Motion animation="fadeUp">
          <h3 className="mb-2 text-3xl font-bold">Members</h3>
        </Motion>

        <Motion animation="fadeUp" delay={0.2}>
          <p className="mb-8 opacity-70">
            Clan hierarchy & members list
          </p>
        </Motion>

        {/* SEARCH + FILTER */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* SEARCH */}
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisible(10);
            }}
            placeholder="Search username..."
            className="input-torii w-full md:max-w-sm"
          />

          {/* FILTER */}
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => {
                  setRoleFilter(role);
                  setVisible(10);
                }}
                className={`btn-torii-outline text-sm ${
                  roleFilter === role ? "border-accent text-accent" : ""
                }`}
              >
                {role}
              </button>
            ))}
          </div>

        </div>

        {/* LIST */}
        <div className="grid gap-4">
          {visibleMembers.map((member, index) => (
            <Motion
              key={member.username + index}
              animation="pop"
              delay={index * 0.05}
            >
              <MemberCard member={member} />
            </Motion>
          ))}
        </div>

        {/* LOAD MORE */}
        {visible < filteredMembers.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisible((prev) => prev + 10)}
              className="btn-torii"
            >
              Load More
            </button>
          </div>
        )}
 
      </div>
    </section>
  );
}