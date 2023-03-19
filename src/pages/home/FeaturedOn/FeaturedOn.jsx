import React from "react"
import comp1 from "../../../assets/companies/techCrunch.svg"
import comp2 from "../../../assets/companies/techAsia.svg"
import comp3 from "../../../assets/companies/techCom.svg"
import comp4 from "../../../assets/companies/ventureBeat.svg"
import stars from "../../../assets/companies/stars.svg"
import "./FeaturedOn.scss"

const FeaturedOn = () => {
  return (
    <section className="featuredOn">
      <div className="feturedOn_companies">
        <h1 className="title">Featured On</h1>
        <div className="companies">
          <img src={comp1} alt="comp1" />
          <img src={comp2} alt="comp2" />
          <img src={comp3} alt="comp3" />
          <img src={comp4} alt="comp4" />
        </div>
      </div>
      <img className="stars" src={stars} alt="stars" />
    </section>
  )
}

export default FeaturedOn
