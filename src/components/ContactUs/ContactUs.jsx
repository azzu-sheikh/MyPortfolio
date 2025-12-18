import React, { useRef, useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import styles from './ContactUs.module.css';
import { X } from 'lucide-react'; 

// FIXED: Changed path to match your folder structure
// import miartzLogo from '../images/miartzlogo.jpg'; 

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_za1bq7q";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ckbfxdh"; // Admin Template ID
// TODO: Create a new template in EmailJS for auto-reply and paste the ID here
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || "template_igec3iv"; 
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "FjtjcQdIW4VRhyiUI";

// Google Maps Embed URL
const MAP_EMBED_URL = "https://maps.google.com/maps?q=8th+cross,+Madina+Nagar,+Mangamanpalya+Main+Road,+Bommanahalli,+Bengaluru+-+560068&t=&z=13&ie=UTF8&iwloc=&output=embed";
// Direct link for opening in new tab
const MAP_EXTERNAL_LINK = "https://maps.app.goo.gl/wmiA1iUeV8X1UYf78";

const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); 
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Add timestamp (hidden input)
    const timeInput = document.createElement('input');
    timeInput.type = 'hidden';
    timeInput.name = 'time';
    timeInput.value = new Date().toString();
    form.current.appendChild(timeInput);

    // 1. Send Admin Email
    const sendAdmin = emailjs.sendForm(
      EMAILJS_SERVICE_ID, 
      EMAILJS_TEMPLATE_ID, 
      form.current
    );

    // 2. Send Auto-Reply Email
    // Note: Make sure your Auto-Reply template in EmailJS Dashboard has the "To Email" set to {{email}}
    const sendAutoReply = emailjs.sendForm(
      EMAILJS_SERVICE_ID, 
      EMAILJS_AUTOREPLY_TEMPLATE_ID, 
      form.current
    );

    // Wait for both to complete
    Promise.all([sendAdmin, sendAutoReply])
      .then(
        () => {
          console.log('SUCCESS! Both emails sent.');
          setSubmitStatus('success');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitStatus('error');
        },
      )
      .finally(() => {
        setIsSubmitting(false);
        if (form.current && form.current.contains(timeInput)) {
            form.current.removeChild(timeInput);
        }
      });
  };

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <section id="contactus" className={styles.contactSection}>
      <div className={styles.container}>
        {/* Enquiry Form Column */}
        <div className={styles.formColumn}>
          <h2 className={styles.title}>Contact Now</h2>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
             <div className={styles.inputGroup}>
               <label htmlFor="name" className={styles.label}>Name</label>
               <input type="text" id="name" name="name" className={styles.input} required />
             </div>
             <div className={styles.inputGroup}>
               <label htmlFor="email" className={styles.label}>Email</label>
               <input type="email" id="email" name="email" className={styles.input} required />
             </div>
             <div className={styles.inputGroup}>
               <label htmlFor="phone" className={styles.label}>Phone</label>
               <input type="tel" id="phone" name="phone" className={styles.input} required />
             </div>
             <div className={styles.inputGroup}>
               <label htmlFor="message" className={styles.label}>Message</label>
               {/* CHANGED name="requirement" to name="message" to match email templates */}
               <textarea id="message" name="message" className={styles.textarea}></textarea>
             </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
               <div className={styles.svgWrapper1}>
                 <div className={styles.svgWrapper}>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                     <path fill="none" d="M0 0h24v24H0z"></path>
                     <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                   </svg>
                 </div>
               </div>
               <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
            </button>
            {submitStatus === 'success' && <p style={{ color: 'green', marginTop: '1rem' }}>Message sent successfully!</p>}
            {submitStatus === 'error' && <p style={{ color: 'red', marginTop: '1rem' }}>Failed to send message. Please try again.</p>}
          </form>
        </div>

        {/* Address & Details Column */}
        <div className={styles.detailsColumn}>
          <h2 className={styles.title1}>Current address</h2>
          <div className={styles.logoContainer}>
            {/* <img src={miartzLogo} alt="MIARTZ Logo" className={styles.companyLogo} /> */}
          </div>
          <div className={styles.address}>
             <div>
               <span>8th cross, Madina Nagar, Mangamanpalya Main Road,</span>
               <span>Bommanahalli</span>
               <span>Bengaluru - 560068</span>
             </div>
          </div>

          {/* Map Button Area */}
          <div className={styles.mapBtnContainer}>
             <svg height="0" width="0" style={{ position: 'absolute' }}>
               <filter id="land">
                 <feTurbulence result="turb" numOctaves="7" baseFrequency="0.006" type="fractalNoise"></feTurbulence>
                 <feDisplacementMap yChannelSelector="G" xChannelSelector="R" scale="700" in="SourceGraphic" in2="turb"></feDisplacementMap>
               </filter>
             </svg>
             <div className={styles.mapBtnWrapper}>
                <button type="button" onClick={toggleMap} className={styles.mapBtn}>
                  {showMap ? 'Hide Map' : 'View on Map'} 
                </button>
                <div className={styles.pinpoint}></div>
                <div className={styles.mapContainer}>
                  <div className={`${styles.map} ${styles.fold1}`}></div>
                  <div className={`${styles.map} ${styles.fold2}`}></div>
                  <div className={`${styles.map} ${styles.fold3}`}></div>
                  <div className={`${styles.map} ${styles.fold4}`}></div>
                </div>
             </div>
          </div>

          {/* Map Iframe */}
          {showMap && (
            <div className={styles.mapEmbedContainer}>
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="300" 
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
               <a href={MAP_EXTERNAL_LINK} target="_blank" rel="noopener noreferrer" className={styles.openMapExternallyButton}>
                 Open in Google Maps
               </a>
              <button onClick={toggleMap} className={styles.closeMapButton} aria-label="Close map">
                <X size={18} />
              </button>
            </div>
          )}

          {/* Contact Info */}
          <div className={styles.contactInfo}>
             <p>abdulazeemsheik4@gmail.com</p>
             <p>+91 729944172</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;