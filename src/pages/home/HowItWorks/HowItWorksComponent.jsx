import React, { useState } from "react"
import moreBuddy1 from "../../../assets/moreBuddy1.svg"
import moreBuddy2 from "../../../assets/moreBuddy2.svg"
import moreBuddy3 from "../../../assets/moreBuddy3.svg"
import "./HowItWoks.scss"

const HowItWorksComponent = () => {
  const [section, setSection] = useState(0)
  const title = ['buddy','speedy','money']
  const list = [
    [
      "Create chats with any business (even if they’re not on Tinvio)",
      "Fully integrated with your favorite chat apps",
      "Real-time messages and alerts",
    ],
    [
      "Create or confirm purchase orders at lightning speed",
      "Manage inventory details and availability in real-time",
      "24/7 order insights and data reports",
    ],
    [
      "Send invoices and easily track them until they’re paid",
      "Real-time payments settlement and reconciliation",
      "Safe, secure, and compliant",
    ],
  ]
  const image = [moreBuddy1, moreBuddy2, moreBuddy3]
  return (
    <div className="howItWorks_second">
      <div className="howItWorks">
        <div className="left_text">
          <h1 className="title">
            Smarter supply chain <br /> transactions.
            <span>More {title[section]}</span>
          </h1>
          <div className="btns">
            <button className={section === 0 ? 'active': ''} onClick={() => setSection(0)}>Chats</button>
            <button className={section === 1 ? 'active': ''} onClick={() => setSection(1)}>Orders</button>
            <button className={section === 2 ? 'active': ''} onClick={() => setSection(2)}>Payments</button>
          </div>
          <ul className="list">
            <li>{list[section][0]}</li>
            <li>{list[section][1]}</li>
            <li>{list[section][2]}</li>
          </ul>
          <button className="moreFeatures-btn">More Features</button>
        </div>
        <div className="right_back">
        <img className="right_img" src={image[section]} alt="checkOut" />
        </div>
      </div>
    </div>
  )
}

export default HowItWorksComponent
