import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiArrowLeft, FiUsers, FiTrendingUp, FiClock, 
  FiDatabase, FiCheckCircle, FiChevronDown,
  FiFilter, FiLayers, FiTag, FiMessageSquare,
  FiZap, FiPieChart, FiUserCheck
} from 'react-icons/fi';
import './Crm.css';

const Crm = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bentoFeatures = [
    { 
      icon: <FiLayers />, title: "Custom Kanban Pipelines", 
      desc: "Map your unique sales cycles. Move leads from 'New Inquiry' to 'Demo Scheduled' and 'Deal Closed' simply by dragging cards.", 
      spanClass: "bento-large" 
    },
    { 
      icon: <FiZap />, title: "Real-Time Sync", 
      desc: "Every incoming WhatsApp message updates lead metadata and tags instantly.", 
      spanClass: "bento-wide" 
    },
    { 
      icon: <FiUserCheck />, title: "Smart Auto-Assign", 
      desc: "Round-robin distribution to load-balance your sales agents automatically.", 
      spanClass: "" 
    },
    { 
      icon: <FiTag />, title: "Dynamic Tagging", 
      desc: "Segment leads automatically based on their intent, order value, or product queries.", 
      spanClass: "bento-tall" 
    },
    { 
      icon: <FiMessageSquare />, title: "Unified Log", 
      desc: "Full transcript history inside every CRM profile card.", 
      spanClass: "" 
    },
    { 
      icon: <FiClock />, title: "Automated Follow-ups", 
      desc: "Trigger sequential follow-up alerts.", 
      spanClass: "" 
    },
    { 
      icon: <FiPieChart />, title: "Conversion Heatmaps", 
      desc: "Track agent drop-offs and closing velocity in real time.", 
      spanClass: "bento-wide" 
    },
  ];

  const stats = [
    { value: 2, display: "2.4", suffix: "x", label: "Lead Conversion Rate" },
    { value: 45, display: "45", suffix: "%", label: "Shorter Sales Cycle" },
    { value: 0, display: "0", suffix: "", label: "Lost Messages" },
    { value: 100, display: "100", suffix: "%", label: "WhatsApp Synced" },
  ];

  const faqs = [
    { q: "Does the CRM sync automatically with WhatsApp?", a: "Yes, every incoming query, catalog order, or template response is instantly mapped to the corresponding customer profile without manual data entry." },
    { q: "Can team members collaborate on specific leads?", a: "Absolutely. Team members can leave internal notes, assign tasks, set calendar follow-up alerts, and pass context securely." },
    { q: "Can I export leads or connect to external enterprise databases?", a: "Yes, you can configure automatic Webhooks or sync live changes back to Salesforce, HubSpot, or MySQL via our developer API." },
    { q: "How does the custom pipeline work?", a: "You can create unlimited custom pipeline columns matching your exact qualification workflows, set required stage rules, and define trigger actions when deals move." },
  ];

  const [statsVisible, setStatsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  // Count-up animation
  const animateCounters = useCallback(() => {
    const duration = 2000;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCounters(stats.map(s => {
        if (s.value === 2) return (2.4 * ease).toFixed(1);
        return Math.floor(s.value * ease);
      }));
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

  // Mock leads data
  const initialLeads = [
    { name: "Rahul Sharma", value: "₹45,000", msg: "Interested in the Pro membership. Can we schedule a quick chat?", tags: ["🔥 Hot", "Pro"], owner: "A", stage: "New Leads" },
    { name: "Sneha Roy", value: "₹18,000", msg: "Do you provide custom API integration?", tags: ["Enterprise"], owner: "M", stage: "New Leads" },
    { name: "Amit Patel", value: "₹60,000", msg: "Demo was fantastic! Please send the standard service agreement.", tags: ["⚡ Urgent", "Demo"], owner: "P", stage: "In Negotiation" },
    { name: "Kavita Nair", value: "₹25,000", msg: "Follow up requested on Monday morning regarding team onboarding.", tags: ["⏳ Follow up"], owner: "R", stage: "In Negotiation" },
    { name: "Vikram Malhotra", value: "₹1,20,000", msg: "Invoice #402 paid successfully via wire transfer.", tags: ["🎉 Deal Won"], owner: "A", stage: "Closed Won" },
  ];

  const filteredLeads = initialLeads.filter(l => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Hot Leads') return l.tags.some(t => t.includes('Hot'));
    if (activeFilter === 'Urgent') return l.tags.some(t => t.includes('Urgent'));
    return true;
  });

  return (
    <div className="crm-redesign" onMouseMove={handleMouseMove}>
      <nav className="nav-simple">
         <button onClick={() => navigate('/')} className="back-link">
            <FiArrowLeft /> Back to Home
         </button>
         <div className="logo-text">Soft7 CRM</div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="new-badge">
               ✨ Native Leads CRM built for WhatsApp
            </div>
            <h1>Track every deal. <br /><span className="text-green">Convert more leads.</span></h1>
            <p className="hero-sub">
              A full-fidelity Leads CRM that syncs message history, assigns deals automatically, and manages custom follow-up stages natively without switching tools.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Launch CRM dashboard <FiArrowLeft style={{transform: 'rotate(180deg)'}} /></button>
              <button className="btn-secondary">Explore API</button>
            </div>
          </div>
          
          {/* Stunning Kanban Interactive View Mockup */}
          <div className="hero-right reveal-section">
             <div className="crm-kanban-mockup">
                <div className="kanban-header">
                   <div className="kanban-title-group">
                      <div className="kanban-icon"><FiUsers /></div>
                      <div>
                         <strong>Sales Pipeline view</strong>
                         <span>Real-time WhatsApp Leads sync</span>
                      </div>
                   </div>
                   <div className="kanban-filters">
                      {['All', 'Hot Leads', 'Urgent'].map(f => (
                         <button 
                            key={f} 
                            className={`filter-pill ${activeFilter === f ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                         >
                            <FiFilter size={12} /> {f}
                         </button>
                      ))}
                   </div>
                </div>

                <div className="kanban-board">
                   {['New Leads', 'In Negotiation', 'Closed Won'].map(stage => {
                      const stageLeads = filteredLeads.filter(l => l.stage === stage);
                      return (
                         <div key={stage} className="kanban-col">
                            <div className="col-head">
                               <span>{stage}</span>
                               <span className="col-count">{stageLeads.length}</span>
                            </div>
                            <div className="lead-cards-list">
                               {stageLeads.map((l, idx) => (
                                  <div key={idx} className="lead-card-ui">
                                     <div className="lead-card-top">
                                        <span className="lead-name">{l.name}</span>
                                        <span className="lead-value">{l.value}</span>
                                     </div>
                                     <p className="lead-msg">{l.msg}</p>
                                     <div className="lead-tags">
                                        {l.tags.map((t, tid) => {
                                           let tclass = "tag-badge ";
                                           if (t.includes('Hot')) tclass += "tag-hot";
                                           else if (t.includes('Urgent')) tclass += "tag-demo";
                                           else if (t.includes('Won')) tclass += "tag-closed";
                                           else tclass += "tag-followup";
                                           return <span key={tid} className={tclass}>{t}</span>;
                                        })}
                                     </div>
                                     <div className="lead-footer">
                                        <span>Synced live</span>
                                        <div className="owner-avatar">{l.owner}</div>
                                     </div>
                                  </div>
                               ))}
                            </div>
                         </div>
                      );
                   })}
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <div className="stats-strip reveal-section" ref={statsRef}>
         {stats.map((s, i) => {
            let display;
            if (s.value === 2) display = counters[i] || "0.0";
            else if (s.value === 0) display = "0";
            else display = counters[i];
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
         <div className="section-label">CRM CAPABILITIES</div>
         <h2>Smarter pipeline <span className="text-green">management.</span></h2>
         
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

      {/* Pipeline Section */}
      <section className="workflow-section reveal-section">
         <div className="section-label">AUTOMATION ENGINE</div>
         <h2>How your deals close <span className="text-green">faster.</span></h2>
         <div className="workflow-grid">
            {[
               { num: '1', title: 'Automatic Capture', desc: 'Every incoming WhatsApp interaction triggers a fresh profile card generation instantly.' },
               { num: '2', title: 'Intent Scoring', desc: 'AI inspects context, logs tags dynamically, and drops prospects into targeted custom lifecycle columns.' },
               { num: '3', title: 'Accelerated Won', desc: 'Automatic reminder scheduling ensures agents follow up natively exactly when attention is highest.' },
            ].map((s, i) => (
               <div key={i} className="workflow-step">
                  <div className="step-num">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
               </div>
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
         <div className="cta-orb cta-orb-1" />
         <div className="cta-orb cta-orb-2" />
         <h2>Ready to manage leads?</h2>
         <p>Join thousands of top support and sales operations powering deals on WhatsApp.</p>
         <button className="cta-pill-btn">Launch native CRM free <FiArrowLeft style={{transform: 'rotate(180deg)'}} /></button>
         <div className="cta-sub">No credit card required · Synced instantly</div>
      </section>

      <footer className="footer-simple">
         <p>&copy; 2024 Soft7. Designed for Scale.</p>
      </footer>
    </div>
  );
};

export default Crm;
