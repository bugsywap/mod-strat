"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function HomeClient() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    // Parallax on hero image
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current && scrolled < heroRef.current.offsetHeight) {
        heroRef.current.style.setProperty("--parallax", `${scrolled * 0.3}px`);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Parallax CSS variable injection
    const style = document.createElement("style");
    style.textContent = ".hero { --parallax: 0px; } .hero::after { transform: translateY(var(--parallax)); }";
    document.head.appendChild(style);

    // Stats counter animation
    const animateCounters = () => {
      document.querySelectorAll(".stat-number").forEach((el) => {
        const hElement = el as HTMLElement;
        const text = hElement.textContent || "";
        if (hElement.dataset.animated) return;
        hElement.dataset.animated = "1";

        const match = text.match(/^([\$]?)(\d+)(.*)/);
        if (match) {
          const prefix = match[1];
          const target = parseInt(match[2]);
          const suffix = match[3];
          const duration = 1500;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            hElement.textContent = prefix + current + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) statsObserver.observe(statsRef.current);

    // Reveal on scroll with stagger
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      revealObserver.observe(el);
    });

    // Subtle mouse parallax on service cards
    document.querySelectorAll(".service-card").forEach((card) => {
      const htmlCard = card as HTMLElement;
      const handleMouseMove = (e: MouseEvent) => {
        const rect = htmlCard.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const num = htmlCard.querySelector(".service-num") as HTMLElement;
        if (num) num.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
      };
      const handleMouseLeave = () => {
        const num = htmlCard.querySelector(".service-num") as HTMLElement;
        if (num) num.style.transform = "translate(0,0)";
      };
      
      htmlCard.addEventListener("mousemove", handleMouseMove);
      htmlCard.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      statsObserver.disconnect();
      revealObserver.disconnect();
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  // Testimonial slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const moveSlide = (dir: number) => {
    setCurrentSlide((prev) => (prev + dir + totalSlides) % totalSlides);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-video-wrap">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="hero-video"
          >
            <source src="/assets/img/draft-3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="hero-eyebrow">Business Strategy Consultancy - Singapore</div>
          <h1>Grow. Raise. <em>Sell.</em></h1>
          <p className="hero-sub">
            Founders turned advisors. We bring hard-won experience from building, scaling, and exiting
            ventures directly to yours. From startup growth to Fortune 500 innovation programmes, we do the work alongside
            you.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-dark btn-arrow" style={{ background: "var(--color-white)", color: "var(--color-ink)" }}>
              Book a Discovery Call
            </Link>
            <Link href="#results" className="btn btn-ghost btn-arrow">
              View Our Results
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal">
              <div className="stat-number">$500M+</div>
              <div className="stat-label">Raised Across Careers</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number">20+</div>
              <div className="stat-label">Ventures Scaled</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number">Fortune 500</div>
              <div className="stat-label">Innovation Partners</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-number">95</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* LOGO MARQUEE */}
      <div className="marquee">
        <div className="container">
          <div className="marquee-label">Trusted by leading organisations</div>
        </div>
        <div className="marquee-track">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((num, idx) => (
            <img key={idx} src={`/assets/logos/client-${num}.png`} alt="Client" loading="lazy" />
          ))}
        </div>
      </div>

      {/* STRATEGIC PILLARS */}
      <section className="home-pillars">
        <div className="container">
          <div className="section-eyebrow">Our Focus</div>
          <h2 className="section-title">Strategic Pillars</h2>
          <p className="section-desc">We focus on the three critical stages of a company&apos;s lifecycle where we can deliver the highest impact.</p>
          
          <div className="pillars-grid">
            <div className="pillar-item reveal" style={{ "--i": 0 } as React.CSSProperties}>
              <div className="pillar-num">01</div>
              <div className="pillar-content">
                <h3>Grow</h3>
                <p>Revenue growth strategy, go-to-market design, and fractional commercial leadership. We don&apos;t just advise - we embed in your team and co-execute the plan.</p>
              </div>
            </div>
            
            <div className="pillar-item reveal" style={{ "--i": 1 } as React.CSSProperties}>
              <div className="pillar-num">02</div>
              <div className="pillar-content">
                <h3>Raise Capital</h3>
                <p>Debt and equity fundraising for startups and funds. We position your story, model your future, and connect you with the right investors.</p>
              </div>
            </div>
            
            <div className="pillar-item reveal" style={{ "--i": 2 } as React.CSSProperties}>
              <div className="pillar-num">03</div>
              <div className="pillar-content">
                <h3>Sell Your Business</h3>
                <p>We craft your exit strategy around your personal goals - repositioning your business, multiplying your valuation, and getting you the right deal structure before you go to market.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* QUOTE BAND */}
      <div className="quote-band">
        <div className="container-sm reveal">
          <blockquote>&quot;Strategy without execution is hallucination. We don&apos;t deliver slide decks and walk away. We deliver results.&quot;</blockquote>
        </div>
      </div>

      {/* CASE STUDIES */}
      <section className="cases" id="results">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">Proven Results</div>
              <h2 className="section-title">Track record across<br />industries</h2>
            </div>
            <Link href="/contact" className="btn btn-outline btn-arrow">Work with us</Link>
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
            <div className="case-card reveal">
              <div className="case-tag">Ventures</div>
              <h3>Venture Studio Leadership</h3>
              <p>Managed the $5M/year ENGIE Factory venture studio, launching 15 energy transition startups over three years. Set up and operated InMotion Ventures for Jaguar Land Rover, launching 5 ventures.</p>
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

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <div className="section-eyebrow">Testimonials</div>
          <h2 className="section-title">What our clients say</h2>
          <div className="testimonial-slider" style={{ marginTop: "48px" }}>
            <div 
              className="testimonial-track" 
              id="testimonialTrack" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">&quot;A visionary leader, empathetic and genuine; and most well versed in the strategic commercial landscape, he is someone I will not hesitate to work with again.&quot;</blockquote>
                <div className="testimonial-author">Jolyn Tay</div>
                <div className="testimonial-role">General Manager, CardUp</div>
              </div>
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">&quot;The partnership is more akin to a genuine collaboration between partners rather than a client-vendor relationship. We firmly believe that this shift will foster a more mutually beneficial and enduring partnership in the long term.&quot;</blockquote>
                <div className="testimonial-author">Baasandorj Davaasuren</div>
                <div className="testimonial-role">Deputy CEO, LendMN</div>
              </div>
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">&quot;Modern Strategy&apos;s approach stands out because they combine their own experience with a deep understanding of our situation and fintech solutions to derive the optimal strategy, and implement it together with us.&quot;</blockquote>
                <div className="testimonial-author">Khos-Erdene Baatarkhuu</div>
                <div className="testimonial-role">CEO, AND Global Pte. Ltd.</div>
              </div>
              <div className="testimonial-card">
                <blockquote className="testimonial-quote">&quot;Ming Wang is one of those rare lawyers-by-training that has a strong business acumen and entrepreneurship. I always enjoy my conversations with him who impresses me with his sound business ideas and ambitions.&quot;</blockquote>
                <div className="testimonial-author">Ho Chee Wai</div>
                <div className="testimonial-role">Country Head, NIUM</div>
              </div>
            </div>
            <div className="slider-nav">
              <button className="slider-btn" onClick={() => moveSlide(-1)} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="slider-btn" onClick={() => moveSlide(1)} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <span className="slider-counter">
                <span>{String(currentSlide + 1).padStart(2, "0")}</span> / 04
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team" id="team">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-eyebrow">Leadership</div>
              <h2 className="section-title">Proven Founders</h2>
            </div>
            <p className="section-desc">
              Seven senior operators who have built, scaled, and exited businesses across fintech, enterprise SaaS, venture studios, and corporate innovation.
            </p>
          </div>
          <div className="team-grid reveal-stagger">
            {[
              { name: "Ming Wang, Lim", role: "Partner", img: "ming-wang-lim.jpg", desc: "Co-founded Opal, a MAS-licensed Major Payments Institution. Former CBO of GBCI Ventures ($100M fund). Background in law, banking, and PE across payments, fintech, Web3.", link: "https://www.linkedin.com/in/mingwanglim/" },
              { name: "Ming Li, Low", role: "Principal", img: "ming-li-low.jpg", desc: "Former CEO of 8VI Holdings and COO of 8IH Holdings. Two decades of experience across education, financial services, and Web3. Specialist in M&A and operational optimisation.", link: "https://www.linkedin.com/company/modernstrat/" },
              { name: "Andrew Stott", role: "Principal", img: "andrew-stott.png", desc: "20+ years across the US, Europe, and Asia at board level. Invested in 24 ventures with 8 exits. Advisor at Accenture Fintech Lab, DBS Hotspot, Startupbootcamp.", link: "https://www.linkedin.com/company/modernstrat/" },
              { name: "Stuart Thornton", role: "Principal", img: "stuart-thornton.jpg", desc: "25+ years across telecoms, fintech, and ecommerce. Leadership at Verizon, Vodafone, Worldpay. Co-founder and CEO of hoolah - Asia's first BNPL, acquired by ShopBack in 2021.", link: "https://www.linkedin.com/in/stuartjthornton/" },
              { name: "Attlee Hue", role: "Principal", img: "attlee-hue.png", desc: "Former CEO of 8BIT Global and MD of a PE firm with $500M AUM. MAS-licensed financial adviser, CFA Charterholder, Economic Society of Singapore Council Member.", link: "https://www.linkedin.com/company/modernstrat/" },
              { name: "Jeffry Chan", role: "Principal", img: "jeffry-chan.jpg", desc: "Founder and CEO of SalesCandy, scaled to serve 6 Global Fortune 500 companies across SEA. Previously managed $4M/month ad spend and scaled 6 e-commerce businesses.", link: "https://www.linkedin.com/company/modernstrat/" },
              { name: "Colin Allison", role: "Principal", img: "colin-allison.jpg", desc: "Managing Partner at Konnect Partners (FinTech, Web3, AI). Former Partner at Rainmaking (acquired by Bain & Co). Built one of the largest early-stage FinTech portfolios globally.", link: "https://www.linkedin.com/company/modernstrat/" }
            ].map((member, i) => (
              <div key={i} className="team-card reveal" style={{ "--i": i } as React.CSSProperties}>
                <div className="team-photo-wrap">
                  <img className="team-photo" src={`/assets/team/${member.img}`} alt={member.name} loading="lazy" />
                  <div className="team-overlay">
                    <p>{member.desc}</p>
                    <div className="team-overlay-social">
                      <a href={member.link} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <div className="team-role">{member.role}</div>
                  <div className="team-name">{member.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="container">
          <h2>Ready to move your<br />business forward?</h2>
          <p>
            No sales pitches. No lengthy proposals. A direct conversation with a senior advisor about your goals and
            whether we&apos;re the right fit.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Link href="/contact" className="btn btn-dark btn-arrow">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
