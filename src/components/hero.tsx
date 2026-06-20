"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, staggerContainer, slowReveal } from '@/lib/motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-section-gap-mobile md:pb-section-gap-desktop px-6 md:px-12 max-w-[1440px] mx-auto text-center"
    >
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full -z-10 rounded-b-[40px] overflow-hidden m-4 md:m-0 mt-0"
      >
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9LI91rffVhGh4uzL4pjaINWBNCUSvtlSGj4_ulk9Ix0pvPukuRfDehCuAE20Ehe3UujExU_27Vk_Swq2i4Q15kRcJYEOqC9MBN8YpylYHJ894m56YiDfGoMXl6OU18aRsOF4HS_2pfPMwwpmMuFr4ykS9x-iA1PWQd7RD_eBdIfNbRgF7W3c6bBZ3DqrswvYPCIcINLRvfRyk9pC4JSiDOV0KRiTbzSHhGNGc-8kwsnSfop63bc7mkkmb5dHnFqclCT1XDNWXTII"
          alt="A serene, quiet luxury salon interior."
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep-espresso/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso/90 via-deep-espresso/30 to-transparent"></div>
      </motion.div>

      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center mt-12 md:mt-24">
        <motion.h1 
          variants={slowReveal}
          className="font-heading text-5xl md:text-7xl lg:text-[100px] text-ivory mb-6 md:mb-8 text-balance leading-[1.1] tracking-tight"
        >
          The Art of <span className="italic font-light text-muted-taupe">Serenity</span>
        </motion.h1>
        <motion.p 
          variants={slowReveal}
          className="font-body text-lg md:text-2xl text-ivory/90 mb-10 max-w-2xl text-balance leading-relaxed font-light"
        >
          Bespoke beauty in a quiet luxury retreat. Discover an unhurried pace where organic precision meets profound relaxation.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link href="/services" passHref legacyBehavior>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-5 rounded-button bg-ivory text-deep-espresso font-body text-label-md hover:bg-opacity-90 transition-colors tracking-widest uppercase cursor-pointer shadow-soft"
            >
              EXPLORE SERVICES
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}