import React from "react"
import photo1 from "../../../assets/role/photo1.png"
import photo2 from "../../../assets/role/photo2.png"
import photo3 from "../../../assets/role/photo3.png"
import photo4 from "../../../assets/role/photo4.png"
import "./Role.scss"

const Role = () => {
  return (
    <section className="role">
      <div className="photo-grid">
        <img className="photo1" src={photo1} alt="photo1" />
        <img className="photo2" src={photo2} alt="photo2" />
        <img className="photo3" src={photo3} alt="photo3" />
        <img className="photo4" src={photo4} alt="photo4" />
      </div>
      <div className="right-block">
        <h1>Global, local, remote. Find the perfect role</h1>
        <button>Explore Roles</button>
      </div>
    </section>
  )
}

export default Role
