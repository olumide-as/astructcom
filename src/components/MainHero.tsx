"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const images = [
  "/assets/herobg.jpg",
  "/assets/projects/project8.jpg",
  "/assets/projects/project43.jpg"
];

const MainHero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-start text-white px-4 sm:px-6 md:px-12 lg:px-20 text-left overflow-hidden"
    >
      {/* Background Images with crossfade + subtle zoom */}
      {images.map((img, index) => (
        <motion.div
          key={img}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
            scale: currentImageIndex === index ? 1.05 : 1
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      ))}

      {/* Full-screen Gradient Overlay with subtle opacity animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#444598]/80 to-transparent z-20 pointer-events-none"
        animate={{ opacity: [0.7, 0.85, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content */}
      <div className="relative max-w-[calc(100%-2rem)] sm:max-w-5xl md:max-w-4xl w-full z-30">
        {/* Abstract Background Elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-[#ffbd59]/30 to-transparent rounded-full blur-3xl z-40"
          animate={{ x: [0, 20, 0], y: [0, 15, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 border-2 border-[#ffbd59]/40 rounded-xl rotate-45 z-40"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#ffbd59]/20 rounded-full blur-xl z-40"
          animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h1
          className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-white tracking-wide leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Engineering Tomorrow's Steel Structures
        </motion.h1>
        <motion.p
          className="relative text-base sm:text-lg md:text-xl text-white mb-6 max-w-[calc(100%-2rem)] sm:max-w-5xl md:max-w-7xl text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Delivering innovative, reliable, and sustainable construction
          solutions for modern industrial and commercial projects.
        </motion.p>
        <div className="relative flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.a
            href="#services"
            className="inline-block px-6 py-3 rounded-none border border-[#444598] text-[#444598] bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:bg-gray-200 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Our Services
          </motion.a>
          <motion.a
            href="#projects"
            className="inline-block px-6 py-3 rounded-none text-white bg-[#444598] shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:bg-[#444598]/90 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Our Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
