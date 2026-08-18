import Motion from "@/components/helper/Motion";
import { ContactData } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-(--bg) border-t border-dyna py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {ContactData.slice(0, 5).map((item, index) => (
              <Motion key={index} delay={index * 0.12}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-11 w-11 items-center justify-center rounded-full border border-dyna text-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
                >
                  <i className={item.icon} />
                </a>
              </Motion>
            ))}
          </div>

          <p className="text-sm opacity-70">
            <i className="bi bi-c-circle mr-1" />
            <a href="https://usa-portofolio.vercel.app">2026 make by @usagi</a>
          </p>
          <p className="text-sm">
            <a href="https://wa.me/6285126088379?text=Hello%2C%20I%20hope%20you%20are%20doing%20well.%0A%0AI%20am%20interested%20in%20creating%20a%20website%20and%20would%20like%20to%20discuss%20the%20possibility%20of%20working%20with%20you.%0A%0APlease%20let%20me%20know%20your%20availability%20and%20the%20next%20steps.%20Thank%20you.">
              if you want to make website like this contact me in WhatsApp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
