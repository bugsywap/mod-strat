import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Strategy | Business Strategy Consultancy",
  description: "Modern Strategy is a business strategy consultancy by founders who started, grew and sold businesses in both technology and brick & mortar industries. We bring hard-won experience directly to yours. Grow. Raise. Sell.",
  icons: {
    icon: "/assets/img/fav.png",
    shortcut: "/assets/img/fav.png",
    apple: "/assets/img/fav.png",
  },
  openGraph: {
    title: "Modern Strategy | Business Strategy Consultancy",
    description: "Founders turned advisors. We bring hard-won experience from building, scaling, and exiting ventures directly to yours. Grow. Raise. Sell.",
    url: "https://modernstrat.com",
    siteName: "Modern Strategy",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Strategy | Business Strategy Consultancy",
    description: "Founders turned advisors. We bring hard-won experience from building, scaling, and exiting ventures directly to yours.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
