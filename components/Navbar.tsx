"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/app/data";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const updateNavbarHeight = useCallback(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, [updateNavbarHeight]);

  const scrollToSection = useCallback(
    (id: string) => {
      const isCommitteePage = pathname === "/committee";

      const performScroll = () => {
        const section = document.getElementById(id);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition =
            sectionPosition + window.pageYOffset - navbarHeight;

          setIsMenuOpen(false);

          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 300); // Increased delay to allow for smoother animation
        } else {
          console.error(`Section with id "${id}" not found`);
        }
      };

      if (isCommitteePage) {
        router.push("/");
        // Use a timeout to wait for the navigation to complete
        setTimeout(() => {
          performScroll();
        }, 100);
      } else {
        performScroll();
      }
    },
    [navbarHeight]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2, ease: "easeInOut" },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.3, ease: "easeInOut", delay: 0.1 },
      },
    },
  };

  return (
    <nav ref={navbarRef} className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-shrink-0 flex-row space-x-3 md:space-x-10">
            <div className="relative w-[180px] h-[40px] md:w-[310px] md:h-[70px]">
              <Image
                src="/assets/logos/TCE-Logo.svg"
                alt="TCE Logo"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="relative w-[95px] h-[40px] md:h-[70px] md:w-[170px]">
              <Image
                src="/assets/logos/iiclogo.webp"
                alt="TCE Logo"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="relative w-[40px] h-[40px] md:h-[70px] md:w-[70px]">
              <Image
                src="/assets/logos/NAAC_LOGO.png"
                alt="TCE Logo"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-[0.95rem] font-medium transition-colors duration-200 active:bg-gray-200"
                  onClick={() => {
                    if (item.id !== "committee") {
                      scrollToSection(item.id);
                    } else {
                      router.push("/committee");
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className=" overflow-hidden lg:hidden"
            onAnimationComplete={() => {
              updateNavbarHeight();
              if (menuRef.current) {
                menuRef.current.style.height = isMenuOpen ? "auto" : "0";
              }
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left active:bg-gray-200"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
              <button
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left active:bg-gray-200"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left active:bg-gray-200"
                onClick={() => scrollToSection("call-for-papers")}
              >
                Call for Papers
              </button>
              <button
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left active:bg-gray-200"
                onClick={() => scrollToSection("important-dates")}
              >
                Important Dates
              </button>
              <button
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left active:bg-gray-200"
                onClick={() => scrollToSection("author-guidelines")}
              >
                Author Guidelines
              </button>
              <button
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left active:bg-gray-200"
                onClick={() => scrollToSection("registration-details")}
              >
                Registration Details
              </button>
              <button
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left active:bg-gray-200"
                onClick={() => {
                  router.push("/committee");
                  setIsMenuOpen(false);
                }}
              >
                Committee
              </button>
              <button
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left active:bg-gray-200"
                onClick={() => scrollToSection("contact-us")}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
