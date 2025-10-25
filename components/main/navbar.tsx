'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { NAV_LINKS, SOCIALS } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMobileMenuOpen(false);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    
    // If we're not on the home page and trying to navigate to a section
    if (pathname !== '/' && link.startsWith('#')) {
      // Navigate to home page with the section hash
      window.location.href = '/' + link;
      return;
    }

    // If we're on the home page, just scroll to the section
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Regular page navigation for non-hash links
      window.location.href = link;
    }
    
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50">
      <div className="flex items-center justify-between h-[60px] sm:h-[65px] md:h-[70px] px-4 sm:px-6 md:px-10">
        {/* Logo & Name */}
        <Link 
          href="#about-me" 
          className="flex items-center gap-2 sm:gap-3" 
          onClick={closeMenu}
        >
          <div className="relative w-[35px] h-[35px] sm:w-[38px] sm:h-[38px] md:w-[40px] md:h-[40px] overflow-hidden rounded-full border-2 border-[#2A0E61] hover:border-[#7042f88b] transition-colors duration-300">
            <Image
              src="/icons/shreee.jpg"
              alt="Shrikrishna Sutar"
              fill
              style={{ objectFit: 'cover' }}
              draggable={false}
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 640px) 35px, (max-width: 768px) 38px, 40px"
            />
          </div>
          <span className="hidden sm:block text-white font-bold tracking-wide text-sm sm:text-base md:text-lg">
            I&apos;m Shrikrishna Sutar
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 bg-[rgba(3,0,20,0.37)] px-6 lg:px-8 py-2 rounded-full border border-[rgba(112,66,248,0.38)] text-gray-200">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.title} 
              href={link.link}
              className="hover:text-[rgb(112,66,248)] transition font-medium text-sm lg:text-base"
              onClick={(e) => onNavClick(e, link.link)}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Social Links (Desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link 
              key={name} 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Icon className="h-5 w-5 lg:h-6 lg:w-6 text-white hover:text-[rgb(112,66,248)] transition" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl sm:text-3xl flex items-center justify-center p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[85%] xs:w-[75%] sm:w-[60%] h-screen bg-[#030014]/90 backdrop-blur-lg shadow-lg flex flex-col items-center justify-center text-gray-300 md:hidden"
          >
            {/* Profile Image - Mobile */}
            <div className="absolute top-4 sm:top-5 left-4 sm:left-6">
              <div className="relative w-[35px] h-[35px] sm:w-[38px] sm:h-[38px] overflow-hidden rounded-full border-2 border-[#2A0E61] hover:border-[#7042f88b] transition-colors duration-300">
                <Image
                  src="/icons/shreee.jpg"
                  alt="Shrikrishna Sutar"
                  fill
                  style={{ objectFit: 'cover' }}
                  draggable={false}
                  className="cursor-pointer hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 35px, 38px"
                />
              </div>
            </div>

            {/* Mobile Name */}
            <div className="absolute top-4 sm:top-5 left-16 sm:left-20">
              <span className="text-white font-medium text-sm sm:text-base">
                Shrikrishna Sutar
              </span>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 sm:top-5 right-4 sm:right-6 text-white text-2xl sm:text-3xl p-1"
              onClick={closeMenu}
            >
              ✖
            </button>

            {/* Mobile Links */}
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-base sm:text-lg font-medium -mt-10">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.title} 
                  href={link.link}
                  onClick={(e) => onNavClick(e, link.link)} 
                  className="hover:text-[rgb(112,66,248)] transition px-4 py-2 rounded-full hover:bg-[rgba(112,66,248,0.1)]"
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link 
                  key={name} 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white hover:text-[rgb(112,66,248)] transition" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
