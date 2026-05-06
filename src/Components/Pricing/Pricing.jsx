import React from 'react';
import './Pricing.css';

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        
        <div className="pricing-header">
          <div className="pricing-badge-wrapper">
             <span className="pricing-badge">Pricing</span>
          </div>
          <h2 className="pricing-heading">
            Simple plans, serious <br/>
            leverage.
          </h2>
          <p className="pricing-subheading">
            Pay for what you use. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="pricing-grid">
          
          {/* Starter Plan */}
          <div className="pricing-card">
            <h3 className="plan-name">STARTER</h3>
            <div className="plan-price">
              <span className="price">$0</span><span className="period">/mo</span>
            </div>
            <p className="plan-desc">Get going on WhatsApp with everything an indie team needs.</p>
            
            <ul className="plan-features">
              <li><span className="check">✓</span> 1 phone number</li>
              <li><span className="check">✓</span> 1,000 free conversations</li>
              <li><span className="check">✓</span> Shared team inbox</li>
              <li><span className="check">✓</span> Basic chatbot flows</li>
            </ul>
            
            <button className="pricing-btn outline-btn">Start free</button>
          </div>

          {/* Growth Plan (Highlighted) */}
          <div className="pricing-card highlighted">
            <div className="popular-badge">Most popular</div>
            <h3 className="plan-name">GROWTH</h3>
            <div className="plan-price">
              <span className="price">$79</span><span className="period">/mo</span>
            </div>
            <p className="plan-desc">Run pipeline at scale with automation and CRM built in.</p>
            
            <ul className="plan-features">
              <li><span className="check">✓</span> Unlimited contacts</li>
              <li><span className="check">✓</span> Up to 10 agents</li>
              <li><span className="check">✓</span> Automation Builder</li>
              <li><span className="check">✓</span> CRM + segments</li>
              <li><span className="check">✓</span> Priority support</li>
            </ul>
            
            <button className="pricing-btn solid-btn">Try Growth free</button>
          </div>

          {/* Custom Plan */}
          <div className="pricing-card">
            <h3 className="plan-name">AI</h3>
            <div className="plan-price custom-price">
              <span className="price">Custom</span>
            </div>
            <p className="plan-desc">Deploy AI Agents that resolve tickets and close deals.</p>
            
            <ul className="plan-features">
              <li><span className="check">✓</span> Everything in Growth</li>
              <li><span className="check">✓</span> AI Agent + handoff</li>
              <li><span className="check">✓</span> Custom integrations</li>
              <li><span className="check">✓</span> Dedicated success manager</li>
              <li><span className="check">✓</span> SLA + SSO</li>
            </ul>
            
            <button className="pricing-btn outline-btn">Talk to sales</button>
          </div>

        </div>
      </div>
    </section>
  );
}
