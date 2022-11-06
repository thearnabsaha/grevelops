import React from 'react'
import "./Goals.scss";
import { HiUserGroup } from "react-icons/hi";
import { GiPencilBrush } from "react-icons/gi";
import { motion } from "framer-motion"
const Goals = () => {
  return (
    <div>
        <div id="Goals">
            <div className="container">
                <h1>Our Goals</h1>
                <div className="row">
                    <motion.div className="left" initial={{x:-1000}} animate={{x:0}} transition={{delay:1,duration:1,type:"spring",stiffness:50}}>
                            <h2>Fostering A Culture of Excellence</h2>
                        <div className="box">
                            <div className="lefta">
                                <div className="imgw">
                                    <div className="imgBox">
                                        <HiUserGroup className='icon'/>
                                    </div>
                                    <div className="l1"></div>
                                </div>
                                <p>Our team is our biggest asset, and we like challenging ourselves.</p>
                            </div>
                            <div className="leftb">
                                <div className="imgw">
                                    <div className="imgBox">
                                            <GiPencilBrush className='icon'/>
                                    </div>
                                        <div className="l2"></div>
                                </div>
                                
                                <p>Building Innovative Pathways for SMBs & Enterprise Level Businesses</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="right" initial={{x:1000}} animate={{x:0}} transition={{delay:1,duration:1,type:"spring",stiffness:50}}>
                        <p>Our relentless pursuit of being the best digital transformation company enables us to become industry experts in the digital world by actively adding value to our partners' projects. We constantly learn, ideate, incubate, iterate and scale. At Stixor, we consider clients our partners, and your success is our success. This approach enables us to deliver effective digital solutions that empower businesses and allow them to scale. We create unparalleled technological experiences for their clients and help them stay ahead of the digital curve.</p>
                        <p>If you’re going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It’s the only good fight there is.” –Paraphrased from Charles Bukowski’s poem “Roll the Dice</p>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Goals