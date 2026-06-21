"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, slowReveal } from '@/lib/motion';
import WhatsAppForm from '@/components/whatsapp-form';

export default function ContactPage() {
  const formInputClasses = "w-full border-0 border-b border-muted-taupe/30 bg-transparent rounded-none py-4 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-deep-espresso transition-colors duration-300 font-body text-body text-deep-espresso placeholder:text-muted-taupe";

  return (
    <motion.main 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="pb-24 md:pb-32 max-w-[1440px] mx-auto px-6 md:px-12"
    >
      {/* Hero Section */}
      <motion.section variants={staggerContainer} className="mb-24 md:mb-32 max-w-3xl mx-auto text-center pt-24 md:pt-32">
        <motion.h1 variants={slowReveal} className="font-heading text-5xl md:text-7xl text-deep-espresso mb-8 tracking-tight">
          Connect with <span className="italic font-light text-muted-taupe">Us</span>
        </motion.h1>
        <motion.p variants={slowReveal} className="font-body text-body-large text-text-secondary leading-relaxed">
          We invite you to reach out for appointments, inquiries, or personalized consultations. Our sanctuary awaits.
        </motion.p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Contact Details & Form */}
        <motion.div variants={staggerContainer} className="space-y-16">
          <motion.div variants={fadeUp} className="space-y-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-deep-espresso mb-6">Get in Touch</h2>
              <div className="space-y-6 font-body text-body-large text-text-secondary">
                <div className="flex items-center gap-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-taupe"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a className="hover:text-deep-espresso transition-colors" href="tel:+919137499107">+91 91374 99107</a>
                </div>
                <div className="flex items-center gap-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-taupe"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <a className="hover:text-deep-espresso transition-colors" href="mailto:hello@luma-atelier.com">hello@luma-atelier.com</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-body text-caption text-deep-espresso tracking-widest uppercase mb-6">Hours of Tranquility</h3>
              <ul className="space-y-4 font-body text-body text-text-secondary">
                <li className="flex justify-between border-b border-muted-taupe/20 pb-4">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-muted-taupe/20 pb-4">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-muted-taupe/20 pb-4">
                  <span>Sunday</span>
                  <span className="italic text-muted-taupe">Closed for rest</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="bg-ivory p-10 rounded-card shadow-soft">
            <WhatsAppForm title="Book an Appointment" buttonText="Send WhatsApp Message" />
          </motion.div>
        </motion.div>

        {/* Map & Directions */}
        <motion.div variants={fadeUp} className="space-y-10 h-full flex flex-col">
          <div className="flex-grow min-h-[500px] rounded-card overflow-hidden bg-warm-cream relative group">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUngyMgPkqtG2f9cw0RnHzdnmdT6RpeEfB6ESsj6z2IZj-LeYj4JviuRkZex0QZD9xqZ8QrzH4MlJ3SZdit8OHG_tRcBzigA2xrIx-dEOaCBU-0kkvmEvulGXoENsDHXe8YXiW1APBWoggFA8jSXcDazmeE5fimVO_VIQK1lwqkLOWTwnM0UuADbrP7Kp1vTdFD_cklN440WhOkK3cmWlG47sk_pCS4zzsY5QgPEfPx-gHTsz-dkMdajUz5Ny9tnU45DTC5Adectk"
              alt="A stylized, minimalist map illustration"
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-deep-espresso/5 pointer-events-none"></div>
          </div>
          <div className="bg-ivory p-10 rounded-card shadow-soft">
            <h3 className="font-heading text-3xl text-deep-espresso mb-6">Location & Directions</h3>
            <p className="font-body text-body-large text-text-secondary mb-8 leading-relaxed">
              Herengracht 456<br />
              1017 CA Amsterdam<br />
              Netherlands
            </p>
            <div className="space-y-4">
              <h4 className="font-body text-caption text-deep-espresso tracking-widest uppercase mb-4">Arrival Information</h4>
              <p className="font-body text-body text-text-secondary leading-relaxed">
                Complimentary valet parking is available at the main entrance. For guests arriving via transit, we are a brief 5-minute walk from the Central Station. Please follow the stone path marked by our subtle signage.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
