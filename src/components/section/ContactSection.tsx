import Motion from "@/components/helper/Motion";
import { ContactData } from "@/data/contact";
import ContactCard from "@/components/ui/ContactCard";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center border-t-transparent pt-20 pb-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16">

        <Motion animation="fadeUp">
          <h3 className="mb-2 text-3xl font-bold">Other Media</h3>
        </Motion>

        <Motion animation="fadeUp" delay={0.2}>
          <p className="mb-10 opacity-70">
            Find our group in across platforms
          </p>
        </Motion>

        <div className="grid gap-4">
          {ContactData.map((contact, index) => (
            <Motion
              key={index}
              animation="pop"
              delay={Math.min(index * 0.08, 0.3)}
            > 
              <ContactCard contact={contact} />
            </Motion>
          ))}
        </div>

      </div>
    </section>
  );
}