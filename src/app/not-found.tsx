"use client";
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import Link from 'next/link';
import Container from '@/components/container';

export default function NotFound() {
  return (
    <section className="bg-warm-cream min-h-[80vh] flex items-center">
      <Container>
        <motion.div variants={fadeUp} className="text-center">
          <h1 className="font-heading text-h1 text-text-primary mb-6">
            Page Not Found
          </h1>
          <p className="font-body text-body text-text-secondary mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary px-8 py-3"
            >
              Return to Home
            </motion.button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}