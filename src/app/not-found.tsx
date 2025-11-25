"use client";

import { useRouter } from "next/navigation";
import Button1 from "@/components/Button1";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-center px-6">
      <img src="/assets/404.png" alt="404" className="mb-6 w-48 h-auto" />
      <h1 className="text-6xl font-bold text-[#251D4B] mb-6">404</h1>
      <h2 className="text-3xl text-[#251D4B] mb-4">Page Not Found</h2>
      <p className="text-lg text-[#251D4B] mb-8">
         The page you are looking for does not exist or has been moved.
      </p>
      <Button1 label="Go Home" onClick={() => router.push("/")} />
    </div>
  );
}