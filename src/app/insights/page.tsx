import type { Metadata } from "next";
import InsightsClient from "./insights-client";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Insights | Modern Strategy",
  description: "Practical strategy and business insights from people who have done it, not theorised about it. Perspectives on growth, capital markets, and building ventures.",
  openGraph: {
    title: "Insights | Modern Strategy",
    description: "Practical strategy and business insights from people who have done it, not theorised about it.",
  },
};

export default function Insights() {
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const featuredPost = sortedPosts[0] || null;
  const otherPosts = sortedPosts.slice(1);

  return <InsightsClient featuredPost={featuredPost} otherPosts={otherPosts} />;
}
