import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import BackTop from "antd/es/float-button/BackTop";

export const metadata: Metadata = {
  title: "AStructCom | Prefabricated Steel Buildings, Civil Works & Structural Fabrication",
  description:
    "AStructCom is Nigeria's leading provider of prefabricated steel buildings, structural steel fabrication, civil works, roofing systems, and signage. Delivering innovative, sustainable, and high-quality construction solutions.",
  keywords: [
    "AStructCom",
    "steel buildings Nigeria",
    "structural steel fabrication",
    "civil works Nigeria",
    "roofing systems",
    "signage",
    "prefabricated buildings",
    "industrial construction",
    "commercial construction"
  ],
  alternates: {
    canonical: "https://www.astructcom.com",
  },
  openGraph: {
    title: "AStructCom | Prefabricated Steel Buildings & Civil Works in Nigeria",
    description:
      "Discover AStructCom's engineering solutions, including prefabricated steel buildings, civil works, structural steel fabrication, roofing systems, and signage projects across Nigeria.",
    url: "https://www.astructcom.com",
    siteName: "AStructCom",
    images: [
      {
        url: "/assets/astructcom.png",
        width: 1200,
        height: 630,
        alt: "AStructCom",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AStructCom | Prefabricated Steel Buildings & Civil Works",
    description:
      "Explore AStructCom's portfolio and services in steel buildings, civil works, structural fabrication, roofing systems, and signage across Nigeria.",
    images: ["/assets/astructcom.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
        <BackTop />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}