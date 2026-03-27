"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function StartupsClient() {
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

      {/* PROVEN RESULTS - RE-DESIGNED */}
      <section className="bg-silk py-screen relative overflow-hidden" id="results">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-ink-05 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container relative z-10">
          <div className="mb-24 reveal">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.3em] text-ink-20 mb-6 block">Track Record</span>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-ink mb-12 leading-[1.1]">Proven <em>Results</em></h2>
            <div className="h-[2px] w-24 bg-ink"></div>
          </div>

          <div className="space-y-32">
            {/* MS Engagements */}
            <div className="reveal">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
                <div className="inline-block bg-ink text-white px-6 py-2 font-bold tracking-widest text-sm uppercase">MS Engagements</div>
                <div className="h-px bg-ink-10 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 gap-12">
                {[
                  {
                    cat: "FinTech",
                    title: "AND Global - Series B, US$21.4M",
                    desc: "Multi-business FinTech platform (lending, loan origination, credit scoring, intelligent data processing). AI-enabled. GTM into Philippines, Thailand, Vietnam, and Indonesia. Scaled to Series B."
                  },
                  {
                    cat: "Logistics",
                    title: "Go-Genie - 3x ARR & OCBC Venture Funding",
                    desc: "Pre-Series A LogisticsTech. Organisational transformation, revenue strategy, fundraise. Transformed team governance, prepared financial and legal assets, developed business narrative. Secured OCBC venture debt. On path to triple ARR with 60%+ margin within 12 months."
                  },
                  {
                    cat: "Retail",
                    title: "In Good Company - 8-Figure Fashion Retail",
                    desc: "Developed granular financial intelligence dashboard across SKUs, buyer segments, outlets, and distribution channels - unlocking profit visibility at the unit level."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group relative bg-white p-8 md:p-12 rounded-2xl border border-ink-05 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-ink-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-3">
                        <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink-20 mb-2 block">{item.cat}</span>
                        <div className="w-10 h-10 rounded-full border border-ink-10 flex items-center justify-center font-serif text-sm text-ink-40 group-hover:bg-ink group-hover:text-white transition-all duration-500">{idx + 1}</div>
                      </div>
                      <div className="md:col-span-9">
                        <h4 className="font-serif text-[1.5rem] md:text-[1.8rem] mb-6 text-ink leading-tight group-hover:text-ink transition-colors">{item.title}</h4>
                        <p className="text-ink-60 text-[1.05rem] md:text-[1.15rem] font-light leading-relaxed max-w-3xl">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Principals Previous Ventures */}
            <div className="reveal">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
                <div className="text-xl font-bold italic text-ink-80">Principals&apos; Previous Ventures</div>
                <div className="h-px bg-ink-20 flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { tag: "1600%", title: "Payment Volume Growth", desc: "Transformed a traditional remittance company into a neo-bank - 1600% growth in total payment volume and 30x users." },
                  { tag: "600%", title: "Order Volume Growth", desc: "Grew a regional BNPL institution serving retail and SMEs - 600% surge in order volume in 12 months." },
                  { tag: "FinTech", title: "FinTech Startups in Emerging Markets", desc: "Launched multiple startups addressing financial inclusion - payments, BNPL, remittances, agri-commodity working capital, and earned wage access." },
                  { tag: "SaaS", title: "Scaled a SaaS Across Southeast Asia", desc: "Scaled a sales lead management SaaS to serve 6 Fortune 500 companies across Indonesia, Philippines, Thailand, and Malaysia." },
                  { tag: "Hospitality", title: "20x ROI in 12 Months", desc: "Boosted a global hospitality group's ROI by 20x using proprietary social media audience segmentation." },
                  { tag: "$5M AUD", title: "Capital and Cost Savings", desc: "$5M AUD raised and $400K AUD saved for a small-cap publicly listed property developer in Australia." },
                  { tag: "GTM", title: "Market Entry", desc: "Go-to-market strategy for a European-headquartered fintech into Australia and New Zealand." },
                  { tag: "Web3", title: "Financial Infrastructure", desc: "Built Web3 solutions with banks - KYC, crowdfunding, asset finance, and inter-bank exchange." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-ink-05 transition-all duration-300 hover:bg-white hover:border-ink-10 hover:shadow-xl group">
                    <div className="text-[0.7rem] font-bold uppercase tracking-widest text-ink-20 mb-6 group-hover:text-ink transition-colors">{item.tag}</div>
                    <h4 className="font-serif text-[1.3rem] mb-4 text-ink leading-tight">{item.title}</h4>
                    <p className="text-ink-60 text-[0.95rem] font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
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
                  The Modern Strategy team has collectively raised over US$500M in debt and equity across our principals&lsquo; careers - for technology firms to brick-and-mortar businesses to investment funds. Tap into our network of investors across 95 countries.
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
