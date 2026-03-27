"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/data/posts";

interface InsightsClientProps {
  featuredPost: Post | null;
  otherPosts: Post[];
}

export default function InsightsClient({ featuredPost, otherPosts }: InsightsClientProps) {
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
      <section className="bg-silk text-center pt-[140px] md:pt-[180px] pb-[64px] md:pb-[80px]">
        <div className="container">
          <div className="section-eyebrow justify-center mb-4">Strategic Perspectives</div>
          <h1 className="reveal font-serif text-[clamp(3rem,6vw,5rem)] font-normal leading-[1.1] tracking-[-0.02em] text-ink mb-5">Insights</h1>
          <p className="hero-sub reveal text-[1.125rem] text-ink-60 max-w-[560px] mx-auto leading-[1.7] font-light">
            Perspectives on growth, capital markets, and building ventures in Asia and beyond.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredPost && (
        <section className="bg-white pb-16">
          <div className="container">
            <Link 
              href={`/insights/${featuredPost.slug}`} 
              className="featured-card group reveal bg-silk rounded-2xl overflow-hidden flex flex-col lg:flex-row no-underline text-inherit transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,25,35,0.12)] hover:-translate-y-1"
            >
              <div className="lg:w-3/5 relative h-[300px] lg:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="w-full h-full bg-ink-10 flex items-center justify-center text-ink-20 italic">
                  Image: {featuredPost.title}
                </div>
              </div>
              <div className="lg:w-2/5 p-[40px_32px] md:p-[64px_48px] flex flex-col justify-center">
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink-40 mb-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-ink-20"></span>
                  {featuredPost.category}
                </div>
                <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal text-ink leading-[1.2] tracking-[-0.01em] mb-4 group-hover:text-ink-80 transition-colors">
                  {featuredPost.title}
                </h2>
                <div className="flex items-center gap-4 text-[0.85rem] text-ink-40 font-normal mb-6">
                  <span>{featuredPost.date}</span>
                  <span className="w-1 h-1 rounded-full bg-ink-20"></span>
                  <span>{featuredPost.readingTime}</span>
                </div>
                <p className="text-[1.05rem] text-ink-60 leading-[1.75] font-light mb-8 line-clamp-3">
                  {featuredPost.snippet}
                </p>
                <div className="mt-auto text-ink font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Read Full Insight <span className="text-xl">→</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ARTICLE GRID */}
      <section className="bg-white py-[60px] pb-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
            {otherPosts.map((post, i) => (
              <Link 
                key={post.id} 
                href={`/insights/${post.slug}`} 
                className="article-card group reveal bg-white border border-ink-10 rounded-xl p-[24px] no-underline text-inherit flex flex-col transition-all duration-400 hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(15,25,35,0.08)] hover:border-ink-20" 
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="aspect-[16/10] bg-silk rounded-lg mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-ink-05 flex items-center justify-center text-ink-10 text-xs italic p-4 text-center">
                    {post.title}
                  </div>
                </div>
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-ink-40 mb-4 inline-block px-2 py-1 bg-silk rounded">
                  {post.category}
                </div>
                <h3 className="font-serif text-[1.25rem] font-normal text-ink leading-[1.3] mb-3 group-hover:text-ink-80">
                  {post.title}
                </h3>
                <div className="text-[0.8rem] text-ink-40 font-normal mb-4 flex items-center gap-2">
                  {post.date} • {post.readingTime}
                </div>
                <p className="text-ink-60 text-[0.925rem] leading-[1.65] font-light mb-6 line-clamp-3">
                  {post.snippet}
                </p>
                <div className="mt-auto pt-4 border-t border-ink-05 flex items-center justify-between text-[0.85rem] font-semibold">
                  <span className="text-ink opacity-60 group-hover:opacity-100 transition-opacity">Read Insight</span>
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-silk py-[64px] md:py-[100px] border-y border-ink-05">
        <div className="container">
          <div className="max-w-[640px] mx-auto text-center reveal">
            <div className="section-eyebrow justify-center mb-4">Newsletter</div>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] font-normal text-ink mb-3">Stay ahead of the curve</h2>
            <p className="text-ink-60 text-[1rem] leading-[1.7] font-light mb-8">Get our latest perspectives on growth strategy, capital markets, and venture building delivered to your inbox.</p>
            <form 
              name="newsletter" 
              method="POST" 
              data-netlify="true"
              className="flex flex-col md:flex-row gap-3 max-w-[480px] mx-auto" 
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input type="email" name="email" placeholder="Your email address" required className="flex-1 py-[14px] px-5 border-[1.5px] border-ink-10 rounded-lg font-sans text-[0.9rem] text-ink bg-white outline-none transition-all duration-300 placeholder:text-ink-20 placeholder:font-light focus:border-ink-40 focus:shadow-[0_0_0_4px_rgba(15,25,35,0.06)]" />
              <button type="submit" className="btn btn-dark p-[14px_28px] rounded-lg">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container text-center">
          <h2 className="reveal">Ready to talk strategy?</h2>
          <p className="reveal delay-100">Direct conversations with senior advisors. No fluff. No sales pitches.</p>
          <div className="reveal delay-200 mt-10">
            <Link href="/contact" className="btn btn-dark btn-arrow">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
