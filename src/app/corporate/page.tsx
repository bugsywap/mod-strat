import type { Metadata } from "next";
import CorporateClient from "./corporate-client";

export const metadata: Metadata = {
  title: "Corporate Innovation | Modern Strategy",
  description: "We design and co-run venture studios, corporate venture capital programmes, and innovation units - turning internal innovation strategy into live ventures and commercial partnerships.",
  openGraph: {
    title: "Corporate Innovation | Modern Strategy",
    description: "We design and co-run venture studios, corporate venture capital programmes, and innovation units - turning internal innovation strategy into live ventures and commercial partnerships.",
  },
};

export default function Corporate() {
  return <CorporateClient />;
}
