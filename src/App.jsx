import React, { Suspense, lazy, useState } from 'react';
import './index.css';

// --- Eager Imports ---
// These load immediately to ensure the initial view (Above the Fold) renders fast.
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

// --- Lazy Imports ---
// These components are downloaded only when needed, reducing the initial bundle size.
const Features = lazy(() => import('./components/Features/Features'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certifications = lazy(() => import('./components/Certifications'));
const Research = lazy(() => import('./components/Research')); // Uncomment if you want to display the Research section
const ContactUs = lazy(() => import('./components/ContactUs/ContactUs'));
const Footer = lazy(() => import('./components/Footer/Footer'));

// --- Loading Spinner Component ---
// This is displayed while a lazy component is being fetched.
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '300px', // Prevents layout shift
    background: 'transparent'
  }}>
    <div className="spinner"></div>
    <style>{`
      .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(139, 92, 246, 0.3);
        border-top: 4px solid #00D8FF;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('User');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername('Azeem');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">
      <Navbar 
        onSignUpClick={handleLogin} 
        isLoggedIn={isLoggedIn} 
        username={username}
        onLogout={handleLogout}
      />
      
      {/* Hero Section (Eager Load) */}
      <div id="home">
        <Hero />
      </div>

      {/* Lazy Loaded Sections wrapped in Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        
        <div id="skills">
          <Features />
        </div>

        <div id="experience">
          <Experience />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="research">
          <Research />
        </div> 
        

        <div id="certifications">
          <Certifications />
        </div>

        <div id="contactus">
          <ContactUs />
        </div>

        <Footer />
        
      </Suspense>
    </div>
  );
}

export default App;
