"use client";

import Hero from "@/components/Hero";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: "prefabricated-steel-buildings",
    title: "Prefabricated Steel Buildings",
    image: "/assets/service1.jpg",
    description: (
      <>
        Our prefabricated steel buildings are designed and fabricated to provide
        maximum strength, durability, and adaptability. Ideal for industrial,
        commercial, and institutional use, each building is engineered to
        withstand harsh environmental conditions while reducing on-site
        construction time. Modular components allow for easy expansion or
        relocation, and our solutions include options for insulation,
        ventilation, internal partitioning, and security enhancements. Every
        structure is precision-engineered offsite, ensuring structural integrity
        and long-term cost efficiency.
      </>
    ),
  },
  {
    id: "light-gauge-steel-trusses-roofing",
    title: "Light Gauge Steel Trusses & Roofing",
    image: "/assets/service2.jpg",
    description: (
      <>
        We supply and install light gauge steel trusses and roofing systems that
        are durable, low-maintenance, and designed to last for decades. Our
        roofing solutions provide optimal protection from the elements, improved
        energy efficiency, and minimal maintenance requirements. Suitable for
        industrial, commercial, and residential structures, each installation is
        carefully engineered to ensure proper load distribution and structural
        stability while maintaining aesthetic appeal.
      </>
    ),
  },
  {
    id: "cladding-hoarding",
    title: "Cladding & Hoarding",
    image: "/assets/service3.jpg",
    description: (
      <>
        Our cladding and hoarding solutions combine functionality with modern
        design to enhance the aesthetics, safety, and security of your projects.
        We provide a range of materials, finishes, and installation options to
        meet both regulatory requirements and client preferences. Each system is
        engineered to withstand environmental stress, improve energy efficiency,
        and provide a professional appearance for construction sites, commercial
        buildings, or public facilities.
      </>
    ),
  },
  {
    id: "billboards-signage",
    title: "Billboards & Signage",
    image: "/assets/service4.jpg",
    description: (
      <>
        We design and fabricate custom steel billboards and signage structures
        tailored to your brand and visibility requirements. Our solutions
        prioritize durability, safety, and aesthetic appeal. Each project is
        engineered to withstand outdoor conditions, high winds, and long-term
        use while providing maximum exposure. We also provide installation
        services and maintenance guidance to ensure longevity and consistent
        presentation.
      </>
    ),
  },
  {
    id: "structural-steel-fabrication",
    title: "Structural Steel Fabrication",
    image: "/assets/service5.jpg",
    description: (
      <>
        Our structural steel fabrication services deliver precision-engineered
        components for buildings, bridges, and infrastructure projects. Using
        advanced CNC machinery and welding techniques, we ensure each component
        meets exact specifications. Quality checks are performed throughout
        fabrication to maintain structural integrity, safety, and compliance
        with engineering standards. We also provide installation guidance to
        integrate steel components seamlessly into construction projects.
      </>
    ),
  },
  {
    id: "civil-works",
    title: "Civil Works",
    image: "/assets/service6.jpg",
    description: (
      <>
        AStructCom provides comprehensive civil works services including site
        preparation, foundation construction, drainage systems, and
        infrastructure support for all types of structures. Our team ensures
        compliance with local regulations, proper soil assessment, and optimal
        design for long-term durability. We handle earthworks, concrete works,
        and road or pavement construction, providing a solid foundation for
        prefabricated or traditional buildings while optimising project
        timelines and budgets.
      </>
    ),
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <main>
      <Hero
        title="Our Services"
        subtitle="Building for Tomorrow"
        description="From prefabricated steel buildings to custom signage and civil works, we provide comprehensive engineering solutions for industrial and commercial projects."
        backgroundImage="/assets/projects/project2.jpg"
      />

      {/* Services Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-12">
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              id={service.id}
              className={`flex flex-col-reverse md:flex-col-reverse ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-center bg-[#444598] rounded-2xl overflow-hidden`}
              style={{ scrollMarginTop: "200px" }}
            >
              <div className="w-full md:w-1/2 p-8 text-white">
                <h3 className="text-2xl mb-4" style={{ fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    !isExpanded ? "line-clamp-3" : ""
                  }`}
                >
                  {service.description}
                </p>
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="text-[#ffbd59] mt-4 underline"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1200}
                  height={800}
                  className={`object-cover w-full p-4 rounded-4xl ${
                    isExpanded
                      ? "md:h-[600px] h-[300px]"
                      : "h-[300px] md:h-[400px]"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
