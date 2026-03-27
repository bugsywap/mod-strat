import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Modern Strategy",
  description: "Our commitment to your privacy and data protection.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-silk pt-[140px] md:pt-[180px] pb-20">
      <div className="container-sm">
        <div>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal text-ink leading-[1.1] tracking-[-0.02em] mb-12">
            Privacy <em>Policy</em>
          </h1>
          
          <div className="prose prose-ink max-w-none font-light leading-relaxed text-ink-60 space-y-8">
            <section>
              <h2 className="font-serif text-2xl text-ink font-normal mb-4">Introduction</h2>
              <p>
                Modern Strategy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website modernstrat.com.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink font-normal mb-4">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may include your name, email address, company name, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink font-normal mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your inquiries and provide the services you request.</li>
                <li>To send you newsletters, updates, and strategic insights (if you have opted in).</li>
                <li>To improve our website and user experience.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink font-normal mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or alteration. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink font-normal mb-4">Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though some features of the site may not function properly.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink font-normal mb-4">Third-Party Services</h2>
              <p>
                We may use third-party service providers (such as Netlify for hosting and forms) to help us operate our website and business. These providers have access to your information only to perform specific tasks on our behalf.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-ink font-normal mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:mingwang@modernstrat.com" className="text-ink underline underline-offset-4 decoration-ink-20 hover:decoration-ink transition-colors">mingwang@modernstrat.com</a>.
              </p>
            </section>

            <div className="pt-12 border-t border-ink-10 text-sm italic">
              Last updated: March 2024
            </div>
          </div>

          <div className="mt-16">
            <Link href="/" className="btn btn-outline btn-arrow">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
