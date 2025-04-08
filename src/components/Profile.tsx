'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProfileProps {
  name: string;
  bio: string;
  imageUrl: string;
}

const Profile = ({ name, bio, imageUrl }: ProfileProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center mb-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-[var(--card-bg)] border-2 border-[var(--accent)]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image 
          src={imageUrl} 
          alt={name} 
          width={96} 
          height={96} 
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>
      
      <motion.h1 
        className="text-2xl font-bold mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {name}
      </motion.h1>
      
      <motion.p 
        className="text-zinc-400 max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {bio}
      </motion.p>
    </motion.div>
  );
};

export default Profile; 