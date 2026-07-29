import React from 'react';
import { motion } from 'framer-motion';
import styles from './Manifesto.module.css';

const Manifesto = () => {
  return (
    <section className={styles.manifestoSection}>
      <div className={styles.ambientGlow}></div>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.headerTag}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.tagDot}></span>
          <span>OUR PHILOSOPHY</span>
        </motion.div>

        <div className={styles.contentWrap}>
          <motion.h2 
            className={styles.primaryStatement}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            The world doesn't need another business.
          </motion.h2>

          <motion.h3 
            className={styles.secondaryHighlight}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            It remembers the ones that <span className={styles.redGradient}>stand out.</span>
          </motion.h3>

          <motion.p 
            className={styles.bodyDescription}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            We shape identities, create experiences, and turn ordinary businesses into brands people recognize, trust, and talk about.
          </motion.p>

          <motion.div 
            className={styles.closingStatement}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className={styles.quoteLine}></span>
            <p className={styles.noiseText}>
              The rest is <span className={styles.strikeText}>just noise.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
