import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
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

      <main>{children}</main>

      <Footer />
    </>
  );
}
