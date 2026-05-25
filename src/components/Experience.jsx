import React from 'react';
import styles from './Experience.module.css';
// Icons
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
      <h2 className={styles.sectionTitle}>
        <u>&nbsp;Experience&nbsp;</u>
      </h2>

      <div className={styles.card}>
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
        
        {/* List */}
        <ul className={styles.cardList}>
          
          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaDatabase className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Worked on end-to-end data science workflows, including preprocessing, EDA, and feature preparation.
            </span>
          </li>

          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaRobot className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Built NLP-based systems for resume–job matching & QA, extracting insights from unstructured text.
            </span>
          </li>

          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaSearch className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Designed similarity-based matching & retrieval logic to improve AI relevance and accuracy.
            </span>
          </li>

          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaChartBar className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Developed data-driven prototypes & dashboards to demonstrate model outputs interactively.
            </span>
          </li>

          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaCode className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Collaborated with developers to integrate ML solutions into production apps for scalability.
            </span>
          </li>

          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaCheckDouble className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Conducted model evaluation & performance analysis to validate results and refine solutions.
            </span>
          </li>

          <li className={styles.cardListItem}>
            <span className={styles.check}>
              <FaBriefcase className={styles.checkSvg} />
            </span>
            <span className={styles.listText}>
              Gained hands-on experience with real datasets & business AI use cases in a fast-paced environment.
            </span>
          </li>

        </ul>
      </div>
    </section>
  );
}
