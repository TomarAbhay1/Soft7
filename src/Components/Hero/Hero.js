import React from 'react'
import styles from "./Hero.module.css";
import { FaBullhorn, FaUserPlus, FaUsers, FaCheckCircle, FaDatabase, FaMoneyCheckAlt, FaRobot } from "react-icons/fa";
import { MdOutlineViewQuilt } from "react-icons/md";
import Features from './feature.jsx';

export default function Hero() {
  const row1 = [
    { text: "Bulk Messaging", icon: <FaBullhorn /> },
    { text: "Lead Generation", icon: <FaUserPlus /> },
    { text: "Message Templates", icon: <MdOutlineViewQuilt /> },
    { text: "Multi-user Access", icon: <FaUsers /> }
  ];

  const row2 = [
    { text: "Verified business profile", icon: <FaCheckCircle /> },
    { text: "CRM Integration", icon: <FaDatabase /> },
    { text: "Payments & Renewals", icon: <FaMoneyCheckAlt /> },
    { text: "Chatbot Automation", icon: <FaRobot /> }
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1>
              Sell More. Follow up Faster.
            </h1>
            <h1>
              Automate on <span>WhatsApp</span>.
            </h1>
          </div>
          <p className={styles.desc}>
            SOFT7 gives Indian businesses a powerful WhatsApp Business API with AI chatbots,
            bulk messaging, RCS, and a centralized CRM — starting at just ₹0.20/message.
          </p>
          <div className={styles.heroButtons}>
            <button className="primary-btn">Book Demo &gt;</button>
            <button className="secondary-btn">Try for free &gt;</button>
          </div>
          <div className={styles.productVideo}>Product Video</div>
          <div className={styles.trustLine}>
            Loved and trusted by 11,000+ businesses, across the globally
          </div>
          <div className={styles.slider}>
            <div className={styles.slideTrack}>
              {[...row1, ...row1, ...row1, ...row1].map((item, index) => (
                <div className={styles.box} key={`r1-${index}`}>
                  <span className={styles.icon}>{item.icon}</span>{item.text}
                </div>
              ))}
            </div>
            <div className={styles.slideTrack2}>
              {[...row2, ...row2, ...row2, ...row2].map((item, index) => (
                <div className={styles.box} key={`r2-${index}`}>
                  <span className={styles.icon}>{item.icon}</span>{item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
}
