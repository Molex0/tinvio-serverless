import React from 'react'
import Dashboard from './dashboard/Dashboard'
import Supercharge from './supercharge/Supercharge'
import Breeze from './breeze/Breeze'
import SupplyChain from './supplyChain/SupplyChain'
import SendInvoices from './sendInvoices/SendInvoices'
import Collections from './collections/Collections'
import Smarter from './smarter/Smarter'
import Business from './business/Business'
import Faq from './FAQ/Faq.jsx'


const Features = () => {
  return (
    <div>
      <Dashboard/>
      <Supercharge/>
      <Breeze/>
      <SupplyChain/>
      <SendInvoices/>
      <Collections/>
      <Smarter/>
      <Business />
      <Faq/>
    </div>
  )
}

export default Features