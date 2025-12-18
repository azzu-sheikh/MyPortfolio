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
    icon: <GiArtificialIntelligence />,
    imgUrl: NLP_AI,
    title: "NLP & AI",
    subtitle: "LangChain, TF-IDF",
    description: "Text vectorization, retrieval-based QA systems."
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
  // Simplified animation for scroll list
  const cardVariants = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <u> &nbsp; Skills &nbsp;</u>
        </h2>
        
        {/* Horizontal Scroll Container */}
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className={styles.card}
              style={{
                backgroundImage: `url(${feature.imgUrl})`
              }}
            >
              <div className={styles.cardOverlay}>
                <div className={styles.icon}>{feature.icon}</div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                {/* Subtitle with updated visibility */}
                <h4 className={styles.cardSubtitle}>{feature.subtitle}</h4>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;