"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button1 from "@/components/Button1";
import Hero from "@/components/Hero";
import { FaShieldAlt, FaLightbulb, FaStar } from "react-icons/fa";

export default function About() {
  const coreValues = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical practices in every project we undertake.",
      icon: FaShieldAlt,
    },
    {
      title: "Innovation",
      description: "We embrace modern engineering techniques and innovative solutions to deliver efficient and sustainable structures.",
      icon: FaLightbulb,
    },
    {
      title: "Excellence",
      description: "Commitment to quality, precision, and excellence drives every aspect of our work.",
      icon: FaStar,
    },
  ];

  return (
    <main className="w-full">
      <Hero
        title="About AStructCom"
        subtitle="Building for Tomorrow"
        description="Delivering innovative, reliable, and sustainable prefabricated steel structures, civil works, and custom engineering solutions across Nigeria."
        backgroundImage="/assets/projects/project60.jpg"
      />

      {/* Company Overview */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Image
            src="/assets/projects/project51.jpg"
            alt="AStructCom Team"
            width={600}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#444598] mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            AStructCom is a leading Nigerian construction and engineering company specializing in prefabricated steel buildings, civil works, structural steel fabrication, roofing systems, and custom signage. We combine technical expertise with innovative solutions to deliver projects that meet the highest standards of quality, safety, and efficiency.
          </p>
          <p className="text-lg text-gray-700">
            Our team of skilled engineers, designers, and project managers work closely with clients to provide turnkey solutions from concept to completion, ensuring that every project is delivered on time, within budget, and to specification.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-[#444598] mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700">
              To be the most trusted and innovative provider of prefabricated steel structures and engineering solutions in Nigeria, setting benchmarks for quality, sustainability, and reliability.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#444598] mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700">
              To deliver high-quality engineering and construction services through innovative designs, precision fabrication, sustainable practices, and exceptional client service, ensuring every project contributes to Nigeria's infrastructural growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl font-bold text-[#444598] mb-12 text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className='bg-gray-100 p-6 rounded-xl transition flex flex-col items-center text-center'
              >
                <Icon className="text-3xl text-[#444598] mb-4" />
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-700">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>



      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 text-center border-t border-gray-300">
        <h3 className="text-3xl font-bold text-[#444598] mb-6">Ready to Start Your Project?</h3>
        <p className="text-lg text-gray-700 mb-6">
          Partner with AStructCom for your next industrial, commercial, or civil project and experience unparalleled engineering solutions.
        </p>
        <Button1 label="Contact Us" onClick={() => (window.location.href = "/contact")} />
      </section>
    </main>
  );
}
