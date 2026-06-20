"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, revealBottomToTop } from '@/lib/motion';

export default function FeaturedServices() {
  const services = [
    {
      title: "Hair Artistry",
      description: "Tailored cuts and organic color treatments designed to enhance your natural grace.",
      price: "From $150",
      category: "HAIR",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjls0JDDfk4kYkRIFOT0RL-DDe48OzCPiqVq6ux0Ktv1UitB8oTlO8Xk6-c_obluvrR_347VJjJIUSJLZJv-jluoGy5J3JOZOhJwb3rFgL_dlKIMd2c7nYzVxm1eKZ4z4H59VDuHBKyRbwhXDfsTAOLLL_N-jH0KOjgGVeyYlMbEmzZFlM8YnzVMJV3LiVLAG2jxzhWbSPm38uAeZn9rqFY0nUcMFdWQal6ppGundpZNaua6KTzs7l_4vKF_3M3VOlgrI1R_Y4BuA",
      imageAlt: "A close-up of healthy, flowing hair."
    },
    {
      title: "Bespoke Skincare",
      description: "Customized facial rituals utilizing botanical extracts and advanced, non-invasive techniques.",
      price: "From $180",
      category: "SKINCARE",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIaQbq-xYhpcahFU3qJNCc9h4lBF1V7AFY9_i9ZArR92zlNbV2gXcbomfg15iohG9UYp5KBKwVej1darm4rBR4WtTXEQf9TH5R1nq2HzOL1YtYr7AuCKljfLfgu9fwqbI1R-uT1Rcz1vHyFBCMSXJVnZNIMiIqzjCdxxGlI2I-RWukla0Q-pm3vNykaYrHJPuKi4wlGddZvosH2_L3vp4BeehIj7U4eTc3HSxAIyM7ffTJwOKfCpNZia-z5iQXaOJrkBXmHoRW3LM",
      imageAlt: "Organic skincare products."
    },
    {
      title: "Holistic Wellness",
      description: "Restorative bodywork and energy balancing to realign your inner and outer self.",
      price: "From $200",
      category: "WELLNESS",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Ayz_4J4GqtlLFIjFXfuIJG62Fzmd7NKTWgydHSqQwq2fkdjjFEvSeG7B3jr5ADEzh1SvmQMc5abtJVBHPNy_3bj_bNMWMT4Wj37LB0jnmQslssod5bwIBcJSdXQphnu1cSvC2M-ALcN6Ydpc6tcIJHkg1SZV_Uv-wtkiCpg7lb0ctJWh92WUKiA-Ryos29FLpDToJ6EQkArwa4urINAWHn_wi-9qUzHB5yXBXxo_LKPlW_d_mPTq8MQzLkSbV1nQo7Th0kqNV3M",
      imageAlt: "Smooth massage stones resting on linen."
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-section-gap-mobile md:py-section-gap-desktop px-6 md:px-12 max-w-[1440px] mx-auto bg-warm-cream" 
      id="services"
    >
      <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start mb-24">
        <h2 className="font-heading text-4xl md:text-6xl text-deep-espresso mb-8 tracking-tight">
          Signature <span className="italic font-light text-muted-taupe">Offerings</span>
        </h2>
        <div className="w-24 h-[1px] bg-muted-taupe"></div>
      </motion.div>
      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            variants={fadeUp} 
            className={`group cursor-pointer flex flex-col items-center md:items-start text-center md:text-left ${index === 1 ? 'md:mt-16' : ''} ${index === 2 ? 'md:mt-32' : ''}`}
          >
            <motion.div variants={revealBottomToTop} className="relative w-full aspect-[3/4] rounded-card overflow-hidden mb-8 bg-ivory">
              <Image 
                src={service.imageSrc} 
                alt={service.imageAlt} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
              />
            </motion.div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-muted-taupe text-text-secondary font-body uppercase text-xs tracking-widest mb-5">
              {service.category}
            </div>
            <h3 className="font-heading text-h3 text-deep-espresso mb-3">
              {service.title}
            </h3>
            <p className="font-body text-body text-text-secondary mb-6 line-clamp-3">
              {service.description}
            </p>
            <div className="mt-auto font-body text-caption uppercase tracking-widest text-muted-taupe relative inline-block group-hover:text-deep-espresso transition-colors">
              {service.price}
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-deep-espresso origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}