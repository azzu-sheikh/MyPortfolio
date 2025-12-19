import React from 'react';
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaCalendarAlt } from "react-icons/fa";
import styles from './Certifications.module.css';

export default function Certifications() {
  const certifications = [
    { 
      title: "Full-Stack Development", 
      issuer: "Varcons Technology Pvt Ltd", 
      date: "30 Nov 2023",
      link: "https://drive.google.com/file/d/1HWdmyzHbiNeof6SniS7nreDq5qEHNh89/view?usp=drivesdk" // PASTE LINK HERE
    },
    { 
      title: "Python Programming", 
      issuer: "I360DigiTMG", 
      date: "28 Aug 2025",
      link: "https://drive.google.com/file/d/1H_Nc8lCiQttb_2asiDL6QDQOrEepZ-5P/view?usp=sharing"
    },
    { 
      title: "Geo Data Processing using Python", 
      issuer: "IIRS", 
      date: "18 Jan 2024",
      link: "https://drive.google.com/file/d/1gkZWQF4BHqq1pCzIdDMShMJL2YxH7bSE/view?usp=drivesdk" // PASTE LINK HERE
    },
    { 
      title: "Python Programming", 
      issuer: "Coursera", 
      date: "15 July 2023",
      link: "https://drive.google.com/file/d/1rjcMGIOhnGoves8IH1dwts3qJL6c2-Dj/view?usp=sharing" // PASTE LINK HERE
    },
    { 
      title: "Cyber Security", 
      issuer: "IBM - Edunet Foundation", 
      date: "25 Nov 2023",
      link: "https://drive.google.com/file/d/1gePTY-ZVQwB3UwxrLm_AXItzj3TPBgGE/view?usp=drivesdk"
    },
     { 
      title: "ChatGPT & AI Tools", 
      issuer: "Skill Nation", 
      date: "03 July 2024",
      link: "https://drive.google.com/file/d/1jWah_Fs5qTO6sM1VQc8z2ruai8zFabin/view?usp=drivesdk" // PASTE LINK HERE
    },
    { 
      title: "Computational Theory", 
      issuer: "Infosys Spring Board", 
      date: "14 Dec 2023",
      link: "https://drive.google.com/file/d/1gwSayDfOIwcwTuubSB_lqtU6HbRLEjoL/view?usp=drivesdk" // PASTE LINK HERE
    },
    { 
      title: "THE IAMAI FUTURE FOUNDERS 2022", 
      issuer: "K-Tech & IAMAI", 
      date: "21 Oct 2022",
      link: "https://drive.google.com/file/d/10Cxv3KBbZGHCkuqI_LUvzfyMr5ztpymc/view?usp=drive_link" // PASTE LINK HERE
    },
    { 
      title: "Design Impact Movement", 
      issuer: "Titan", 
      date: "05 May 2024",
      link: "https://drive.google.com/file/d/1fnzPksDgaAkvKOWTllWPku-E4Y3mMu5I/view?usp=drivesdk" // PASTE LINK HERE
    }
  ];

  // Animation Variants for List
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="certifications" className={styles.certificationsSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <u> &nbsp; Certifications &nbsp;</u>
      </motion.h2>

      <motion.ul 
        className={styles.listContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {certifications.map((cert, index) => (
          <motion.li key={index} variants={itemVariants}>
            <a 
              href={cert.link}
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.card} 
            >
              <div className={styles.cardContent}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                
                <div className={styles.detailsWrapper}>
                  <div className={styles.issuer}>
                    <FaAward size={14} />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className={styles.date}>
                    <FaCalendarAlt size={12} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.viewBtn}>
                  View Certificate <FaExternalLinkAlt size={12} />
                </span>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );

}
