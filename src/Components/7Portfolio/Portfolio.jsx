import React from 'react'
import {Link} from 'react-router-dom'
import "./Portfolio.scss"
const Portfolio = () => {
  return (
    <div>
        <div id="Portfolio">
            <div className="container">
              <div className="links">
                  <Link to="/portfolio/all" className='link'>All</Link>
                  <Link to="/portfolio/websites" className='link'>Websites</Link>
                  <Link to="/portfolio/apps" className='link'>Apps</Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio