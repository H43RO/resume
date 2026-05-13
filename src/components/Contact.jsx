import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <footer className="contact-section">
      <div className="container">
        <motion.div 
          className="contact-footer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Kim Hyun-jun. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
