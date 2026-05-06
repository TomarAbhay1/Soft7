import React, { useEffect, useRef, useState } from 'react';
import './HowItWorks.css';

const steps = [
  {
    id: 1,
    title: "Connect your existing stack",
    description: "Link your WhatsApp Business API to the tools your team already uses. Sync customer data bidirectionally with HubSpot, Salesforce, and Shopify in a single click."
  },
  {
    id: 2,
    title: "Build automated workflows",
    description: "Use our visual canvas to drag and drop powerful automations. Set up custom triggers, AI-powered qualification agents, and smart hand-offs to human reps."
  },
  {
    id: 3,
    title: "Watch your revenue scale",
    description: "Sit back as your pipeline multiplies. Monitor performance, track qualified leads, and optimize your flows directly from our real-time dashboard."
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when step is in the middle 20% of viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepIndex = Number(entry.target.dataset.step);
          setActiveStep(stepIndex);
        }
      });
    }, options);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="how-it-works-section">
      <div className="hiw-container">
        
        <div className="hiw-text-column">
          <div className="hiw-header">
            <div className="hiw-badge">How it works</div>
            <h2 className="hiw-main-heading">Three steps to<br/>WhatsApp mastery.</h2>
          </div>

          <div className="hiw-steps">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`hiw-step-item ${activeStep === step.id ? 'active' : ''}`}
                ref={el => stepRefs.current[index] = el}
                data-step={step.id}
              >
                <div className="step-number">0{step.id}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hiw-visual-column">
          <div className="hiw-sticky-container">
            <div className={`hiw-mockup-frame step-${activeStep}`}>
              
              {/* Step 1 Graphic: Connect */}
              <div className={`mockup-layer layer-1 ${activeStep === 1 ? 'visible' : ''}`}>
                <div className="connect-node whatsapp">W</div>
                <div className="connect-line"></div>
                <div className="connect-node crm">CRM</div>
              </div>

              {/* Step 2 Graphic: Automate */}
              <div className={`mockup-layer layer-2 ${activeStep === 2 ? 'visible' : ''}`}>
                 <div className="flow-block start">Trigger</div>
                 <div className="flow-arrow">↓</div>
                 <div className="flow-block action">AI Agent</div>
                 <div className="flow-arrow">↓</div>
                 <div className="flow-block end">Add to List</div>
              </div>

              {/* Step 3 Graphic: Scale */}
              <div className={`mockup-layer layer-3 ${activeStep === 3 ? 'visible' : ''}`}>
                <div className="dashboard-metric">
                  <span className="metric-label">Pipeline Generated</span>
                  <span className="metric-value">$1.2M</span>
                  <span className="metric-trend">↑ +34%</span>
                </div>
                <div className="dashboard-chart">
                  <div className="bar bar1"></div>
                  <div className="bar bar2"></div>
                  <div className="bar bar3"></div>
                  <div className="bar bar4"></div>
                  <div className="bar bar5"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
