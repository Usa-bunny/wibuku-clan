import { ContactType } from "@/types/contact.type";

export default function ContactCard({ contact }: { contact: ContactType }) {
  return (
    <a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="list-torii group"
    >
      {/* ICON */}
      <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
        <i className={contact.icon} />
      </div>

      {/* TEXT */}
      <div className="min-w-0">
        <h3 className="mb-1 text-xl font-semibold tracking-wide transition-all duration-300 group-hover:translate-x-1">
          {contact.name}
        </h3>
        <p className="line-clamp-2 text-sm text-muted opacity-80">
          {contact.username}
        </p>
      </div>
    </a>
  );
}
