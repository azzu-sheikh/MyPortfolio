import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaCalendarAlt } from "react-icons/fa";
import styles from './Certifications.module.css';

export default function Certifications() {
  const certifications = [
    { 
      title: "Artificial Intelligence & Deep Learning", 
      issuer: "360DigiTMG", 
      date: "10 Jan 2026",
      link: "https://drive.google.com/file/d/1lDHtDDpU0MzlNOyikZDOsCuCBEK1fvjo/view?usp=drive_link" 
    },
    { 
      title: "Data Science using Python & R Programming", 
      issuer: "360DigiTMG", 
      date: "31 Oct 2025",
      link: "https://drive.google.com/file/d/12yCJfcXC9F0q61n0FITL3bhfLGAThf_N/view?usp=drive_link" 
    },
    { 
      title: "Full-Stack Development", 
      issuer: "Varcons Technology Pvt Ltd", 
      date: "30 Nov 2023",
      link: "https://drive.google.com/file/d/1HWdmyzHbiNeof6SniS7nreDq5qEHNh89/view?usp=drivesdk" 
    },
    { 
      title: "Python Programming", 
      issuer: "360DigiTMG", 
      date: "28 Aug 2025",
      link: "https://drive.google.com/file/d/1H_Nc8lCiQttb_2asiDL6QDQOrEepZ-5P/view?usp=sharing"
    },
    { 
      title: "SQL", 
      issuer: "360DigiTMG", 
      date: "24 Sep 2025",
      link: "https://drive.google.com/file/d/1jDFjPj9d3bY8gW1w4MUci6MM1lW1uAHa/view?usp=drive_link" // PASTE YOUR GOOGLE DRIVE LINK HERE
    },
    { 
      title: "Data Visualisation using Power BI", 
      issuer: "360DigiTMG", 
      date: "9 Oct 2025",
      link: "https://drive.google.com/file/d/1H-gPksVKc4RH8AtPGKhDGWF0Rd8We3Zu/view?usp=drive_link" // PASTE YOUR GOOGLE DRIVE LINK HERE
    },
    { 
      title: "Cloud Computing", 
      issuer: "360DigiTMG", 
      date: "9 Sep 2025",
      link: "https://drive.google.com/file/d/1InL1VB2byGuvEhVQ-0v97JawRG_6bmtK/view?usp=drive_link" // PASTE YOUR GOOGLE DRIVE LINK HERE
    },
    { 
      title: "Geo Data Processing using Python", 
      issuer: "ISRO - IIRS", 
      date: "18 Jan 2024",
      link: "https://drive.google.com/file/d/1gkZWQF4BHqq1pCzIdDMShMJL2YxH7bSE/view?usp=drivesdk" 
    },
    { 
      title: "ChatGPT & AI Tools", 
      issuer: "Skill Nation", 
      date: "03 July 2024",
      link: "https://drive.google.com/file/d/1jWah_Fs5qTO6sM1VQc8z2ruai8zFabin/view?usp=drivesdk" 
    },
    { 
      title: "Python Programming", 
      issuer: "Coursera", 
      date: "15 July 2023",
      link: "https://drive.google.com/file/d/1rjcMGIOhnGoves8IH1dwts3qJL6c2-Dj/view?usp=sharing" 
    },
    { 
      title: "Inter-Intra Institutional Internship Program - 2021-22", 
      issuer: "Jawaharlal Nehru New College of Engineering, Shivamogga", 
      date: "29 Oct 2022",
      link: "https://drive.google.com/file/d/1gQITLjbj18s3wnioPamF5gh9Ub06FDFy/view?usp=sharing" 
    },
    { 
      title: "Cyber Security", 
      issuer: "IBM - Edunet Foundation", 
      date: "25 Nov 2023",
      link: "https://drive.google.com/file/d/1gePTY-ZVQwB3UwxrLm_AXItzj3TPBgGE/view?usp=drivesdk"
    },
         { 
      title: "Computational Theory", 
      issuer: "Infosys Spring Board", 
      date: "14 Dec 2023",
      link: "https://drive.google.com/file/d/1gwSayDfOIwcwTuubSB_lqtU6HbRLEjoL/view?usp=drivesdk" 
    },
    { 
      title: "THE IAMAI FUTURE FOUNDERS 2022", 
      issuer: "K-Tech & IAMAI", 
      date: "21 Oct 2022",
      link: "https://drive.google.com/file/d/10Cxv3KBbZGHCkuqI_LUvzfyMr5ztpymc/view?usp=drive_link" 
    },
    { 
      title: "Design Impact Movement", 
      issuer: "Titan", 
      date: "05 May 2024",
      link: "https://drive.google.com/file/d/1fnzPksDgaAkvKOWTllWPku-E4Y3mMu5I/view?usp=drivesdk" 
    }
  ];

  // Pagination Logic
  const itemsPerPage = 5; // Show 5 certificates per page
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  const displayedCertifications = certifications.slice(
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

      {/* List Container with Key to force re-animation on page change */}
      <motion.ul 
        key={currentPage} 
        className={styles.listContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {displayedCertifications.map((cert, index) => (
          <motion.li key={`${currentPage}-${index}`} variants={itemVariants}>
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`${styles.pageBullet} ${index === currentPage ? styles.activeBullet : ''}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}





