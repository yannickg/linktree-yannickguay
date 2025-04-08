'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LinkSectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

const LinkSection = ({ title, children, delay = 0 }: LinkSectionProps) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
    >
      <h2 className="text-xl font-semibold mb-3 text-[var(--accent)]">{title}</h2>
      <div>{children}</div>
    </motion.div>
  );
};

export default LinkSection; 