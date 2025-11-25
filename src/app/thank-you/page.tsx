

"use client";

import { useRouter } from "next/navigation";
import Button1 from "@/components/Button1";

export default function ThankYou() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center px-6">
      <img src="/assets/thank-you.png" alt="Thank You" className="mb-6 w-48 h-auto" />
      <h1 className="text-6xl font-bold text-[#251D4B] mb-6">Thank You!</h1>
      <h2 className="text-3xl text-[#251D4B] mb-4">We Appreciate Your Message</h2>
      <p className="text-lg text-[#251D4B] mb-8">
        Your submission has been received. Our team will get back to you shortly.
      </p>
      <Button1 label="Go Home" onClick={() => router.push("/")} />
    </div>
  );
}