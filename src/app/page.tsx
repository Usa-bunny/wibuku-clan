import Header from "@/components/layout/Header";
import HeroSection from "@/components/section/HeroSection";
import MemberSection from "@/components/section/MemberSection";
import EventsSection from "@/components/section/EventsSection";
import ContactSection from "@/components/section/ContactSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header
        logo="Wibu Nolep"
        navLinks={[
          {
            label: "Anime",
            href: "/anime",
          },
          {
            label: "Members",
            href: "/members",
          },
        ]}
      />

      <main className="relative">
        <HeroSection/>
        <MemberSection/>
        <EventsSection/>
        <ContactSection/>
      </main>

      <Footer />
    </>
  );
}
