import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={`container`}>

        <div className={styles.topRow}>
          <motion.div
            className={styles.label}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.labelNum}>01</span>
            <span>About Us</span>
          </motion.div>
        </div>

        <div className={styles.grid}>
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.heading}>
              Every brand has a story <span className={styles.greenText}>worth telling.</span>
            </h2>
          </motion.div>

          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className={styles.desc}>
              We don't just design logos or create advertisements — we build brands with purpose, strategy, and creativity. From brand discovery and identity design to advertising campaigns that capture attention, we help businesses create meaningful connections.
            </p>
            <p className={styles.desc}>
              Every project is driven by research, innovation, and compelling storytelling to ensure your brand is not only seen but <span className={styles.emphText}>remembered.</span>
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.imageBlock}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageInner}>
            <div className={styles.abstractVisual}>
              <div className={styles.orbOne}></div>
              <div className={styles.orbTwo}></div>
              <div className={styles.orbThree}></div>
              <div className={styles.textOverlay}>
                <span>CREATIVITY</span>
                <span>×</span>
                <span>STRATEGY</span>
              </div>
            </div>
          </div>
          <div className={styles.cornerLabel}>Since 2024 ↗</div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
