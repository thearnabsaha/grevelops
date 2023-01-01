import React,{useEffect} from 'react'
import logo from '../../Assets/logo.png'
import { IoLogoLinkedin,IoLogoInstagram } from "react-icons/io";
import "./Footer.scss"
import { useAnimation,motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Footer = () => {
    const { ref, inView } = useInView({threshold:0.2 });
    const animation=useAnimation()
    useEffect(() => {
    if(!inView){
        animation.start({
        y:20,scale:1,opacity:0
        })
    }
    if(inView){
        animation.start({
        y:-80,scale:1,opacity:1,transition:{duration:.4}
        })
    }
    },[inView])
    
  return (
    <div>
        <div id="Footer" className="gradient-bg-footer">
            <motion.div className="card" ref={ref} animate={animation}>
                <div className="text">
                    <h1>Ready To Start Your Project?</h1>
                    <p>Whether it's for design, development, support, server, remote work, or whatever, Grevelops is in the business of delivering the best results. Because otherwise, what's the point? Give us a call or drop us a line and we'd love to talk with you about your requirement.</p>
                </div>
                <a href="https://api.whatsapp.com/send?phone=916296818891">Get In Touch</a>
            </motion.div>
            <img src={logo} alt="" />
            <div className="upper">
                <div className="call">
                    <h1>CALL US</h1>
                    <a href="tel:6296818891">Phone. +91 6296818891</a>
                </div>
                <div className="write">
                    <h1>WRITE US</h1>
                    <a href="mailto:your@email.com?subject=Hello%20Arnab!">Email: arnab@grevelops.co</a>
                </div>
                <div className="socials">
                    <a href="#"><IoLogoLinkedin className='icon'/></a>
                    <a href="https://www.instagram.com/grevelops/"><IoLogoInstagram className='icon'/></a>
                </div>
            </div>
            <div className="lower">
                <p>&#169; 2022 TheArnabSaha. With all rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer