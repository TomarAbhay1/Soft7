import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiArrowLeft, FiZap, FiUsers, FiBarChart2, 
  FiShield, FiCalendar, FiEdit3, FiShoppingCart, 
  FiBookOpen, FiHeart, FiBriefcase, FiTarget, 
  FiUpload, FiMessageSquare, FiSend, FiChevronDown, FiLock, FiActivity, FiGlobe 
} from 'react-icons/fi';
import './Broadcast.css';

const Broadcast = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const useCases = [
    { icon: <FiShoppingCart />, title: "E-commerce", desc: "Abandoned cart reminders, order updates, flash sales.", color: "#ff8b67" },
    { icon: <FiCalendar />, title: "Events", desc: "RSVP confirmations, reminders, last-minute updates.", color: "#a855f7" },
    { icon: <FiBookOpen />, title: "Education", desc: "Class schedules, assignment alerts, parent updates.", color: "#00b4d8" },
    { icon: <FiHeart />, title: "Healthcare", desc: "Appointment reminders, prescriptions, follow-ups.", color: "#10b981" },
    { icon: <FiBriefcase />, title: "Agencies", desc: "Client check-ins, campaign reports, status updates.", color: "#f59e0b" },
    { icon: <FiTarget />, title: "Marketing", desc: "Launch announcements, segmented promos, surveys.", color: "#ec4899" },
  ];

  const templates = [
    { title: "Flash Sale Alert", type: "Promotion", reach: "High" },
    { title: "Event Reminder", type: "Utility", reach: "Medium" },
    { title: "Welcome Sequence", type: "Engagement", reach: "High" },
    { title: "Feedback Request", type: "Research", reach: "Medium" },
  ];

  const features = [
    { icon: <FiZap />, title: "Lightning Broadcasts", desc: "Send to 100,000+ contacts in seconds with smart queueing.", color: "#f59e0b" },
    { icon: <FiUsers />, title: "Smart Segments", desc: "Group, tag, and target audiences with dynamic filters.", color: "#a855f7" },
    { icon: <FiBarChart2 />, title: "Real-time Analytics", desc: "Track delivery, reads, clicks, and replies live.", color: "#00b4d8" },
    { icon: <FiEdit3 />, title: "AI Composer", desc: "Generate on-brand messages with built-in AI assistance.", color: "#10b981" },
    { icon: <FiShield />, title: "Anti-Ban Safe", desc: "Throttling and warm-up keep your number healthy.", color: "#ec4899" },
    { icon: <FiCalendar />, title: "Smart Scheduling", desc: "Pick the perfect time zone for every recipient.", color: "#ff8b67" },
  ];

  const aiPrompts = [
    { prompt: "VIP customers, early access to launch!", output: "✨ [name], you're in! Early access to our new collection opens just for VIPs. Shop 24h before everyone else.", count: "2,847" },
    { prompt: "Flash sale starts in 1 hour!", output: "⚡ [name], hurry! Our biggest flash sale kicks off in 60 minutes. Up to 60% off — shop now before it's gone!", count: "5,120" },
    { prompt: "Event reminder for tomorrow", output: "📅 Hey [name]! Just a reminder — your event is tomorrow at 10 AM. We can't wait to see you there!", count: "1,340" },
  ];

  const stats = [
    { value: 12000000, display: "12,000,000", suffix: "", label: "Messages delivered" },
    { value: 98, display: "98", suffix: "%", label: "Delivery rate" },
    { value: 4200, display: "4,200", suffix: "+", label: "Active businesses" },
    { value: 150, display: "150", suffix: "+", label: "Countries served" },
  ];

  const [aiIndex, setAiIndex] = useState(0);
  const [aiTyping, setAiTyping] = useState(false);
  const [typedText, setTypedText] = useState(aiPrompts[0].output);
  const [statsVisible, setStatsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const stepsRef = useRef(null);
  const ctaRef = useRef(null);
  const [stepsRevealed, setStepsRevealed] = useState([false, false, false]);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Cycle AI prompts
  useEffect(() => {
    const interval = setInterval(() => {
      setAiTyping(true);
      setTypedText('');
      setTimeout(() => {
        setAiIndex(prev => {
          const next = (prev + 1) % aiPrompts.length;
          let i = 0;
          const out = aiPrompts[next].output;
          const typer = setInterval(() => {
            setTypedText(out.slice(0, i + 1));
            i++;
            if (i >= out.length) { clearInterval(typer); setAiTyping(false); }
          }, 18);
          return next;
        });
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Count-up animation
  const animateCounters = useCallback(() => {
    const duration = 2000;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounters(stats.map(s => Math.floor(s.value * ease)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          animateCounters();
        } else {
          setStatsVisible(false);
          setCounters(stats.map(() => 0));
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [animateCounters]);

  // Staggered steps animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          [0, 1, 2].forEach(i => {
            setTimeout(() => {
              setStepsRevealed(prev => { const next = [...prev]; next[i] = true; return next; });
            }, i * 550);
          });
        } else {
          setStepsRevealed([false, false, false]);
        }
      },
      { threshold: 0.3 }
    );
    if (stepsRef.current) observer.observe(stepsRef.current);
    return () => observer.disconnect();
  }, []);

  // CTA Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
        } else {
          setCtaVisible(false);
        }
      },
      { threshold: 0.2 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  // Global Reveal animation for standard sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    
    const elements = document.querySelectorAll('.reveal-section');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);


  const safetySteps = [
    { icon: <FiActivity />, title: "Dynamic Warm-up", desc: "Gradually increase volume to build number reputation." },
    { icon: <FiGlobe />, title: "IP Rotation", desc: "Distributed sending to avoid regional detection." },
    { icon: <FiLock />, title: "End-to-End Safe", desc: "Direct API connection without middle-man risks." },
    { icon: <FiUsers />, title: "AI Humanization", desc: "Randomized delays between messages for natural flow." },
  ];

  const faqs = [
    { q: "How many messages can I send per day?", a: "With Soft7, your limit depends on your WhatsApp Business API tier. We help you scale from 1,000 to unlimited messages per day safely." },
    { q: "Is there a risk of my number getting banned?", a: "We use official WhatsApp Cloud API and advanced throttling/warm-up techniques to ensure your account remains 100% compliant and safe." },
    { q: "Can I send images and videos in broadcasts?", a: "Yes! You can include high-quality images, videos, PDFs, and interactive buttons in all your broadcast campaigns." },
    { q: "Can I schedule messages for different timezones?", a: "Absolutely. Our smart scheduler automatically adjusts sending times based on your recipient's local timezone." },
  ];

  return (
    <div className="broadcast-redesign">
      <nav className="nav-simple">
         <button onClick={() => navigate('/')} className="back-link">
            <FiArrowLeft /> Back to Home
         </button>
         <div className="logo-text">Soft7</div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="new-badge">
               <span className="sparkle">✨</span> New: AI message composer is live
            </div>
            <h1>Broadcast on <span className="text-green">WhatsApp,</span> at any scale.</h1>
            <p className="hero-sub">
              Send personalized broadcasts to thousands of contacts with AI-powered composition, smart segmentation, and real-time analytics.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Start free trial <FiArrowLeft style={{transform: 'rotate(180deg)'}} /></button>
              <button className="btn-secondary">Watch demo</button>
            </div>
            <div className="social-proof">
               <div className="avatar-group">
                  <div className="avatar" style={{background: '#10b981'}}></div>
                  <div className="avatar" style={{background: '#34d399'}}></div>
                  <div className="avatar" style={{background: '#6ee7b7'}}></div>
                  <div className="avatar" style={{background: '#a7f3d0'}}></div>
               </div>
               <span>Loved by 4,200+ businesses</span>
            </div>
          </div>
          <div className="hero-right">
             <div className="broadcast-mockup">
                <div className="mockup-header">
                   <div className="mockup-icon"></div>
                   <div className="mockup-info">
                      <strong>Broadcast: VIP Customers</strong>
                      <span>2,847 recipients</span>
                   </div>
                </div>
                <div className="mockup-msgs">
                   <div className="msg-bubble">
                      <span className="msg-to">To Sarah</span>
                      <p>🔥 New collection just dropped!</p>
                      <span className="msg-time">10:24 🗸🗸</span>
                   </div>
                   <div className="msg-bubble">
                      <span className="msg-to">To Alex</span>
                      <p>Flash sale: 40% off today only</p>
                      <span className="msg-time">10:24 🗸🗸</span>
                   </div>
                   <div className="msg-bubble">
                      <span className="msg-to">To Mia</span>
                      <p>Your order has been shipped 📦</p>
                      <span className="msg-time">10:24 🗸🗸</span>
                   </div>
                   <div className="msg-bubble">
                      <span className="msg-to">To Leo</span>
                      <p>Reminder: webinar starts in 1h</p>
                      <span className="msg-time">10:24 🗸🗸</span>
                   </div>
                </div>
                <div className="mockup-footer">
                   <span className="pulse-dot"></span> Sending to 2,843 more...
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Template Gallery */}
      <section className="template-gallery reveal-section">
         <div className="section-label">TEMPLATES</div>
         <h2>Campaigns ready to <span className="text-green">launch in minutes</span></h2>
         <div className="template-grid">
            {templates.map((t, i) => (
              <div key={i} className="template-card">
                 <div className="t-badge">{t.type}</div>
                 <h3>{t.title}</h3>
                 <div className="t-footer">
                    <span>Reach: <strong>{t.reach}</strong></span>
                    <button className="t-use">Use Template</button>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Analytics Preview */}
      <section className="analytics-preview reveal-section">
         <div className="analytics-container">
            <div className="analytics-visual">
               <div className="chart-box">
                  <div className="chart-header">
                     <span>Campaign Performance</span>
                     <div className="chart-legend">
                        <span>● Sent</span>
                        <span>● Read</span>
                     </div>
                  </div>
                  <div className="chart-bars">
                     <div className="bar-pair"><div className="b1" style={{height: '80%'}}></div><div className="b2" style={{height: '60%'}}></div></div>
                     <div className="bar-pair"><div className="b1" style={{height: '90%'}}></div><div className="b2" style={{height: '75%'}}></div></div>
                     <div className="bar-pair"><div className="b1" style={{height: '70%'}}></div><div className="b2" style={{height: '55%'}}></div></div>
                     <div className="bar-pair"><div className="b1" style={{height: '95%'}}></div><div className="b2" style={{height: '85%'}}></div></div>
                  </div>
               </div>
               <div className="stat-cards">
                  <div className="s-card">
                     <label>DELIVERY</label>
                     <strong>99.4%</strong>
                  </div>
                  <div className="s-card green">
                     <label>RESPONSE</label>
                     <strong>12.5%</strong>
                  </div>
               </div>
            </div>
            <div className="analytics-text">
               <div className="section-label">ANALYTICS</div>
               <h2>Data-driven <span className="text-green">Insights</span></h2>
               <p>Don't just send and hope. Track every single message with real-time delivery confirmations and response tracking. Understand your audience like never before.</p>
               <ul className="a-list">
                  <li><FiZap /> Real-time tracking</li>
                  <li><FiBarChart2 /> Detailed heatmaps</li>
                  <li><FiUsers /> Audience behavior logs</li>
               </ul>
            </div>
         </div>
      </section>

      {/* Safety Roadmap */}
      <section className="safety-roadmap reveal-section">
         <div className="section-label">SAFETY FIRST</div>
         <h2>Scale without the <span className="text-green">risk of bans</span></h2>
         <div className="roadmap-grid">
            {safetySteps.map((s, i) => (
               <div key={i} className="roadmap-item">
                  <div className="r-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  {i < 3 && <div className="r-connector"></div>}
               </div>
            ))}
         </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases reveal-section">
         <div className="section-label">BUILT FOR EVERY TEAM</div>
         <h2>One platform, <span className="text-green">endless use cases</span></h2>
         <div className="use-case-grid">
            {useCases.map((uc, i) => (
              <div key={i} className="use-case-card">
                 <div className="uc-icon" style={{background: uc.color}}>{uc.icon}</div>
                 <h3>{uc.title}</h3>
                 <p>{uc.desc}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Features Section */}
      <section className="features-section reveal-section">
         <div className="features-bg">
            <span className="feat-dot">▦</span>
            <span className="feat-dot feat-dot-2">⊕</span>
            <span className="feat-dot feat-dot-3">◎</span>
         </div>
         <div className="section-label">FEATURES</div>
         <h2>Everything you need to <span className="text-green">scale<br />conversations</span></h2>
         <div className="features-grid">
            {features.map((f, i) => (
               <div key={i} className="feature-card" style={{'--card-color': f.color}}>
                  <div className="feat-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* AI Composer Section */}
      <section className="ai-composer-section reveal-section">
         <div className="section-label">✦ AI COMPOSER</div>
         <h2>Type an idea. <span className="text-green">We write the broadcast.</span></h2>
         <div className="ai-demo-grid">
            <div className="ai-prompt-box">
               <div className="ai-box-label">YOUR PROMPT</div>
               <p className="ai-prompt-text">{aiPrompts[aiIndex].prompt}</p>
               <button className="ai-generate-btn"><FiZap /> Generate</button>
            </div>
            <div className="ai-output-box">
               <div className="ai-box-header">
                  <div className="ai-box-label">AI OUTPUT</div>
                  <div className="ai-dots"><span/><span/><span/></div>
               </div>
               <div className="ai-output-bubble">
                  {typedText}
                  {aiTyping && <span className="ai-cursor">|</span>}
               </div>
               <div className="ai-ready">
                  <FiSend size={12} /> Ready to broadcast to {aiPrompts[aiIndex].count} contacts
               </div>
            </div>
         </div>
      </section>

      {/* Stats Section */}
      <div className="stats-strip" ref={statsRef}>
         {stats.map((s, i) => {
            let display;
            if (s.value === 12000000) {
               const n = counters[i];
               display = n.toLocaleString();
            } else if (s.value === 98) {
               display = counters[i];
            } else {
               display = counters[i].toLocaleString();
            }
            return (
               <div key={i} className={`stat-item ${statsVisible ? 'visible' : ''}`} style={{animationDelay: `${i * 0.1}s`}}>
                  <strong>{display}{s.suffix}</strong>
                  <span>{s.label}</span>
               </div>
            );
         })}
      </div>

      {/* Three Steps Section */}
      <section className="three-steps-section" ref={stepsRef}>
         <div className="section-label">HOW IT WORKS</div>
         <h2>Three steps to <span className="text-green">reach everyone</span></h2>
         <div className="steps-track">
            {[
               { icon: <FiUpload />, step: 'STEP 1', title: 'Import contacts', desc: 'Sync from CSV, CRM, or your favorite tools in one click.' },
               { icon: <FiMessageSquare />, step: 'STEP 2', title: 'Craft your message', desc: 'Use templates, AI, media, and personalization tags.' },
               { icon: <FiSend />, step: 'STEP 3', title: 'Broadcast & track', desc: 'Hit send and watch real-time engagement roll in.' },
            ].map((s, i) => (
               <React.Fragment key={i}>
                  <div className={`step-node ${stepsRevealed[i] ? 'revealed' : ''}`}>
                     <div className="step-circle">{s.icon}</div>
                     <div className="step-label">{s.step}</div>
                     <h3>{s.title}</h3>
                     <p>{s.desc}</p>
                  </div>
                  {i < 2 && (
                     <div className={`step-connector ${stepsRevealed[i] ? 'filled' : ''}`}>
                        <div className="connector-line" />
                        <div className={`connector-arrow ${stepsRevealed[i + 1] ? 'arrived' : ''}`}>
                           <FiArrowLeft style={{transform: 'rotate(180deg)'}} />
                        </div>
                     </div>
                  )}
               </React.Fragment>
            ))}
         </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section-new reveal-section">
         <div className="section-label">FAQ</div>
         <h2>Got <span className="text-green">Questions?</span></h2>
         <div className="faq-list-new">
            {faqs.map((f, i) => (
               <div key={i} className={`faq-item-new ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div className="faq-q">
                     <span>{f.q}</span>
                     <FiChevronDown />
                  </div>
                  <div className="faq-a">{f.a}</div>
               </div>
            ))}
         </div>
      </section>

      {/* CTA Banner */}
      <section className={`cta-banner ${ctaVisible ? 'visible' : ''}`} ref={ctaRef}>
         <div className="cta-orb cta-orb-1" />
         <div className="cta-orb cta-orb-2" />
         <div className="cta-orb cta-orb-3" />
         <h2>Ready to broadcast?</h2>
         <p>Join thousands of teams reaching customers where they actually read messages.</p>
         <button className="cta-pill-btn">Start free trial <FiArrowLeft style={{transform: 'rotate(180deg)'}} /></button>
         <div className="cta-sub">No credit card · 14-day trial</div>
      </section>

      <footer className="footer-simple">
         <p>&copy; 2024 Soft7. Designed for Scale.</p>
      </footer>
    </div>
  );
};

export default Broadcast;
