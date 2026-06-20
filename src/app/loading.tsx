"use client";
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div
      className="flex h-[100vh] items-center justify-center"
      initial="{{ opacity: 0 }}"
      animate="{{ opacity: 1 }}"
      transition={{ duration: 0.3 }}
    >
      <div className="flex space-x-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-4 w-2 bg-deep-espresso rounded"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
          </div>
        ))}
      </div>
    </motion.div>
  );
}