import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import './Skills.css';

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <motion.h2 
        className="h2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Skills
      </motion.h2>

      <div className="skills-container">
        {resumeData.skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="badge skill-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.4, 
              delay: idx * 0.05,
              type: "spring",
              stiffness: 100
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
