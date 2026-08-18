import EventCard from "@/components/ui/EventCard";
import { CurrentEvent, UpcomingEvent } from "@/data/events";
import Motion from "@/components/helper/Motion";

export default function EventsSection() {
  return (
    <section
      id="events"
      className="flex min-h-screen items-center border-t-transparent pt-20 pb-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="mb-20">
          <Motion animation="fadeUp">
            <h3 className="mb-1 text-3xl font-bold">Current Events</h3>
          </Motion>

          <Motion animation="fadeUp" delay={0.2}>
            <p className="mb-8 opacity-70">Clan in Wibuku</p>
          </Motion>

          <div className="grid grid-cols-1 gap-5">
            {CurrentEvent.slice(0, 3).map((event, index) => (
              <Motion key={index} animation="slideScale" delay={index * 0.12}>
                <EventCard event={event} />
              </Motion>
            ))}
          </div>
        </div>

        <div>
          <Motion animation="fadeUp">
            <h3 className="mb-1 text-3xl font-bold">Upcoming Events</h3>
          </Motion>

          <Motion animation="fadeUp" delay={0.2}>
            <p className="mb-8 opacity-70">Clan in Wibuku</p>
          </Motion>

          <div className="grid grid-cols-1 gap-5">
            {UpcomingEvent.map((event, index) => (
              <Motion key={index} animation="slideScale" delay={index * 0.12}>
                <EventCard event={event} />
              </Motion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
