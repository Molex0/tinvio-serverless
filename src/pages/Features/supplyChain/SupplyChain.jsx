import React from "react"
import stars from "../../../assets/supplyChain/stars.svg"
import "./SupplyChain.scss"

const FeaturedOn = () => {
  return (
    <section className="supplyChain">
      <div className="supplyChain-container">
        <h1 className="title">Sounds easy? Supply chain transactions don’t have to be complicated </h1>
        <button className="start-btn">Get Started</button>
      </div>
      <img className="stars" src={stars} alt="stars" />
    </section>
  )
}

export default FeaturedOn