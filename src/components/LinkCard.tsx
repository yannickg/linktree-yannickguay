'use client';

import { motion } from 'framer-motion';

interface LinkCardProps {
  title: string;
  url: string;
  description?: string;
  delay?: number;
}

const LinkCard = ({ title, url, description, delay = 0 }: LinkCardProps) => {
  return (
    <motion.a
      href={url}
      // target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-[var(--link-bg)] p-4 mb-3 rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
      whileHover={{ backgroundColor: 'var(--link-hover)' }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="font-medium text-base md:text-lg">{title}</h3>
      {description && (
        <p className="text-sm text-zinc-400 mt-1">{description}</p>
      )}
    </motion.a>
  );
};

export default LinkCard; 