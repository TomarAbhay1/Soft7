import React, { useEffect, useRef, useState } from 'react';
import './CTASection.css';

export default function CTASection() {
  const [isDark, setIsDark] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDark(true);
        } else {
          setIsDark(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      className={`cta-section ${isDark ? 'cta-dark' : 'cta-light'}`}
      ref={sectionRef}
    >
      <div className="cta-glow"></div>
      <div className={`cta-container ${isDark ? 'cta-visible' : ''}`}>
        <h2 className="cta-heading">Ready to scale your business?</h2>
        <p className="cta-subheading">
          Join thousands of modern brands using WhatsApp to engage customers, automate support, and drive revenue.
        </p>
        <div className="cta-buttons">
          <button className="cta-primary-btn">Get Started for Free</button>
          <button className="cta-secondary-btn">Talk to Sales</button>
        </div>
      </div>
    </section>
  );
}
