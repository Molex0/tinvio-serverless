import React, { useState } from "react"
import logo from "../assets/logo.svg"
import flag1 from "../assets/flags/en.svg"
import flag2 from "../assets/flags/pl.svg"
import flag3 from "../assets/flags/tw.svg"
import flag4 from "../assets/flags/vt.svg"
import arrowDown from "../assets/arrowDown.svg"
import arrowUp from "../assets/arrowUp.svg"
import burg from "../assets/burger.svg"
import cross from "../assets/cross.svg"
import inst from "../assets/socials/inst.svg"
import linked from "../assets/socials/linked.svg"
import appStore from "../assets/socials/appStore.svg"
import googlePlay from "../assets/socials/googlePlay.svg"
import "./NavBar.scss"

const Navbar = () => {
  const [language, setLanguage] = useState("EN")
  const [isOpenLanguage, setIsOpenLanguage] = useState(false)
  const [isOpened, setIsOpened] = useState(false)

  return (
    <nav className={isOpened ?"navbar navbar_burger container" :"navbar container"}>
      <div className="left_wrap">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className="languages">
          <div className={isOpened ? "language_burger" : "language"}>
            {language}
            <img
              className="arrow"
              src={isOpenLanguage ? arrowUp : arrowDown}
              alt="arrowDown"
              onClick={() => setIsOpenLanguage(!isOpenLanguage)}
            />
          </div>
          <div className={isOpenLanguage ? "flags-active" : "flags"}>
            <ul className="flags_container">
              <li className="flag">
                <img
                  src={flag1}
                  alt="flag1"
                  onClick={() => {
                    setLanguage("EN")
                    setIsOpenLanguage(false)
                  }}
                />
              </li>
              <li className="flag">
                <img
                  src={flag2}
                  alt="flag2"
                  onClick={() => {
                    setLanguage("ID")
                    setIsOpenLanguage(false)
                  }}
                />
              </li>
              <li className="flag">
                <img
                  src={flag3}
                  alt="flag3"
                  onClick={() => {
                    setLanguage("TH")
                    setIsOpenLanguage(false)
                  }}
                />
              </li>
              <li className="flag">
                <img
                  src={flag4}
                  alt="flag4"
                  onClick={() => {
                    setLanguage("VN")
                    setIsOpenLanguage(false)
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className={isOpened ? "pages_burger" : "pages"}>
        <li className="page">
          <a href="/">Home</a>
        </li>
        <li className="page">
          <a href="/">Features</a>
        </li>
        <li className="page">
          <a href="/">Company</a>
        </li>
      </ul>
      <button className={isOpened ? "start_btn_burger" : "start_btn"}>
        Get Started
      </button>
      <img
        className="burger"
        src={isOpened ? cross : burg}
        alt="burger"
        onClick={() => setIsOpened(!isOpened)}
      />
      <div className={isOpened ?"socials_burg" :"socials"}>
        <div className="left_wrap">
          <a href="/">
            <img src={linked} alt="linkedIN" />
          </a>
          <a href="/">
            <img src={inst} alt="Instagram" />
          </a>
        </div>
        <div className="right_wrap">
          <a href="/">
            <img src={googlePlay} alt="googlePlay" />
          </a>
          <a href="/">
            <img src={appStore} alt="appStore" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
