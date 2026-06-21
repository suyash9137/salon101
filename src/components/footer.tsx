"use client";

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Footer() {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="w-full bg-warm-cream rounded-t-[40px] mt-12 px-6 md:px-12 py-16 md:py-24 shadow-[0_-10px_40px_rgba(74,59,50,0.05)]"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <motion.div variants={fadeUp} className="md:col-span-4 flex flex-col h-full">
          <div className="font-heading text-h3 text-deep-espresso mb-8 tracking-widest uppercase">LUMA Atelier</div>
          <p className="font-body text-body text-text-secondary max-w-sm mb-12">
            A luxury beauty atelier where beauty, wellness, and craftsmanship meet in a quiet sanctuary.
          </p>
          <div className="mt-auto font-body text-caption text-muted-taupe">
            © {new Date().getFullYear()} LUMA Atelier. All rights reserved.
          </div>
        </motion.div>
        
        <motion.div variants={fadeUp} className="md:col-span-2 md:col-start-6 flex flex-col gap-6">
          <h4 className="font-body text-caption uppercase tracking-widest text-deep-espresso mb-2">Explore</h4>
          <a className="font-body text-body text-text-secondary hover:text-deep-espresso transition-colors" href="/services">Services</a>
          <a className="font-body text-body text-text-secondary hover:text-deep-espresso transition-colors" href="/about">Our Story</a>
          <a className="font-body text-body text-text-secondary hover:text-deep-espresso transition-colors" href="/gallery">Gallery</a>
          <a className="font-body text-body text-text-secondary hover:text-deep-espresso transition-colors" href="/contact">Contact</a>
        </motion.div>
        
        <motion.div variants={fadeUp} className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-body text-caption uppercase tracking-widest text-deep-espresso mb-2">Location</h4>
          <p className="font-body text-body text-text-secondary leading-relaxed">
            Herengracht 456<br />1017 CA Amsterdam<br />Netherlands
          </p>
        </motion.div>
        
        <motion.div variants={fadeUp} className="md:col-span-2 flex flex-col gap-6">
          <h4 className="font-body text-caption uppercase tracking-widest text-deep-espresso mb-2">Connect</h4>
          <p className="font-body text-body text-text-secondary leading-relaxed">
            hello@luma-atelier.com<br />+31 20 123 4567
          </p>
          <WhatsAppButton className="w-full mt-4" />
          <div className="flex gap-4 mt-2">
            <a className="text-text-secondary hover:text-deep-espresso transition-colors" href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
