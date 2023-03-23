import React from 'react'
import order from '../../../assets/breeze/order.png'
import './Breeze.scss'

const Breeze = () => {
  return (
    <section className='breeze'>
        <div className="text">
            <h1 className='title'>
                Breeze through orders <br /> without the stress
            </h1>
            <h5 className='subtitle'>
            Your customers will love that they can browse item catalogs and check availability before placing orders. You’ll receive orders in beautifully formatted lists. Confirm or amend them in a few taps, even when on-the-go!
            </h5>
        </div>
        <div className="right-block">
            <img src={order} alt="order" />
        </div>
    </section>
  )
}

export default Breeze