import type { Metadata } from "next";
import StartupsClient from "./startups-client";

export const metadata: Metadata = {
  title: "Startups & Growth Strategy | Modern Strategy",
  description: "Scale your venture with founders who have built and exited multi-million dollar startups. Specialized in revenue growth, fundraising, and exit strategies.",
  openGraph: {
    title: "Startups & Growth Strategy | Modern Strategy",
    description: "Scale your venture with founders who have built and exited multi-million dollar startups. Specialized in revenue growth, fundraising, and exit strategies.",
  },
};

export default function Startups() {
  return <StartupsClient />;
}
