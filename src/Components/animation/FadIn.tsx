"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

const FadeIn = ({ children, delay = 0.2, duration = 0.4 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
