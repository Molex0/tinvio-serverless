import React from "react"
import pixel from "../../../assets/commitments/pixel.svg"
import message from "../../../assets/commitments/message.svg"
import rocket from "../../../assets/commitments/rocket.svg"
import "./Commitments.scss"

const Commitments = () => {
  return (
    <section className="commitments">
        <h1 className="title">Our Core Commitments </h1>
        <div className="content">
          <div className="block">
            <img src={pixel} alt="pixel" />
            <h2>Every pixel matters</h2>
            <p>Biased towards perfection</p>
          </div>
          <div className="block">
            <img src={message} alt="message" />
            <h2>Shut the fluff</h2>
            <p>Clear and direct communication</p>
          </div>
          <div className="block">
            <img src={rocket} alt="rocket" />
            <h2>Break things fast</h2>
            <p>Ownership with ruthless agility</p>
          </div>
        </div>
    </section>
  )
}

export default Commitments