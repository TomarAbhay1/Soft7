import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [isBlackGlass, setIsBlackGlass] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  // Track dynamic shadow depth offsets when user leaves the top edge
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute precise real-time bounding intersection overlapping on scroll
  // Flawlessly handles dynamic deep theme switches on child layout screens
  useEffect(() => {
    const checkDarkOverlap = () => {
      const nav = navRef.current;
      if (!nav) return;
      
      const navRect = nav.getBoundingClientRect();
      const checkY = navRect.top + (navRect.height / 2);
      
      const darkSections = document.querySelectorAll('.dark-section');
      let overlapping = false;
      
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (checkY >= rect.top && checkY <= rect.bottom) {
          overlapping = true;
        }
      });
      
      setIsBlackGlass(overlapping);
    };

    window.addEventListener('scroll', checkDarkOverlap, { passive: true });
    window.addEventListener('resize', checkDarkOverlap, { passive: true });
    
    const timer = setTimeout(checkDarkOverlap, 50);
    
    return () => {
      window.removeEventListener('scroll', checkDarkOverlap);
      window.removeEventListener('resize', checkDarkOverlap);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  // Dismiss overlay panel gracefully upon page navigation routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      ref={navRef} 
      id="minimalist-premium-navbar"
      className={`navbar-docked ${isBlackGlass ? 'navbar-glass-black' : 'navbar-glass-light'} ${isScrolled ? 'navbar-scrolled' : ''}`}
    >
      <div className="navbar-inner-container">
        
        {/* Left Side Anchored Branding Box */}
        <Link to="/" className="navbar-brand-logo" aria-label="Soft7 Home">
          <div className="brand-geometric-icon">
            <div className="geo-block block-top"></div>
            <div className="geo-block block-base"></div>
          </div>
          <span className="brand-title-text">soft7</span>
        </Link>

        {/* Ultra-Minimalist Center Link Stack */}
        <nav className="navbar-center-nav">
          <ul className="navbar-nav-list">
            
            <li className="nav-list-item">
              <a href="/#problems" className="nav-item-link">Problems</a>
            </li>

            <li className="nav-list-item">
              <a href="/#solution" className="nav-item-link">Solutions</a>
            </li>

            <li className="nav-list-item">
              <Link to="/contact-us" className={`nav-item-link ${isActive('/contact-us') ? 'active' : ''}`}>Contact us</Link>
            </li>

          </ul>
        </nav>

        {/* Right Side Compact High-Contrast Controls */}
        <div className="navbar-right-actions">
          <button className="btn-login-pill">Log in</button>
          
          <Link to="/contact-us" className="btn-demo-pill">
            <span>Demo</span>
            <FaChevronRight className="demo-chevron" />
          </Link>

          <button 
            className="btn-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Drawer"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Touch-Optimized Responsive Overlay Panel */}
      <div className={`mobile-glass-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-content">
          
          <div className="drawer-links-group">
            <span className="group-header">Navigation</span>
            <a href="/#problems" className="drawer-item-link" onClick={() => setIsMobileMenuOpen(false)}>Problems</a>
            <a href="/#solution" className="drawer-item-link" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
            <Link to="/contact-us" className="drawer-item-link" onClick={() => setIsMobileMenuOpen(false)}>Contact us</Link>
          </div>

          <div className="drawer-actions-stack">
            <button className="drawer-login-btn">Log in</button>
            <Link to="/contact-us" className="drawer-demo-btn" onClick={() => setIsMobileMenuOpen(false)}>
              <span>Demo</span>
              <FaChevronRight />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
