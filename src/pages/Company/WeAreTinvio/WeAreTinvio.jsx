import React from "react"
import phone from "../../../assets/weAreTinvio/phone.svg"
import "./WeAreTinvio.scss"

const WeAreTinvio = () => {
  return (
    <section className="weAreTinvio">
      <h1 className="title">Hi, we’re <span>Tinvio</span>!</h1>
      <h4 className="subtitle">
        We’re reimaging how merchants and suppliers transact.
      </h4>
      <div className="bottom-block">
        <div className="left-block">
          <p>
            Tinvio is built for B2B transactions. It's an app, it's a dashboard,
            it's a checkout link, it's a digital wallet, it's a credit line,
            it's money in (and out) of your bank, and so much more. Tradition
            meets modern in a delightful chat-led user experience. The best
            part? We make it fast, flexible, and fun. <br /> <br />  Why do we do it? It's
            painfully frustrating for businesses to transact. Our generation are
            minting NFTs on blockchains everyday and about to colonize Mars, but
            in our supply chains, businesses are still exchanging cold hard
            cash, writing checks, and keying manual bank transfers. We're going
            to reimagine the status quo, we're going to digitize the zillions of
            these offline receivables and payables. One transaction at a time.
          </p>
          <button className="contact-btn">Contact Us</button>
        </div>
        <img src={phone} alt="phone" />
      </div>
    </section>
  )
}

export default WeAreTinvio
