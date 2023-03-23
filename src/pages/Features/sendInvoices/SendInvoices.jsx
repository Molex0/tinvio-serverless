import React from "react"
import send from '../../../assets/sendInvoices/send.png'
import send375 from '../../../assets/sendInvoices/send-375.svg'
import './SendInvoices.scss'

const SendInvoices = () => {
  return (
    <section className="sendInvoices">
      <div className="text">
        <h1>Send invoices, save the trees </h1>
        <h5>
          Send invoices digitally, and track them all the way until they’re
          paid. It’s easier to reconcile and more organized than printouts. If
          they’re overdue, automatically send a friendly reminder or two!
        </h5>
      </div>
      <img className='send' src={send} alt="send" />
      <img className='send375' src={send375} alt="send375" />
    </section>
  )
}

export default SendInvoices
