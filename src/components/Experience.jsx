import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <motion.h2 
        className="h2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Work Experience
      </motion.h2>

      <div className="experience-list">
        {resumeData.experience.map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="exp-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="exp-header">
              <div className="company-info">
                {exp.logo && <img src={exp.logo} alt={exp.company} className="company-logo" />}
                <h3 className="h3">{exp.company}</h3>
              </div>
              <span className="exp-period">{exp.period}</span>
            </div>
            <div className="exp-role">{exp.role}</div>
            {exp.summary && <p className="body-text exp-summary" dangerouslySetInnerHTML={{ __html: exp.summary }}></p>}
            
            <div className="exp-projects">
              {exp.projects.map((project, pIdx) => (
                <div key={pIdx} className="project-item">
                  <div className="project-header">
                    <h4 className="project-name">{project.name}</h4>
                    <span className="project-period">{project.period}</span>
                  </div>
                  <ul className="project-details">
                    {project.details.map((detail, dIdx) => (
                      <li key={dIdx} className="body-text" dangerouslySetInnerHTML={{ __html: detail }}></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
