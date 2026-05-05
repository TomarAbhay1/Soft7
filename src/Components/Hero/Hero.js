import React from 'react'
import styles from "./Hero.module.css";
import { TbMessage2Filled } from "react-icons/tb";

export default function Hero() {
  return (
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
               <div className={styles.box}><span className={styles.icon}>🌟</span>Bulk Messaging</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Lead Generation</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Message Templates</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Multi-user Access</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Bulk Messaging</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Lead Generation</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Message Templates</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Multi-user Access</div>
               {/* Duplicate for infinite scroll */}
               <div className={styles.box}><span className={styles.icon}>🌟</span>Bulk Messaging</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Lead Generation</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Message Templates</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Multi-user Access</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Bulk Messaging</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Lead Generation</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Message Templates</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Multi-user Access</div>
             </div>
             <div className={styles.slideTrack2}>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Verified business profile</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>CRM Intergration</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Payments & Renewals</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Chatbot Automation</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Verified business profile</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>CRM Intergration</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Payments & Renewals</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Chatbot Automation</div>
               {/* Duplicate for infinite scroll */}
               <div className={styles.box}><span className={styles.icon}>🌟</span>Verified business profile</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>CRM Intergration</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Payments & Renewals</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Chatbot Automation</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Verified business profile</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>CRM Intergration</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Payments & Renewals</div>
               <div className={styles.box}><span className={styles.icon}>🌟</span>Chatbot Automation</div>
             </div>
          </div>
        
      </div>
    </section>
  )
}
