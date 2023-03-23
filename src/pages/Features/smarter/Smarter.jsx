import React from "react"
import smarter from "../../../assets/smarter/smarter.png"
import "./Smarter.scss"

const Smarter = () => {
  return (
    <section className="smarter">
      <div className="text">
        <h1 className="title">
          Get smarter about all <br /> the little details
        </h1>
        <h5 className="subtitle">
          Monitor your transactions activity on one dashboard. Generate
          customized order, inventory, and payments reports. Prevent fraud,
          improve operations, manage working capital, and grow grow grow!
        </h5>
      </div>
      <img src={smarter} alt="smarter" />
    </section>
  )
}

export default Smarter
