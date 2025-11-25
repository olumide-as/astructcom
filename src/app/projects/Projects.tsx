"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const projectImages = Array.from(
    { length: 69},
    (_, i) => `/assets/projects/project${i + 1}.jpg`
  );

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="max-w-5xl mx-auto relative w-full mt-32 mb-12 py-20 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl text-[#444598] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontWeight: 500 }}
        >
          Our Work
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl text-[#ffbd59] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontWeight: 600 }}
        >
          Featured Construction and Steel Projects
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[#444598] max-w-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore our completed projects across structural steel fabrication,
          roofing systems, civil engineering works, and custom signage
          installations.
        </motion.p>
      </motion.section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectImages.map((src, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.05)] bg-gray-100 cursor-pointer group"
              onClick={() => setLightboxImage(src)}
            >
              <div className="overflow-hidden">
<Image
  src={src}
  alt={`Project ${index + 1}`}
  width={800}
  height={600}
  loading="lazy"
  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
/>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="Preview"
            className="max-w-3xl w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </main>
  );
}