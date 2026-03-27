"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Netlify requires form-encoded data
    const data = new URLSearchParams();
    formData.forEach((value, key) => {
      data.append(key, value as string);
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error("Form submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-silk text-center pt-[130px] md:pt-[160px] pb-[60px] md:pb-[80px] border-b border-ink-10">
        <div className="container">
          <h1 className="reveal font-serif text-[2.4rem] md:text-[clamp(2.8rem,5vw,4rem)] font-normal leading-[1.15] tracking-[-0.01em] text-ink mb-6">
            Let&apos;s Talk
          </h1>
          <p className="reveal delay-100 text-[1.125rem] text-ink-60 max-w-[560px] mx-auto font-light leading-[1.75]">
            No sales pitches. No lengthy proposals. A direct conversation with a senior advisor about your goals and whether we&apos;re the right fit.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-[60px] md:py-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[48px] md:gap-[80px] items-start">
            
            {/* LEFT: FORM */}
            <div className="reveal">
              {isSubmitted ? (
                <div className="bg-silk p-10 rounded-xl border border-ink-10 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-white border border-ink-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-ink fill-none stroke-[2]"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="font-serif text-2xl mb-4">Message Sent</h3>
                  <p className="text-ink-60 mb-8 max-w-[400px] mx-auto">Thank you for reaching out. We&apos;ve received your message and a senior advisor will be in touch with you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-outline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
                    <div className="mb-7">
                      <label htmlFor="name" className="block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-60 mb-[10px]">Name</label>
                      <input type="text" id="name" name="name" placeholder="Your full name" required className="w-full p-[14px_18px] font-sans text-[0.95rem] font-normal text-ink bg-white border-[1.5px] border-ink-10 rounded-lg transition-all duration-300 outline-none focus:border-ink-40 focus:shadow-[0_0_0_4px_rgba(15,25,35,0.06)] placeholder:text-ink-20 placeholder:font-light" />
                    </div>
                    <div className="mb-7">
                      <label htmlFor="email" className="block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-60 mb-[10px]">Email</label>
                      <input type="email" id="email" name="email" placeholder="you@company.com" required className="w-full p-[14px_18px] font-sans text-[0.95rem] font-normal text-ink bg-white border-[1.5px] border-ink-10 rounded-lg transition-all duration-300 outline-none focus:border-ink-40 focus:shadow-[0_0_0_4px_rgba(15,25,35,0.06)] placeholder:text-ink-20 placeholder:font-light" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5">
                    <div className="mb-7">
                      <label htmlFor="company" className="block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-60 mb-[10px]">Company</label>
                      <input type="text" id="company" name="company" placeholder="Your company name" className="w-full p-[14px_18px] font-sans text-[0.95rem] font-normal text-ink bg-white border-[1.5px] border-ink-10 rounded-lg transition-all duration-300 outline-none focus:border-ink-40 focus:shadow-[0_0_0_4px_rgba(15,25,35,0.06)] placeholder:text-ink-20 placeholder:font-light" />
                    </div>
                    <div className="mb-7">
                      <label htmlFor="subject" className="block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-60 mb-[10px]">Subject</label>
                      <div className="relative">
                        <select id="subject" name="subject" required defaultValue="" className="w-full p-[14px_18px] font-sans text-[0.95rem] font-normal text-ink bg-white border-[1.5px] border-ink-10 rounded-lg transition-all duration-300 outline-none focus:border-ink-40 focus:shadow-[0_0_0_4px_rgba(15,25,35,0.06)] cursor-pointer appearance-none pr-[44px] bg-[url('data:image/svg+xml,%3Csvg_xmlns=\'http://www.w3.org/2000/svg\'_width=\'12\'_height=\'12\'_viewBox=\'0_0_24_24\'_fill=\'none\'_stroke=\'%237a8d9a\'_stroke-width=\'2\'%3E%3Cpolyline_points=\'6_9_12_15_18_9\'%3E%3C/polyline%3E%3C/svg%3E')] bg-no-repeat bg-[position:right_16px_center]">
                          <option value="" disabled>Select a topic</option>
                          <option value="Growth Strategy">Growth Strategy</option>
                          <option value="Capital Raising">Capital Raising</option>
                          <option value="Exit Advisory">Exit Advisory</option>
                          <option value="Corporate Innovation">Corporate Innovation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-7">
                    <label htmlFor="message" className="block text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-60 mb-[10px]">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us a bit about your project or goals..." required className="w-full p-[14px_18px] font-sans text-[0.95rem] font-normal text-ink bg-white border-[1.5px] border-ink-10 rounded-lg transition-all duration-300 outline-none focus:border-ink-40 focus:shadow-[0_0_0_4px_rgba(15,25,35,0.06)] placeholder:text-ink-20 placeholder:font-light min-h-[140px] resize-y leading-[1.65]"></textarea>
                  </div>
                  
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium border border-red-100">
                      {error}
                    </div>
                  )}

                  <div className="mt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`btn btn-dark btn-arrow w-full justify-center p-[16px_28px] text-[0.95rem] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT: CONTACT INFO */}
            <div className="reveal delay-200">
              <div className="p-[36px_28px] md:p-[48px_40px] bg-silk rounded-xl border border-ink-05">
                <h3 className="font-serif text-[1.5rem] font-normal text-ink mb-9">Get in Touch</h3>

                <div className="flex items-start gap-4 mb-8 last:mb-0">
                  <div className="w-10 h-10 rounded-lg bg-white border border-ink-10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-ink-60 fill-none stroke-[1.5]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink-40 mb-[6px]">Office</h4>
                    <p className="text-[0.95rem] text-ink font-normal leading-[1.7]">60 Paya Lebar Road<br />#06-28 Paya Lebar Square<br />Singapore 409051</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-ink-10 my-2"></div>

                <div className="flex items-start gap-4 mb-8 last:mb-0">
                  <div className="w-10 h-10 rounded-lg bg-white border border-ink-10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-ink-60 fill-none stroke-[1.5]"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink-40 mb-[6px]">Email</h4>
                    <a href="mailto:mingwang@modernstrat.com" className="text-[0.95rem] text-ink font-normal leading-[1.7] no-underline transition-colors duration-300 hover:text-ink-60">mingwang@modernstrat.com</a>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-ink-10 my-2"></div>

                <div className="flex items-start gap-4 mb-8 last:mb-0">
                  <div className="w-10 h-10 rounded-lg bg-white border border-ink-10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-ink-60 fill-none stroke-[1.5]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink-40 mb-[6px]">Hours</h4>
                    <p className="text-[0.95rem] text-ink font-normal leading-[1.7]">Mon - Fri: 10am - 6pm<br />Sat: 10am - 2pm</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-ink-10 my-2"></div>

                <div className="flex items-start gap-4 mb-8 last:mb-0">
                  <div className="w-10 h-10 rounded-lg bg-white border border-ink-10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-ink-60 fill-none stroke-[1.5]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-ink-40 mb-[6px]">Social</h4>
                    <div className="flex gap-[10px] mt-2 group-parent">
                      <Link href="https://www.linkedin.com/company/modernstrat/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-[1.5px] border-ink-10 flex items-center justify-center transition-all duration-300 hover:border-ink hover:bg-ink group">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink-60 transition-colors duration-300 group-hover:fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </Link>
                      <Link href="https://www.instagram.com/ask.mingwang/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-[1.5px] border-ink-10 flex items-center justify-center transition-all duration-300 hover:border-ink hover:bg-ink group">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink-60 transition-colors duration-300 group-hover:fill-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                      </Link>
                      <Link href="https://www.tiktok.com/@ask.mingwang" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-[1.5px] border-ink-10 flex items-center justify-center transition-all duration-300 hover:border-ink hover:bg-ink group">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink-60 transition-colors duration-300 group-hover:fill-white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.38-6.21V9.4a8.16 8.16 0 0 0 3.84.96V7.1a4.85 4.85 0 0 1-1-.41z"/></svg>
                      </Link>
                      <Link href="http://www.twitter.com/ask_mingwang" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-[1.5px] border-ink-10 flex items-center justify-center transition-all duration-300 hover:border-ink hover:bg-ink group">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink-60 transition-colors duration-300 group-hover:fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-[60px] md:pb-[100px]">
        <div className="container">
          <div className="reveal rounded-xl overflow-hidden border border-ink-10 h-[300px] md:h-[400px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7606!2d103.8920!3d1.3180!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da181a0f5a3aeb%3A0x9b6c7b8e2bf92f7f!2sPaya%20Lebar%20Square!5e0!3m2!1sen!2ssg!4v1" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Modern Strategy Office Location" className="w-full h-full border-0 block"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
