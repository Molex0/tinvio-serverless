import React from "react"
import "./Footer.scss"
import { NavLink, Link } from "react-router-dom"
import logo from "../assets/homePage/logo.svg"
import inst from "../assets/socials/inst.svg"
import linked from "../assets/socials/linked.svg"
import appStore from "../assets/socials/appStore.svg"
import googlePlay from "../assets/socials/googlePlay.svg"

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="left-block">
          <img src={logo} alt="logo" />
          <div className="stick-block"></div>
          <ul className="pages">
            <li className="page">
              <NavLink to="/" className={({isActive}) => isActive ? 'active': ''}>Home</NavLink>
            </li>
            <li className="page">
              <NavLink to="/features" className={({isActive}) => isActive ? 'active': ''}>Features</NavLink>
            </li>
            <li className="page">
              <NavLink to="/company" className={({isActive}) => isActive ? 'active': ''}>Company</NavLink>
            </li>
            <li className="page">
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <div className="left_wrap">
            <a href="/">
              <img src={linked} alt="linkedIN" />
            </a>
            <a href="/">
              <img src={inst} alt="Instagram" />
            </a>
          </div>
          <div className="stick-block"></div>
          <div className="right_wrap">
            <a href="/">
              <img src={googlePlay} alt="googlePlay" />
            </a>
            <a href="/">
              <img src={appStore} alt="appStore" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <small>
          © Tinvio™ 2020. All Rights Reserved
          <div className="stick1"></div>
          <div className="links">
            <Link to="/policy">Privacy Policy</Link>
            <div className="stick2"></div>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </small>
      </div>
    </footer>
  )
}

export default Footer
