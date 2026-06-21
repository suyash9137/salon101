"use client";

import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';
import { fadeUp } from '@/lib/motion';
import WhatsAppForm from './whatsapp-form';

export default function WhatsAppButton({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonAnimation = useAnimation();

  return (
    <>
      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(197, 189, 182, 0.3)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          buttonAnimation.start('hover');
          setIsOpen(true);
        }}
        className={`px-8 py-4 rounded-button bg-ivory text-deep-espresso font-body text-label-md tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${className || ''}`}
      >
        <span>Book Now</span>
      </motion.button>

      {/* Modal */}
      {isOpen && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
            exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
            className="relative bg-ivory rounded-3xl w-full max-w-md p-6 md:p-8 mx-4 md:mx-0 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-muted-taupe hover:text-deep-espresso transition-colors"
              aria-label="Close modal"
            >
              ×
            </motion.button>

            <motion.div variants={fadeUp}>
              <WhatsAppForm 
                onSuccess={() => setIsOpen(false)} 
                title="Book an Appointment" 
                buttonText="Book via WhatsApp" 
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}