import React from "react"
import dashboard from '../../../assets/dashboard/dashboard.png'
import dashboard768 from '../../../assets/dashboard/dashboard-768.png'
import dashboard375 from '../../../assets/dashboard/dashboard-375.png'
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <section className="dashboard">
        
      <h1 className="title">
        One dashboard, all your <br/> supply chain transactions
      </h1>
      <h4 className="subtitle">
        From orders to real-time cash in your bank. <br/>Run your business like a
        rockstar.
      </h4>
      <button className="tryit-btn">Try it for Free</button>
      <img className="img-full" src={dashboard} alt="" />
      <img className="img-768" src={dashboard768} alt="" />
      <img className="img-375" src={dashboard375} alt="" />
    </section>
  )
}

export default Dashboard
