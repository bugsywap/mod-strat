import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact | Modern Strategy",
  description: "Get in touch with our experienced strategy consultants. Reach out to us today for expert guidance in maximizing your business's potential.",
  openGraph: {
    title: "Contact | Modern Strategy",
    description: "Get in touch with our experienced strategy consultants. Reach out to us today for expert guidance in maximizing your business's potential.",
  },
};

export default function Contact() {
  return <ContactClient />;
}
