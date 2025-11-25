// src/app/about/page.tsx
import About from "./About"; // import your About component
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AStructCom, Nigeria",
  description:
    "Learn about AStructCom, Nigeria's leading provider of prefabricated steel buildings, civil works, structural steel fabrication, roofing systems, and signage. Discover our mission, vision, and commitment to quality, innovation, and sustainability.",
  keywords:
    "AStructCom, Steel Buildings, Structural Steel, Civil Works, Roofing Systems, Signage, Nigeria Construction, Industrial Construction, Commercial Construction, Prefabricated Buildings",
  alternates: {
    canonical: "https://astructcom.com/about",
  },
  openGraph: {
    title: "About Us | AStructCom, Nigeria",
    description:
      "Learn about AStructCom, Nigeria's leading provider of prefabricated steel buildings, civil works, structural steel fabrication, roofing systems, and signage. Discover our mission, vision, and commitment to quality, innovation, and sustainability.",
    url: "https://astructcom.com/about",
    siteName: "AStructCom",
    images: [
      {
        url: "/assets/astructcom.png",
        width: 1200,
        height: 630,
        alt: "AStructCom About Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | AStructCom, Nigeria",
    description:
      "Learn about AStructCom, Nigeria's leading provider of prefabricated steel buildings, civil works, structural steel fabrication, roofing systems, and signage. Discover our mission, vision, and commitment to quality, innovation, and sustainability.",
    images: ["/assets/astructcom.png"],
  },
};

export default function AboutPage() {
  return <About />;
}