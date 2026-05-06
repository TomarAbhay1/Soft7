import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">w</span> WhatsApp API
            </div>
            <p className="footer-desc">
              The conversational platform that turns every WhatsApp message into measurable growth.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="#whatsapp">WhatsApp API</a></li>
                <li><a href="#crm">Leads CRM</a></li>
                <li><a href="#chatbot">Chatbot</a></li>
                <li><a href="#automation">Automation Builder</a></li>
                <li><a href="#ai">AI Agent</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#customers">Customers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#integrations">Integrations</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#api">API Reference</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 WhatsApp API. All rights reserved.</p>
          <p className="tagline">Built for businesses that talk to humans.</p>
        </div>

      </div>
    </footer>
  );
}
