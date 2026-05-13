import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import './Education.css';

const Education = () => {
  return (
    <section className="section education" id="education">
      <div className="edu-grid">
        <div className="edu-column">
          <motion.h2 
            className="h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Education & Activities
          </motion.h2>

          <motion.div 
            className="edu-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="h3">{resumeData.education.university}</h3>
            <div className="edu-meta">
              <span>{resumeData.education.major}</span>
              <span className="edu-period">{resumeData.education.period}</span>
            </div>
            <p className="body-text" dangerouslySetInnerHTML={{ __html: resumeData.education.details }}></p>
          </motion.div>

          <div className="activities-list mt-4">
            {resumeData.activities.map((act, idx) => (
              <motion.div 
                key={idx} 
                className="edu-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3 className="h3">{act.name}</h3>
                <span className="edu-period">{act.period}</span>
                <p className="body-text" dangerouslySetInnerHTML={{ __html: act.details }}></p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="edu-column">
          <motion.h2 
            className="h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            Awards
          </motion.h2>

          <ul className="awards-list">
            {resumeData.awards.map((award, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="award-item body-text"
                dangerouslySetInnerHTML={{ __html: award }}
              >
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
