import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import styles from './Audience.module.css';

const Audience = ({ openContactModal }) => {
  return (
    <section className={styles.audience}>
      <div className={`container`}>

        {/* Who We Work With */}
        <div className={styles.topRow}>
          <motion.div
            className={styles.label}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.labelNum}>03</span>
            <span>Who We Help</span>
          </motion.div>
        </div>

        <div className={styles.cards}>
          {[
            {
              icon: <Rocket size={28} />,
              title: "Startups",
              desc: "Launch with impact. We build your brand foundation so you hit the ground running.",
              num: "01"
            },
            {
              icon: <Building2 size={28} />,
              title: "Established Brands",
              desc: "Rebrand and refresh your identity to stay relevant in today's fast-moving market.",
              num: "02"
            },
            {
              icon: <TrendingUp size={28} />,
              title: "Scaling Businesses",
              desc: "Accelerate growth across digital and traditional media channels with data-driven strategy.",
              num: "03"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={styles.cardNum}>{item.num}</div>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Ready to build something <span className={styles.ctaHighlight}>legendary?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Let's create powerful brand experiences that inspire trust, spark conversations, and deliver measurable growth.
            </p>
            <a href="#" onClick={(e) => { e.preventDefault(); if (openContactModal) openContactModal(); }} className={styles.ctaButton}>
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </a>
          </div>
          <div className={styles.ctaOrbs}>
            <div className={styles.ctaOrb1}></div>
            <div className={styles.ctaOrb2}></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Audience;
