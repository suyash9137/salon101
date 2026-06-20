"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, slowReveal, revealBottomToTop } from '@/lib/motion';

export default function AboutPage() {
  const team = [
    {
      name: "Elena Rostova",
      title: "Founder & Visionary",
      description: "After traveling the world exploring ancient healing traditions, Elena founded LUMA Atelier to offer an unparalleled sanctuary. She blends minimalist aesthetics with profound therapeutic care.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUqbzy3C-D13OmBEGB4ypEm7mNPYTvW_LWuXBLI3XEOl1Bz4LhsWmBNtWYBYhoN8Lx1YdzWdVDcXQlC60hiTCFZ4M1SktwNltzeGij-V_HMvR80u9LMcvz6dXoBitkUr7kGoy9Me_PlyD74lnk3k91BnPigLEKJZYoDO9Rd0RJ3IdxJr0CuH6MDP5eBUq6OFA3eXebpC4LZjNlarxjGZ9CkaYXwwzqAoExrT7VQwIB30pWIMRfJVLa8gpGNmAPQy5MloAzFxKdsqY"
    },
    {
      name: "Julian Vance",
      title: "Master Therapist",
      description: "A renowned expert in somatic healing and deep tissue techniques. Julian's intuitive touch is revered for releasing tension and restoring the body's natural energetic harmony.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe7nLDPY7vMp73IGF2YiXhdnHI63loT24QQkz2VYteQD_BMuRvh0nMKcTn2H55WlLACc9JHR7vah5dAG8YNUsOR3Ys9J5IMEI-9PzGfeCB4cOge3cOFDWNGZzPB9dPTu_RyjjRY9NrFivs4b7bXrpGoRukkq2zGcKSOihfUYaSeNO_VW5QMkpysRsZhSnX8bZfqVXeT65LhIx3tfQtiTNPGQrucZJYgersAR-Fek113tuyQAPWCwM9yJjj-jXaNJcfFWTNCvrUP5g"
    },
    {
      name: "Maya Lin",
      title: "Lead Esthetician",
      description: "Maya approaches skincare as an art form. Using solely organic, raw botanicals, her transformative facials deliver an unmistakable radiance that begins from within.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMV1hG7GESHQep_1lEBlguoCAAMcC0Nk6qJHxtWgJK20YzOX8Wa_x4I9jn7nwnPDdc-pYkIKXhWroMS3Aol0wJzTN1DaIKM0pxTeF-PS6_uKl3YhZrRjLeqWWjGKu8c3F9BrWmOsv81TGa9fdXySsdvat6-u5zbXklnbq_M0FoV2tMvgrKErpPszKfik_hdskBaZ0q6rjU4aBFC1saaOnoge8LBbeDWLwIXf-IPuQTouCXaOoIzwveXJC4lcfZIXHC97pjJ5UMjck"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="px-6 md:px-12 py-24 md:py-32 max-w-4xl mx-auto text-center"
      >
        <motion.h1 variants={slowReveal} className="font-heading text-4xl md:text-5xl lg:text-6xl text-deep-espresso mb-8 tracking-tight">
          The LUMA <span className="italic font-light text-muted-taupe">Philosophy</span>
        </motion.h1>
        <motion.p variants={slowReveal} className="font-body text-body-large text-text-secondary max-w-3xl mx-auto leading-relaxed">
          We believe that true luxury lies in simplicity, serenity, and a deep connection to the organic world. Our spaces are designed as retreats, where every detail is curated to restore balance and elevate the spirit.
        </motion.p>
      </motion.section>

      {/* Editorial Pull Quote & Image */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="px-6 md:px-12 pb-24 md:pb-32 max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div variants={revealBottomToTop} className="md:col-span-6 relative h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-iIbOPx_Gvvfo178dqGZ5LyRTvhNrK7aMuixZXzFETNCzJW9cizkwheX25Hr8OXuzcnxaKfCepJie7dFBVDrtCiU50y0uxnK4dxo-5fS6sr6hyeFiMbEWmc-vx4znGNy0PzcMF7-gy2mrivPIVSdAOHGVjw8zVkjedVdaJ4Lf9o7z-dyBiMPcgzL23A8HYC6hLrwa_Rspea38WaATwKjoWzNuXah9jZVjjXFoT4amvKjsfhBwkyPuQd9_QlBLvCqqP-xhF_Jc-dQ"
              alt="A tranquil, high-end spa interior"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div variants={staggerContainer} className="md:col-span-6 lg:col-span-5 lg:col-start-8 mt-12 md:mt-0">
            <motion.blockquote variants={slowReveal} className="font-heading text-2xl md:text-3xl lg:text-4xl text-deep-espresso mb-8 leading-snug">
              "Quiet luxury is not an absence of detail, but a refinement of it. It is the texture of stone, the fall of linen, and the <span className="italic font-light text-muted-taupe">unhurried pace</span> of intentional care."
            </motion.blockquote>
            <motion.div variants={fadeUp} className="font-body text-caption text-muted-taupe uppercase tracking-widest">
              — Elena Rostova, Founder
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* The Artisans Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="px-6 md:px-12 py-24 md:py-32 max-w-[1440px] mx-auto"
      >
        <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl text-deep-espresso mb-16 text-center tracking-tight">
          The <span className="italic font-light text-muted-taupe">Artisans</span>
        </motion.h2>
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {team.map((member, idx) => (
            <motion.div 
              variants={fadeUp} 
              key={idx} 
              className={`flex flex-col items-center text-center bg-ivory rounded-[32px] p-8 shadow-soft transition-transform duration-500 hover:-translate-y-4 ${idx === 1 ? 'md:mt-16' : ''} ${idx === 2 ? 'md:mt-32' : ''}`}
            >
              <motion.div variants={revealBottomToTop} className="w-48 lg:w-56 h-48 lg:h-56 rounded-full overflow-hidden mb-8 relative border-4 border-warm-cream">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <h3 className="font-heading text-2xl lg:text-3xl text-deep-espresso mb-2">{member.name}</h3>
              <div className="font-body text-caption text-muted-taupe uppercase tracking-widest mb-4">{member.title}</div>
              <p className="font-body text-body text-text-secondary leading-relaxed w-full max-w-xs">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
