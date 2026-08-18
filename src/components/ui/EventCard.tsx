"use client";

import { EventType } from "@/types/event.type";

export default function EventCard({ event }: { event: EventType }) {
  return (
    <div className="card-torii group cursor-pointer p-5">
      <div className="flex items-start gap-4">
        <div className="shrink-0 text-3xl text-accent transition-transform duration-300 group-hover:scale-110">
          <i className="bi bi-calendar-event" />
        </div>

        <div className="block sm:flex w-full items-start sm:justify-between gap-6">
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 text-xl font-semibold tracking-wide transition-all duration-300 group-hover:translate-x-1">
              {event.title}
            </h3>

            <p className="line-clamp-2 text-sm text-muted opacity-80 hidden sm:block">
              {event.description}
            </p>
          </div>

          <p className="shrink-0 whitespace-nowrap text-sm text-muted">
            {event.time}
          </p>
        </div>
      </div>
    </div>
  );
}
