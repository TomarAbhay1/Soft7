import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        <div className="testimonials-header">
          <div className="testimonials-badge-wrapper">
             <span className="testimonials-badge">Customers</span>
          </div>
          <div className="testimonials-title-row">
            <h2 className="testimonials-heading">
              Teams that ship <br/>
              <span className="text-green">conversations</span>, not tickets.
            </h2>
            <div className="testimonials-rating">
              <div className="stars">★★★★★</div>
              <p>4.6/5 average across 1,200+ reviews</p>
            </div>
          </div>
        </div>

        <div 
          className={`testimonials-grid unfold-3d ${isVisible ? 'unfold-visible' : ''}`}
          ref={gridRef}
        >
          {/* Card 1 */}
          <div className="testimonial-card light-card">
            <p className="testimonial-quote">
              "We replaced three tools with WhatsApp API. Our response time dropped from 4 hours to under 2 minutes — and qualified pipeline went up 3x."
            </p>
            <div className="testimonial-metric">+312% QUALIFIED LEADS</div>
            <div className="testimonial-author">
              <div className="author-avatar">M</div>
              <div className="author-info">
                <strong>Melissa Chen</strong>
                <span>Head of Growth, PMClub</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="testimonial-card dark-card">
            <p className="testimonial-quote">
              "The no-code chatbot builder saved our 6-person support team from hiring two more agents this quarter. The ROI is honestly absurd."
            </p>
            <div className="testimonial-metric">-68% SUPPORT COST</div>
            <div className="testimonial-author">
              <div className="author-avatar green-bg">D</div>
              <div className="author-info">
                <strong>Daniel Okafor</strong>
                <span>Ops Lead, Lumio</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="testimonial-card light-card">
            <p className="testimonial-quote">
              "Their AI Agent handles 70% of pre-sales chats end-to-end. Customers can't tell the difference and our team finally focuses on closing."
            </p>
            <div className="testimonial-metric">70% CHATS AUTOMATED</div>
            <div className="testimonial-author">
              <div className="author-avatar light-green-bg">P</div>
              <div className="author-info">
                <strong>Priya Raman</strong>
                <span>VP Sales, Nordtrack</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
