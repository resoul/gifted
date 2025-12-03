
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const TAILWIND_FUCHSIA_CLASSES = [
  'fill-indigo-300 dark:fill-indigo-600',
  'fill-indigo-400 dark:fill-indigo-500',
  'fill-indigo-500 dark:fill-indigo-400',
  'fill-indigo-600 dark:fill-indigo-300',
  'fill-indigo-700 dark:fill-indigo-200',
];

const Logo = () => {
  // State for stepped color animation
  const [step, setStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % TAILWIND_FUCHSIA_CLASSES.length);
    }, 1000); // 400ms per step ~2s full cycle
    return () => clearInterval(interval);
  }, []);

  // Offset each rect's color cycle for a lively effect
  const getClass = (offset: number) => TAILWIND_FUCHSIA_CLASSES[(step + offset) % TAILWIND_FUCHSIA_CLASSES.length];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 leading-0"
    >
      {/* Logo Text */}
      <svg className="size-5" viewBox="15 15 20 30" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect
            x="15"
            y="15"
            width="10"
            height="10"
            rx="2"
            className={`transition-fill ${getClass(0)}`}
          />
          <rect
            x="25"
            y="25"
            width="10"
            height="10"
            rx="2"
            className={`transition-fill ${getClass(2)}`}
          />
          <rect
            x="15"
            y="35"
            width="10"
            height="10"
            rx="2"
            className={`transition-fill ${getClass(4)}`}
          />
        </g>
      </svg>

      <span className="text-2xl font-bold bg-gradient-to-r from-indigo-700 dark:from-indigo-400 to-indigo-400 dark:to-indigo-300 bg-clip-text text-transparent">
        Gifted Emotions
      </span>
    </motion.div>
  );
};

export default Logo;

