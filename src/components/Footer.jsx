import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import BugsCreationLogo from './BugsCreationLogo';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container`}>

        {/* Top: Big text */}
        <div className={styles.bigText}>
          <h2>Let's create <span className={styles.green}>together.</span></h2>
        </div>

        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <a href="#" className={styles.logo} aria-label="Bugs Creation Home">
              <BugsCreationLogo height={48} variant="full" />
            </a>
            <p className={styles.desc}>
              Building brands with purpose, strategy, and creativity since 2024.
            </p>
            <div className={styles.socials}>
              <a href="#">Fb</a>
              <a href="#">X</a>
              <a href="#">Ig</a>
              <a href="#">In</a>
            </div>
          </div>

          {/* Links */}
          <div className={styles.linksCol}>
            <h4>Navigate</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Expertise */}
          <div className={styles.linksCol}>
            <h4>Expertise</h4>
            <ul>
              <li><a href="#">Brand Strategy</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Performance Ads</a></li>
              <li><a href="#">Video Production</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contactCol}>
            <h4>Say Hello</h4>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <span>hello@bugscreation.com</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={16} />
              <span>Tech City, TX</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Bugs Creation. All rights reserved.</p>
          <p className={styles.credit}>Designed with ✦ purpose</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
