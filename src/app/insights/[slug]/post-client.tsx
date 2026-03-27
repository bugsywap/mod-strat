"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Post } from "@/data/posts";

interface PostClientProps {
  post: Post;
  relatedPosts: Post[];
}

export default function PostClient({ post, relatedPosts }: PostClientProps) {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Reveal on scroll logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Fallback: If elements are at the top of the page, show them regardless
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      }
    });

    return () => observer.disconnect();
  }, [post.id]);

  return (
    <>
      {/* BLOG HERO */}
      <section className="bg-silk pt-[140px] md:pt-[180px] pb-[60px] md:pb-[100px] border-b border-ink-10">
        <div className="container-sm">
          <Link href="/insights" className="flex items-center gap-2 text-[0.9rem] text-ink-40 no-underline mb-12 hover:text-ink transition-colors">
            <span>←</span> Back to Insights
          </Link>
          
          <div className="reveal">
            <div className="blog-header-meta">
              <span>{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-ink-20"></span>
              <span>{post.date}</span>
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal text-ink leading-[1.1] tracking-[-0.02em] mb-8">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-[0.95rem] text-ink-60 italic">
              <span>Estimated {post.readingTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <article className="py-[60px] md:py-[100px]">
        <div className="container-sm">
          {/* Main Content */}
          <div 
            className="blog-content reveal delay-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Related / Footer Nav */}
          <footer className="blog-footer-nav reveal">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
              <div>
                <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink-40 mb-2">Share this insight</h4>
                <div className="flex gap-4">
                  <button className="text-[0.9rem] text-ink-60 hover:text-ink transition-colors">LinkedIn</button>
                  <button className="text-[0.9rem] text-ink-60 hover:text-ink transition-colors">Twitter</button>
                  <button className="text-[0.9rem] text-ink-60 hover:text-ink transition-colors">Copy Link</button>
                </div>
              </div>
              <Link href="/contact" className="btn btn-dark">
                Discuss this Strategy
              </Link>
            </div>

            <div className="pt-20 border-t border-ink-05">
              <h3 className="font-serif text-2xl mb-10">Related Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((rp, i) => (
                  <Link 
                    key={rp.id} 
                    href={`/insights/${rp.slug}`}
                    className="group no-underline block"
                  >
                    <div className="aspect-[16/10] bg-silk rounded-lg mb-4 overflow-hidden relative">
                      <div className="absolute inset-0 bg-ink-05 flex items-center justify-center text-ink-10 text-[10px] italic p-4 text-center">
                        {rp.title}
                      </div>
                    </div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-ink-40 mb-2">{rp.category}</div>
                    <h4 className="font-serif text-lg leading-tight text-ink group-hover:text-ink-60 transition-colors uppercase-none">
                      {rp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* FOOTER CTA */}
      <section className="bg-silk py-20 border-t border-ink-10">
        <div className="container text-center">
          <h2 className="font-serif text-3xl mb-4">Never miss an insight.</h2>
          <p className="text-ink-60 mb-8 max-w-[500px] mx-auto">Get our best perspectives on growth, capital, and venture building delivered to your inbox.</p>
          <form 
            name="blog-newsletter" 
            method="POST" 
            data-netlify="true"
            className="flex flex-col sm:flex-row gap-3 max-w-[400px] mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="hidden" name="form-name" value="blog-newsletter" />
            <input type="email" name="email" placeholder="Email address" required className="flex-1 px-4 py-3 rounded-lg border border-ink-10 outline-none focus:border-ink" />
            <button type="submit" className="btn btn-dark">Join</button>
          </form>
        </div>
      </section>
    </>
  );
}
