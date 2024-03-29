import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./Portfolio.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion"
const Portfolio = () => {
  useEffect(() => {
    AOS.init({      offset: 200,
        duration: 1000,
        easing: 'ease-in-out',
        });
  }, [])
  return (
    <div>
        <div id="Portfolio">
              <div className="hero" >
                <div className="box" data-aos="flip-left">
                  <h3>Our Works</h3>
                  <h2>Portfolio Section</h2>
                  <p>“Find all our work with happy and satisfied clients here”</p>
                </div>
              </div>
            <div className="container" >
              <motion.div className="links"  initial={{x:-1500,y:0}} animate={{x:0,y:0}} transition={{duration:2,type:"spring",stiffness:120}}>
                  <Link to="/portfolio/all" className='linkp'>All</Link>
                  <Link to="/portfolio/websites" className='linkp'>Websites</Link>
                  <Link to="/portfolio/apps" className='linkp'>Apps</Link>
              </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio