import React from 'react'
import WeAreTinvio from './WeAreTinvio/WeAreTinvio'
import WhatWeDone from './WhatWeDone/WhatWeDone'
import PoveredByTinvio from './PoveredByTinvio/PoveredByTinvio'
import Commintments from './Commitments/Commitments'
import Role from './Role/Role'
import ContactUs from './ContactUs/ContactUs'

const Company = () => {
  return (
    <div>
        <WeAreTinvio/>
        <WhatWeDone/>
        <PoveredByTinvio/>
        <Commintments/>
        <Role/>
        <ContactUs/>
    </div>
  )
}

export default Company