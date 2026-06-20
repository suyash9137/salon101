"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, slowReveal } from '@/lib/motion';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'space',
      label: 'The Space',
      title: 'Reception & Lounge',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4qeSXfz7OT6v8wXqNUXNrkKp8GTkkrrY1roTI4UavTeacI0Pl9fC8XO2Yuknov1g19HY4PO2JwzVx4srPn3UUACiTKZBkdL70FciBVeUTz4UhMLrl3MVZ4sWrw7ePVztnNvryH1BPKTihJDMldvPrG0rhwIQLgN4fw_GFpebTrDvYIig0Cc_XqUM46Fz1uPAu7z7P3LgNBtqbfET0VuddgKuby-y3NwC-6KJMJYHP93OPCmlPX0XLhl4pUtRk-Mzbww6Yih6QggI',
      alt: 'A serene, minimalist spa reception area',
      aspectRatio: 'aspect-[3/4]',
      marginTop: ''
    },
    {
      id: 2,
      category: 'details',
      label: 'Details',
      title: 'Hot Stone Therapy Tools',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQkcabfbOgE0QS1p31rQIGoJErUJIXk8QaZ5nZCXmqkM_z2lQhbLP9NTgyeRDY3o7RLLtsOYJ042elE2wZ0cSkmnDnTseuoXUNMihLllIxCvhtq668ysiynV5OGSRb0DvIifYNd6nQga8080WbdH5d-v44roCFxjHXLPXmq_w-isLYJIC-PHCI1MmuX1W_cKEn6nuTkbUwsUMm9mer1orjdBi108TaeYR8i8OYs-R4pycQPL-Q-JneXO4sS8bUMDxHq-tmRfjR2bA',
      alt: 'Smooth, warm beige river stones',
      aspectRatio: 'aspect-square',
      marginTop: 'md:mt-12 lg:mt-24'
    },
    {
      id: 3,
      category: 'work',
      label: 'Our Work',
      title: 'Signature Massage',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA61hEdzcRfdKL5L_blv6UZGCOR8varHNHbPh65Bkgxhya3emVT3sJI1GguX_A4Pr0r381bTKuT4FN0lKQJFGKEo2r1_cG-4XKoFQ0Fv34jrY-AlB8cV5fcwC3m6tlms_0L2_KjloSBs4KohHluaZljytsWx5200omK06gyhXg8q2urdM9OzpoWF_o9Y3cmBBi256iUFmyJmcvViDHvdD-4EVJpQGgBQTlMFvsQTal_kCJaiAvOgQ7ube8vCquNKNl9YJ15OnPhwdk',
      alt: 'A tranquil massage therapy session',
      aspectRatio: 'aspect-[4/5]',
      marginTop: ''
    },
    {
      id: 4,
      category: 'space',
      label: 'The Space',
      title: 'Treatment Room III',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT6SmcQiUZmOCp_2JJHJK2UgOFEa-o428EXvD6E98ndY6FvRYEk-6P0n8YqOhwS_p_sitEjCS20h-idt71PXUL34YFM2EAwpHRMTtum9HEyz5r7EXuoGhok-n28qpzUkKF0RRGgvamdiEFsWeEbdoTkB7JhTvHXN1vQZ0AdEOsMhH2gA0TBcwGJUXQoI57dUnlpYHO_0Wz7HGWT2yocrQ-d9U-Q1b28AjgYiB8B0hQb4HPzzwaLNP14MvjngVe9MuvOlDww7ZyLmk',
      alt: 'A luxurious private treatment room',
      aspectRatio: 'aspect-[16/9]',
      marginTop: 'lg:-mt-12'
    },
    {
      id: 5,
      category: 'details',
      label: 'Details',
      title: 'Organic Botanicals',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE592rBltzsYLS2FfMOS_147LISHsxvHw-7M6_Kk7m0FvUuqSEEHyRoGkZAm3nA9eNPQnop5lxcgMInlPxdezgfBvwnNlTYL2sXpxBsF2ljeDrFTj808NjmDIkZku9hd89fyy0pGhxsLr_iZL-ZQbEmfAr4Blh5IfY1HIJkjHAHtkP-c4S7UykKbX8OIBPuvt9G7mh2m1Sjqx6xSTqKfBZBkNcfu3duuoZ_n7npamNACVOcVbpTfqicNXIJ4l0n_gMH-O70um9bMA',
      alt: 'Artisanal ceramic bowls with organic facial scrubs',
      aspectRatio: 'aspect-[3/4]',
      marginTop: ''
    },
    {
      id: 6,
      category: 'work',
      label: 'Our Work',
      title: 'Rejuvenating Facial',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfqdfRAweCTjHJvdrZyFY-n6PZg7Ep7eyjElvOK2KMKwIMDHwrR_27EcUNW1iNkgt8HMRd3Z6geJnRTHkPJHA19gEaLMBZjFF78azjlB9kCn52bRQ7g-nWsQrF89TNUigHGYzSaCDtInp_nCCfnOO-1VLgOlE9A_OfVpd1K45l339XMA9fmtF6jfLhtTkm1GSI2PbKUW8hIQaY4FXJh_nOmNFj2EKXRfDCsa9A3opQSFIloB4XcMOYZoReBuTqxO_MrrXC0wpA02Q',
      alt: 'Client receiving a calming facial treatment',
      aspectRatio: 'aspect-square',
      marginTop: 'md:mt-16'
    }
  ];

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 py-24 md:py-32">
      {/* Header Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="mb-16 md:mb-24 max-w-2xl text-center md:text-left mx-auto md:mx-0"
      >
        <motion.h1 variants={slowReveal} className="font-heading text-5xl md:text-7xl text-deep-espresso mb-8 tracking-tight">
          Visual <span className="italic font-light text-muted-taupe">Journal</span>
        </motion.h1>
        <motion.p variants={slowReveal} className="font-body text-body-large text-text-secondary leading-relaxed">
          A curated collection of our spaces, delicate details, and the transformative work we do. Inspired by natural light and organic textures.
        </motion.p>
      </motion.div>

      {/* Filters */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start"
      >
        <button 
          onClick={() => setFilter('all')} 
          className={`font-body text-label-md uppercase tracking-widest px-8 py-3 rounded-button transition-colors duration-300 ${filter === 'all' ? 'bg-deep-espresso text-ivory' : 'border border-muted-taupe/30 hover:border-deep-espresso text-deep-espresso'}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('space')} 
          className={`font-body text-label-md uppercase tracking-widest px-8 py-3 rounded-button transition-colors duration-300 ${filter === 'space' ? 'bg-deep-espresso text-ivory' : 'border border-muted-taupe/30 hover:border-deep-espresso text-deep-espresso'}`}
        >
          The Space
        </button>
        <button 
          onClick={() => setFilter('work')} 
          className={`font-body text-label-md uppercase tracking-widest px-8 py-3 rounded-button transition-colors duration-300 ${filter === 'work' ? 'bg-deep-espresso text-ivory' : 'border border-muted-taupe/30 hover:border-deep-espresso text-deep-espresso'}`}
        >
          Our Work
        </button>
        <button 
          onClick={() => setFilter('details')} 
          className={`font-body text-label-md uppercase tracking-widest px-8 py-3 rounded-button transition-colors duration-300 ${filter === 'details' ? 'bg-deep-espresso text-ivory' : 'border border-muted-taupe/30 hover:border-deep-espresso text-deep-espresso'}`}
        >
          Details
        </button>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16"
      >
        <AnimatePresence>
          {filteredItems.map(item => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex flex-col gap-6 mb-8 md:mb-12 ${item.marginTop}`}
            >
              <div className={`relative w-full ${item.aspectRatio} overflow-hidden rounded-card group`}>
                <Image 
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="font-body text-caption uppercase tracking-widest text-muted-taupe mb-2">{item.label}</span>
                <span className="font-heading text-h3 text-deep-espresso">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
