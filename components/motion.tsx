"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function PageIntro() {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[90] pointer-events-none bg-ink"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1], delay: 0.35 }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-px w-48 -translate-x-1/2 bg-gold"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.div>
  );
}
