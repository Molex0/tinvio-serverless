import React from "react"
import "./Footer.scss"
import logo from "../assets/logo.svg"
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
              <a href="/">Home</a>
            </li>
            <li className="page">
              <a href="/">Features</a>
            </li>
            <li className="page">
              <a href="/">Company</a>
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
            <a href="/">Privacy Policy</a>
            <div className="stick2"></div>
            <a href="/">Terms of Service</a>
          </div>
        </small>
      </div>
    </footer>
  )
}

export default Footer
