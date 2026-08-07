import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './ContactModal.module.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    service: '',
    message: ''
  });

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello! I would like to start a project.
*Name:* ${formData.name}
*Business Name:* ${formData.businessName}
*Service:* ${formData.service}
*Message:* ${formData.message}`;

    const url = `https://wa.me/919778186821?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
    // Reset form
    setFormData({
      name: '',
      businessName: '',
      service: '',
      message: ''
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.modalContent}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.closeBtn} onClick={onClose}>
              <X size={24} />
            </button>
            
            <h2 className={styles.title}>Start a <span className={styles.highlight}>Project</span></h2>
            <p className={styles.subtitle}>Fill in your details below and we'll connect on WhatsApp.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="businessName">Business Name</label>
                <input 
                  type="text" 
                  id="businessName" 
                  name="businessName" 
                  value={formData.businessName} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Company Inc."
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="service">Service you are looking for</label>
                <input 
                  type="text" 
                  id="service" 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange} 
                  required 
                  placeholder="e.g. Web Design, Branding..."
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="4"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send to WhatsApp
                <span className={styles.btnIcon}>↗</span>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
