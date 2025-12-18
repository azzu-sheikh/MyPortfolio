import React from 'react';
// Correct import assuming react-icons is installed
import { FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'; //
import styles from './Footer.module.css'; //

const Footer = () => {
  return (
    <footer className={styles.footer}> {/* */}
      <div className={styles.container}> {/* */}
        <div className={styles.socialIcons}> {/* */}
          {/* Replace # with actual links */}
          <a href="#" aria-label="Twitter"><FaTwitter /></a> {/* */}
          <a href="https://www.instagram.com/azeem_sheikh._/" aria-label="Instagram"><FaInstagram /></a> {/* */}
          <a href="https://www.linkedin.com/in/azeem-sheikh-330480241/" aria-label="LinkedIn"><FaLinkedin /></a> {/* */}

        </div>
        <p>&copy; {new Date().getFullYear()} Abdul Azeem Sheikh.</p> {/* Dynamically set year */} {/* */}
      </div>
    </footer>
  );
};

export default Footer;