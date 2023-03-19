import React from 'react'
import Preview from './Preview/Preview.'
import HowItWorks from './HowItWorks/HowItWorks'
import FeaturedOn from './FeaturedOn/FeaturedOn'
import Features from './Features/Features'
import PutSmile from './PutSmile/PutSmile'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div>
        <Preview/>
        <HowItWorks/>
        <FeaturedOn/>
        <Features/>
        <PutSmile/>
        <Contact/>
    </div>
  )
}

export default Home