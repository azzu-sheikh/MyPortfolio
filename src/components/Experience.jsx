import React, { useState } from 'react';
import styles from './Experience.module.css';

// Icons
import { 
  FaDatabase, FaRobot, FaSearch, FaChartBar, FaCode, 
  FaCheckDouble, FaBriefcase, FaCogs, FaEye, FaBrain, FaProjectDiagram 
} from "react-icons/fa";

export default function Experience() {
  // Data
  const experiences = [
    {
      id: 1,
      title: "Machine Learning Engineer Intern (Data Science)",
      company: "AiSPRY",
      date: "Aug 2025 - Present",
      points: [
        { icon: FaCogs, text: "Built production-grade Machine Learning and Computer Vision systems using deep learning techniques in real-world environments." },
        { icon: FaEye, text: "Developed an AI-powered embryo grading system using YOLOv8 instance segmentation trained on 1,500+ annotated images." },
        { icon: FaBrain, text: "Designed a deep learning-based scoring engine using PyTorch for automated medical image analysis." },
        { icon: FaProjectDiagram, text: "Implemented end-to-end Machine Learning pipelines including preprocessing, augmentation, model training, and evaluation." },
        { icon: FaChartBar, text: "Built interactive dashboards using Streamlit and Plotly to visualize model outputs in real time." },
        { icon: FaCode, text: "Worked on Computer Vision, Deep Learning, and AI model optimization for production use cases." },
        { icon: FaCheckDouble, text: "Delivered AI solutions used by clinical stakeholders for decision-making." }
      ]
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "Nivansys Technologies",
      date: "Feb 2025 – Aug 2025",
      points: [
        { icon: FaDatabase, text: "Worked on end-to-end data science workflows, including preprocessing, EDA, and feature preparation." },
        { icon: FaRobot, text: "Built NLP-based systems for resume–job matching & QA, extracting insights from unstructured text." },
        { icon: FaSearch, text: "Designed similarity-based matching & retrieval logic to improve AI relevance and accuracy." },
        { icon: FaChartBar, text: "Developed data-driven prototypes & dashboards to demonstrate model outputs interactively." },
        { icon: FaCode, text: "Collaborated with developers to integrate ML solutions into production apps for scalability." },
        { icon: FaCheckDouble, text: "Conducted model evaluation & performance analysis to validate results and refine solutions." },
        { icon: FaBriefcase, text: "Gained hands-on experience with real datasets & business AI use cases in a fast-paced environment." }
      ]
    }
  ];

  // Pagination
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(experiences.length / itemsPerPage);

  const displayedExperiences = experiences.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>
        <u>&nbsp;Experience&nbsp;</u>
      </h2>

      {/* Cards */}
      {displayedExperiences.map((exp) => (
        <div key={exp.id} className={styles.card}>
          <div className={styles.cardBorder}></div>
          
          {/* Header */}
          <div className={styles.cardTitleContainer}>
            <span className={styles.cardTitle}>{exp.title}</span>
            <p className={styles.cardParagraph}>
              <strong>{exp.company}</strong>
              <span className={styles.date}>{exp.date}</span>
            </p>
          </div>
          
          <hr className={styles.line} />
          
          {/* List */}
          <ul className={styles.cardList}>
            {exp.points.map((point, index) => (
              <li key={index} className={styles.cardListItem}>
                <span className={styles.check}>
                  <point.icon className={styles.checkSvg} />
                </span>
                <span className={styles.listText}>
                  {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Controls */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`${styles.pageBullet} ${index === currentPage ? styles.activeBullet : ''}`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
