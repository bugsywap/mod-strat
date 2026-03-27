"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CorporateClient() {
  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    // Subtle parallax on service numbers
    const parallaxEls = document.querySelectorAll(".parallax-slow");
    const heroPattern = document.querySelector(".hero-bg-pattern") as HTMLElement;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (heroPattern) {
            heroPattern.style.transform = `translateY(${scrollY * 0.15}px)`;
          }

          parallaxEls.forEach((el) => {
            if (el === heroPattern) return;
            const hElement = el as HTMLElement;
            const rect = hElement.getBoundingClientRect();
            const viewH = window.innerHeight;
            if (rect.top < viewH && rect.bottom > 0) {
              const offset = (rect.top - viewH / 2) * 0.06;
              hElement.style.transform = `translateY(${offset}px)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-pattern parallax-slow"></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-eyebrow">Corporate Innovation</div>
          <h1>Corporate <em>Innovation</em></h1>
          <p className="hero-sub">We design and run innovation programmes for Fortune 500 companies - from venture studios to startup scouting and strategic partnerships.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-dark btn-arrow" style={{ background: "var(--color-white)", color: "var(--color-ink)" }}>
              Book a Discovery Call
            </Link>
            <Link href="#services" className="btn btn-ghost btn-arrow">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL SECTIONS */}
      <div id="services">
        <div className="service-detail">
          <div className="container">
            <div className="service-detail-inner reveal">
              <div className="service-detail-num parallax-slow">01</div>
              <div className="service-detail-content">
                <div className="service-detail-label">Service</div>
                <h2>Venture Studio Design</h2>
                <p>Setting up and managing venture studios that turn corporate strategy into launched startups. Managed the $5M/year ENGIE Factory venture studio, launching 15 energy transition startups over three years. Set up InMotion Ventures for Jaguar Land Rover, launching 5 ventures.</p>
                <div className="service-detail-divider"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-detail">
          <div className="container">
            <div className="service-detail-inner reveal">
              <div className="service-detail-num parallax-slow">02</div>
              <div className="service-detail-content">
                <div className="service-detail-label">Service</div>
                <h2>Innovation Programmes</h2>
                <p>Custom innovation programmes for corporates looking to build new revenue streams, test emerging technologies, or create strategic startup partnerships.</p>
                <div className="service-detail-divider"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-detail">
          <div className="container">
            <div className="service-detail-inner reveal">
              <div className="service-detail-num parallax-slow">03</div>
              <div className="service-detail-content">
                <div className="service-detail-label">Service</div>
                <h2>Startup Scouting</h2>
                <p>Identifying and connecting corporates with startups that solve their strategic challenges. Built one of the largest early-stage FinTech portfolios globally with Startupbootcamp.</p>
                <div className="service-detail-divider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className="bg-silk py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-ink-10 rounded-xl overflow-hidden reveal-stagger">
            <div className="p-8 md:p-12 text-center border-b md:border-b-0 border-r-0 md:border-r border-ink-10 transition-colors duration-400 hover:bg-ink-05 reveal" style={{ "--i": 0 } as React.CSSProperties}>
              <div className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-ink mb-2 leading-[1.2]">Fortune 500</div>
              <div className="text-[0.8rem] text-ink-40 font-medium tracking-[0.02em]">Innovation Partners</div>
            </div>
            <div className="p-8 md:p-12 text-center border-b md:border-b-0 md:border-r border-ink-10 transition-colors duration-400 hover:bg-ink-05 reveal" style={{ "--i": 1 } as React.CSSProperties}>
              <div className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-ink mb-2 leading-[1.2]">20+</div>
              <div className="text-[0.8rem] text-ink-40 font-medium tracking-[0.02em]">Ventures Launched</div>
            </div>
            <div className="p-8 md:p-12 text-center border-r-0 md:border-r border-ink-10 transition-colors duration-400 hover:bg-ink-05 reveal" style={{ "--i": 2 } as React.CSSProperties}>
              <div className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-ink mb-2 leading-[1.2]">15</div>
              <div className="text-[0.8rem] text-ink-40 font-medium tracking-[0.02em]">ENGIE Factory Startups</div>
            </div>
            <div className="p-8 md:p-12 text-center transition-colors duration-400 hover:bg-ink-05 reveal" style={{ "--i": 3 } as React.CSSProperties}>
              <div className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-ink mb-2 leading-[1.2]">5</div>
              <div className="text-[0.8rem] text-ink-40 font-medium tracking-[0.02em]">JLR Ventures</div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="bg-silk py-32 border-t border-ink-10 relative overflow-hidden" id="case-studies">
        <div className="container relative z-10">
          <div className="mb-24">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.3em] text-ink-20 mb-6 block">Track Record</span>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-ink mb-12 leading-[1.1]">Featured <em>Case Studies</em></h2>
            <div className="h-[2px] w-24 bg-ink"></div>
          </div>

          <div className="space-y-40">
            {/* MS Engagements */}
            <div>
              <div className="flex items-center gap-8 mb-16">
                <h3 className="font-serif text-[2.2rem] text-ink whitespace-nowrap">MS Engagements</h3>
                <div className="h-px bg-ink-10 flex-grow"></div>
              </div>
              
              <div className="group relative bg-white p-6 md:p-12 rounded-2xl border border-ink-05 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-ink-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-ink text-white flex items-center justify-center font-serif text-sm">1</div>
                      <span className="text-[0.75rem] font-bold uppercase tracking-widest text-ink pt-1">Payments</span>
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h4 className="font-serif text-[1.4rem] md:text-[1.8rem] mb-6 text-ink leading-tight">PayNet Malaysia - MYR 1 Billion Programme</h4>
                    <p className="text-ink-60 text-[1.05rem] md:text-[1.15rem] font-light leading-relaxed max-w-3xl">National payment network infrastructure. Designed a nationwide FinTech Ecosystem programme with estimated MYR 1 billion in incremental value over 3 years.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Principals Previous Programmes */}
            <div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-12 md:mb-16">
                <h3 className="font-serif text-[1.6rem] md:text-[2.2rem] text-ink leading-tight">Principals&lsquo; Previous Programmes</h3>
                <div className="h-px bg-ink-10 flex-grow w-full md:w-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { cat: "Ventures", title: "Rainmaking Venture Studio - Exited to Bain & Co.", desc: "Established and operated in APAC. Launched 20 new ventures with Fortune 500 partners. Exited to Bain & Co. in 2022." },
                  { cat: "Banking", title: "Barclay's FinTech Innovation", desc: "Designed Barclay's startup engagement programme and set the strategy and focus areas for the bank's FinTech innovation agenda." },
                  { cat: "Payments", title: "Mastercard Start Path", desc: "Advised on adapting Start Path - shifting from general startup acceleration to driving CVC investment and commercial returns through Mastercard business units." },
                  { cat: "Automotive", title: "InMotion Ventures - Jaguar Land Rover", desc: "Established a venture studio for JLR. Advised on structure, process, budget, and talent. Launched 5 ventures before handing over operations." },
                  { cat: "Telco", title: "DigiX - Digi Innovation Unit", desc: "Established DigiX to identify and pursue new telco solutions and business models through in-house technology and partnerships." },
                  { cat: "Energy", title: "ENGIE Factory Venture Studio", desc: "Managed the $5M/year operating budget, launching 15 energy transition startups over three years." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 md:p-10 rounded-xl border border-ink-05 transition-all duration-300 hover:bg-ink-05">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 rounded-full border border-ink-10 flex items-center justify-center text-[10px] font-bold text-ink-20">{idx + 2}</div>
                      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-ink-20 pt-1">{item.cat}</span>
                    </div>
                    <h4 className="font-serif text-[1.4rem] mb-4 text-ink leading-snug">{item.title}</h4>
                    <p className="text-ink-60 text-[0.95rem] font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to innovate?</h2>
          <p>No sales pitches. No lengthy proposals. A direct conversation with a senior advisor about your innovation goals and whether we are the right fit.</p>
          <Link href="/contact" className="btn btn-dark btn-arrow">Book a Discovery Call</Link>
        </div>
      </section>
    </>
  );
}
