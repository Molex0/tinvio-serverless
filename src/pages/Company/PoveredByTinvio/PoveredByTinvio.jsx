import React from "react"
import photo1 from '../../../assets/poveredByTinvio/photo1.png'
import photo2 from '../../../assets/poveredByTinvio/photo2.png'
import photo3 from '../../../assets/poveredByTinvio/photo3.png'
import photo4 from '../../../assets/poveredByTinvio/photo4.png'
import "./PoveredByTinvio.scss"

const PoveredByTinvio = () => {
  return (
    <section className="poveredByTinvio">
      <div className="line">
          <div className="first">
            <h2>
              250<span>+</span>
            </h2>
            <h4>Team Members</h4>
          </div>
          <div className="second">
            <h2>
              10<span>+</span>
            </h2>
            <h4>Nationalitiess</h4>
          </div>
          <div className="third">
            <h2>
              5000<span>+</span>
            </h2>
            <h4>Businesses</h4>
          </div>
          <div className="forth">
            <h2>
              $500<span>M</span>
            </h2>
            <h4>Transactions</h4>
          </div>
      </div>
      <div className="photos">
        <h1>Powered by <span>Teamvio</span></h1>
        <div className="block">
          <div className="left">
            <img src={photo1} alt="photo1" />
            <img src={photo2} alt="photo2" />
          </div>
          <div className="right">
            <img src={photo3} alt="photo3" />
            <div className="join-us">
              <h4>Up for a challenge? We're always looking for the best</h4>
              <button>Join Us</button>
            </div>
            <img src={photo4} alt="photo4" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PoveredByTinvio
