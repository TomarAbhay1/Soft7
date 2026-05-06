import React, { useState } from 'react';
import './feature.css';

const features = [
  {
    tab: 'Broadcast WhatsApp Messages',
    badge: 'Broadcast WhatsApp Messages',
    theme: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
    shadow: 'rgba(59, 130, 246, 0.5)',
    heading: 'Send bulk WhatsApp messages to multiple users at once.',
    description:
      'It helps you reach thousands of customers instantly with important updates, promotions, or alerts in real time. Messages can be personalized to improve engagement and response rates, making communication more effective. You can also track delivery and performance to understand how your campaigns are working. Automation features save time by scheduling and managing campaigns easily. This makes it ideal for marketing, customer support, and regular customer notifications.',
    mockup: {
      preview: [
        { label: '🟢 Flash Sale! 50% off today only', sub: 'Sent · 2 min ago' },
        { label: '📦 Your order has been shipped!', sub: 'Sent · 1 hr ago' },
        { label: '🎁 Exclusive offer just for you', sub: 'Scheduled · Tomorrow' },
      ],
      stat: '98% open rate',
    },
  },
  {
    tab: 'AI Chatbot',
    badge: 'AI Chatbot',
    theme: 'linear-gradient(135deg, #4c1d95 0%, #a855f7 100%)',
    shadow: 'rgba(168, 85, 247, 0.5)',
    heading: 'Automate conversations and qualify leads 24/7 with AI.',
    description:
      'Deploy a smart AI chatbot on WhatsApp that handles FAQs, collects lead details, and routes hot prospects to your sales team — all without a single human touchpoint. The chatbot learns from your product catalog and past conversations to deliver accurate, instant answers any time of day. Reduce response times from hours to seconds and never miss an inquiry again.',
    mockup: {
      preview: [
        { label: '👤 Hi, do you offer EMI options?', sub: 'User', incoming: true },
        { label: '🤖 Yes! We offer 0% EMI up to 12 months.', sub: 'Bot · Now' },
        { label: '👤 Great, how do I apply?', sub: 'User', incoming: true },
        { label: '🤖 Click here → Apply Now', sub: 'Bot · Now' },
      ],
      stat: '3x faster response',
    },
  },
  {
    tab: 'Leads CRM',
    badge: 'Leads CRM',
    theme: 'linear-gradient(135deg, #be185d 0%, #ec4899 100%)',
    shadow: 'rgba(236, 72, 153, 0.5)',
    heading: 'Track, manage and convert every lead from one place.',
    description:
      "SOFT7's built-in CRM gives you a 360° view of every lead — their messages, tags, pipeline stage, and history — all synced from WhatsApp in real time. Assign leads to team members, set follow-up reminders, and move deals through your custom pipeline without switching tools. Never let a hot lead slip through the cracks again.",
    mockup: {
      preview: [
        { label: '🔥 Rahul Sharma — Hot Lead', sub: 'Follow up today' },
        { label: '💬 Priya Patel — Demo Scheduled', sub: 'Tomorrow 3 PM' },
        { label: '✅ Ajay Mehta — Deal Closed ₹48,000', sub: 'Closed today' },
      ],
      stat: '2.4x more conversions',
    },
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const switchTab = (index) => {
    setActiveTab(index);
  };

  const prev = () => switchTab((activeTab - 1 + features.length) % features.length);
  const next = () => switchTab((activeTab + 1) % features.length);

  return (
    <section className="feat-section">
      <div className="feat-container">
        <h2 className="feat-heading">
          Everything You Need to Convert Leads on{' '}
          <span className="feat-green">WhatsApp</span>
        </h2>
        <p className="feat-subheading">
          Built to be powerful for ops teams, simple for marketers, and lovable for everyone in between.
        </p>

        <div className="feat-tabs">
          {features.map((f, i) => (
            <button
              key={i}
              className={`feat-tabBtn ${activeTab === i ? 'feat-activeTab' : ''}`}
              onClick={() => switchTab(i)}
            >
              {f.tab}
            </button>
          ))}
        </div>

        <div className="feat-carouselWrapper">
          <button className="feat-arrow feat-arrow-left" onClick={prev} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="feat-carousel">
            {features.map((feature, i) => {
              let positionClass = '';
              if (i === activeTab) positionClass = 'feat-center';
              else if (i === (activeTab - 1 + features.length) % features.length) positionClass = 'feat-left';
              else if (i === (activeTab + 1) % features.length) positionClass = 'feat-right';
              
              return (
                <div 
                  key={i} 
                  className={`feat-card-item ${positionClass}`}
                  style={{ 
                    background: feature.theme,
                    '--card-shadow': feature.shadow
                  }}
                >
                  <div className="feat-cardLeft">
                    <span className="feat-badge">{feature.badge}</span>
                    <h3 className="feat-cardHeading">{feature.heading}</h3>
                    <p className="feat-cardDesc">{feature.description}</p>
                    <div className="feat-stat">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      {feature.mockup.stat}
                    </div>
                  </div>

                  <div className="feat-cardRight">
                    <div className="feat-mockupBox">
                      <div className="feat-mockupHeader">
                        <span className="feat-dot" style={{ background: '#ff5f56' }} />
                        <span className="feat-dot" style={{ background: '#ffbd2e' }} />
                        <span className="feat-dot" style={{ background: '#27c93f' }} />
                        <span className="feat-mockupTitle">{feature.badge}</span>
                      </div>
                      <div className="feat-mockupList">
                        {feature.mockup.preview.map((item, j) => (
                          <div
                            key={j}
                            className={`feat-mockupItem ${item.incoming ? 'feat-incoming' : ''}`}
                            style={{ transitionDelay: activeTab === i ? `${0.4 + j * 0.15}s` : '0s' }}
                          >
                            <span className="feat-mockupLabel">{item.label}</span>
                            <span className="feat-mockupSub">{item.sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="feat-arrow feat-arrow-right" onClick={next} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        <div className="feat-dots">
          {features.map((_, i) => (
            <button
              key={i}
              className={`feat-dot2 ${activeTab === i ? 'feat-activeDot' : ''}`}
              onClick={() => switchTab(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}