import React,{useEffect} from 'react'
import { MdCall,MdEmail,MdSettings } from "react-icons/md";
import "./Contact.scss"
import { IoLogoLinkedin,IoLogoInstagram } from "react-icons/io";

import { useAnimation,motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Contact = () => {
    const { ref, inView } = useInView({threshold:0.2 });
    const animation=useAnimation()
    const animation1=useAnimation()
    const animation2=useAnimation()
    const animation3=useAnimation()
    const animation4=useAnimation()
    useEffect(() => {
      if(!inView){
        animation.start({
          y:100,scale:0,opacity:0
        })
        animation1.start({
          y:100,scale:0,opacity:0
        })
        animation2.start({
          y:100,scale:0,opacity:0
        })
        animation3.start({
          y:100,scale:0,opacity:0
        })
        animation4.start({
          y:100,scale:0,opacity:0
        })
      }
      if(inView){
        animation.start({
          y:0,scale:1,opacity:1,transition:{duration:.2}
        })
        animation1.start({
          y:0,scale:1,opacity:1,transition:{duration:.4}
        })
        animation2.start({
          y:0,scale:1,opacity:1,transition:{duration:.6}
        })
        animation3.start({
          y:0,scale:1,opacity:1,transition:{duration:.8}
        })
        animation4.start({
          y:0,scale:1,opacity:1,transition:{duration:1.0}
        })
      }
    },[inView])
  return (
    <div>
        <div id="Contact">
            <div className="container">
                <motion.div className="cards" ref={ref}>
                    <motion.div className="card" ref={ref} animate={animation}>
                        <div className="imgw">
                            <div className="l1"></div>
                            <div className="imgBox1">
                                <MdCall className='icon'/>
                            </div>
                            <div className="l2"></div>
                        </div>
                        <h3>Call Us</h3>
                        <p>Phone: <a href="tel:6296818891">+91 6296818891</a></p>
                    </motion.div>
                    <motion.div className="card" ref={ref} animate={animation1}>
                        <div className="imgw">
                            <div className="l3"></div>
                            <div className="imgBox2">
                                <MdEmail className='icon'/>
                            </div>
                            <div className="l4"></div>
                        </div>
                        <h3>Email</h3>
                        <p>Email: <a href="mailto:your@email.com?subject=Hello%20Arnab!">arnab@grevelops.co</a></p>
                    </motion.div>
                    <motion.div className="card carda" ref={ref} animate={animation2}>
                        <div className="imgw">
                            <div className="l5"></div>
                            <div className="imgBox3">
                                <MdSettings className='icon'/>
                            </div>
                            <div className="l6"></div>
                        </div>
                        <h3>Socials</h3>
                        <div className="as">
                            <a href="https://www.linkedin.com/company/grevelops/"><IoLogoLinkedin className='icona'/></a>
                            <a href="https://www.instagram.com/grevelops/"><IoLogoInstagram className='icona'/></a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Contact