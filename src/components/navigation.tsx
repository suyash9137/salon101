"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    })
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 w-full z-50 bg-deep-espresso border-b border-white/5 transition-colors"
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1440px] mx-auto">
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/services" className="text-label-md font-body uppercase tracking-widest text-ivory/80 hover:text-ivory transition-colors relative group">
              Services
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-ivory origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
            <Link href="/about" className="text-label-md font-body uppercase tracking-widest text-ivory/80 hover:text-ivory transition-colors relative group">
              About
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-ivory origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </Link>
          </nav>
          
          <Link href="/" className="font-heading text-h3 md:text-h2 tracking-[0.1em] text-ivory text-center z-50">
            LUMA Atelier
          </Link>
          
          <div className="flex gap-6 items-center">
            <button 
              aria-label="Menu" 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-ivory hover:text-muted-taupe transition-colors z-50 relative w-6 h-6 flex flex-col justify-center gap-1.5"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
                className="w-full h-[1.5px] bg-current block transition-transform"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
                className="w-full h-[1.5px] bg-current block transition-opacity"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
                className="w-full h-[1.5px] bg-current block transition-transform"
              />
            </button>
            <Link href="/contact" passHref>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-body text-caption uppercase tracking-widest px-6 py-3 rounded-button bg-transparent border border-ivory/30 text-ivory hover:bg-ivory hover:text-deep-espresso transition-colors duration-300 hidden md:block"
              >
                Book Now
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-deep-espresso pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-8 mt-12">
              <motion.div custom={0} variants={linkVariants}>
                <Link href="/" className="font-heading text-4xl text-ivory block">
                  Home
                </Link>
              </motion.div>
              <motion.div custom={1} variants={linkVariants}>
                <Link href="/services" className="font-heading text-4xl text-ivory block">
                  Services
                </Link>
              </motion.div>
              <motion.div custom={2} variants={linkVariants}>
                <Link href="/about" className="font-heading text-4xl text-ivory block">
                  About
                </Link>
              </motion.div>
              <motion.div custom={3} variants={linkVariants}>
                <Link href="/gallery" className="font-heading text-4xl text-ivory block">
                  Gallery
                </Link>
              </motion.div>
              <motion.div custom={4} variants={linkVariants} className="mt-8 pt-8 border-t border-white/10">
                <Link href="/contact" className="font-body text-label-md uppercase tracking-widest text-muted-taupe hover:text-ivory transition-colors block">
                  Contact & Booking
                </Link>
              </motion.div>
            </div>
            
            <motion.div custom={5} variants={linkVariants} className="mt-auto pb-12">
              <div className="font-body text-body text-muted-taupe mb-2">Herengracht 456, Amsterdam</div>
              <a href="tel:+15551234567" className="font-body text-body text-ivory block mb-1">+1 (555) 123-4567</a>
              <a href="mailto:hello@luma-atelier.com" className="font-body text-body text-ivory block">hello@luma-atelier.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
