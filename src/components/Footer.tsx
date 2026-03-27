import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink text-ink-40 pt-20 pb-10 border-t border-ink-80">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 lg:gap-12 mb-16">
          <div className="mb-5 lg:mb-0">
            <div className="mb-5">
              <Image
                src="/assets/logos/logo-black.png"
                alt="Modern Strategy"
                width={150}
                height={24}
                className="h-[24px] w-auto brightness-0 invert"
              />
            </div>
            <p className="text-[0.875rem] leading-[1.7] max-w-[280px] font-light">
              Founders turned advisors. We bring hard-won experience from building, scaling, and exiting ventures directly to yours.
            </p>
          </div>
          <div>
            <h4 className="text-ink-20 text-[0.7rem] font-semibold uppercase tracking-[0.15em] mb-6">Company</h4>
            <ul className="flex flex-col gap-[14px] list-none">
              <li><Link href="/" className="text-ink-40 hover:text-white text-[0.875rem] font-light transition-colors duration-300">Home</Link></li>
              <li><Link href="/startups" className="text-ink-40 hover:text-white text-[0.875rem] font-light transition-colors duration-300">Startups</Link></li>
              <li><Link href="/corporate" className="text-ink-40 hover:text-white text-[0.875rem] font-light transition-colors duration-300">Corporate Innovation</Link></li>
              <li><Link href="/insights" className="text-ink-40 hover:text-white text-[0.875rem] font-light transition-colors duration-300">Insights</Link></li>
              <li><Link href="/privacy" className="text-ink-40 hover:text-white text-[0.875rem] font-light transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-ink-20 text-[0.7rem] font-semibold uppercase tracking-[0.15em] mb-6">Services</h4>
            <ul className="flex flex-col gap-[14px] list-none">
              <li><Link href="/#services" className="text-ink-40 hover:text-white text-[0.875rem] font-light transition-colors duration-300">Growth Strategy</Link></li>
              <li><Link href="/#services" className="text-ink-40 hover:text-white text-[0.875rem] font-light transition-colors duration-300">Capital Raising</Link></li>
              <li><Link href="/#services" className="text-ink-40 hover:text-white text-[0.875rem] font-light transition-colors duration-300">Exit Advisory</Link></li>
              <li><Link href="/corporate" className="text-ink-40 hover:text-white text-[0.875rem] font-light transition-colors duration-300">Corporate Innovation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-ink-20 text-[0.7rem] font-semibold uppercase tracking-[0.15em] mb-6">Contact</h4>
            <div className="flex items-start gap-3 mb-4 text-[0.875rem] font-light">
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-ink-40 fill-none stroke-[1.5px] shrink-0 mt-[3px]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>60 Paya Lebar Road<br />#06-28 Paya Lebar Square<br />Singapore 409051</div>
            </div>
            <div className="flex items-start gap-3 mb-4 text-[0.875rem] font-light">
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-ink-40 fill-none stroke-[1.5px] shrink-0 mt-[3px]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:mingwang@modernstrat.com" className="text-ink-40 no-underline hover:text-white">mingwang@modernstrat.com</a>
            </div>
            <div className="flex items-start gap-3 mb-4 text-[0.875rem] font-light">
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-ink-40 fill-none stroke-[1.5px] shrink-0 mt-[3px]">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>Mon-Fri: 10am-6pm<br />Sat: 10am-2pm</div>
            </div>
            <div className="flex gap-2 mt-5">
              <a href="https://www.linkedin.com/company/modernstrat/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-ink-80 flex items-center justify-center transition-all duration-300 hover:border-ink-40 hover:bg-ink-80">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-ink-40">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/ask.mingwang/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-ink-80 flex items-center justify-center transition-all duration-300 hover:border-ink-40 hover:bg-ink-80">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-ink-40">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@ask.mingwang" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 rounded-full border border-ink-80 flex items-center justify-center transition-all duration-300 hover:border-ink-40 hover:bg-ink-80">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-ink-40">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.38-6.21V9.4a8.16 8.16 0 0 0 3.84.96V7.1a4.85 4.85 0 0 1-1-.41z" />
                </svg>
              </a>
              <a href="http://www.twitter.com/ask_mingwang" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full border border-ink-80 flex items-center justify-center transition-all duration-300 hover:border-ink-40 hover:bg-ink-80">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-ink-40">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-ink-80 pt-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-[0.75rem] text-ink-60">
          <span>&copy; 2025 Modern Strategy. All rights reserved.</span>
          <span>Business Strategy Consultancy - Singapore</span>
        </div>
      </div>
    </footer>
  );
}
