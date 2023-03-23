import React from "react"
import people from "../../../assets/business/people.png"
import people375 from "../../../assets/business/people-375.png"
import "./Business.scss"

const Business = () => {
  return (
    <section className="business">
      <div className="top-container">
        <img className="full-width" src={people} alt="" />
        <img className="mobile-width" src={people375} alt="" />
        <h1>
          It’s your business. <br /> Run it like a rockstar
        </h1>
      </div>
      <div className="bottom-container">
        <h4>Are you ready?</h4>
        <h1 className="title">Supercharge your business, the Tinvio way</h1>
        <button className="start-btn">Get Started</button>
      </div>
    </section>
  )
}

export default Business
