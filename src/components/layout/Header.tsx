"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header({
  logo = "Portfolio",
  navLinks,
}: {
  logo?: string;
  navLinks: {
    label: string;
    href: string;
  }[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 30);
      if (!menuOpen) {
        setHidden(currentScroll > lastScroll && currentScroll > 100);
      }
      lastScroll = currentScroll;
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`site-header
        ${hidden ? "header-hidden" : ""} 
        ${scrolled ? "header-scrolled" : ""}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href="/" className="logo">
          {logo}
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn-cartoon-outline rounded-full px-3 py-2 text-base"
          >
            <i
              className={`bi text-xl transition-all duration-300 ${
                menuOpen ? "bi-x-lg rotate-90" : "bi-list"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-96 px-4 py-4 opacity-100"
            : "max-h-0 px-4 py-0 opacity-0"
        }`}
      >
        <div className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="nav-link mb-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
