"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Startups() {
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

          // Hero pattern parallax
          if (heroPattern) {
            heroPattern.style.transform = `translateY(${scrollY * 0.15}px)`;
          }

          // Service number parallax
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
          <div className="hero-eyebrow">Startup Advisory</div>
          <h1>For <em>Startups</em></h1>
          <p className="hero-sub text-[1rem] md:text-[1.125rem] mb-8 md:mb-12">Founders helping founders. We have built, scaled, and exited our own ventures - and we bring that hard-won experience directly into yours. Grow your revenue, raise your capital, plan your exit.</p>
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
                <h2>Grow</h2>
                <p>Revenue growth strategy, go-to-market design, and fractional commercial leadership. We don&apos;t just advise - we embed in your team and co-execute the plan.</p>
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
                <h2>Raise Capital</h2>
                <p>Debt and equity fundraising for startups and funds. We position your story, model your future, and connect you with the right investors.</p>
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
                <h2>Sell Your Business</h2>
                <p>We craft your exit strategy around your personal goals - repositioning your business, multiplying your valuation, and getting you the right deal structure before you go to market.</p>
                <div className="service-detail-divider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES - HOW WE DELIVER */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="mb-16 md:mb-24">
            <div className="section-eyebrow !mb-0">Services - How We Deliver</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { 
                num: "01", 
                title: "Go-to-Market Playbook", 
                desc: "Develop a system to consistently attract high-value customers. A data-driven playbook covering channels, positioning, processes, and team training - built for your specific market." 
              },
              { 
                num: "02", 
                title: "Customer Journey Commercialisation", 
                desc: "Get the most out of every user and prospect. Map and optimise every touchpoint to drive revenue, customer lifetime value, and lasting loyalty." 
              },
              { 
                num: "03", 
                title: "Product and Market Offer Design", 
                desc: "Break your top-line ceiling with new markets. Validate new products and markets economically and package your offer in a way that wins." 
              },
              { 
                num: "04", 
                title: "Customer Intelligence", 
                desc: "Derive actionable insights about your users. Empower your team with opportunities backed by evidence, not assumptions." 
              },
              { 
                num: "05", 
                title: "People and Team Performance", 
                desc: "Craft SLAs that motivate and directly drive revenue. We coach teams to improve conversion and build a culture of continuous market discovery." 
              },
              { 
                num: "06", 
                title: "Digital Transformation", 
                desc: "Embed analytics, automation, and generative AI into your workflows to create real commercial advantage." 
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative p-8 md:p-12 bg-ink-05 rounded-2xl border border-transparent transition-all duration-500 hover:bg-white hover:border-ink-10 hover:shadow-xl hover:-translate-y-1">
                <div className="relative z-10">
                  <div className="font-serif text-[3.5rem] leading-none text-ink opacity-[0.03] absolute -top-4 -left-4 select-none group-hover:opacity-[0.07] transition-opacity duration-500">{item.num}</div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink-20">{item.num}</span>
                    <div className="h-px bg-ink-10 w-8"></div>
                  </div>
                  <h3 className="font-bold text-[1.25rem] md:text-[1.5rem] text-ink mb-4 group-hover:text-ink transition-colors duration-300">{item.title}</h3>
                  <p className="text-ink-60 text-[1rem] leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="cases" id="results">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">Proven Results</div>
              <h2 className="section-title">What we have delivered<br />for startups</h2>
            </div>
            <Link href="/contact" className="btn btn-outline btn-arrow">
              Work with us
            </Link>
          </div>
          <div className="cases-grid">
            <div className="case-card reveal">
              <div className="case-tag">Fintech</div>
              <h3>FinTech Startups in Emerging Markets</h3>
              <p>Collectively launched multiple startups addressing financial inclusion - payments, BNPL, remittances, agri-commodity working capital, and earned wage access.</p>
            </div>
            <div className="case-card reveal">
              <div className="case-tag">Hospitality</div>
              <h3>20x ROI in 12 Months</h3>
              <p>Boosted a global hospitality group&apos;s ROI by 20x in one year using proprietary social media audience segmentation to optimise the conversion funnel.</p>
            </div>
            <div className="case-card reveal">
              <div className="case-tag">SaaS</div>
              <h3>Scaled a SaaS Across Southeast Asia</h3>
              <p>Scaled a sales lead management SaaS to serve 6 Global Fortune 500 companies across Indonesia, Philippines, Thailand, and Malaysia.</p>
            </div>
            <div className="case-card reveal">
              <div className="case-tag">Capital</div>
              <h3>$50M+ Raised for Funds and Startups</h3>
              <p>Raised over $50M USD for VC funds and startups through a network of 8,000+ investors across 95 countries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">How We Work</div>
              <h2 className="section-title">Our engagement model</h2>
            </div>
            <p className="section-desc">Structured enough to deliver results, flexible enough to fit your reality.</p>
          </div>
          <div className="process-grid reveal-stagger">
            <div className="process-step reveal" style={{ "--i": 0 } as React.CSSProperties}>
              <div className="step-num">01</div>
              <h4>Identify</h4>
              <p>We identify addressable gaps and propose a specific action plan built for your business - not a generic framework.</p>
            </div>
            <div className="process-step reveal" style={{ "--i": 1 } as React.CSSProperties}>
              <div className="step-num">02</div>
              <h4>Design</h4>
              <p>We design experiments to validate markets and offerings before committing to full-scale investment.</p>
            </div>
            <div className="process-step reveal" style={{ "--i": 2 } as React.CSSProperties}>
              <div className="step-num">03</div>
              <h4>Execute</h4>
              <p>We co-execute - or co-run entire departments on your behalf. Hands-on, not advisory-only.</p>
            </div>
            <div className="process-step reveal" style={{ "--i": 3 } as React.CSSProperties}>
              <div className="step-num">04</div>
              <h4>Coach</h4>
              <p>We run workshops and function-specific coaching for your leadership team so the capability stays in your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RAISE & SELL - OVERVIEW */}
      <section className="py-24 md:py-32 bg-silk border-t border-ink-10 overflow-hidden" id="raise-sell">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="section-eyebrow">Strategy & Execution</div>
              <div className="inline-block bg-ink text-white px-6 py-2 font-bold tracking-widest text-sm mb-12">RAISE & SELL</div>
              
              <div className="space-y-8">
                <p className="text-ink font-serif text-[1.4rem] md:text-[1.8rem] leading-tight">
                  Whether you&lsquo;re raising funds or selling your company, the outcome is decided well before you go to market.
                </p>
                <p className="text-ink-60 text-[1.1rem] leading-relaxed font-light">
                  We help you maximise your valuation, find the right deal structure, and approach the right buyers and investors.
                </p>
                <p className="text-ink-60 text-[1.1rem] leading-relaxed font-light">
                  The Modern Strategy team has collectively raised over US$500M in debt and equity across our principals&lsquo; careers - from technology firms to brick-and-mortar businesses to investment funds. Tap into our network of investors across 95 countries.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/assets/img/startup_exit_capital.png" 
                alt="Raise & Sell" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* RAISE & SELL - SERVICES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="mb-16 md:mb-24">
            <div className="section-eyebrow !mb-0">Raise & Sell - Services</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { 
                num: "01", 
                title: "Business Model-Buyer Fit", 
                desc: "We reposition your business to appeal to the right acquirers and investors - getting the deal structure that protects your interests and maximises your valuation." 
              },
              { 
                num: "02", 
                title: "Fundamentals", 
                desc: "We clean up your financials, model your future potential, and present your business in the way that resonates most with investors and buyers." 
              },
              { 
                num: "03", 
                title: "Key Attraction Signals", 
                desc: "We help you send the right signals to the market and create genuine demand for your company. Investors and acquirers are human decision-makers - we know what moves them." 
              },
              { 
                num: "04", 
                title: "Compliance and Investor Relations", 
                desc: "We audit and address the red flags that damage deals before they surface in due diligence - protecting your negotiating position." 
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative p-8 md:p-12 bg-ink-05 rounded-2xl border border-transparent transition-all duration-500 hover:bg-white hover:border-ink-10 hover:shadow-xl hover:-translate-y-1">
                <div className="relative z-10">
                  <div className="font-serif text-[3.5rem] leading-none text-ink opacity-[0.03] absolute -top-4 -left-4 select-none group-hover:opacity-[0.07] transition-opacity duration-500">{item.num}</div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink-20">{item.num}</span>
                    <div className="h-px bg-ink-10 w-8"></div>
                  </div>
                  <h3 className="font-bold text-[1.25rem] md:text-[1.5rem] text-ink mb-4 group-hover:text-ink transition-colors duration-300">{item.title}</h3>
                  <p className="text-ink-60 text-[1rem] leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Ready to grow<br />your startup?</h2>
          <p>No sales pitches. No lengthy proposals. A direct conversation with a senior advisor about your goals and whether we are the right fit.</p>
          <Link href="/contact" className="btn btn-dark btn-arrow">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
