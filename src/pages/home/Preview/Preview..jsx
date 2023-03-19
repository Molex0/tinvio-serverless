import React from "react"
import "./Preview.scss"
import emoji from "../../../assets/emoji.svg"
import rectangle from "../../../assets/redRectangle.svg"
import rectangle_mobile from "../../../assets/preview-768px.svg"

const Preview = () => {
  return (
    <section className="preview">
      <div className="left_text">
        <h1 className="title">
          Collecting payments <br />
          <span className="text-red">is easy</span>, right?
        </h1>
        <h4 className="bs-subtext">
          Manage all your supply chain transactions
          <br />
          in one dashboard. Get paid faster, reconcile
          <br />
          quicker, grow bigger.
        </h4>
        <h4 className="sm-subtext">
          Manage all your supply chain transactions in one dashboard. 
          <br />Get paid faster, reconcile quicker, grow bigger.
        </h4>
        <div className="under_block">
          <button className="getstarted-btn">Get Started Now</button>
          <div className="text_under">
            <h5>It's free to try!</h5>
            <img src={emoji} alt="emoji" />
          </div>
        </div>
      </div>
      <img className="right_img" src={rectangle} alt="" />
      <img className="right_img_768" src={rectangle_mobile} alt="" />
    </section>
  )
}

export default Preview
