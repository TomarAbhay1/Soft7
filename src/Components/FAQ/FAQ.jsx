import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  { question: "Do I need an existing Meta Business account?", answer: "Yes, you need a Meta Business Manager account to connect to the WhatsApp Business API." },
  { question: "What's the difference between WhatsApp Business app and the API?", answer: "The Business app is for small businesses (1-2 users). The API is for scaling, automation, and integrating with your CRM." },
  { question: "Can I send marketing broadcasts?", answer: "Yes! You can send approved message templates for marketing, notifications, and customer care." },
  { question: "How does pricing work?", answer: "Pricing is conversation-based. You pay per 24-hour conversation window based on who initiated the chat." },
  { question: "Is the AI Agent secure?", answer: "Absolutely. We use enterprise-grade encryption and do not train models on your proprietary data." },
  { question: "Can I cancel anytime?", answer: "Yes, our plans are month-to-month and you can cancel or downgrade at any time." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        <div className="faq-content">
          <div className="faq-badge">FAQ</div>
          <h2 className="faq-heading">
            Quick<br/>
            answers to<br/>
            common<br/>
            questions.
          </h2>
          <p className="faq-subtext">
            Still curious? Our team replies on WhatsApp<br/>
            in under 2 minutes.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '＋'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
