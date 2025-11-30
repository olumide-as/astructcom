"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button1 from "@/components/Button1";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaUsers,
  FaMapMarkerAlt,
} from "react-icons/fa";
import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { toast, Toaster } from "react-hot-toast";

const Contact = () => {
  // Form state
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot field added
  });
  const [loading, setLoading] = useState(false);
  // Math captcha state
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, answer: "" });
  const [captchaValid, setCaptchaValid] = useState(false);

  // Generate new captcha
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ a, b, answer: "" });
    setCaptchaValid(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const ans = e.target.value;
    setCaptcha({ ...captcha, answer: ans });
    setCaptchaValid(Number(ans) === captcha.a + captcha.b);
  };

  const handleSubmit = async () => {
    // Validate captcha
    if (!captchaValid) {
      toast.error("Please solve the math question correctly.");
      return;
    }

    // Validate required fields
    const { fullname, email, subject, message, website } = form;
    if (website) {
      // honeypot filled, likely bot
      toast.error("Form submission blocked.");
      return;
    }
    if (!fullname || !email || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          captchaAnswer: captcha.answer.toString(),
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        // Reset form
        setForm({
          fullname: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });
        generateCaptcha();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Toaster position="top-right" />
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
          Get in Touch
        </motion.h1>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl text-[#ffbd59] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontWeight: 600 }}
        >
          Start Your Construction Project Today
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-[#444598] max-w-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Whether it’s a new steel structure, roofing system, or signage
          project, our team is ready to guide you from concept to completion.
        </motion.p>
      </motion.section>

      {/* Contact Info & Form Section */}
      <section className="mx-auto max-w-7xl mb-16 px-6 sm:px-8 md:px-12">
        <div className="flex flex-col-reverse lg:flex-col gap-10">
          {/* Right Column */}
          <div className="flex-1">
            <div className="bg-[#444598] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-md">
              <h4 className="text-xl md:text-3xl mb-2 text-[#ffbd59]">
                Send Us a Message
              </h4>
              <p className="text-white mb-6 lg:max-w-xs">
                We’ll get back to you promptly.
              </p>
              <form
                className="flex flex-col gap-4 py-12"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="fullname" className="text-white mb-1">
                      Full Name
                    </label>
                    <input
                      id="fullname"
                      type="text"
                      className="bg-transparent border-b-2 border-[#ffbd59] text-white py-2 px-1 focus:outline-none"
                      name="fullname"
                      autoComplete="off"
                      value={form.fullname}
                      onChange={handleInputChange}
                      disabled={loading}
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="email" className="text-white mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="bg-transparent border-b-2 border-[#ffbd59] text-white py-2 px-1 focus:outline-none"
                      name="email"
                      autoComplete="off"
                      value={form.email}
                      onChange={handleInputChange}
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="subject" className="text-white mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="bg-transparent border-b-2 border-[#ffbd59] text-white py-2 px-1 focus:outline-none"
                      name="subject"
                      autoComplete="off"
                      value={form.subject}
                      onChange={handleInputChange}
                      disabled={loading}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-white mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="bg-transparent border-b-2 border-[#ffbd59] text-white py-2 px-1 focus:outline-none resize-none"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleInputChange}
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Honeypot hidden field */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handleInputChange}
                  style={{ display: "none" }}
                  autoComplete="off"
                />

                {/* Math captcha */}
                <div className="flex flex-col mt-2">
                  <label className="text-white mb-1 text-sm">
                    Solve: {captcha.a} + {captcha.b}{" "}
                    <span className="text-[#ffbd59]">*</span>
                  </label>
                  <input
                    type="number"
                    className="bg-transparent border-b-2 border-[#ffbd59] text-white py-2 px-1 focus:outline-none w-32"
                    value={captcha.answer}
                    onChange={handleCaptchaChange}
                    disabled={loading}
                    inputMode="numeric"
                  />
                </div>
                <p className="text-xs text-gray-300 mt-4">
                  Please note: We kindly ask that SEO services, marketing
                  offers, or similar promotional inquiries are not submitted
                  through this form. Thank you for understanding.
                </p>
                <div className="mt-4">
                  <Button1
                    label={loading ? "Sending..." : "Send Message"}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault(); // prevent default form submission
                      handleSubmit(); // call handleSubmit directly
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
          {/* Left Column */}
          <div className="flex-1 py-12">
            <h3 className="text-2xl md:text-5xl font-semibold text-[#444598] mb-4">
              Contact Our Team
            </h3>
            <p className="text-[#444598] text-lg mb-8">
              Reach out for consultations, quotes, or any inquiries about our
              prefabricated steel and civil works services.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Call */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl text-[#ffbd59]">
                    <FaPhone className="text-2xl text-[#ffbd59]" />
                  </span>
                  <div className="font-semibold text-[#ffbd59]">Call Us</div>
                </div>
                <div className="text-[#444598] text-base ml-1 mt-1 whitespace-pre-line">
                  +2347066035595
                  <br />
                  +2347014256243
                  <br />
                  astructcom@gmail.com
                </div>
              </div>
              {/* Address */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl text-[#ffbd59]">
                    <FaMapMarkerAlt className="text-2xl text-[#ffbd59]" />
                  </span>
                  <div className="font-semibold text-[#ffbd59]">Address</div>
                </div>
                <div className="text-[#444598] text-base whitespace-pre-line ml-1 mt-1">
                  Plot 3655 Kasumu Street
                  <br />
                  Lakeview Estate Phase 1,
                  <br />
                  Amuwo Odofin, Lagos
                </div>
              </div>
              {/* Social Network */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl text-[#ffbd59]">
                    <FaUsers className="text-2xl text-[#ffbd59]" />
                  </span>
                  <div className="font-semibold text-[#ffbd59]">
                    Social Network
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2 mt-1 ml-1">
                  <a
                    href="https://www.instagram.com/astructcomltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300 text-[#444598]"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/astructcom-limited/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300 text-[#444598]"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-12 mt-12 mb-20 max-w-7xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.3168210117697!2d3.2974836987553844!3d6.48128025931593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b892b4c9e1b17%3A0x7a380bbc062b25f4!2sLakeview%20Estate%20Phase%201!5e1!3m2!1sen!2suk!4v1763826766959!5m2!1sen!2suk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default Contact;
