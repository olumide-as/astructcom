"use client";

import React from "react";
import { motion, Transition } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  const transition: Transition = {
    duration: 0.6,
    ease: "easeOut",
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        ...transition,
      },
    }),
  };

  return (
    <motion.footer
      className="bg-[#444598] text-white py-16 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Logo + text */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="space-y-4"
          initial="hidden"
          animate="visible"
          transition={fadeUp.visible(0).transition}
        >
          <Image
            src="/assets/astructcom.png"
            alt="AStructCom Logo"
            width={160}
            height={60}
            className="object-contain bg-white p-2 rounded-2xl"
          />
          <p className="text-white text-sm">
            Providing innovative, reliable, and sustainable construction and
            engineering solutions across Nigeria.
          </p>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="space-y-4"
          initial="hidden"
          animate="visible"
          transition={fadeUp.visible(1).transition}
        >
          <h3 className="text-lg md:text-xl">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-[#ffbd59] transition flex items-center space-x-1"
              >
                <span>Home</span>
                <FiArrowUpRight className="text-sm" />
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-[#ffbd59] transition flex items-center space-x-1"
              >
                <span>Service</span>
                <FiArrowUpRight className="text-sm" />
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#ffbd59] transition flex items-center space-x-1"
              >
                <span>About</span>
                <FiArrowUpRight className="text-sm" />
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#ffbd59] transition flex items-center space-x-1"
              >
                <span>Contact</span>
                <FiArrowUpRight className="text-sm" />
              </a>
            </li>
          </ul>
        </motion.div>

  {/* Column 3: Services */}
<motion.div
  variants={fadeUp}
  custom={2}
  className="space-y-4"
  initial="hidden"
  animate="visible"
  transition={fadeUp.visible(2).transition}
>
  <h3 className="text-lg md:text-xl">Services</h3>
  <ul className="space-y-2">
    <li>
      <a
        href="/services#prefabricated-steel-buildings"
        className="hover:text-[#ffbd59] transition flex items-center space-x-1"
      >
        <span>Prefabricated Steel Buildings</span>
        <FiArrowUpRight className="text-sm" />
      </a>
    </li>

    <li>
      <a
        href="/services#light-gauge-steel-trusses-roofing"
        className="hover:text-[#ffbd59] transition flex items-center space-x-1"
      >
        <span>Light Gauge Steel Trusses & Roofing</span>
        <FiArrowUpRight className="text-sm" />
      </a>
    </li>

    <li>
      <a
        href="/services#cladding-hoarding"
        className="hover:text-[#ffbd59] transition flex items-center space-x-1"
      >
        <span>Cladding & Hoarding</span>
        <FiArrowUpRight className="text-sm" />
      </a>
    </li>

    <li>
      <a
        href="/services#billboards-signage"
        className="hover:text-[#ffbd59] transition flex items-center space-x-1"
      >
        <span>Billboards & Signage</span>
        <FiArrowUpRight className="text-sm" />
      </a>
    </li>

    <li>
      <a
        href="/services#structural-steel-fabrication"
        className="hover:text-[#ffbd59] transition flex items-center space-x-1"
      >
        <span>Structural Steel Fabrication</span>
        <FiArrowUpRight className="text-sm" />
      </a>
    </li>

    <li>
      <a
        href="/services#civil-works"
        className="hover:text-[#ffbd59] transition flex items-center space-x-1"
      >
        <span>Civil Works</span>
        <FiArrowUpRight className="text-sm" />
      </a>
    </li>
  </ul>
</motion.div>

        {/* Column 4: Contact */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="space-y-4"
          initial="hidden"
          animate="visible"
          transition={fadeUp.visible(3).transition}
        >
          <h3 className="text-lg md:text-xl">Contact</h3>
          <p>
            <a
              href="tel:+2347066035595"
              className="hover:text-[#ffbd59] transition"
            >
              +2347066035595
            </a>
            <br />
            <a
              href="tel:+2347014256243"
              className="hover:text-[#ffbd59] transition"
            >
              +2347014256243
            </a>
          </p>
          <p>
            Plot3655 Kasumu Street <br /> Lakeview Estate Phase 1, <br /> Amuwo
            Odofin, Lagos
          </p>
          <p className="hidden">astructcom@gmail.com</p>{" "}
          {/* hidden from plain view */}
          <div className="flex space-x-4 mt-2 text-[#ffbd59] text-2xl">
            <a
              href="https://www.instagram.com/astructcomltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/astructcom-limited/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 text-[#ffbd59]"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        className="max-w-7xl mx-auto border-t border-[#ffbd59] border-opacity-20 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      />

      {/* Bottom Section */}
      <motion.div
        variants={fadeUp}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-white space-y-2 md:space-y-2 text-center"
        initial="hidden"
        animate="visible"
        custom={4}
        transition={fadeUp.visible(4).transition}
      >
        <span>
          © {year} AStructCom. All rights reserved. |{" "}
          <a href="/privacy" className="hover:text-white underline transition">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:text-white underline transition">
            Terms of Service
          </a>
        </span>
        <span>
          Made with 💖 by{" "}
          <a
            href="https://velra.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline transition"
          >
            Velra
          </a>
        </span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
