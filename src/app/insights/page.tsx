"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Insights() {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-silk text-center pt-[140px] md:pt-[180px] pb-[64px] md:pb-[100px]">
        <div className="container">
          <h1 className="reveal font-serif text-[clamp(3rem,6vw,5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-ink mb-5">Insights</h1>
          <p className="hero-sub reveal text-[1.125rem] text-ink-60 max-w-[560px] mx-auto leading-[1.7] font-light">
            Perspectives on growth, capital markets, and building ventures in Asia and beyond.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="bg-white pb-20">
        <div className="container">
          <Link href="#" className="featured-card reveal bg-silk rounded-xl p-[32px_24px] md:p-[64px_72px] block no-underline text-inherit transition-all duration-400 hover:shadow-[0_12px_48px_rgba(15,25,35,0.08)] hover:-translate-y-[2px]">
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink-40 mb-5 inline-block">Exit Strategy</div>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-ink leading-[1.2] tracking-[-0.01em] mb-3">Why Most Startup Exits Fail - And How to Avoid It</h2>
            <div className="text-[0.85rem] text-ink-40 font-normal mb-5">March 2025</div>
            <p className="text-[1.05rem] text-ink-60 leading-[1.75] font-light max-w-[700px]">Most founders wait too long to plan their exit. By the time they&apos;re ready to sell, the business isn&apos;t positioned for maximum value. Here&apos;s what we tell every founder we work with.</p>
          </Link>
        </div>
      </section>

      {/* ARTICLE GRID */}
      <section className="bg-white py-[80px] pb-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-stagger">
            {[
              { tag: "Fintech", title: "The State of FinTech in Southeast Asia, 2025", date: "February 2025", desc: "A landscape overview of payments, lending, and digital banking across the region." },
              { tag: "Capital", title: "Raising Capital in a Down Market: What's Actually Working", date: "January 2025", desc: "The fundraising playbook has changed. Here's what we're seeing work for our portfolio." },
              { tag: "Case Study", title: "How We Helped a Hospitality Group Achieve 20x ROI", date: "December 2024", desc: "Proprietary audience segmentation drove unprecedented conversion funnel performance." },
              { tag: "Ventures", title: "Building a Venture Studio: Lessons from ENGIE Factory", date: "November 2024", desc: "Three years, 15 startups, and the operating model that made it work." },
              { tag: "Growth", title: "Fractional Leadership: When to Embed, When to Advise", date: "October 2024", desc: "The line between advisor and operator is where the real value gets created." },
              { tag: "SaaS", title: "SaaS Expansion in ASEAN: A Playbook", date: "September 2024", desc: "Scaling across Indonesia, Philippines, Thailand, and Malaysia with Fortune 500 clients." }
            ].map((article, i) => (
              <Link key={i} href="#" className="article-card reveal bg-white border border-ink-10 rounded-xl p-[28px_24px] md:p-[40px_36px] no-underline text-inherit block transition-all duration-400 hover:-translate-y-[4px] hover:shadow-[0_12px_40px_rgba(15,25,35,0.1)]" style={{ "--i": i } as React.CSSProperties}>
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink-40 mb-[14px] inline-block">{article.tag}</div>
                <h3 className="font-serif text-[1.35rem] font-normal text-ink leading-[1.3] mb-[10px]">{article.title}</h3>
                <div className="text-[0.8rem] text-ink-40 font-normal mb-[14px]">{article.date}</div>
                <p className="text-ink-60 text-[0.925rem] leading-[1.65] font-light">{article.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-silk py-[64px] md:py-[100px]">
        <div className="container">
          <div className="max-w-[640px] mx-auto text-center reveal">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-normal text-ink mb-3">Stay informed</h2>
            <p className="text-ink-60 text-[1rem] leading-[1.7] font-light mb-8">Get our latest perspectives on growth strategy, capital markets, and venture building delivered to your inbox.</p>
            <form className="flex flex-col md:flex-row gap-3 max-w-[480px] mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required className="flex-1 py-[14px] px-5 border-[1.5px] border-ink-20 rounded-md font-sans text-[0.9rem] text-ink bg-white outline-none transition-colors duration-300 placeholder:text-ink-40 focus:border-ink" />
              <button type="submit" className="py-[14px] px-7 bg-ink text-white border-none rounded-md font-sans text-[0.875rem] font-semibold cursor-pointer transition-all duration-300 tracking-[0.01em] whitespace-nowrap hover:bg-ink-80 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(15,25,35,0.2)]">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to talk<br />strategy?</h2>
          <p>No sales pitches. No lengthy proposals. A direct conversation with a senior advisor about your goals and whether we are the right fit.</p>
          <Link href="/contact" className="btn btn-dark btn-arrow">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
