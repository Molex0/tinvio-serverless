import React from "react"
import tablet from "../../../assets/whatWeDone/tablet.png"
import tablet768 from "../../../assets/whatWeDone/tablet-768.png"
import mobile from "../../../assets/whatWeDone/mobile.png"
import "./WhatWeDone.scss"

const WhatWeDone = () => {
  return (
    <section className="whatWeDone">
      <h1 className="title">What we’ve done</h1>
      <div className="top-block">
        <div className="left-block">
          <h2>2021</h2>
          <ul>
            <li>
              Launch Tinvio Checkout for on-platform payments, supplier web
              dashboard and more
            </li>
            <li>
              Series A funding to build embedded supply chain financing products
              for our users
            </li>
            <li>
              Expand into new verticals and markets. Close the year with 200
              team members and 4000+ active businesses across the region
            </li>
          </ul>
        </div>
        <div className="right-block">
          <img src={tablet} alt="tablet" />
        </div>
      </div>
      <div className="bottom-block">
        <img className="full-mobile" src={mobile} alt="mobile" />
        <div className="first-block">
          <div className="center">
            <h2>2020</h2>
            <ul>
              <li>Seed funding led by Sequoia, GFC</li>
              <li>
                Launch multi-country localization, digital invoicing and more
              </li>
              <li>
                Adapt to Covid-19. Triple our team size to 100. Activate 1000+
                new businesses
              </li>
            </ul>
          </div>
          <img className="tablet768" src={tablet768} alt="tablet768" />
        </div>
        <div className="second-block">
        <img className="mobile768" src={mobile} alt="mobile" />
          <div className="right">
            <h2>Q3 2019</h2>
            <ul>
              <li>
                Our founder Ajay raises pre-seed in Europe. Moves back home to
                Singapore to start Tinvio
              </li>
              <li>
                Zero to one in team, product, processes. Launch merchant mobile
                app
              </li>
              <li>
                Ajay meets our COO Tedo. Expand into Indonesia and more markets
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDone
