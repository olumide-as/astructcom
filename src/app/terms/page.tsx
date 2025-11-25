"use client";

import React from "react";
import { motion } from "framer-motion";
import Button1 from "@/components/Button1";

const TermsPage = () => {
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
          Terms & Conditions
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl text-[#3A3362] mb-6 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Guidelines for Using Our Engineering & Construction Services
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl max-w-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Please review these terms carefully before engaging AStructCom for fabrication, 
          construction, installation, or consultancy. They outline your rights, obligations, 
          and our commitments as your engineering partner in Nigeria.
        </motion.p>
      </motion.section>

      {/* Content Sections */}
      <section className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* 1. Project Requests & Consultations */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">1. Project Requests & Consultations</h3>
          <p className="mb-2">
            All project enquiries, quotations, and consultations must be booked in advance 
            through our website, email, or official phone lines. AStructCom reserves the 
            right to reschedule or decline requests due to workload, technical considerations, 
            safety concerns, or unforeseen circumstances.
          </p>
          <p className="mb-2">
            Clients are required to provide accurate project information, drawings, site 
            details, and any documentation necessary for proper assessment. Incomplete or 
            incorrect information may affect timelines, cost estimates, or feasibility.
          </p>
        </div>

        {/* 2. Client Responsibilities */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">2. Client Responsibilities</h3>
          <p className="mb-2">
            Clients are responsible for ensuring site readiness, accessibility, provision of 
            required approvals, and adherence to safety guidelines during fabrication or 
            installation activities.
          </p>
          <p className="mb-2">
            AStructCom may decline services if unsafe site conditions, unlawful requests, or 
            behaviours that pose risk to our staff or subcontractors are identified.
          </p>
        </div>

        {/* 3. Privacy & Confidentiality */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">3. Privacy & Confidentiality</h3>
          <p className="mb-2">
            All personal and project information is handled in accordance with the Nigeria 
            Data Protection Regulation (NDPR). Your details, drawings, and documents will not 
            be shared without consent except where required by law or to execute your project.
          </p>
          <p className="mb-2">
            Only authorised team members and vetted partners may access your information, and 
            all records are stored securely.
          </p>
        </div>

        {/* 4. Engineering, Fabrication & Construction Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">4. Engineering, Fabrication & Construction Services</h3>
          <p className="mb-2">
            All engineering, fabrication, and installation work is carried out using 
            professional standards, certified materials, and approved safety procedures. 
            Recommendations are based on technical evaluation and industry best practices.
          </p>
          <p className="mb-2">
            AStructCom does not guarantee specific outcomes where final performance depends 
            on client-supplied materials, site conditions, or third-party contractors.
          </p>
        </div>

        {/* 5. Payments & Fees */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">5. Payments & Fees</h3>
          <p className="mb-2">
            All fabrication, construction, and consultancy services must be paid for according 
            to the agreed quotation or contract. Deposits may be required before work begins. 
            Failure to pay may delay project execution.
          </p>
          <p className="mb-2">
            Payments can be made via bank transfer, corporate payment channels, or any method 
            stated in the project proposal or invoice.
          </p>
        </div>

        {/* 6. Liability */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">6. Liability</h3>
          <p className="mb-2">
            While we take every precaution to ensure quality and safety, AStructCom is not 
            liable for delays or damages arising from factors beyond our control such as 
            bad weather, supply issues, regulatory delays, or client-side errors.
          </p>
          <p className="mb-2">
            Clients must report any concerns immediately. We will investigate and rectify 
            issues related to our workmanship in line with agreed warranties.
          </p>
        </div>

        {/* 7. Complaints & Feedback */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">7. Complaints & Feedback</h3>
          <p className="mb-2">
            Clients are encouraged to send complaints or feedback directly to our support 
            team. We aim to resolve issues promptly, fairly, and professionally. Feedback 
            may be used to improve our engineering and construction processes.
          </p>
        </div>

        {/* 8. Changes to Terms */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">8. Changes to Terms</h3>
          <p className="mb-2">
            These terms may be updated periodically to reflect regulatory changes, operational 
            improvements, or internal policies. Continued use of our services constitutes 
            acceptance of any updated terms.
          </p>
        </div>
      </section>

      {/* CTA or Contact */}
      <section className="max-w-5xl mx-auto mt-16 flex flex-col items-center text-center">
        <h3 className="text-2xl font-semibold text-[#ffbd59] mb-4">
          Have Questions About Our Terms?
        </h3>
        <p className="mb-6 text-lg">
          If you need clarification, please contact our team before confirming a project or service.
        </p>
        <Button1
          label="Contact Us"
          onClick={() => (window.location.href = "/contact")}
        />
      </section>
    </main>
  );
};

export default TermsPage;