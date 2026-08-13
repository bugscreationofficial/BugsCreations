import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow Bugs Creation on Facebook"><FaFacebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow Bugs Creation on Twitter"><FaTwitter size={20} /></a>
              <a href="https://www.instagram.com/bugscreationofficial?igsh=OTFkNnp0bTIwZHBr" target="_blank" rel="noopener noreferrer" aria-label="Follow Bugs Creation on Instagram"><FaInstagram size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow Bugs Creation on LinkedIn"><FaLinkedin size={20} /></a>
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
              <li><a href="#services">Brand Strategy</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Performance Ads</a></li>
              <li><a href="#services">Video Production</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contactCol}>
            <h4>Say Hello</h4>
            <a href="mailto:bugscreationofficial@gmail.com" className={styles.contactItem} aria-label="Send email to Bugs Creation">
              <Mail size={16} />
              <span>bugscreationofficial@gmail.com</span>
            </a>
            <a href="tel:+919778186821" className={styles.contactItem} aria-label="Call Bugs Creation phone number">
              <Phone size={16} />
              <span>+91 97781 86821</span>
            </a>
            <div className={styles.contactItem}>
              <MapPin size={16} />
              <span>Kozhikode, Kerala, India</span>
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
