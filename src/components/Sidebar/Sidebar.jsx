// src/components/Sidebar/Sidebar.jsx
import React, { useEffect, useRef } from 'react';
import styles from './Sidebar.module.css';
import { X, LogOut } from 'lucide-react'; 

// Utility function
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

const Sidebar = ({
  isOpen,
  onClose,
  menuItems,
  isLoggedIn,
  username,
  onLogout,
  // Removed onSignUpClick as it's no longer used
  sidebarWidth = "280px", 
  sidebarBackground = "linear-gradient(180deg, rgba(10, 8, 38, 1) 0%, rgba(20, 16, 68, 1) 100%)", 
  textColor = "#F5F5F5", 
  headingColor = "#E0E0E0", 
  accentColor = "#8B5CF6", 
  fontSize = "md", 
  fontFamily = '"Krona One", monospace',
  fontWeight = "normal",
  animationDuration = 0.4, 
  staggerDelay = 0.05, 
  enableBlur = true,
  zIndex = 1000,
}) => {
  const sidebarRef = useRef(null);

  // Map prop strings to CSS
  const fontSizes = { sm: styles.fontSm, md: styles.fontMd, lg: styles.fontLg, xl: styles.fontXl, '2xl': styles.font2xl };

  // Handle item clicks
  const handleItemClick = (item) => {
    // FIXED: Reload page if Home is clicked
    if (item.href === '#home') {
      onClose();
      window.location.href = '/'; 
      return;
    }

    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      if (item.href.startsWith('#')) {
        const targetElement = document.querySelector(item.href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = item.href;
      }
    }
    onClose(); // Close menu on item click
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Add inert attribute dynamically
  useEffect(() => {
    const sidebarElement = sidebarRef.current;
    if (sidebarElement) {
      if (!isOpen) {
        const timer = setTimeout(() => {
          sidebarElement.inert = true;
        }, animationDuration * 1000); 
        return () => clearTimeout(timer);
      } else {
        sidebarElement.inert = false;
      }
    }
  }, [isOpen, animationDuration]);

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className={cn(styles.sidebarBackdrop, enableBlur && styles.blurBackdrop)}
          style={{ zIndex: zIndex - 1 }} 
          onClick={onClose}
        ></div>
      )}

      {/* The actual sidebar container */}
      <div
        ref={sidebarRef}
        className={cn(
          styles.sidebarContainer,
          isOpen && styles.open
        )}
        style={{
          '--sidebar-width': sidebarWidth,
          '--animation-duration': `${animationDuration}s`,
          background: sidebarBackground,
          zIndex: zIndex,
          color: textColor, 
        }}
      >
        {/* Sidebar Header */}
        <div className={styles.sidebarHeader}>
          {isLoggedIn ? (
            <h2 style={{ color: headingColor, fontFamily: fontFamily, textTransform: 'none' }}>
              {username}
            </h2>
          ) : (
            <h2 style={{ color: headingColor, fontFamily: fontFamily }}>Navigation</h2>
          )}
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
          >
            <X size={24} color={textColor} />
          </button>
        </div>

        {/* Menu Items Wrapper */}
        <div className={styles.menuItemsWrapper}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li
                key={item.label}
                className={cn(
                  styles.menuItem,
                  fontSizes[fontSize],
                  isOpen && styles.visible 
                )}
                style={{
                  transitionDelay: isOpen ? `${index * staggerDelay}s` : "0s",
                  fontFamily: fontFamily,
                  fontWeight: fontWeight,
                  '--accent-color': accentColor, 
                }}
                onClick={() => handleItemClick(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleItemClick(item);
                  }
                }}
                tabIndex={isOpen ? 0 : -1}
                role="button"
              >
                <span>
                  {item.icon && <span className={styles.menuIcon}>{item.icon}</span>}
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer - Only show Logout if logged in. Sign Up removed. */}
        <div className={styles.sidebarFooter}>
          {isLoggedIn && (
            <button
              className={styles.logoutButtonSidebar}
              style={{ '--accent-color': accentColor }}
              onClick={onLogout}
              tabIndex={isOpen ? 0 : -1}
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          )}
        </div>

      </div>
    </>
  );
};

export default Sidebar;