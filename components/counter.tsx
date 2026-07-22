"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
};

export function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1800, bounce: 0 });
  const rounded = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (inView) count.set(value);
  }, [count, inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
