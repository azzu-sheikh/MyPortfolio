import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import Background from '../images/Background.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  
  // State to control the toggle button (false = Explore, true = Let's Go)
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 2.5,
      });

      tl.from(titleRef.current, { opacity: 0, y: 30, duration: 0.8 });
      tl.from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.8 }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Helper for standard navigation
  const navigate = (destination) => {
    const section = document.getElementById(destination);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.dispatchEvent(
        new CustomEvent('talentz:navigate', { detail: { to: destination } })
      );
    }
  };

  // Handle the toggle interaction
  const handleToggle = (e) => {
    // Only trigger if currently in "Explore" state (unchecked)
    if (!isToggled) {
      setIsToggled(true); 
      
      // Wait 2 seconds for the "Let's Go" animation to play, then navigate
      setTimeout(() => {
        navigate('projects');
        setIsToggled(false); // RESET: Ensures the button returns to "Explore" and works again
      }, 2000);
    }
  };

  return (
    <section ref={heroRef} className={styles.hero}>
      {/* Background */}
      <motion.div
        className={styles.heroBackground}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: -4 }}
      >
        <img
          src={Background}
          alt="Hero Background"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>

      {/* Floating Glow */}
      <div className={styles.float} />

      {/* 3D Model Embed */}
      <motion.div
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.5 }}
      >
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-QCoQHCf2ON8zVmHKNzgS3JRs/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D Model"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Content */}
      <div className={styles.contentWrapper}>
        <span ref={titleRef} className={styles.title}>
          Abdul Azeem Sheikh <br />
          <span className={styles.title1}>Data Scientist | Machine Learning Engineer</span>
        </span>

        <div className={styles.rightColumn}>
          <div className={styles.textRow}>
                <div className={styles.leftText}>
                <p className={styles.subtitle1}>
                    Creative intelligence,<br />
                    engineered with
                </p>
                </div>

                <div className={styles.rightText}>
                <p className={styles.highlightText1}>Data.</p>
                </div>
            </div>

          <div className={styles.buttonGroup}>
            {/* Button 1: Contact Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.1 }}
            >
              <button
                className={styles.btnPrimary}
                onClick={() => navigate('contactus')}
              >
                Contact Me
              </button>
            </motion.div>

            {/* Button 2: Toggle "Explore" -> "Let's Go" -> Navigate to Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4 }}
            >
              <div className={styles.area}>
                <div className={styles.bg}>
                  <div className={styles.light1}></div>
                  <div className={styles.light2}></div>
                  <div className={styles.light3}></div>
                </div>

                <label className={styles.areaWrapper}>
                  <div className={styles.wrapper}>
                    <input 
                      type="checkbox" 
                      className={styles.input} 
                      checked={isToggled}
                      onChange={handleToggle}
                    />
                    <div className={styles.button}>
                      <div className={styles.part1}>
                        <div className={styles.case}>
                          <div className={styles.mask}></div>
                          <div className={styles.line}></div>
                        </div>
                        <div className={styles.screw}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 115 126" className={styles.screwSvg}>
                            <g style={{ '--i': 1 }} className={styles.screwG}>
                              <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="#262626" fill="url(#paint_linear_steel)" d="M91.4371 119V7C91.4371 3.686 94.1231 1 97.4371 1H107.617C110.931 1 113.617 3.686 113.617 7V119C113.617 122.314 110.931 125 107.617 125H97.4371C94.1231 125 91.4371 122.314 91.4371 119Z"></path>
                              <path fillOpacity="0.4" fill="#262626" d="M94 6C94 3.79086 95.7909 2 98 2H109C111.209 2 113 3.79086 113 6V88.2727C113 89.2267 112.227 90 111.273 90C101.733 90 94 82.2667 94 72.7273V6Z"></path>
                              <path fill="currentColor" d="M98.0101 11.589C98.0101 9.57 99.6461 7.93402 101.665 7.93402H105.027C107.046 7.93402 108.682 9.57 108.682 11.589C108.682 13.608 107.046 15.244 105.027 15.244H101.665C99.6461 15.244 98.0101 13.607 98.0101 11.589Z" style={{ '--i': 1 }} className={styles.screwDot}></path>
                            </g>
                            <g style={{ '--i': 2 }} className={styles.screwG}>
                              <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="#262626" fill="url(#paint_linear_steel)" d="M69.256 119V7C69.256 3.686 71.942 1 75.256 1H85.436C88.75 1 91.436 3.686 91.436 7V119C91.436 122.314 88.75 125 85.436 125H75.256C71.943 125 69.256 122.314 69.256 119Z"></path>
                              <path fillOpacity="0.4" fill="#262626" d="M72 6C72 3.79086 73.7909 2 76 2H87C89.2091 2 91 3.79086 91 6V88.2727C91 89.2267 90.2267 90 89.2727 90C79.7333 90 72 82.2667 72 72.7273V6Z"></path>
                              <path fill="currentColor" d="M76.011 11.589C76.011 9.57 77.647 7.93402 79.666 7.93402H83.028C85.047 7.93402 86.683 9.57 86.683 11.589C86.683 13.608 85.047 15.244 83.028 15.244H79.666C77.647 15.244 76.011 13.607 76.011 11.589Z" style={{ '--i': 2 }} className={styles.screwDot}></path>
                            </g>
                            <g style={{ '--i': 3 }} className={styles.screwG}>
                                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="#262626" fill="url(#paint_linear_steel)" d="M47.076 119V7C47.076 3.686 49.762 1 53.076 1H63.256C66.57 1 69.256 3.686 69.256 7V119C69.256 122.314 66.57 125 63.256 125H53.076C49.762 125 47.076 122.314 47.076 119Z"></path>
                                <path fillOpacity="0.4" fill="#262626" d="M50 6C50 3.79086 51.7909 2 54 2H65C67.2091 2 69 3.79086 69 6V86.9664C69 88.6418 67.6418 90 65.9664 90C57.1484 90 50 82.8516 50 74.0336V6Z"></path>
                                <path fill="currentColor" d="M54.012 11.589C54.012 9.57 55.648 7.93396 57.667 7.93396H61.029C63.048 7.93396 64.684 9.57 64.684 11.589C64.684 13.608 63.048 15.244 61.029 15.244H57.667C55.648 15.244 54.012 13.607 54.012 11.589Z" style={{ '--i': 3 }} className={styles.screwDot}></path>
                            </g>
                            <g style={{ '--i': 4 }} className={styles.screwG}>
                                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="#262626" fill="url(#paint_linear_steel)" d="M23.617 98.853V27.147C23.617 21.501 27.11 16.262 32.838 13.318L47.076 6V120L32.838 112.682C27.111 109.738 23.617 104.499 23.617 98.853Z"></path>
                                <path fillOpacity="0.4" fill="#262626" d="M29.5 18.4083C29.5 16.9267 30.319 15.5664 31.6284 14.8732L46.5 7V78.2374C46.5 80.0393 45.0393 81.5 43.2374 81.5V81.5C35.6504 81.5 29.5 75.3496 29.5 67.7626V18.4083Z"></path>
                            </g>
                            <g style={{ '--i': 5 }} className={styles.screwG}>
                                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="#262626" fill="url(#paint_linear_steel)" d="M1.00006 76.162V49.838C1.00006 43.314 4.91107 37.235 11.3891 33.691L23.6171 27V99L11.3881 92.309C4.91106 88.765 1.00006 82.686 1.00006 76.162Z"></path>
                                <path fillOpacity="0.4" fill="#262626" d="M7.30432 51.7375C7.12191 41.7049 13.279 32.6454 22.6744 29.1221L23 29L23 73.5885C23 74.368 22.368 75 21.5884 75C13.8927 75 7.61519 68.8356 7.47529 61.1412L7.30432 51.7375Z"></path>
                            </g>
                            <defs>
                              <linearGradient gradientUnits="userSpaceOnUse" y2="125" x2="105.425" y1="1" x1="105.425" id="paint_linear_steel">
                                <stop stopColor="#7A7A7A" offset="0.100962"></stop>
                                <stop stopColor="#EEEEEE" offset="0.3125"></stop>
                                <stop stopColor="#787878" offset="0.596154"></stop>
                                <stop stopColor="#666666" offset="0.798077"></stop>
                                <stop stopColor="#9E9E9E" offset="1"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      <div className={styles.part2}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 190 76" className={styles.pathGlass}>
                          <path stroke="currentColor" d="M0 0.5C0 0.5 149 0.5 156.5 0.5C164 0.5 189 8.5 189 37.5C189 66.5 164 75.5 157.5 75.5C151 75.5 1 75.5 1 75.5"></path>
                        </svg>

                        <div className={styles.glass}>
                          <div className={styles.glassReflex}></div>
                          <div className={styles.glassNoise}>
                            <svg height="100%" width="100%">
                                <filter id="noise-filter" height="140%" width="140%" y="-20%" x="-20%">
                                  <feTurbulence result="turbulence" baseFrequency="0.05" numOctaves="4" seed="15" stitchTiles="stitch" type="fractalNoise"></feTurbulence>
                                  <feSpecularLighting result="specularLighting" in="turbulence" specularExponent="20" specularConstant="3" surfaceScale="40" lightingColor="#ffffff">
                                    <feDistantLight elevation="69" azimuth="3"></feDistantLight>
                                  </feSpecularLighting>
                                </filter>
                                <rect width="100%" height="100%" filter="url(#noise-filter)" opacity="0.2"></rect>
                            </svg>
                          </div>

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 52" className={styles.filament}>
                            <path stroke="#ffc4af" d="M32.5 26.1085C32.5 26.1085 32 5.90019 38.5 2.10852C45 -1.68315 49 5.10852 47.5 9.60852C46 14.1085 39.5 17.1085 21 18.1085C13.667 18.5049 6.49118 18.0371 0.5 17.328"></path>
                            <path stroke="#ffc4af" d="M32.5 26C32.5 26 32 46.2083 38.5 50C45 53.7917 49 47 47.5 42.5C46 38 39.5 35 21 34C13.667 33.6036 6.49118 34.0714 0.5 34.7805"></path>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 52" className={`${styles.filament} ${styles.filamentOn}`}>
                             <path stroke="white" d="M32.5 26.1085C32.5 26.1085 32 5.90019 38.5 2.10852C45 -1.68315 49 5.10852 47.5 9.60852C46 14.1085 39.5 17.1085 21 18.1085C13.667 18.5049 6.49118 18.0371 0.5 17.328"></path>
                             <path stroke="white" d="M32.5 26C32.5 26 32 46.2083 38.5 50C45 53.7917 49 47 47.5 42.5C46 38 39.5 35 21 34C13.667 33.6036 6.49118 34.0714 0.5 34.7805"></path>
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 52" className={`${styles.filament} ${styles.filamentBlur}`}>
                             <path stroke="currentColor" d="M32.5 26.1085C32.5 26.1085 32 5.90019 38.5 2.10852C45 -1.68315 49 5.10852 47.5 9.60852C46 14.1085 39.5 17.1085 21 18.1085C13.667 18.5049 6.49118 18.0371 0.5 17.328"></path>
                             <path stroke="currentColor" d="M32.5 26C32.5 26 32 46.2083 38.5 50C45 53.7917 49 47 47.5 42.5C46 38 39.5 35 21 34C13.667 33.6036 6.49118 34.0714 0.5 34.7805"></path>
                          </svg>

                          <span className={styles.content}>
                            {/* State 1: "Explore" */}
                            <span className={`${styles.text} ${styles.state2}`}>
                              <span data-label="P" style={{ '--i': 1 }}>P</span>
                              <span data-label="r" style={{ '--i': 2 }}>r</span>
                              <span data-label="o" style={{ '--i': 3 }}>o</span>
                              <span data-label="j" style={{ '--i': 4 }}>j</span>
                              <span data-label="e" style={{ '--i': 5 }}>e</span>
                              <span data-label="c" style={{ '--i': 6 }}>c</span>
                              <span data-label="t" style={{ '--i': 7 }}>t</span>
                              <span data-label="s" style={{ '--i': 8 }}>s</span>

                            </span>

                            {/* State 2: "Let's Go" */}
                            <span className={`${styles.text} ${styles.state1}`}>
                              <span data-label="L" style={{ '--i': 1 }}>L</span>
                              <span data-label="e" style={{ '--i': 2 }}>e</span>
                              <span data-label="t" style={{ '--i': 3 }}>t</span>
                              <span data-label="'" style={{ '--i': 4 }}>'</span>
                              <span data-label="s" style={{ '--i': 5 }}>s</span>
                              <span data-label="" style={{ '--i': 6 }}></span>
                              <span data-label="G" style={{ '--i': 7 }}>G</span>
                              <span data-label="o" style={{ '--i': 8 }}>o</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>

                <div className={styles.noise}>
                  <svg height="100%" width="100%">
                    <defs>
                      <pattern height="500" width="500" patternUnits="userSpaceOnUse" id="noise-pattern">
                        <filter y="0" x="0" id="noise">
                          <feTurbulence stitchTiles="stitch" numOctaves="3" baseFrequency="0.65" type="fractalNoise"></feTurbulence>
                          <feBlend mode="screen"></feBlend>
                        </filter>
                        <rect filter="url(#noise)" height="500" width="500"></rect>
                      </pattern>
                    </defs>
                    <rect fill="url(#noise-pattern)" height="100%" width="100%"></rect>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;