import React,{useEffect} from 'react'
import "./Techs.scss"
import node from '../../Assets/node.svg'
import shopify from '../../Assets/flutter.svg'
import vue from '../../Assets/react.svg'
import wordpress from '../../Assets/wordpress.svg'
import workday from '../../Assets/shopify.svg'

import { useAnimation,motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Techs = () => {
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
        <div id="Techs">
            <div className="container">
                <h1>Technologies</h1>
                <motion.div className="box" ref={ref}>
                    <motion.div className="sBox" ref={ref} animate={animation}>
                        <img src={node} alt="" className='node'/>
                        <h2>Node.js Developers</h2>
                    </motion.div>
                    <motion.div className="sBox" ref={ref} animate={animation1}>
                        <img src={shopify} alt="" />
                        <h2>Flutter Developers</h2>
                    </motion.div>
                    <motion.div className="sBox" ref={ref} animate={animation2}>
                        <img src={vue} alt="" />
                        <h2>React.js Developers</h2>
                    </motion.div>
                    <motion.div className="sBox" ref={ref} animate={animation3}>
                        <img src={wordpress} alt="" />
                        <h2>Wordpress Developers</h2>
                    </motion.div>
                    <motion.div className="sBox" ref={ref} animate={animation4}>
                        <img src={workday} alt="" />
                        <h2>Shopify Developers</h2>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Techs