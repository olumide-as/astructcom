"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Button1 from "@/components/Button1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MainHero from "@/components/MainHero";

export default function HomePage() {
  const stats = [
    { label: "Projects Completed", value: 120 },
    { label: "Happy Clients", value: 50 },
    { label: "Years of Experience", value: 10 },
    { label: "Engineers & Specialists", value: 35 },
  ];

  const services = [
    {
      title: "Prefabricated Steel Buildings",
      description:
        "Design, fabrication, and erection of high-quality prefabricated steel buildings for industrial, commercial, and institutional use.",
      image: "/assets/service1.jpg",
      link: "/services#prefabricated-steel-buildings",
    },
    {
      title: "Light Gauge Steel Trusses & Roofing",
      description:
        "Supply and installation of durable light gauge steel trusses and roofing systems for long-lasting, low-maintenance structures.",
      image: "/assets/service2.jpg",
      link: "/services#light-gauge-steel-trusses-roofing",
    },
    {
      title: "Cladding & Hoarding",
      description:
        "Modern and robust cladding and hoarding solutions to enhance aesthetics, safety, and security of your projects.",
      image: "/assets/service3.jpg",
      link: "/services#cladding-hoarding",
    },
    {
      title: "Billboards & Signage",
      description:
        "Custom steel billboards and signage structures for maximum visibility and durability, tailored to your branding needs.",
      image: "/assets/service4.jpg",
      link: "/services#billboards-signage",
    },
    {
      title: "Structural Steel Fabrication",
      description:
        "Precision fabrication of structural steel components for buildings, bridges, and infrastructure projects.",
      image: "/assets/service5.jpg",
      link: "/services#structural-steel-fabrication",
    },
    {
      title: "Civil Works",
      description:
        "Comprehensive civil construction services, including foundations, concrete works, and site development.",
      image: "/assets/service6.jpg",
      link: "/services#civil-works",
    },
  ];

  const featuredProjects = [
    { src: "/assets/projects/project1.jpg", alt: "Project 1" },
    { src: "/assets/projects/project2.jpg", alt: "Project 2" },
    { src: "/assets/projects/project3.jpg", alt: "Project 3" },
    { src: "/assets/projects/project4.jpg", alt: "Project 4" },
    { src: "/assets/projects/project5.jpg", alt: "Project 5" },
    { src: "/assets/projects/project6.jpg", alt: "Project 6" },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <MainHero />

      {/* Call-to-Action Section */}
      <section
        id="contact"
        className="py-16 bg-[#444598] text-white text-center"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="mb-4 max-w-xl">
                Contact us today to discuss your needs and discover how we can
                help you succeed.
              </p>
            </div>
            <div className="w-full md:w-auto flex md:justify-end">
              <Button1
                label="Get in Touch"
                onClick={() => (window.location.href = "/contact")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/assets/projects/project51.jpg"
                alt="About AstructCom"
                className=" rounded-l-3xl shadow-[0_0_15px_rgba(0,0,0,0.1)] w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold text-[#444598] mb-6">
                About AstructCom
              </h2>
              <p className="mb-4">
                At AstructCom, we are committed to delivering innovative and
                effective solutions that drive growth and success. Our team of
                experts combines creativity with technical expertise to bring
                your vision to life.
              </p>
              <p>
                With over a decade of experience, we pride ourselves on our
                customer-centric approach and dedication to quality.
              </p>
              <Button1
                label="More Details"
                onClick={() => (window.location.href = "/about")}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-12">
            {stats.map(({ label, value }, idx) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5,
              });
              return (
                <div
                  key={label}
                  ref={ref}
                  className="bg-white hover:translate-y-2 transition-all p-8 w-full lg:w-48 text-center"
                >
                  <div className="h-1 w-12 bg-[#ffbd59] mx-auto mb-4 rounded"></div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#444598]">
                    {inView ? (
                      <CountUp end={value} duration={1.5} delay={idx * 0.3} />
                    ) : (
                      0
                    )}
                    {label === "Years of Experience" ? "" : "+"}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base md:text-lg font-medium">
                    {label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl border-l-4 border-[#444598] pl-4 mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444598] mb-4 text-left">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-left">
              Delivering precision-engineered structures and comprehensive
              construction services for industrial, commercial, and civil
              projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-12">
            {services.map(({ title, description, image, link }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-gray-100 rounded-t-3xl p-6 flex flex-col items-center hover:bg-gray-100 transition-colors duration-300"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover rounded-t-3xl mb-6"
                />
                <div className="flex flex-col h-full w-full">
                  <div className="h-1 w-full bg-[#444598] rounded-full mb-4"></div>
                  <h3 className="text-2xl font-bold mb-2 text-left">{title}</h3>
                  <p className="text-gray-700 mt-3 text-left">{description}</p>
                  <a
                    href={link}
                    className="text-[#444598] hover:underline mt-auto inline-block"
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl border-l-4 border-[#444598] pl-4 mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#444598] mb-4 text-left">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-left">
              Showcasing our latest steel fabrication, roofing, and civil
              construction projects that demonstrate quality, innovation, and
              precision.
            </p>
            <Button1
              label="View All"
              onClick={() => (window.location.href = "/projects")}
            />
          </div>
          <Swiper
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {featuredProjects.map(({ src, alt }) => (
              <SwiperSlide key={alt}>
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-60 md:h-64 lg:h-72 object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#444598] mb-10">
              What Our Clients Say
            </h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
            >
              <SwiperSlide>
                <blockquote className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                  <p className="italic mb-4">
                    "Working with AStructCom on our Lagos warehouse was
                    seamless. Their team delivered on time and the steel
                    structure quality exceeded our expectations."
                  </p>
                  <footer className="font-semibold text-[#ffbd59]">
                    - Chinedu Okafor, Industrial Logistics Ltd.
                  </footer>
                </blockquote>
              </SwiperSlide>
              <SwiperSlide>
                <blockquote className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                  <p className="italic mb-4">
                    "AStructCom renovated our school auditorium in Abuja. Their
                    attention to detail and understanding of local construction
                    challenges was impressive."
                  </p>
                  <footer className="font-semibold text-[#ffbd59]">
                    - Aisha Bello, Greenfield Academy
                  </footer>
                </blockquote>
              </SwiperSlide>
              <SwiperSlide>
                <blockquote className="bg-white p-8 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                  <p className="italic mb-4">
                    "We partnered with AStructCom for a commercial roofing
                    project in Port Harcourt. The team was professional and the
                    final installation was flawless."
                  </p>
                  <footer className="font-semibold text-[#ffbd59]">
                    - Emeka Nwosu, Coastal Properties Ltd.
                  </footer>
                </blockquote>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
}
