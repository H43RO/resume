import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import './CoreStrengths.css';

const CoreStrengths = () => {
  return (
    <section className="section core-strengths" id="core-strengths">
      <motion.h2 
        className="h2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Core Strengths
      </motion.h2>

      <div className="strengths-grid">
        {resumeData.coreStrengths.map((strength, idx) => (
          <motion.div
            key={idx}
            className="strength-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="h3 strength-title">{strength.title}</h3>
            <p 
              className="body-text"
              dangerouslySetInnerHTML={{ __html: strength.description }} 
            ></p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreStrengths;
