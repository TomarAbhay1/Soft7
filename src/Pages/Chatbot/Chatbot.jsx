import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiArrowLeft, FiMessageCircle, FiCpu, FiGlobe, 
  FiUsers, FiTrendingUp, FiClock, FiSettings, 
  FiDatabase, FiCheckCircle, FiChevronDown,
  FiMessageSquare, FiSmile, FiPieChart, FiImage
} from 'react-icons/fi';
import './Chatbot.css';

const Chatbot = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bentoFeatures = [
    { 
      icon: <FiCpu />, title: "Advanced NLP Engine", 
      desc: "Go beyond keyword matching. Our AI understands intent, context, and nuance to resolve complex queries flawlessly.", 
      spanClass: "bento-large" 
    },
    { 
      icon: <FiGlobe />, title: "50+ Languages", 
      desc: "Automatically detects and responds in the customer's native language in real-time.", 
      spanClass: "bento-wide" 
    },
    { 
      icon: <FiClock />, title: "24/7 Uptime", 
      desc: "Never miss a lead. Your bot is always awake.", 
      spanClass: "" 
    },
    { 
      icon: <FiDatabase />, title: "Instant Training", 
      desc: "Upload PDFs, URLs, and past tickets. The AI builds its knowledge base in seconds.", 
      spanClass: "bento-tall" 
    },
    { 
      icon: <FiUsers />, title: "Human Handoff", 
      desc: "Gracefully routes escalated queries to live agents.", 
      spanClass: "" 
    },
    { 
      icon: <FiMessageSquare />, title: "Omnichannel", 
      desc: "WhatsApp, Web, and FB Messenger.", 
      spanClass: "" 
    },
    { 
      icon: <FiPieChart />, title: "Analytics", 
      desc: "Track resolution rates, CSAT, and deflection.", 
      spanClass: "bento-wide" 
    },
  ];

  const stats = [
    { value: 85, display: "85", suffix: "%", label: "Resolution Rate" },
    { value: 1, display: "< 1", suffix: "s", label: "Response Time" },
    { value: 40, display: "40", suffix: "%", label: "Support Cost Reduction" },
    { value: 24, display: "24", suffix: "/7", label: "Uptime" },
  ];

  const faqs = [
    { q: "How long does it take to train the AI?", a: "Minutes. Just upload your website URL, FAQs, or PDF documents, and the AI automatically learns your business context." },
    { q: "What happens if the bot doesn't know the answer?", a: "The bot gracefully handles unknown queries and seamlessly hands off the conversation to an available human agent, complete with chat history." },
    { q: "Can I connect it to my CRM?", a: "Yes, our chatbot integrates directly with Salesforce, HubSpot, Shopify, and over 100 other platforms via Zapier/API." },
    { q: "Does it support multiple languages?", a: "Absolutely. The bot can automatically detect the user's language and respond in over 50 languages flawlessly." },
  ];

  const [statsVisible, setStatsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef(null);
  const stepsRef = useRef(null);
  const [stepsRevealed, setStepsRevealed] = useState([false, false, false]);

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

  // Global Reveal animation
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

  // Chat Demo State
  const [chatStep, setChatStep] = useState(0);
  
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        setChatStep(0);
        await new Promise(r => setTimeout(r, 1000));
        setChatStep(1); 
        await new Promise(r => setTimeout(r, 1500));
        setChatStep(2); 
        await new Promise(r => setTimeout(r, 1000));
        setChatStep(3); 
        await new Promise(r => setTimeout(r, 2000));
        setChatStep(4); 
        await new Promise(r => setTimeout(r, 1500));
        setChatStep(5); 
        await new Promise(r => setTimeout(r, 800));
        setChatStep(6); 
        await new Promise(r => setTimeout(r, 4000)); 
      }
    };
    sequence();
  }, []);

  // Flashlight Mouse Effect for Bento Cards
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll('.bento-card');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div className="chatbot-redesign" onMouseMove={handleMouseMove}>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="new-badge">
               ✨ Soft7 AI is now live
            </div>
            <h1>The future of <br /><span className="text-green">customer support.</span></h1>
            <p className="hero-sub">
              Deploy a state-of-the-art AI chatbot that resolves 80% of queries instantly, without a single human touchpoint.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Build your bot <FiArrowLeft style={{transform: 'rotate(180deg)'}} /></button>
              <button className="btn-secondary">Read the docs</button>
            </div>
          </div>
          
          <div className="hero-right reveal-section">
             <div className="chat-demo-mockup">
                <div className="mockup-header">
                   <div className="mockup-icon"><FiMessageCircle size={20} color="white"/></div>
                   <div className="mockup-info">
                      <strong>Soft7 AI Assistant</strong>
                      <span className="online-status">● Online</span>
                   </div>
                </div>
                <div className="mockup-msgs">
                   <div className="msg-bubble bot-bubble">
                      <p>Hi there! 👋 How can I help you today?</p>
                   </div>
                   
                   {chatStep >= 1 && (
                     <div className="msg-bubble user-bubble slide-up">
                        <p>Hi, do you offer EMI options for the Pro plan?</p>
                     </div>
                   )}
                   
                   {chatStep === 2 && (
                     <div className="msg-bubble bot-bubble typing-indicator slide-up">
                        <span></span><span></span><span></span>
                     </div>
                   )}
                   
                   {chatStep >= 3 && (
                     <div className="msg-bubble bot-bubble slide-up">
                        <p>Yes, we offer 0% EMI for up to 12 months on all Pro plans! 💳</p>
                     </div>
                   )}

                   {chatStep >= 4 && (
                     <div className="msg-bubble user-bubble slide-up">
                        <p>Great, how do I apply?</p>
                     </div>
                   )}

                   {chatStep === 5 && (
                     <div className="msg-bubble bot-bubble typing-indicator slide-up">
                        <span></span><span></span><span></span>
                     </div>
                   )}

                   {chatStep >= 6 && (
                     <div className="msg-bubble bot-bubble slide-up">
                        <p>You can apply directly during checkout. Here is the link to get started: <br/><strong>soft7.com/checkout</strong></p>
                     </div>
                   )}
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <div className="stats-strip reveal-section" ref={statsRef}>
         {stats.map((s, i) => {
            let display;
            if (s.value === 85 || s.value === 40 || s.value === 24) {
               display = counters[i];
            } else if (s.value === 1) {
               display = counters[i] === 0 ? "0" : "< 1";
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

      {/* Bento Box Features Section */}
      <section className="features-section reveal-section">
         <div className="section-label">CAPABILITIES</div>
         <h2>Smarter than your average <span className="text-green">chatbot.</span></h2>
         
         <div className="bento-grid">
            {bentoFeatures.map((f, i) => (
               <div key={i} className={`bento-card ${f.spanClass}`}>
                  <div className="bento-card-inner"></div>
                  <div className="bento-content">
                     <div className="bento-icon">{f.icon}</div>
                     <h3>{f.title}</h3>
                     <p>{f.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Three Steps Section */}
      <section className="three-steps-section reveal-section" ref={stepsRef}>
         <div className="section-label">THE PIPELINE</div>
         <h2>From knowledge to automation in <span className="text-green">minutes.</span></h2>
         <div className="steps-track">
            {[
               { icon: <FiDatabase />, step: 'DATA', title: 'Connect Sources', desc: 'Sync your website, FAQs, and PDFs.' },
               { icon: <FiCpu />, step: 'COMPUTE', title: 'Train AI Engine', desc: 'The AI processes and contextualizes your data.' },
               { icon: <FiCheckCircle />, step: 'DEPLOY', title: 'Automate', desc: 'Deploy on WhatsApp and resolve queries.' },
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
      <section className="cta-banner reveal-section">
         <h2>Ready to automate?</h2>
         <p>Join thousands of support teams resolving queries instantly on WhatsApp.</p>
         <button className="cta-pill-btn">Build your bot free <FiArrowLeft style={{transform: 'rotate(180deg)'}} /></button>
         <div className="cta-sub">No credit card · 14-day trial</div>
      </section>

      <footer className="footer-simple">
         <p>&copy; 2024 Soft7. Designed for Scale.</p>
      </footer>
    </div>
  );
};

export default Chatbot;

