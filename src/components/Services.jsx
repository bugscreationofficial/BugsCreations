import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Megaphone, 
  PenTool, 
  Share2, 
  BarChart3, 
  ShoppingBag, 
  Bot, 
  Mic, 
  Package, 
  Video, 
  Layout, 
  Smartphone, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: <Palette size={28} />,
      title: "Brand Strategy & Identity",
      desc: "Brand positioning, visual identity systems, brand guidelines, and brand architecture.",
      tag: "Strategy",
      color: "var(--brand-red)"
    },
    {
      icon: <Megaphone size={28} />,
      title: "Advertising Campaigns",
      desc: "High-impact multi-channel advertising, creative concepts, and campaign execution.",
      tag: "Ads",
      color: "var(--neon-blue)"
    },
    {
      icon: <PenTool size={28} />,
      title: "Content & Copywriting",
      desc: "Persuasive copywriting, brand voice development, storytelling, and content strategy.",
      tag: "Content",
      color: "var(--neon-pink)"
    },
    {
      icon: <Share2 size={28} />,
      title: "Digital & Social Media Marketing",
      desc: "Social media management, community engagement, brand building, and viral campaigns.",
      tag: "Social",
      color: "var(--neon-yellow)"
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Performance Marketing",
      desc: "Google Ads, Meta Ads, funnel optimization, and data-driven ROI scaling.",
      tag: "Growth",
      color: "var(--neon-purple)"
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "Ecommerce & Marketplace marketing",
      desc: "Amazon, Flipkart, and Shopify store optimization, listing strategy, and sales growth.",
      tag: "Ecommerce",
      color: "var(--brand-red)"
    },
    {
      icon: <Bot size={28} />,
      title: "AI Search & ChatGPT Ranking",
      desc: "Generative Engine Optimization (GEO), Perplexity & ChatGPT brand discovery ranking.",
      tag: "AI & SEO",
      color: "var(--neon-blue)"
    },
    {
      icon: <Mic size={28} />,
      title: "Podcast Production",
      desc: "Full-service audio & video podcasting, studio production, editing, and distribution.",
      tag: "Audio",
      color: "var(--neon-pink)"
    },
    {
      icon: <Package size={28} />,
      title: "Packaging & Print design",
      desc: "Custom product packaging, unboxing experiences, print collateral, and merchandise.",
      tag: "Design",
      color: "var(--neon-yellow)"
    },
    {
      icon: <Video size={28} />,
      title: "Motion, Video & Production",
      desc: "Cinematic commercial production, 2D/3D motion graphics, reels, and video editing.",
      tag: "Production",
      color: "var(--neon-purple)"
    },
    {
      icon: <Layout size={28} />,
      title: "Web & Digital Experience",
      desc: "High-performance website design, custom web applications, and intuitive UI/UX.",
      tag: "Digital",
      color: "var(--brand-red)"
    },
    {
      icon: <Smartphone size={28} />,
      title: "App Design & Development",
      desc: "Native & cross-platform iOS/Android mobile app design, prototyping, and development.",
      tag: "App Dev",
      color: "var(--neon-blue)"
    }
  ];

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.topRow}>
          <motion.div
            className={styles.label}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.labelNum}>02</span>
            <span>What We Do</span>
          </motion.div>

          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Services that <span className={styles.greenText}>move</span> the needle.
          </motion.h2>
        </div>

        <div className={styles.grid}>
          <AnimatePresence mode="sync">
            {visibleServices.map((s, i) => (
              <motion.div
                key={s.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
                style={{ '--card-accent': s.color }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconBox}>{s.icon}</div>
                  <span className={styles.tag}>{s.tag}</span>
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <div className={styles.cardArrow}>→</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className={styles.toggleContainer}>
          <button 
            className={styles.toggleBtn}
            onClick={() => setShowAll(!showAll)}
            aria-label={showAll ? "Show less services" : "Show more services"}
          >
            <span>{showAll ? "Show Less Services" : "Show More Services"}</span>
            {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
