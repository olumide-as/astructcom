import React from "react";
import Projects from "./Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AStructCom Projects | Prefabricated Steel Buildings & Civil Works in Nigeria",
  description:
    "View AStructCom's portfolio of prefabricated steel buildings, structural steel fabrication, civil works, roofing systems, and signage projects across Nigeria. Explore our commitment to engineering excellence, innovation, and sustainable construction.",
  keywords: [
    "AStructCom projects",
    "prefabricated steel buildings Nigeria",
    "structural steel fabrication",
    "civil works Nigeria",
    "roofing systems",
    "signage structures",
    "industrial construction",
    "commercial construction",
  ],
  alternates: {
    canonical: "https://astructcom.com/projects",
  },
  openGraph: {
    title: "AStructCom Projects | Engineering & Construction Nigeria",
    description:
      "Discover AStructCom's portfolio showcasing innovative prefabricated steel buildings, civil works, roofing, and signage projects across Nigeria.",
    url: "https://astructcom.com/projects",
    siteName: "AStructCom",
    images: [
      {
        url: "/assets/astructcom.png",
        width: 1200,
        height: 630,
        alt: "AStructCom Projects Showcase",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AStructCom Projects | Prefabricated Steel & Civil Works",
    description:
      "Explore AStructCom's engineering projects, including steel fabrication, civil works, and signage across Nigeria.",
    images: ["/assets/astructcom.png"],
  },
};

export default function ProjectsPage() {
  return <Projects />;
}