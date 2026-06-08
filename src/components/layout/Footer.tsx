import Motion from "../helper/Motion";
import { ContactData } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-(--bg) border-t border-dyna py-16">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mx-auto max-w-2xl text-center">

          {/* SOCIAL ICONS */}
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {ContactData.slice(0, 5).map((item, index) => (
              <Motion key={item.name ?? index} delay={index * 0.12}>
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

          {/* COPYRIGHT */}
          <p className="text-sm opacity-70">
            <i className="bi bi-c-circle mr-1" />
            2026 make by <a href="https://usa-portofolio.vercel.app">@usagi</a> 
          </p>

        </div>

      </div>
    </footer>
  );
}