"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, slowReveal, revealBottomToTop } from '@/lib/motion';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="px-6 md:px-12 py-24 md:py-32 max-w-[1440px] mx-auto flex flex-col items-center text-center"
      >
        <motion.h1 variants={slowReveal} className="font-heading text-5xl md:text-7xl text-deep-espresso mb-8 tracking-tight">
          Our <span className="italic font-light text-muted-taupe">Services</span>
        </motion.h1>
        <motion.p variants={slowReveal} className="font-body text-body-large text-text-secondary max-w-2xl mx-auto leading-relaxed">
          A curated collection of bespoke treatments designed to restore balance, enhance your natural beauty, and cultivate inner peace.
        </motion.p>
      </motion.section>

      {/* Category Sticky Nav */}
      <div className="sticky top-[80px] z-40 bg-background/80 backdrop-blur-xl py-4 mb-16 border-b border-muted-taupe/20 hidden md:block transition-all">
        <div className="max-w-[1440px] mx-auto flex justify-center gap-16 px-6">
          <a className={`font-body text-label-md uppercase tracking-widest pb-2 transition-colors ${activeSection === 'hair' ? 'text-deep-espresso border-b border-deep-espresso' : 'text-text-secondary hover:text-deep-espresso'}`} href="#hair">Hair</a>
          <a className={`font-body text-label-md uppercase tracking-widest pb-2 transition-colors ${activeSection === 'skin' ? 'text-deep-espresso border-b border-deep-espresso' : 'text-text-secondary hover:text-deep-espresso'}`} href="#skin">Skin</a>
          <a className={`font-body text-label-md uppercase tracking-widest pb-2 transition-colors ${activeSection === 'body' ? 'text-deep-espresso border-b border-deep-espresso' : 'text-text-secondary hover:text-deep-espresso'}`} href="#body">Body</a>
          <a className={`font-body text-label-md uppercase tracking-widest pb-2 transition-colors ${activeSection === 'wellness' ? 'text-deep-espresso border-b border-deep-espresso' : 'text-text-secondary hover:text-deep-espresso'}`} href="#wellness">Wellness</a>
        </div>
      </div>

      {/* Hair Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="max-w-[1200px] mx-auto px-6 md:px-12 mb-32 scroll-mt-40" 
        id="hair"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <motion.div variants={fadeUp} className="md:col-span-5 flex flex-col gap-8 md:sticky md:top-48">
            <h2 className="font-heading text-4xl md:text-5xl text-deep-espresso tracking-tight">
              Hair <span className="italic font-light text-muted-taupe">Design</span>
            </h2>
            <motion.div variants={revealBottomToTop} className="w-full aspect-[3/4] overflow-hidden relative rounded-card">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHMW5fVkZrAVHdSL3FU6WyXhzBpy5tz8EvU29DpYrnon0jGHDrgdQk_N2XjJTGJsUztYWZuzcQRnA8q3KOMxkwmwgDQN8x3Q6-jYz6OGUfrlipokMm3gVfO_hDS_JcSMlPvf5__MQmrB9kNnOac2zkc0OB3wd9hH5LuJHBxjto1T6iZFUtJCrsYPslmenYXFaBx-8OXFguT5RbWiriwDsJxLiJ37R2w-FW3NnY0-Gp7F5LGlR8dVqUiCJ-BXDR8HORWpcOAjcl_eI"
                alt="Premium styling shears and brush"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div variants={staggerContainer} className="md:col-span-7 flex flex-col gap-10 md:pt-32">
            <motion.div variants={fadeUp} className="flex flex-col border-b border-muted-taupe/20 pb-8 group">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="font-heading text-2xl md:text-3xl text-deep-espresso">Bespoke Cut & Style</h3>
                <span className="font-body text-label-md uppercase tracking-widest text-muted-taupe">$120+</span>
              </div>
              <p className="font-body text-body-large text-text-secondary max-w-md leading-relaxed">A tailored haircut designed for your unique face shape and lifestyle, finishing with an editorial-quality blowout.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col border-b border-muted-taupe/20 pb-8 group">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="font-heading text-2xl md:text-3xl text-deep-espresso">Dimensional Color</h3>
                <span className="font-body text-label-md uppercase tracking-widest text-muted-taupe">$250+</span>
              </div>
              <p className="font-body text-body-large text-text-secondary max-w-md leading-relaxed">Hand-painted, sun-kissed highlights that grow out seamlessly, creating organic depth and movement.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col border-b border-muted-taupe/20 pb-8 group">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="font-heading text-2xl md:text-3xl text-deep-espresso">Scalp Detox Ritual</h3>
                <span className="font-body text-label-md uppercase tracking-widest text-muted-taupe">$85</span>
              </div>
              <p className="font-body text-body-large text-text-secondary max-w-md leading-relaxed">An exfoliating and purifying treatment for the scalp using crushed stone and botanical oils, followed by a deeply relaxing massage.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skin Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="max-w-[1200px] mx-auto px-6 md:px-12 mb-32 scroll-mt-40" 
        id="skin"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <motion.div variants={fadeUp} className="md:col-span-5 md:col-start-8 flex flex-col gap-8 md:sticky md:top-48">
            <h2 className="font-heading text-4xl md:text-5xl text-deep-espresso tracking-tight">
              Skin <span className="italic font-light text-muted-taupe">Rituals</span>
            </h2>
            <motion.div variants={revealBottomToTop} className="w-full aspect-[3/4] overflow-hidden relative rounded-card">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPaVMwU54XMLBLxEnlS43gSNyDWCICbHQAP-S6S2l3rQfY6VEjdmjAt1GNC9xpmBmXnJtxE8-C8KUVU3hVDgIkAlhfeozRC4Ud_YoeXmjUrROX7RXGgqEKkTu0Mr7JNKYtSZwk6WS4mfklCmvKxLSFgwbtQxqiSrMeNk2HVYO0KOfb5EQbw513Nx-JuxojdvVkmWfntk8Qxh-dYjeGuFlrnXngx1_rOR2QTel7JGGe9Baqbm488GL8qoP7UCJKp74aqYn3g3k3xgA"
                alt="Minimalist still life photograph of skincare products"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div variants={staggerContainer} className="md:col-span-7 md:col-start-1 md:row-start-1 flex flex-col gap-10 md:pt-32">
            <motion.div variants={fadeUp} className="flex flex-col border-b border-muted-taupe/20 pb-8 group md:text-right">
              <div className="flex justify-between items-baseline mb-4 md:flex-row-reverse">
                <h3 className="font-heading text-2xl md:text-3xl text-deep-espresso">Signature Glow Facial</h3>
                <span className="font-body text-label-md uppercase tracking-widest text-muted-taupe">$185</span>
              </div>
              <p className="font-body text-body-large text-text-secondary max-w-md leading-relaxed md:ml-auto">Our foundational treatment customized to your skin's immediate needs, incorporating lymphatic drainage and active botanical serums.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col border-b border-muted-taupe/20 pb-8 group md:text-right">
              <div className="flex justify-between items-baseline mb-4 md:flex-row-reverse">
                <h3 className="font-heading text-2xl md:text-3xl text-deep-espresso">Sculpting Gua Sha</h3>
                <span className="font-body text-label-md uppercase tracking-widest text-muted-taupe">$150</span>
              </div>
              <p className="font-body text-body-large text-text-secondary max-w-md leading-relaxed md:ml-auto">A tension-melting facial massage utilizing warm Bian stone to lift, contour, and depuff the face and neck.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}