"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Startups", href: "/startups" },
    { name: "Corporate Innovation", href: "/corporate" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-400 ease-[var(--ease)] bg-white/96 backdrop-blur-xl ${
          isScrolled ? "shadow-[0_1px_0_var(--color-ink-10)]" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-[72px]">
          <Link href="/" className="block">
            <Image
              src="/assets/logos/logo-black.png"
              alt="Modern Strategy"
              width={180}
              height={28}
              className="h-[28px] w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-[0.875rem] font-medium tracking-[0.01em] transition-colors duration-300 ${
                    pathname === link.href || (pathname === "" && link.href === "/")
                      ? "text-ink"
                      : "text-ink-60 hover:text-ink"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={`btn btn-outline ${
                  pathname === "/contact" ? "!bg-ink-05 !border-ink text-ink" : ""
                }`}
              >
                Book a Call
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-[22px] h-[1.5px] bg-ink transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[6.5px] rotate-45" : "my-1"
              }`}
            ></span>
            <span
              className={`block w-[22px] h-[1.5px] bg-ink transition-opacity duration-300 my-1 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-[22px] h-[1.5px] bg-ink transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-[6.5px] -rotate-45" : "my-1"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-[72px] left-0 right-0 bg-white border-b border-ink-10 md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col px-8 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[1.1rem] font-medium ${
                  pathname === link.href ? "text-ink" : "text-ink-60"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`text-[1.1rem] font-medium ${
                pathname === "/contact" ? "text-ink" : "text-ink-60"
              }`}
            >
              Book a Call
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
