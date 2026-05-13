import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FiMail, FiGithub, FiLink, FiBookOpen } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const { title, subtitle, description } = resumeData.hero;
  const { email, github, blog, portfolio } = resumeData.contact;
  
  // Typing Effect
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedTitle(title.substring(0, index));
      index++;
      if (index > title.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [title]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="section hero">
      <div className="hero-content">
        <h1 className="h1 hero-title">
          {displayedTitle}
          <span className={`cursor ${isTyping ? 'typing' : 'blink'}`}>|</span>
        </h1>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={!isTyping ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            {subtitle}
          </motion.h2>
          
          <motion.div variants={itemVariants} className="hero-description">
            {description.map((line, idx) => (
              <p key={idx} className="body-text" dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="hero-links">
            <a href={`mailto:${email}`} className="hero-link">
              <FiMail /> Email
            </a>
            <a href={github} target="_blank" rel="noreferrer" className="hero-link">
              <FiGithub /> GitHub
            </a>
            <a href={blog} target="_blank" rel="noreferrer" className="hero-link">
              <FiBookOpen /> Blog
            </a>
            <a href={portfolio} target="_blank" rel="noreferrer" className="hero-link">
              <FiLink /> Original Notion
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
