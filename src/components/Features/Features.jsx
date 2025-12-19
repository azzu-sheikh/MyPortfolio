import React from 'react';
import { motion } from 'framer-motion';

// Imports
import { FaFileCode, FaGithub } from "react-icons/fa";
import { MdOutlineDashboard, MdQueryStats } from "react-icons/md";
import { BsRobot } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { DiDatabase } from "react-icons/di";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

import styles from './Features.module.css';

// Images
import Programming from '../images/Programming.jpg';
import Data_Analysis from '../images/DataAnalysis.jpg';
import Machine_Learning from '../images/MachineLearning.jpg';
import Statistics from '../images/Statistics.jpg';
import Data_Visualization from '../images/DataVisualization.jpg';
import Databases from '../images/Database.jpg';
import NLP_AI from '../images/NLP&AI.jpg';
import Model_Deployment from '../images/ModelDeployment.jpg';
import Tools from '../images/Tools.jpg';

const featuresData = [
  {
    icon: <FaFileCode />,
    imgUrl: Programming,
    title: "Programming",
    subtitle: "Python, ReactJS, HTML, CSS",
    description: "Data analysis, scripting, feature engineering, ML workflows."
  },
  {
    icon: <MdQueryStats />,
    imgUrl: Data_Analysis,
    title: "Data Analysis",
    subtitle: "Pandas, NumPy",
    description: "Data cleaning, transformation, aggregation, EDA."
  },
  {
    icon: <BsRobot />,
    imgUrl: Machine_Learning,
    title: "Machine Learning",
    subtitle: "scikit-learn",
    description: "Regression, Classification, Random Forest, KNN, preprocessing."
  },
  {
    icon: <ImStatsDots />,
    imgUrl: Statistics,
    title: "Statistics",
    subtitle: "Descriptive Stats, Probability",
    description: "Data distributions, hypothesis understanding."
  },
  {
    icon: <MdOutlineDashboard />,
    imgUrl: Data_Visualization,
    title: "Data Visualization",
    subtitle: "Matplotlib, Seaborn",
    description: "Trend analysis, statistical plots, correlation heatmaps."
  },
  {
    icon: <DiDatabase />,
    imgUrl: Databases,
    title: "Databases",
    subtitle: "SQL, VectorDB (FAISS)",
    description: "Joins, subqueries, indexing, query optimization."
  },
  {
    icon: <GiArtificialIntelligence />,
    imgUrl: NLP_AI,
    title: "NLP & AI",
    subtitle: "LangChain, TF-IDF",
    description: "Text vectorization, retrieval-based QA systems."
  },
  {
    icon: <AiOutlineDeploymentUnit />,
    imgUrl: Model_Deployment,
    title: "Model Deployment",
    subtitle: "Streamlit",
    description: "Interactive ML apps and dashboards."
  },
  {
    icon: <FaGithub />,
    imgUrl: Tools,
    title: "Tools",
    subtitle: "Github",
    description: "Version control and collaboration."
  }
];

const Features = () => {
  // Container controls the staggered timing of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card appearing
        delayChildren: 0.1
      }
    }
  };

  // Individual card animation (Slide Up + Fade In)
  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        mass: 1
      } 
    }
  };

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <u> &nbsp; Skills &nbsp;</u>
        </motion.h2>
        
        {/* Horizontal Scroll Container */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className={styles.card}
            >
              {/* Native Lazy Loading for Performance */}
              <img 
                src={feature.imgUrl} 
                alt={feature.title} 
                className={styles.cardBgImage}
                loading="lazy" 
                width="300"
                height="320"
              />

              <div className={styles.cardOverlay}>
                <div className={styles.icon}>{feature.icon}</div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <h4 className={styles.cardSubtitle}>{feature.subtitle}</h4>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
