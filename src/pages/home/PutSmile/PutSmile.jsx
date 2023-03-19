import React from "react"
import binondo from "../../../assets/putSmile/binondo.svg"
import burgers from "../../../assets/putSmile/burgers.svg"
import esTeh from "../../../assets/putSmile/esTeh.svg"
import gongCha from "../../../assets/putSmile/gongCha.svg"
import group from "../../../assets/putSmile/group.svg"
import khoPaKa from "../../../assets/putSmile/khoPaKa.svg"
import nayLa from "../../../assets/putSmile/nayLa.svg"
import nex from "../../../assets/putSmile/nex.svg"
import petShop from "../../../assets/putSmile/petShop.svg"
import tk from "../../../assets/putSmile/tk.svg"
import companies from "../../../assets/putSmile/companies.svg"
import "./PutSmile.scss"

const PutSmile = () => {
  return (
    <section className="putSmile">
      <h1 className="title">We’ll put a smile on your supply chain </h1>
      <div className="icons">
        <div className="icons_left">
          <div className="left">
            <div className="icon-rhomb">
              <img src={binondo} alt="binondo" />
            </div>
            <div className="icon-rhomb">
              <img src={nex} alt="nex" />
            </div>
          </div>
          <div className="center">
            <div className="icon-rhomb">
              <img src={petShop} alt="petShop" />
            </div>
          </div>
          <div className="right">
            <div className="icon-rhomb">
              <img src={tk} alt="tk" />
            </div>
            <div className="icon-rhomb">
              <img src={nayLa} alt="nayLa" />
            </div>
          </div>
        </div>
        <div className="icon_center">
          <img src={companies} alt="companies" />
        </div>
        <div className="icons_right">
          <div className="left">
            <div className="icon-rhomb">
              <img src={group} alt="group" />
            </div>
            <div className="icon-rhomb">
              <img src={burgers} alt="burgers" />
            </div>
          </div>
          <div className="center">
            <div className="icon-rhomb">
              <img src={khoPaKa} alt="khoPaKa" />
            </div>
          </div>
          <div className="right">
            <div className="icon-rhomb">
              <img src={gongCha} alt="gongCha" />
            </div>
            <div className="icon-rhomb">
              <img src={esTeh} alt="esTeh" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PutSmile
