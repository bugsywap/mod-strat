import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Modern Strategy | Business Strategy Consultancy",
  description: "Modern Strategy is a business strategy consultancy by founders who started, grew and sold businesses in both technology and brick & mortar industries. Grow. Raise. Sell.",
  openGraph: {
    title: "Modern Strategy | Business Strategy Consultancy",
    description: "Founders turned advisors. We bring hard-won experience from building, scaling, and exiting ventures directly to yours. Grow. Raise. Sell.",
  },
};

export default function Home() {
  return <HomeClient />;
}
