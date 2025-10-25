// components/animations/SlideInOnScroll.tsx
'use client'; // This component must run on the client side

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInOnScrollProps {
  key?: string | number | undefined;
  initial?:  object | undefined;
  children: ReactNode;
  viewport?: object; 
  whileInView?: object; 
  transition?: object;
  animate?: object;
  exit?: object;
  className?: string; 
  whileHover?: object | undefined;
  whileTap?: object | undefined;
}

const SlideInOnScroll = ({
  key = undefined,
  initial = { opacity: 0, y: 20 },
  viewport = { once: true },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  exit = {},
  animate = {},
  whileHover={},
  whileTap={},
  children,

  className = ''
}: SlideInOnScrollProps) => {


  return (
    <motion.div
      key={key}
      exit={{...exit}}
      animate={{...animate}}
      initial={{...initial}}// Sets the initial animation state
      whileInView={{ ...whileInView }} // Animates to 'visible' when in view
      viewport={{ ...viewport }} // Animates only once, when 'amount' is visible
      transition={{ ...transition }} // Animation timing
      whileHover={{ ...whileHover }}
      whileTap={{ ...whileTap }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInOnScroll;