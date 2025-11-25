// src/app/contact/page.tsx
import Contact from "./Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AStructCom | Book a Consultation",
  description:
    "Get in touch with AStructCom. Schedule consultations, ask questions, or get professional advice on prefabricated steel buildings, civil works, and structural steel fabrication. Our expert team is ready to assist you.",
  keywords: [
    "contact AStructCom",
    "prefabricated steel buildings Nigeria",
    "structural steel fabrication",
    "civil works Nigeria",
    "book consultation",
  ],
  alternates: {
    canonical: "https://astructcom.com/contact",
  },
  openGraph: {
    title: "Contact AStructCom | Book a Consultation",
    description:
      "Get in touch with AStructCom. Schedule consultations, ask questions, or get professional advice on prefabricated steel buildings, civil works, and structural steel fabrication. Our expert team is ready to assist you.",
    url: "https://astructcom.com/contact",
    siteName: "AStructCom",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AStructCom | Book a Consultation",
    description:
      "Get in touch with AStructCom. Schedule consultations, ask questions, or get professional advice on prefabricated steel buildings, civil works, and structural steel fabrication. Our expert team is ready to assist you.",
  },
};

export default function ContactPage() {
  return <Contact />;
}
