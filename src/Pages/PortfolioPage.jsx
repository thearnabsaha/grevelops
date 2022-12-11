import React from 'react'
import Footer from '../Components/4Footer/Footer'
import Portfolio from '../Components/7Portfolio/Portfolio'
import Projects from '../Components/8aProjects/Projects'

const PortfolioPage = () => {
  return (
    <div>
        <Portfolio/>
        <div id="Projects">
          <div className="container">
            <Projects/>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PortfolioPage