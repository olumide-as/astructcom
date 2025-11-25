import Services from "./Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AStructCom Services | Prefabricated Steel Buildings & Civil Works in Nigeria",
  description:
    "Discover AStructCom's professional services, including prefabricated steel buildings, structural steel fabrication, civil works, roofing systems, and signage projects across Nigeria. Engineering excellence and sustainable solutions for industrial and commercial construction.",
  keywords:
    "AStructCom, steel buildings Nigeria, structural steel fabrication, civil works Nigeria, roofing systems, signage, prefabricated buildings, construction services Nigeria, industrial construction, commercial construction",
  alternates: {
    canonical: "https://astructcom.com/services",
  },
  openGraph: {
    title: "AStructCom Services | Engineering & Construction in Nigeria",
    description:
      "Explore AStructCom's services in prefabricated steel buildings, structural steel fabrication, civil works, roofing systems, and signage across Nigeria.",
    url: "https://astructcom.com/services",
    siteName: "AStructCom",
    images: [
      {
        url: "/assets/astructcom.png",
        width: 1200,
        height: 630,
        alt: "AStructCom Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AStructCom Services | Prefabricated Steel & Civil Works",
    description:
      "Explore AStructCom's engineering services for prefabricated steel buildings, civil works, structural steel fabrication, roofing systems, and signage across Nigeria.",
    images: ["/assets/astructcom.png"],
  },
};

export default function ServicesPage() {
  return <Services />;
}