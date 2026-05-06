import React, { useState } from "react";
import "./feature.css";

const featuresData = [
  {
    id: 1,
    badge: "Broadcast WhatsApp Messages",
    title: "Send bulk WhatsApp messages to multiple users at once.",
    desc: "Reach thousands of customers instantly with important updates, promotions, or alerts in real time.",
    stat: "98% open rate",
    gradient: "linear-gradient(135deg, #2563eb, #1e3a8a)",
    shadow: "rgba(37, 99, 235, 0.5)",
    mockupTitle: "WhatsApp Campaign",
    mockupMsg1: "Hey! Flash Sale is LIVE! ⚡",
    mockupSub1: "Delivered to 12,400 users",
    mockupMsg2: "Wow, how do I apply the discount?",
    mockupSub2: "Customer response",
    mockupMsg3: 'Use code "FLASH50" at checkout! 🎉',
    mockupSub3: "Automated Chatbot"
  },
  {
    id: 2,
    badge: "Chatbot Automation",
    title: "Automate responses with intelligent AI chatbots.",
    desc: "Provide 24/7 support, answer FAQs, and route complex queries to human agents seamlessly without delay.",
    stat: "24/7 Availability",
    gradient: "linear-gradient(135deg, #ec4899, #be185d)",
    shadow: "rgba(236, 72, 153, 0.5)",
    mockupTitle: "Customer Support",
    mockupMsg1: "Hi, I need help with my recent order.",
    mockupSub1: "Incoming query",
    mockupMsg2: "Sure! What is your order ID?",
    mockupSub2: "Automated Chatbot",
    mockupMsg3: "Thanks! Let me check that for you.",
    mockupSub3: "Resolving..."
  },
  {
    id: 3,
    badge: "CRM Integration",
    title: "Sync conversations directly with your favorite CRM.",
    desc: "Automatically log chats, update lead statuses, and keep your sales pipeline moving forward effortlessly.",
    stat: "1-Click Sync",
    gradient: "linear-gradient(135deg, #a855f7, #6d28d9)",
    shadow: "rgba(168, 85, 247, 0.5)",
    mockupTitle: "CRM Sync Tool",
    mockupMsg1: "New lead captured: John Doe",
    mockupSub1: "WhatsApp API",
    mockupMsg2: "Syncing data to Salesforce...",
    mockupSub2: "Processing",
    mockupMsg3: "Lead successfully updated! ✅",
    mockupSub3: "System Notification"
  }
];

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featuresData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuresData.length - 1 : prev - 1));
  };

  // Get the continuous looping indexes for side cards
  const getPrevIndex = () => (currentIndex === 0 ? featuresData.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === featuresData.length - 1 ? 0 : currentIndex + 1);

  return (
    <section className="feat-section">
      <div className="feat-container">

        <h2 className="feat-heading">
          Everything You Need to Convert Leads on WhatsApp
        </h2>

        <p className="feat-subheading">
          Built to be powerful for ops teams, simple for marketers, and lovable for everyone in between.
        </p>

        <div className="feat-stage">

          {/* LEFT ARROW */}
          <button className="feat-arrow feat-arrow-left" onClick={prevSlide}>&#8249;</button>

          {featuresData.map((feature, index) => {
            let positionClass = "feat-hidden";
            if (index === currentIndex) positionClass = "feat-center";
            else if (index === getPrevIndex()) positionClass = "feat-left";
            else if (index === getNextIndex()) positionClass = "feat-right";

            return (
              <div
                key={feature.id}
                className={`feat-card-item ${positionClass}`}
                style={{
                  background: feature.gradient,
                  '--card-shadow': feature.shadow
                }}
                onClick={() => {
                  if (index === getPrevIndex()) prevSlide();
                  if (index === getNextIndex()) nextSlide();
                }}
              >
                <div className="feat-cardLeft">
                  <span className="feat-badge">{feature.badge}</span>
                  <h3 className="feat-cardHeading">{feature.title}</h3>
                  <p className="feat-cardDesc">{feature.desc}</p>
                  <span className="feat-stat">{feature.stat}</span>
                </div>

                <div className="feat-cardRight">
                  <div className="feat-mockupBox">
                    <div className="feat-mockupHeader">
                      <span className="feat-dot" style={{background: '#ef4444'}}></span>
                      <span className="feat-dot" style={{background: '#eab308'}}></span>
                      <span className="feat-dot" style={{background: '#22c55e'}}></span>
                      <span className="feat-mockupTitle">{feature.mockupTitle}</span>
                    </div>
                    <div className="feat-mockupList">
                      <div className="feat-mockupItem">
                        <span className="feat-mockupLabel">{feature.mockupMsg1}</span>
                        <span className="feat-mockupSub">{feature.mockupSub1}</span>
                      </div>
                      <div className="feat-mockupItem feat-incoming">
                        <span className="feat-mockupLabel">{feature.mockupMsg2}</span>
                        <span className="feat-mockupSub">{feature.mockupSub2}</span>
                      </div>
                      <div className="feat-typing-indicator">
                        <span></span><span></span><span></span>
                      </div>
                      <div className="feat-mockupItem feat-delayed-msg">
                        <span className="feat-mockupLabel">{feature.mockupMsg3}</span>
                        <span className="feat-mockupSub">{feature.mockupSub3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* RIGHT ARROW */}
          <button className="feat-arrow feat-arrow-right" onClick={nextSlide}>&#8250;</button>

        </div>

      </div>
    </section>
  );
}