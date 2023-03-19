import React, { useState } from "react"
import ctrl from "../../../assets/cards/control-btn.svg"
import rise from "../../../assets/cards/rise.svg"
import compRise from "../../../assets/cards/compRise.svg"
import eggs from "../../../assets/cards/eggs.svg"
import compEggs from "../../../assets/cards/compEggs.svg"
import milk from "../../../assets/cards/milk.svg"
import compMilk from "../../../assets/cards/compMilk.svg"
import cup from "../../../assets/cards/cup.svg"
import compCup from "../../../assets/cards/compCup.svg"
import "./Features.scss"

const Card = () => {
  const [index, setIndex] = useState(0)
  const cards = [
    {
      text: "Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.",
      icon: compEggs,
      companyName: "Fathira Dida",
      description: "Owner (Baker Old)",
      image: eggs,
    },
    {
      text: "Tinvio helps our business run smoother. We can manage our customer's orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.",
      icon: compMilk,
      companyName: "Punnasiri Chaipatikul",
      description: "Business Development Manager (Phaitong Station)",
      image: milk,
    },
    {
      text: "With Tinvio, it's easier for my customers to make payments across various methods. Every payment is also collected in one business account where funds can be withdrawn instantly at any time.",
      icon: compCup,
      companyName: "Pauline Limgenco",
      description: "Director (Moonleaf)",
      image: cup,
    },
    {
      text: "Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.",
      icon: compRise,
      companyName: "Hafidz & Indah",
      description: "Owners (Sejadah Grocery)",
      image: rise,
    },
  ]
  const { text, icon, companyName, description, image } = cards[index]
  const prevHandler = () => {
    setIndex((prev) => prev - 1)
    if (index <= 0) {
      setIndex(cards.length - 1)
    }
  }
  const nextHandler = () => {
    setIndex((prev) => prev + 1)
    if (index >= cards.length - 1) {
      setIndex(0)
    }
  }
  return (
    <div className="card">
      <div className="content">
        <div className="left_content">
          <h3>{text}</h3>
          <div className="company">
            <img src={icon} alt="company_icon" />
            <div className="company_text">
              <h2>{companyName}</h2>
              <h5>{description}</h5>
            </div>
          </div>
          <div className="btns">
            <img
              onClick={() => prevHandler()}
              className="left-btn"
              src={ctrl}
              alt="left_ctrl"
            />
            <img
              onClick={() => nextHandler()}
              className="right-btn"
              src={ctrl}
              alt="left_ctrl"
            />
          </div>
        </div>
        <img className="right-img" src={image} alt="picture_right" />
      </div>
      <div className="navigation">
        <div onClick={() => setIndex(0)} className={index === 0 ?"rhomb active": "rhomb"}></div>
        <div onClick={() => setIndex(1)} className={index === 1 ?"rhomb active": "rhomb"}></div>
        <div onClick={() => setIndex(2)} className={index === 2 ?"rhomb active": "rhomb"}></div>
        <div onClick={() => setIndex(3)} className={index === 3 ?"rhomb active": "rhomb"}></div>
      </div>
    </div>
  )
}

export default Card
