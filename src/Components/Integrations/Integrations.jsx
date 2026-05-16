import React from 'react';
import './Integrations.css';

const integrationItems = [
  { name: 'Shopify', initial: 'S' },
  { name: 'HubSpot', initial: 'H' },
  { name: 'Salesforce', initial: 'S' },
  { name: 'Stripe', initial: 'S' },
  { name: 'Zapier', initial: 'Z' },
  { name: 'Google Sheets', initial: 'G' },
  { name: 'Slack', initial: 'S' },
  { name: 'Make', initial: 'M' },
  { name: 'WooCommerce', initial: 'W' },
  { name: 'Klaviyo', initial: 'K' },
  { name: 'Notion', initial: 'N' },
  { name: 'Calendly', initial: 'C' },
];

export default function Integrations() {
  return (
    <section id="integrations" className="integrations-section">
      <div className="integrations-container">
        
        <div className="integrations-content">
          <div className="integrations-badge">Integrations</div>
          <h2 className="integrations-heading">
            Plays nicely with <br/>
            your <span className="text-green">whole stack.</span>
          </h2>
          <p className="integrations-desc">
            Connect WhatsApp API to the tools your team already loves — sync data both ways with a single click.
          </p>
        </div>

        <div className="integrations-grid">
          {integrationItems.map((item, index) => {
            // Stagger animations based on index so it looks organic
            const floatDelay = `${index * 0.2}s`;
            const pulseDelay = `${index * 0.3}s`;

            return (
              <div 
                key={index} 
                className="integration-card"
                style={{ animationDelay: floatDelay }}
              >
                <div 
                  className="integration-icon"
                  style={{ animationDelay: pulseDelay }}
                >
                  {item.initial}
                </div>
                <div className="integration-name">{item.name}</div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
