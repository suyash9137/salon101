"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, slowReveal } from '@/lib/motion';
import { useRef } from 'react';
import Link from 'next/link';
import WhatsAppButton from '@/components/whatsapp-button';

export default function BookingCTA() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <motion.section 
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-section-gap-mobile md:py-section-gap-desktop px-6 md:px-12 max-w-[1440px] mx-auto text-center"
    >
      <motion.div 
        style={{ scale }}
        className="bg-deep-espresso rounded-3xl md:rounded-[40px] py-24 px-8 md:px-24 flex flex-col items-center shadow-floating"
      >
        <motion.h2 
          variants={slowReveal}
          className="font-heading text-4xl md:text-6xl text-ivory mb-8 tracking-tight"
        >
          Begin Your <span className="italic font-light text-muted-taupe/80">Journey</span>
        </motion.h2>
        <motion.p 
          variants={fadeUp}
          className="font-body text-body-large text-muted-taupe mb-12 max-w-2xl mx-auto text-balance"
        >
          Step away from the rush and allow us to cultivate your natural aura. Appointments are strictly limited to ensure an uncompromised experience.
        </motion.p>
        <WhatsAppButton />
      </motion.div>
    </motion.section>
  );
}