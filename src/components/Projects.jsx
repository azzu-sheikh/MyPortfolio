import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt} from "react-icons/fa";
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    { 
      title: "AI-Powered IVF Embryo Grading", 
      description: "A state-of-the-art computer vision pipeline for automating IVF embryo assessment. Features live YOLOv8 segmentation, PyTorch-based fragmentation analysis, and clinical reporting.",
      tech: ["YOLOv8", "PyTorch", "Streamlit", "OpenCV", "Plotly"],
      link: "https://github.com/azzu-sheikh/IVF-Embryo-Fragmentation",
      demo: "https://ivf-embryo-fragmentation-analysis.streamlit.app/" // Using portfolio as placeholder
    },
    { 
      title: "Job Portal – Smart Hiring Platform", 
      description: "A full-stack job portal with an embedded AI chatbot for answering resume-related queries. Features include document upload/retrieval using LangChain, semantic search with FAISS, and recruiter dashboards.",
      tech: ["Streamlit", "Django", "PostgreSQL", "LangChain", "FAISS", "LLaMA 3.2"],
      link: "https://github.com/azzu-sheikh/Job-Portal",
      demo: "#"
    },
    { 
      title: "ChatWithPDF – AI Chatbot", 
      description: "Context-aware chatbot allowing users to upload PDFs and ask questions. Utilizes RAG (Retrieval-Augmented Generation), prompt chaining, and vector search for accurate responses.",
      tech: ["LangChain", "Streamlit", "FAISS", "LLaMA", "Python"],
      link: "https://github.com/azzu-sheikh/chatbot-using-Ollama",
      demo: "#"
    },
    { 
      title: "Sanjeevini Bot – Healthcare Assistant", 
      description: "Virtual healthcare assistant utilizing Random Forest algorithms to predict medical conditions, recommend personalized medicines, and enhance accessibility via TTS.",
      tech: ["Machine Learning", "Random Forest", "Python", "TTS"],
      link: "https://github.com/azzu-sheikh/Sanjeeini-Bot",
      demo: "#"
    },
    { 
      title: "Smart Bookmark App", 
      description: "Real-time bookmark manager with Google OAuth and Supabase Realtime synchronization. Features a glassmorphic UI, Singleton Client patterns, and secure Row Level Security.",
      tech: ["Next.js 15", "Supabase", "Tailwind CSS", "PostgreSQL", "Vercel"],
      link: "https://github.com/azzu-sheikh/smart-bookmark-app", // Update with specific repo if available
      demo: "https://smart-bookmark-app-azeemsheikh.vercel.app//" // Update with specific deployment link
    },
      { 
      title: "Automated Attendance System", 
      description: "Real-time student attendance system using Python's face recognition library. Captures and identifies student faces against a pre-built database to mark attendance.",
      tech: ["Computer Vision", "Python", "Face Recognition"],
      link: "https://github.com/azzu-sheikh",
      demo: "#"
    },
    { 
      title: "EcoWise – Solar Savings Estimator", 
      description: "Web application to calculate solar panel installation costs, CO₂ savings, and long-term benefits. Features EMI calculation, failure rate analysis, and savings visualization.",
      tech: ["Streamlit", "HTML", "Python", "Data Visualization"],
      link: "https://github.com/azzu-sheikh",
      demo: "#"
    },
    
    { 
      title: "Electrostatic Precipitator (ESP)", 
      description: "IoT prototype developed to filter polluted air using electrostatic technology. Programmed with Python and C on Raspberry Pi, focusing on hardware-software integration.",
      tech: ["IoT", "Python", "C", "Raspberry Pi"],
      link: "https://github.com/azzu-sheikh",
      demo: "#"
    },
    { 
      title: "Cyber Security – Steganography", 
      description: "Implemented techniques for hiding secret messages within digital files using steganography algorithms to ensure secure data transmission.",
      tech: [ "Python", "Image Processing", "Steganography"],
      link: "https://github.com/azzu-sheikh/pygui-steganography" 
    },
    { 
      title: "Interactive Resume Template", 
      description: "Developed a dynamic and interactive resume template as part of a Full Stack Development initiative, allowing users to showcase their portfolio effectively.",
      tech: ["Full Stack", "Web Development", "React"],
      link: "https://github.com/azzu-sheikh/Interactive-Resume",
      demo: "#"
    },
    { 
      title: "Gym Management System", 
      description: "User-friendly application to streamline gym operations like member management, scheduling, financial tracking, and inventory control.",
      tech: ["Software Engineering", "SQL", "Database Management"],
      link: "https://github.com/azzu-sheikh/gym-management-system",
      demo: "#"
    },
    { 
      title: "Weight Converter System", 
      description: "Accurate, user-friendly conversion tool rigorously tested with equivalence class testing to ensure scientific precision and reliability.",
      tech: ["Software Testing", "Python"],
      link: "https://github.com/azzu-sheikh",
      demo: "#"
    },
    { 
      title: "Enhanced Steganalysis", 
      description: "Created a system to securely embed messages in images, ensuring a perfect balance between message security and image quality using an enhanced LSB algorithm.",
      tech: [ "Cyber Security", "Cryptography", "LSB Algorithm"],
      link: "https://github.com/azzu-sheikh/stegnography",
      demo: "#"
    }
  ];

  // Pagination Logic
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const displayedProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (index) => {
    setCurrentPage(index);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <u> &nbsp; Featured Projects &nbsp;</u>
      </motion.h2>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        key={currentPage} 
      >
        {displayedProjects.map((p) => (
          <motion.div 
            key={p.title} 
            className={styles.card} 
            variants={cardVariants}
          >
            <h3 className={styles.projectTitle}>{p.title}</h3>
            
            <p className={styles.projectDescription}>{p.description}</p>
            
            <div className={styles.tags}>
              {p.tech.map((t, i) => (
                <span key={i} className={styles.tag}>{t}</span>
              ))}
            </div>

            <div className={styles.links}>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                <FaGithub size={18} /> Code &nbsp;&nbsp;&nbsp;&nbsp;
              </a> 
              {/* Logic to show Live Demo button if link is provided */}
              {p.demo && p.demo !== "#" && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                  <FaExternalLinkAlt size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            // Apply 'activeBullet' class if it matches currentPage
            className={`${styles.pageBullet} ${index === currentPage ? styles.activeBullet : ''}`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );

}



