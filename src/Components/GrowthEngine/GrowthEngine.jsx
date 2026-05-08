import React, { useEffect, useRef, useState } from 'react';
import './GrowthEngine.css';

export default function GrowthEngine() {
  const [isDark, setIsDark] = useState(false);
  const [scrollTilt, setScrollTilt] = useState({ rotateX: 20, rotateY: -15 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDark(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the section is through the viewport
      // 0 means it's just entering the bottom, 1 means it's leaving the top
      const progress = 1 - (rect.top + rect.height) / (viewportHeight + rect.height);
      
      // Map progress (0 to 1) to rotation angles
      // Start tilted away (e.g., rotateX: 30, rotateY: -20)
      // End flat or slightly tilted the other way
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      const newRotateX = 25 - (clampedProgress * 40); // from 25 to -15
      const newRotateY = -20 + (clampedProgress * 30); // from -20 to +10

      setScrollTilt({ rotateX: newRotateX, rotateY: newRotateY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      className={`growth-section ${isDark ? 'growth-dark' : 'growth-light'}`}
      ref={sectionRef}
    >
      <div className="growth-container">
        
        {/* Part 1: Top Hero Box Section */}
        <div className={`growth-fade-in ${isDark ? 'growth-visible' : ''}`}>
          <h2 className="growth-heading">
            Turn WhatsApp Into Your <br/>
            Growth Engine
          </h2>
          <p className="growth-subheading">
            Automate chats, capture leads, and scale customer engagement without extra effort.
          </p>
          
          <div className="growth-hero-box-wrapper" style={{ perspective: '1200px' }}>
             <div 
                className="growth-hero-box-inner" 
                style={{ 
                  transform: `rotateX(${scrollTilt.rotateX}deg) rotateY(${scrollTilt.rotateY}deg)`,
                  transition: 'transform 0.1s linear'
                }}
             >
               <div className="growth-hero-box-core">
                 
                 <div className="phone-mockup">
                   <div className="phone-header">
                     <div className="phone-contact">
                       <div className="phone-avatar"></div>
                       <div className="phone-name">GrowthBot <span>Online</span></div>
                     </div>
                   </div>
                   <div className="phone-chat-area">
                     <div className="chat-bubble user-bubble slide-in-1">Hi, I'd like to book a demo.</div>
                     <div className="chat-bubble bot-bubble slide-in-2">
                       <span className="bot-icon">🤖</span>
                       Great! What's your best email?
                     </div>
                     <div className="chat-bubble user-bubble slide-in-3">alex@company.com</div>
                     <div className="chat-bubble bot-bubble slide-in-4">
                       <span className="bot-icon">🤖</span>
                       Got it! Finding a time for you now...
                     </div>
                   </div>
                 </div>

                 <div className="floating-success-badge pop-in">
                   <div className="badge-icon">✓</div>
                   <div className="badge-text">
                     <strong>Lead Captured</strong>
                     <span>Synced to CRM</span>
                   </div>
                 </div>

               </div>
             </div>
          </div>
        </div>

        <div className="growth-divider"></div>

        {/* Part 2: Middle Mockup Section */}
        <div className={`growth-fade-in-delayed ${isDark ? 'growth-visible' : ''}`}>
          <div className="growth-badge green-badge">COMPOSABLE CUSTOMER DATA PLATFORM</div>
          <h2 className="growth-heading">
            Self-service access to your <br/>
            <span className="growth-green-text">best data for marketers</span>
          </h2>
          <p className="growth-subheading">
            Everything you need to turn your existing data platform into a secure, intuitive CDP that any marketer can use for e-mail, advertising, CRM, and more.
          </p>
          
          <div className="growth-mockup-wrapper">
            <div className="growth-mockup-glow"></div>
            <div className="growth-mockup-box">
              <div className="growth-mockup-header">
                <div className="growth-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="growth-mockup-title">Audience Builder</div>
                <div className="growth-mockup-live">LIVE</div>
              </div>
              <div className="growth-mockup-content">
                 <div className="growth-skeleton-sidebar">
                    <div className="skel-item">Overview</div>
                    <div className="skel-item active">Audiences</div>
                    <div className="skel-item">Journeys</div>
                    <div className="skel-item">Templates</div>
                    <div className="skel-item">Integrations</div>
                 </div>
                 <div className="growth-skeleton-main">
                    <div className="skel-row-wrapper">
                        <div className="skel-col">
                            <div className="skel-label">CONDITIONS</div>
                            <div className="skel-pill">country = IN</div>
                            <div className="skel-pill">LTV &gt; ₹10k</div>
                            <div className="skel-pill">Last_seen &lt; 30d</div>
                        </div>
                        <div className="skel-col">
                            <div className="skel-label">PERFORMANCE</div>
                            <div className="skel-stats">
                                <div className="skel-stat-box">12.4k <br/><span>Reach</span></div>
                                <div className="skel-stat-box green">+18% <br/><span>Lift</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="skel-bottom-bar">
                        High-intent shoppers <span className="skel-saved">SAVED</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Features Row */}
          <div className="growth-features-row">
            <div className="growth-feature-col">
              <h4>Build any audience</h4>
              <p>Enable marketers to use all of your data — not just users and events. Explore, build, and test any audience with a powerful no-code audience builder.</p>
            </div>
            <div className="growth-feature-col">
              <h4>Plan customer journeys</h4>
              <p>Easily prioritize campaigns across your audiences, ensure that customers experience cohesive marketing, and get the right message at the right time.</p>
            </div>
            <div className="growth-feature-col">
              <h4>Personalize in real-time</h4>
              <p>Use complete customer data and real-time signals to deliver personalized content in less than a second on your website and apps.</p>
            </div>
            <div className="growth-feature-col">
              <h4>Uncover insights</h4>
              <p>Use AI to measure, explore, and analyze customer data and campaign performance, directly from the data warehouse.</p>
            </div>
          </div>
        </div>

        <div className="growth-divider"></div>

        {/* Part 3: AI Agents Section */}
        <div className={`growth-ai-section growth-fade-in-delayed ${isDark ? 'growth-visible' : ''}`}>
          <div className="growth-badge green-badge">AI DECISIONING PLATFORM</div>
          <h2 className="growth-heading">
            AI agents that give every customer <br/>
            <span className="growth-green-text">the exact experience they need</span>
          </h2>
          <p className="growth-subheading">
            Rip up your campaign calendar and turn off your A/B tests. Unleash AI agents to experiment on a 1:1 basis and quickly unlock growth in LTV and loyalty.
          </p>

          <div className="growth-agents-grid">
            <div className="growth-agent-card">
              <div className="growth-agent-icon">✨</div>
              <h3 className="growth-agent-title">Retention Agent</h3>
              <div className="growth-agent-status"><span className="status-dot running"></span> Running</div>
              <div className="growth-agent-metric">+12% LTV</div>
            </div>
            <div className="growth-agent-card">
              <div className="growth-agent-icon">🤖</div>
              <h3 className="growth-agent-title">Winback Agent</h3>
              <div className="growth-agent-status"><span className="status-dot learning"></span> Learning</div>
              <div className="growth-agent-metric">1.4k sent</div>
            </div>
            <div className="growth-agent-card">
              <div className="growth-agent-icon">🗄️</div>
              <h3 className="growth-agent-title">Onboarding Agent</h3>
              <div className="growth-agent-status"><span className="status-dot active"></span> Active</div>
              <div className="growth-agent-metric">92% complete</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
