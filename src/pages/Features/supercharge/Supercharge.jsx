import React from "react"
import screen from "../../../assets/supercharge/screen.png"
import phone from "../../../assets/supercharge/phone.png"
import pin from "../../../assets/supercharge/pin.svg"
import paper from "../../../assets/supercharge/paper-plus.svg"
import dollar from "../../../assets/supercharge/dollar.svg"
import share from "../../../assets/supercharge/share.svg"
import "./Supercharge.scss"

const Supercharge = () => {
  return (
    <section className="supercharge">
      <h1 className="title">Supercharge your business with Tinvio</h1>
      <div className="supercharge-grid">
        <div className="dashboard-block">
          <div className="text">
            <div className="text-block">
              <h2>Chats</h2>
              <h6>
                Send messages, invoices, and payment links directly to customers
                (even if they’re not on Tinvio)
              </h6>
            </div>
            <div className="text-block">
              <h2>Orders</h2>
              <h6>
                Manage all your orders, and magically update inventory in a
                format designed to prevent mistakes
              </h6>
            </div>
            <div className="text-block">
              <h2>Payments</h2>
              <h6>
                Collect payments and reconcile against invoices, without ever
                checking bank statements
              </h6>
            </div>
            <div className="text-block">
              <h2>
                And more in one <br /> dashboard...
              </h2>
            </div>
          </div>
          <img src={screen} alt="screen" />
        </div>
        <div className="bottom-block-grid">
          <div className="manage-orders">
            <h2>Manage orders</h2>
            <h6>
              Yay, you’ve got a new order! Check and confirm the order in
              lightning speed
            </h6>
            <img src={phone} alt="phone" />
          </div>
          <div className="right-block">
            <div className="send-messages">
              <div className="top-block">
                <img src={pin} alt="pin" />
                <img src={paper} alt="paper" />
                <input type="text" placeholder="Type something..." />
              </div>
              <h2>Send messages</h2>
            </div>
            <div className="bottom-block">
              <div className="create-invoices">
                <h2>Create invoices</h2>
                <img src={dollar} alt="dollar" />
              </div>
              <div className="share-payment">
                <img src={share} alt="share" />
                <h2>Share payment links</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Supercharge
