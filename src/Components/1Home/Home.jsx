import React from 'react'
import "./Home.scss"
import laptop from '../../Assets/laptop.png'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
const Home = () => {
  return (
    <div>
        <div id="Home" className="gradient-bg-welcome">
            <motion.div className="card" initial={{x:-1000}} animate={{x:0}} transition={{delay:1,duration:1,type:"spring",stiffness:50}}>
                <div className="text">
                    <h1>Hello, We're Grevelops.</h1>
                    <p>We are a passionate team of designers, developers & innovators, who can visualize and develop breathtaking graphics, websites and apps for your business.</p>
                </div>
                <motion.div className="img" initial={{y:-1000}} animate={{y:0}} transition={{delay:1.2,duration:1,type:"spring",stiffness:50}}>
                    <h1>
                    <Typewriter options={{strings: ["We Are Grevelops.","Contact Us."],autoStart: true,loop: true,}}/>
                    </h1>
                    {/* <h1>We Are Grevelops. Contact Us.</h1> */}
                    <motion.img src={laptop} alt="" initial={{zIndex:1}}/>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Home