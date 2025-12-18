import React from 'react';
import { motion } from "framer-motion";
import { FaBookOpen, FaRobot, FaHeartbeat } from "react-icons/fa"; // Imported relevant icons
import styles from './Research.module.css';

export default function Research() {
  return (
    <section id="research" className={styles.researchSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <u> &nbsp; Research Publication &nbsp;</u>
      </motion.h2>

      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heading}>
          Published Research
          <span>Sanjeevini Bot</span>
        </div>

        <div className={styles.content}>
          {/* Item 1: Topic */}
          <div className={`${styles.item} ${styles.item1}`}>
            <FaRobot />
            <span>Healthcare AI Assistant</span>
          </div>

          {/* Item 2: Journal */}
          <div className={`${styles.item} ${styles.item2}`}>
            <FaBookOpen />
            <span>Published in IJCRT</span>
          </div>

          {/* Item 3: Impact */}
          <div className={`${styles.item} ${styles.item3}`}>
            <FaHeartbeat />
            <span>Disease Prediction</span>
          </div>
        </div>

        {/* Link Button */}
        <a href="http://www.ijcrt.org/papers/IJCRT2501240.pdf" target="_blank" rel="noopener noreferrer" className={styles.readButton}>
          Read Paper
        </a>
      </motion.div>
    </section>
  );
}