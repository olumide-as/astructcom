"use client";

import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SubmenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  hoverText: string;
  href: string;
  submenu?: SubmenuItem[];
}

export const menuItems: MenuItem[] = [
  { label: "Home", hoverText: "Return to home", href: "../" },
  { label: "About", hoverText: "Learn about us", href: "../about" },
  {
    label: "Services",
    hoverText: "Our services",
    href: "../services",
    submenu: [
      {
        label: "Prefabricated Steel Buildings",
        href: "../services#prefabricated-steel-buildings",
      },
      {
        label: "Light Gauge Steel Trusses & Roofing",
        href: "../services#light-gauge-steel-trusses-roofing",
      },
      { label: "Cladding & Hoarding", href: "../services#cladding-hoarding" },
      { label: "Billboards & Signage", href: "../services#billboards-signage" },
      {
        label: "Structural Steel Fabrication",
        href: "../services#structural-steel-fabrication",
      },
      { label: "Civil Works", href: "../services#civil-works" },
    ],
  },
  { label: "Projects", hoverText: "See our projects", href: "../projects" },
  { label: "Contact", hoverText: "Get in touch", href: "../contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState<number | null>(null);
  const [mobileSubmenuOpenIndex, setMobileSubmenuOpenIndex] = useState<
    number | null
  >(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // New helper function to check active link
  const isActive = (href: string) => {
    const normalizedHref = href.replace("../", "/");

    if (normalizedHref === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(normalizedHref);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-8 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[96%] xl:w-7xl rounded-2xl flex flex-col items-center px-4 md:px-10 py-4 z-40 text-white transition-all duration-300 ${
          scrolled ? "backdrop-blur bg-white/50 shadow-lg" : "bg-white"
        }`}
      >
        {/* Desktop Menu Items */}
        <div className="flex items-center justify-between w-full ">
          <Link href="/">
            <Image
              src="/assets/astructcom.png"
              alt="AStructCom Logo"
              width={140}
              height={60}
              className="hidden lg:block object-contain w-24"
              priority
            />
          </Link>
          <ul className="hidden xl:flex gap-12 font-medium relative w-full justify-end">
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                className="relative flex items-center justify-center text-center text-[#444598] cursor-pointer"
                onClick={() =>
                  item.submenu
                    ? submenuOpenIndex === index
                      ? setSubmenuOpenIndex(null)
                      : setSubmenuOpenIndex(index)
                    : null
                }
              >
                {item.submenu ? (
                  <span className="flex items-center cursor-pointer text-[#444598] hover:text-[#ffbd59] transition-colors duration-300">
                    {item.label}
                    <FaChevronDown className="ml-1 -mb-0.5 text-sm" />
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`hover:text-[#ffbd59] transition-colors duration-300 flex items-center ${
                      isActive(item.href)
                        ? "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-1 after:bg-[#ffbd59]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.submenu && submenuOpenIndex === index && (
                  <ul className="absolute top-full left-0 mt-2 bg-[#444598] rounded-md shadow-lg min-w-[220px] z-50">
                    {item.submenu.map((subitem) => (
                      <li
                        key={subitem.label}
                        className="border-b last:border-b-0 border-[#ffbd59]/40"
                      >
                        <Link
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#ffbd59] hover:text-[#444598] transition-colors duration-300"
                        >
                          {subitem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          {!menuOpen && (
            <div className="lg:hidden flex items-center justify-between w-full">
              <Link href="/">
                <Image
                  src="/assets/astructcom.png"
                  alt="AStructCom Logo"
                  width={100}
                  height={40}
                  className="object-contain w-16 h-auto"
                  priority
                />
              </Link>
              <button
                onClick={() => setMenuOpen(true)}
                className="z-50"
                aria-label="Open Menu"
              >
                <Bars3Icon className="h-8 w-8 text-[#444598]" />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#444598]/95 text-white z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 md:top-10 md:right-10 z-50"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          <XMarkIcon className="h-8 w-8 text-white" />
        </button>

        <div className="h-full w-full flex flex-col md:flex-row justify-center items-center p-8 md:p-20 overflow-y-auto">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 text-2xl sm:text-3xl md:text-5xl font-light text-center md:text-left">
            {menuItems.map((item, index) => (
              <div key={item.label} className="flex flex-col">
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="transition-all duration-300 hover:text-[#ffbd59] relative text-center block py-2"
                >
                  <span className="block transition-opacity duration-300">
                    {hoveredIndex === index ? item.hoverText : item.label}
                  </span>
                </a>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center mt-10 md:mt-0 items-center text-center space-y-6">
            <Link href="../" className="mb-6">
              <Image
                src="/assets/astructcom.png"
                alt="AStructCom Logo"
                className="h-24 w-auto bg-white p-2 rounded-md "
                width={350}
                height={200}
                priority
              />
            </Link>
            <div className="flex justify-center space-x-6 text-[#ffbd59] text-2xl">
              <a
                href="https://www.instagram.com/chellastonhearingservices/"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
