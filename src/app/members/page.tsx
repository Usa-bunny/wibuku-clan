"use client";

import { useMemo, useState } from "react";
import Motion from "@/components/helper/Motion";
import { MembersData } from "@/data/members";
import MemberCard from "@/components/ui/MemberCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const rolePriority: Record<string, number> = {
  leader: 1,
  "vice leader": 2,
  admiral: 3,
  officer: 4,
  member: 5,
};

const roles = ["all", "leader", "vice leader", "admiral", "officer", "member"];

export default function MemberPage() {
  const countMember = 50;
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [visible, setVisible] = useState(countMember);

  const filteredMembers = useMemo(() => {
    return [...MembersData]
      .filter((m) => {
        const matchSearch = m.username
          .toLowerCase()
          .includes(search.toLowerCase());

        const matchRole = roleFilter === "all" ? true : m.role === roleFilter;

        return matchSearch && matchRole;
      })
      .sort((a, b) => rolePriority[a.role] - rolePriority[b.role]);
  }, [search, roleFilter]);

  const hasMore = visible < filteredMembers.length;
  const isExpanded = visible > countMember;
  const visibleMembers = filteredMembers.slice(0, visible);

  return (
    <section id="members" className="min-h-screen pt-20 pb-16">
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        <Breadcrumbs
          items={[
            {
              label: "Home",
              href: "/",
              icon: "house",
            },
            { label: "Members", href: "/members" },
          ]}
        />
        <Motion animation="fadeUp">
          <h3 className="mb-2 mt-4 text-3xl font-bold">Members</h3>
        </Motion>

        <Motion animation="fadeUp" delay={0.2}>
          <p className="mb-8 opacity-70">Clan hierarchy & members list</p>
        </Motion>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisible(countMember);
            }}
            placeholder="Search username..."
            className="input-torii w-full md:max-w-sm"
          />

          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => {
                  setRoleFilter(role);
                  setVisible(countMember);
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

        <div className="mt-10 flex justify-center gap-3">
          {hasMore && (
            <button
              onClick={() => setVisible((prev) => prev + countMember)}
              className="btn-torii"
            >
              Show more
            </button>
          )}

          {isExpanded && (
            <button
              onClick={() => setVisible(countMember)}
              className="btn-torii-outline"
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
