import Motion from "@/components/helper/Motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center border-t-transparent pt-20 pb-16"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full flex-1">
            <Motion animation="fadeUp">
              <h1 className="mb-6 text-center text-5xl font-bold">
                Welcome to Wibu Nolep Clan
              </h1>
            </Motion>

            <Motion animation="fadeUp" delay={0.3}>
              <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed opacity-80">
                Join Wibu Nolep clan and you will get 1000 gems everyday. Just
                custom name to [SENPAI] and donate gems.
              </p>
            </Motion>

            <Motion animation="fadeUp" delay={0.5}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <a href="#members" className="list-torii group">
                  <i className="bi bi-collection text-2xl transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-1 text-xl font-semibold tracking-wide transition-all duration-300 group-hover:translate-x-1">
                    Members
                  </h3>
                </a>

                <a href="#events" className="list-torii group">
                  <i className="bi bi-grid text-2xl transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-1 text-xl font-semibold tracking-wide transition-all duration-300 group-hover:translate-x-1">
                    Events
                  </h3>
                </a>

                <a href="#contact" className="list-torii group">
                  <i className="bi bi-stars text-2xl transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-1 text-xl font-semibold tracking-wide transition-all duration-300 group-hover:translate-x-1">
                    Media
                  </h3>
                </a>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
}
