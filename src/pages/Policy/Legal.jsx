import React from 'react'
import { NavLink } from 'react-router-dom'
import './Legal.scss'

const Legal = () => {
  return (
    <section className='legal'>
        <h1>Tinvio Legal Info</h1>
        <div className="links">
            <NavLink to='/policy' className={({isActive}) => isActive ? 'active': ''}>Privacy Policy</NavLink>
            <NavLink to='/terms' className={({isActive}) => isActive ? 'active': ''}>Terms of Service</NavLink>
        </div>
    </section>
  )
}

export default Legal