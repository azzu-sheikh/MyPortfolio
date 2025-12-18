import React from 'react';
import { motion } from "framer-motion";
import styles from './Experience.module.css';
// Importing relevant icons for your new points
import { 
  FaDatabase, 
  FaRobot, 
  FaSearch, 
  FaChartBar, 
  FaCode, 
  FaCheckDouble, 
  FaBriefcase 
} from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <u>&nbsp;Experience&nbsp;</u>
      </motion.h2>

      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.cardBorder}></div>
        
        {/* Header */}
        <div className={styles.cardTitleContainer}>
          <span className={styles.cardTitle}>Data Science Intern</span>
          <p className={styles.cardParagraph}>
            <strong>Nivansys Technologies</strong>
            <span className={styles.date}>Feb 2025 – Aug 2025</span>
          </p>
        </div>
        
        <hr className={styles.line} />
        
        {/* List Items */}
        <ul className={styles.cardList}>
          
          {/* Point 1: End-to-end workflows */}
          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaDatabase className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Worked on end-to-end data science workflows, including preprocessing, EDA, and feature preparation.
            </span>
          </li>

          {/* Point 2: NLP-based systems */}
          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaRobot className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Built NLP-based systems for resume–job matching & QA, extracting insights from unstructured text.
            </span>
          </li>

          {/* Point 3: Similarity matching */}
          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaSearch className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Designed similarity-based matching & retrieval logic to improve AI relevance and accuracy.
            </span>
          </li>

          {/* Point 4: Dashboards */}
          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaChartBar className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Developed data-driven prototypes & dashboards to demonstrate model outputs interactively.
            </span>
          </li>

          {/* Point 5: Integration */}
          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaCode className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Collaborated with developers to integrate ML solutions into production apps for scalability.
            </span>
          </li>

          {/* Point 6: Evaluation */}
          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaCheckDouble className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Conducted model evaluation & performance analysis to validate results and refine solutions.
            </span>
          </li>

          {/* Point 7: Real experience */}
          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaBriefcase className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Gained hands-on experience with real datasets & business AI use cases in a fast-paced environment.
            </span>
          </li>

        </ul>
      </motion.div>
    </section>
  );
}