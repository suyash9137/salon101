"use client";
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';
import Link from 'next/link';
import Container from '@/components/container';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-warm-cream min-h-[80vh] flex items-center">
      <Container>
        <motion.div variants={fadeUp} className="text-center">
          <h1 className="font-heading text-h1 text-primary mb-6">
            Something went wrong
          </h1>
          <p className="font-body text-body text-secondary mb-6">
            We're sorry, but something went wrong on our end.
          </p>
          <p className="font-body text-body text-secondary mb-8">
            Please try again later or return to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => { }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full py-3"
            >
              Return to Home
            </motion.button>
              <motion.button
              onClick={reset}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary w-full py-3 border border-deep-espresso text-deep-espresso"
              >
                Try Again
              </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}