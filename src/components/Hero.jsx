import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = ({ openContactModal }) => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blobRef.current) {
        const { clientX, clientY } = e;
        blobRef.current.style.left = `${clientX}px`;
        blobRef.current.style.top = `${clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Cursor-following blob */}
      <div ref={blobRef} className={styles.blob}></div>
      <div className={styles.blobBlur}></div>

      {/* Grid lines */}
      <div className={styles.gridLines}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.gridLine}></div>
        ))}
      </div>

      <div className={`container ${styles.heroInner}`}>
        <motion.div
          className={styles.tagline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.statusDot}></div>
          Digital Marketing Agency — Est. 2024
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We Build Brands
          <br />
          That <span className={styles.highlight}>Break</span> The
          <br />
          <span className={styles.outline}>Internet.</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          From brand discovery to performance marketing — we create{' '}
          powerful brand experiences that spark conversations.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a href="#" onClick={(e) => { e.preventDefault(); if (openContactModal) openContactModal(); }} className={styles.primaryBtn}>
            Start a Project
            <span className={styles.btnIcon}>↗</span>
          </a>
          <a href="#services" className={styles.ghostBtn}>
            Explore Services
          </a>
        </motion.div>

        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNum}>10</span>
            <span className={styles.statLabel}>Brands Elevated</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNum}>2</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statNum}>98%</span>
            <span className={styles.statLabel}>Client Retention</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
