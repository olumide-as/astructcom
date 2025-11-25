"use client";

import React from "react";
import { motion } from "framer-motion";
import Button1 from "@/components/Button1";

const PrivacyPage = () => {
  return (
    <main className="w-full px-6 md:px-12 py-16 text-[#3A3362]">
      {/* Hero Section */}
      <motion.section
        className="max-w-5xl mx-auto relative w-full mt-32 mb-12 py-20 flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-xl text-[#ffbd59] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontWeight: 400 }}
        >
          Privacy Policy
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl text-[#3A3362] mb-6 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Protecting Your Personal Information
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information when interacting with
          AStructCom’s services, website, and project enquiries across Nigeria.
        </motion.p>
      </motion.section>

      {/* Content Sections */}
      <section className="max-w-5xl mx-auto flex flex-col gap-12">
        
        {/* 1. Information We Collect */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">1. Information We Collect</h3>
          <p className="mb-2">
            We collect information to deliver high-quality engineering, fabrication,
            and construction services. This includes:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Personal details such as your name, address, email, and phone number.</li>
            <li>Project requirements, drawings, documents, or files submitted for quotations or planning.</li>
            <li>Enquiry details, consultation notes, and project specifications.</li>
            <li>Website usage data including cookies, analytics, and traffic sources.</li>
          </ul>
        </div>

        {/* 2. How We Use Your Information */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h3>
          <p className="mb-2">Your information is used for the following purposes:</p>
          <ul className="list-disc list-inside mb-2">
            <li>Responding to enquiries and preparing accurate project quotations.</li>
            <li>Managing fabrication, construction, delivery, and installation processes.</li>
            <li>Communicating project updates, timelines, milestones, and confirmations.</li>
            <li>Improving our services, operational efficiency, and website performance.</li>
            <li>Meeting Nigerian legal, regulatory, tax, and safety compliance obligations.</li>
          </ul>
        </div>

        {/* 3. How We Share Your Information */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h3>
          <p className="mb-2">
            We respect your privacy and will never sell your personal information.
            However, we may share it in the following cases:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>With engineering partners, subcontractors, or logistics providers involved in your project.</li>
            <li>With trusted third-party vendors such as web hosting, email platforms, or analytics tools.</li>
            <li>When required by Nigerian law or to protect safety, rights, and legal obligations.</li>
          </ul>
        </div>

        {/* 4. Data Retention */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">4. Data Retention</h3>
          <p className="mb-2">
            We retain personal, project, and communication data only as long as
            necessary to complete your project or to meet legal requirements in
            Nigeria. When no longer needed, information is securely deleted or anonymised.
          </p>
        </div>

        {/* 5. Cookies & Tracking */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">5. Cookies & Tracking</h3>
          <p className="mb-2">
            Our website may use cookies and analytics tools to enhance your
            browsing experience and collect anonymised data. You may disable
            cookies in your browser settings at any time.
          </p>
        </div>

        {/* 6. Your Rights */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">6. Your Rights</h3>
          <p className="mb-2">
            You have rights under the Nigeria Data Protection Regulation (NDPR), including:
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>Accessing your personal data and requesting a copy.</li>
            <li>Requesting corrections or updates to inaccurate information.</li>
            <li>Requesting deletion or restriction of your data.</li>
            <li>Withdrawing consent for certain uses of your information.</li>
            <li>Objecting to processing for business communication purposes.</li>
          </ul>
        </div>

        {/* 7. Security Measures */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">7. Security Measures</h3>
          <p className="mb-2">
            We implement administrative, technical, and physical safeguards to
            protect your data from unauthorised access, cyber threats, or misuse,
            in compliance with NDPR best practices.
          </p>
        </div>

        {/* 8. Third-Party Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">8. Third-Party Links</h3>
          <p className="mb-2">
            Our website may contain links to external websites. AStructCom is not
            responsible for their content or privacy practices. Please review
            their policies before sharing personal information.
          </p>
        </div>

        {/* 9. Updates to This Policy */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">9. Updates to This Policy</h3>
          <p className="mb-2">
            We may update this privacy policy periodically to reflect changes in
            regulations, technology, or our operations. Continued use of our
            website or services signifies acceptance of revised policies.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto mt-16 flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold text-[#ffbd59] mb-4">
          Questions About Your Privacy?
        </h3>
        <p className="mb-6 text-lg">
          Contact our team if you need clarification or wish to exercise your data rights.
        </p>
        <Button1
          label="Contact Us"
          onClick={() => (window.location.href = "/contact")}
        />
      </section>
    </main>
  );
};

export default PrivacyPage;