import React from 'react';
import styles from './Marquee.module.css';

const Marquee = () => {
  const items = [
    'BRANDING', 'LOGO DESIGN', 'BRAND STRATEGY', 'UI/UX DESIGN',
    'WEB DEVELOPMENT', 'SEO', 'GOOGLE ADS', 'META ADS',
    'VIDEO PRODUCTION', 'MOTION GRAPHICS', 'SOCIAL MEDIA',
    'CONTENT CREATION', 'PHOTOGRAPHY', 'PODCAST PRODUCTION',
  ];

  const marqueeContent = items.map((item, i) => (
    <span key={i} className={styles.item}>
      {item} <span className={styles.dot}>✦</span>
    </span>
  ));

  return (
    <div className={styles.marqueeWrap}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>{marqueeContent}</div>
        <div className={styles.marqueeContent} aria-hidden="true">{marqueeContent}</div>
      </div>
    </div>
  );
};

export default Marquee;
