import React from "react"
import main from "../../../assets/collections/main.png"
import "./Collections.scss"

const Collections = () => {
  return (
    <section className="collections">
      <img src={main} alt="main" />
      <div className="text">
        <h1 className="title">
          Make collections fast, <br /> flexible, fun
        </h1>
        <h5 className="subtitle">
          Give customers a modern B2B payments experience, with more ways to pay
          (including credit terms). Zero setup or risk for you. They’ll stay
          with you longer, purchase more from you, and you’ll get cash in your
          bank so much faster!
        </h5>
      </div>
    </section>
  )
}

export default Collections
