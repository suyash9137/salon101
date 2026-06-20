import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 40, 
      damping: 20, 
      duration: 1.2 
    }
  },
  exit: { 
    y: -40, 
    opacity: 0,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: "easeIn" }
  }
};

export const scaleUp: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 30, 
      damping: 15, 
      duration: 1.5 
    }
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.6 }
  }
};

export const slideInRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 40, damping: 20, duration: 1.2 }
  },
  exit: {
    x: 50, opacity: 0, transition: { duration: 0.6, ease: "easeInOut" }
  }
};

export const slowReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] }
  }
};

export const revealBottomToTop: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
  }
};