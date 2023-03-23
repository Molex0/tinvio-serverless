import React from "react"
import HowItWorksComponent from "./HowItWorksComponent"
import checkOut from "../../../assets/homePage/checkOut.svg"

import "./HowItWoks.scss"

const HowItWorks = () => {

  return (
    <section className="howItWorks_conatiner">
      <div className="howItWorks_first">
        <div className="howItWorks ">
          <img className="left_img" src={checkOut} alt="checkOut" />
          <div className="right_text">
            <h1 className="title">Check out how it works</h1>
            <h4 className="subtitle">
              It’s easy! Exchange messages, create or confirm orders, send{" "}
              <br />
              invoices, and collect payments across your supply chain — all
              within
              <br />
              one dashboard.
            </h4>
            <button className="play-btn">Play Video</button>
          </div>
        </div>
      </div>
      <HowItWorksComponent />
    </section>
  )
}

export default HowItWorks
