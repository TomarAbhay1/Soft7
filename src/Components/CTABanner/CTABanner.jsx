import React, { useEffect, useRef, useState } from 'react';
import './CTABanner.css';

export default function CTABanner() {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  return (
    <section className="cta-banner-section">
      <div className="cta-banner-container">
        
        <div 
          className={`cta-banner-box dark-section ${isVisible ? 'banner-visible' : ''}`}
          ref={bannerRef}
        >
          <div className="cta-banner-content">
            <h2 className="cta-banner-heading">
              Start a<br/>
              conversation that<br/>
              ends in revenue.
            </h2>
            <p className="cta-banner-subtext">
              Set up your WhatsApp Business API in under 10 minutes. No card. No code. No sales call required.
            </p>
          </div>
          <div className="cta-banner-actions">
            <button className="banner-primary-btn">Try for Free →</button>
            <button className="banner-secondary-btn">Book a demo</button>
          </div>
        </div>

      </div>
    </section>
  );
}
