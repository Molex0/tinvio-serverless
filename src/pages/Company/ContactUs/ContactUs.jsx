import React from 'react'
import './ContactUs.scss'

const ContactUs = () => {
  return (
    <section className='contactUs'>
        <h1>Contact us</h1>
        <div className="blocks">
            <div className="block">
                <h2>Product <br /> Support</h2>
                <p>Need help? Live chat with “Team Tinvio” in the app or dashboard</p>
                <button>Get Help</button>
            </div>
            <div className="block">
                <h2>Business & <br /> Partnerships</h2>
                <p>Interested in collaborating or partnering with Tinvio?</p>
                <button>Contact Us</button>
            </div>
            <div className="block">
                <h2>Media <br /> Relations</h2>
                <p>Working on a story? We’re happy to share more about Tinvio</p>
                <button>Get Coffee</button>
            </div>
        </div>
    </section>
  )
}

export default ContactUs