import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layout, Megaphone, Video, Search, Camera, Palette, BarChart3 } from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      icon: <Palette size={28} />,
      title: "Branding & Identity",
      desc: "Logo design, visual identity systems, brand guidelines, and packaging design.",
      tag: "Strategy",
      color: "var(--neon-green)"
    },
    {
      icon: <Layout size={28} />,
      title: "Web & UI/UX Design",
      desc: "Intuitive website design, development, and user experience optimization.",
      tag: "Digital",
      color: "var(--neon-blue)"
    },
    {
      icon: <Megaphone size={28} />,
      title: "Social Media",
      desc: "Content creation, community management, influencer marketing, and engagement.",
      tag: "Growth",
      color: "var(--neon-pink)"
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Performance Marketing",
      desc: "Google Ads, Meta Ads, SEO, and data-driven campaigns for measurable ROI.",
      tag: "Ads",
      color: "var(--neon-yellow)"
    },
    {
      icon: <Video size={28} />,
      title: "Video & Motion",
      desc: "Video production, motion graphics, podcast production, and storytelling.",
      tag: "Creative",
      color: "var(--neon-purple)"
    },
    {
      icon: <PenTool size={28} />,
      title: "Content & Copy",
      desc: "Copywriting, email marketing, PR, event branding, and creative consulting.",
      tag: "Content",
      color: "var(--neon-green)"
    },
  ];

  return (
    <section className={styles.services} id="services">
      <div className={`container`}>
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
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
        </div>
      </div>
    </section>
  );
};

export default Services;
