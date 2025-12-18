// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
// src/components/Navbar/Navbar.jsx
import { Menu, X, Home, Phone, LogOut, Briefcase, Award } from 'lucide-react'; // Standard import
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from '../ui/dropdown-menu'; 
import { throttle } from 'lodash';
import styles from './Navbar.module.css';
import Sidebar from '../Sidebar/Sidebar.jsx';

const menuItems = [
  { label: 'Home', href: '#home', icon: <Home size={18} /> },
  { label: 'Experience', href: '#experience', icon: <Briefcase size={18} /> },
  { label: 'Certifications', href: '#certifications', icon: <Award size={18} /> },
  { label: 'Contact', href: '#contactus', icon: <Phone size={18} /> },
];

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

const Navbar = ({ isLoggedIn, username, onLogout }) => {
  const [isSidebarMode, setIsSidebarMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsSidebarMode(window.scrollY > scrollThreshold);
    };
    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', throttledHandleScroll);
        throttledHandleScroll.cancel(); 
    };
  }, []); 

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    if (href === '#home') {
      e.preventDefault();
      window.location.href = '/'; 
      return;
    }
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const animationDuration = 0.8;
  const buttonColor = '#8B5CF6';
  const textColor = '#F5F5F5';
  const buttonSize = 'md';
  const zIndex = 1000;
  const buttonSizes = { sm: styles.buttonSm, md: styles.buttonMd, lg: styles.buttonLg };
  const buttonRef = useRef(null);

  return (
    <>
      <nav
        ref={navbarRef}
        className={cn(
          styles.navbar,
          isSidebarMode ? styles.navbarSidebarMode : styles.navbarHeaderMode
        )}
        style={{ '--animation-duration': `${animationDuration}s`, zIndex: zIndex }}
      >
        {/* Header Content */}
        <div className={cn(styles.headerContent, isSidebarMode && styles.hidden)}>
          
          {/* Navigation Links (With Icons) */}
          <div className={styles.navLinks}>
            {menuItems.map(item => (
              <a 
                key={item.label} 
                href={item.href} 
                className={styles.navLink} // Use the new class
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {/* Render Icon */}
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
           
          {/* Right Group: Auth & Hamburger */}
          <div className={styles.navRightGroup}>
            {isLoggedIn && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={styles.usernameButton}>
                    {/* User Icon or Initial could go here if available */}
                    {username}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={styles.dropdownContent} align="end">
                  <DropdownMenuItem 
                    className={styles.logoutItem} 
                    onClick={onLogout}
                    onSelect={(e) => e.preventDefault()} 
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Hamburger Button (Header) */}
            <button
                ref={buttonRef} 
                className={cn(styles.hamburgerButton, buttonSizes[buttonSize], styles.hamburgerButtonHeader)}
                style={{ zIndex: zIndex + 1 }}
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
            >
                <div className={styles.iconContainer}>
                    <Menu className={cn(styles.iconBase, isOpen ? styles.iconHidden : styles.iconVisible)} color={textColor} />
                    <X className={cn(styles.iconBase, isOpen ? styles.iconVisible : styles.iconHidden)} color={textColor} />
                </div>
            </button>
          </div>
        </div>

        {/* Hamburger (Sidebar Mode) */}
        {isSidebarMode && (
          <button
            ref={buttonRef} 
            className={cn(styles.hamburgerButton, buttonSizes[buttonSize], styles.hamburgerButtonSidebar)}
            style={{ zIndex: zIndex + 1 }}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
              <div className={styles.iconContainer}>
                 <Menu className={cn(styles.iconBase, isOpen ? styles.iconHidden : styles.iconVisible)} color={textColor} />
                 <X className={cn(styles.iconBase, isOpen ? styles.iconVisible : styles.iconHidden)} color={textColor} />
             </div>
          </button>
        )}
      </nav>

      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        menuItems={menuItems}
        zIndex={zIndex}
        logoAlt="MiArtz Logo"
        isLoggedIn={isLoggedIn}
        username={username}
        onLogout={() => { onLogout(); setIsOpen(false); }}
      />
    </>
  );
};

export default Navbar;