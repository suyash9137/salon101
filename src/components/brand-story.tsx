"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeUp, staggerContainer, slideInRight, slowReveal } from '@/lib/motion';
import { useRef } from 'react';

export default function BrandStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.section 
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-section-gap-mobile md:py-section-gap-desktop bg-ivory my-section-gap-mobile md:my-section-gap-desktop overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div variants={fadeUp} className="order-2 lg:order-1 relative w-full h-[500px] lg:h-[700px] rounded-card overflow-hidden">
            <motion.div style={{ y: imageY, height: "120%" }} className="absolute inset-0 -top-[10%]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-kBAu3elTdqLDVhda0PboDn-LGVleWkW9M6JncxcgQUikjnDy_aIbL5m3HMJLGVUxtnk9_Rgr8Jnn9rE2YGRq4YFRwplPcDTKcHJVD4-_HfxxitvCLYLv-e0yHMU1dPZPPmUgU4OSSaCUa6mmRHMBzDojf0mrV-mxFJG-zjQfmFWkucuTsmBvFB2bgDhc1xab4x6JsEkq3NBnaz8vJFslKblPAr7WvF24uw057cZsQlcaE8iTI4Tq-scj98-bzrCquq-B7pPzNcM"
                alt="An abstract, highly textured architectural photograph focusing on natural materials."
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          
          <motion.div variants={staggerContainer} className="order-1 lg:order-2 md:pl-12 lg:pl-0">
            <motion.h2 
              variants={slideInRight}
              className="font-heading text-4xl md:text-6xl text-deep-espresso mb-10 leading-tight tracking-tight"
            >
              A Sanctuary<br />of <span className="italic font-light text-muted-taupe">Stillness</span>
            </motion.h2>
            <div className="space-y-8 font-body text-body-large text-text-secondary">
              <motion.p variants={slowReveal}>
                At LUMA Atelier, we believe true beauty emerges when the mind is quiet and the body is grounded. Our space was conceived not just as a salon, but as a retreat from the persistent noise of modern life.
              </motion.p>
              <motion.p variants={slowReveal}>
                Every detail, from the tactile linen surfaces to the unhurried pace of our rituals, is designed to foster a sense of profound peace. We source only the purest organic elements, ensuring that every treatment is an act of deep nourishment.
              </motion.p>
              <motion.p variants={slowReveal}>
                Here, luxury is defined by space, silence, and absolute attention to detail.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="mt-16 relative w-56 h-14">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-na0wLsEnwlDa5cxx05tH5aZf7mX3vgfH4KWEP1-FkgMGJ8_0Rm_IMRybvp4AtN0Dh98eO2P8xuDE_WE7mC4E6XwMB34vdDZ1QfuIAsePV7WfslarEUrHBrXvJdYfugf02g1Ur7aCcyG_QDzZbYqhQHrsRKdSMQKYK5XX0o1o_KVgYOvHERYfvrwtYOjHQV8f9oKm5pbzUvOSCndImAF_N7LZ_h41Ggf6mWyjKMjmP02bBQ-S-1BhOk1-u6FknR8jgyGOB7mMOkA"
                alt="Founder signature"
                fill
                className="opacity-70 object-contain object-left filter contrast-125"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}