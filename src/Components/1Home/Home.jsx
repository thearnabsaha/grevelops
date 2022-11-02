import React from 'react'
import "./Home.scss"
import laptop from '../../Assets/laptop.png'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import Particles from "react-tsparticles";
const Home = () => {
  return (
    <div>
        <div id="Home">
        <Particles
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#000"
            },
            links: {
              enable: true,
              color: "#000",
              distance: 150
            },
            move: {
              enable: true
            }
          }
        }}
      />
            <motion.div className="card" initial={{x:-1000}} animate={{x:0}} transition={{duration:1,type:"spring",stiffness:50}}>
                <div className="text">
                    <h1>Hello, We're Grevelops.</h1>
                    <p>We are a passionate team of designers, developers & innovators, who can visualize and develop breathtaking graphics, websites and apps for your business.</p>
                </div>
                <motion.div className="img" initial={{y:-1000}} animate={{y:0}} transition={{delay:.2,duration:1,type:"spring",stiffness:50}}>
                    <h1>
                    <Typewriter options={{strings: ["We Are", "Grevelops.","Contact Us."],autoStart: true,loop: true,}}/>
                    </h1>
                    {/* <h1>We Are Grevelops. Contact Us.</h1> */}
                    <img src={laptop} alt="" />
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Home