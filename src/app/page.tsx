'use client';

import { motion } from 'framer-motion';
import Profile from '@/components/Profile';
import LinkSection from '@/components/LinkSection';
import LinkCard from '@/components/LinkCard';
import Footer from '@/components/Footer';
// Import Link only when you need it
// import Link from 'next/link';

export default function Home() {
  // Profile info
  const profileInfo = {
    name: 'Yannick Guay',
    bio: 'Software developer & creator. Building products that help people grow their online presence.',
    imageUrl: '/images/profile.jpg'
  };

  // Links organized by category
  const linkCategories = [
    // {
    //   title: 'Products & Services',
    //   links: [
    //     {
    //       title: 'Digital Marketing Masterclass',
    //       url: 'https://example.com/masterclass',
    //       description: 'Learn how to grow your audience online effectively'
    //     },
    //     {
    //       title: 'Personal Brand Consulting',
    //       url: 'https://example.com/consulting',
    //       description: 'One-on-one sessions to elevate your personal brand'
    //     },
    //     {
    //       title: 'Creator Economy Newsletter',
    //       url: 'https://example.com/newsletter',
    //       description: 'Weekly insights for content creators'
    //     }
    //   ]
    // },
    {
      title: 'Resources',
      links: [
        {
          title: 'Yannick\'s Resume',
          url: '/resume',
          description: 'View my professional experience and skills'
        }
        // {
        //   title: 'Free SEO Toolkit',
        //   url: 'https://example.com/seo-toolkit',
        //   description: 'Essential tools to improve your website ranking'
        // },
        // {
        //   title: 'Content Calendar Template',
        //   url: 'https://example.com/content-calendar',
        //   description: 'Stay organized with this ready-to-use template'
        // }
      ]
    // },
    // {
    //   title: 'Community',
    //   links: [
    //     {
    //       title: 'Join My Discord',
    //       url: 'https://discord.gg/example',
    //       description: 'Connect with like-minded creators'
    //     },
    //     {
    //       title: 'Upcoming Events',
    //       url: 'https://example.com/events',
    //       description: 'Virtual workshops and networking sessions'
    //     },
    //     {
    //       title: 'Creator Spotlight Program',
    //       url: 'https://example.com/spotlight',
    //       description: 'Get featured in my community channels'
    //     }
    //   ]
    }
  ];

  return (
    <motion.div
      className="flex flex-col min-h-screen max-w-md mx-auto p-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Profile 
        name={profileInfo.name}
        bio={profileInfo.bio}
        imageUrl={profileInfo.imageUrl}
      />
      
      {linkCategories.map((category, index) => (
        <LinkSection 
          key={category.title} 
          title={category.title}
          delay={index + 1}
        >
          {category.links.map((link, linkIndex) => (
            <LinkCard
              key={link.title}
              title={link.title}
              url={link.url}
              description={link.description}
              delay={linkIndex + 1}
            />
          ))}
        </LinkSection>
      ))}
      
      {/* Resume Link */}
      {/* <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <Link href="/resume" className="block w-full text-center">
          <motion.div 
            className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-medium py-3 px-6 rounded-lg transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Resume
          </motion.div>
        </Link>
      </motion.div> */}
      
      <Footer />
    </motion.div>
  );
}
