import React,{useEffect} from 'react'
import logo from '../../Assets/logo.png'
import a from '../../Assets/a.jpg'
import b from '../../Assets/b.jpg'
import c from '../../Assets/c.jpg'
import d from '../../Assets/d.jpg'
import "./Process.scss"
import { useAnimation,motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Process = () => {
    const { ref, inView } = useInView({threshold:0.2 });
    const animation=useAnimation()
    const animation2=useAnimation()
    const animation3=useAnimation()
    const animation4=useAnimation()
    const animation5=useAnimation()
    const animation6=useAnimation()
    const animation7=useAnimation()
    useEffect(() => {
        if(!inView){
            animation.start({
            y:200,scale:0,opacity:0,transition:{duration:.1}
            })
            animation2.start({
            y:200,scale:0,opacity:0,transition:{duration:.1}
            })
            animation3.start({
                y:100,scale:0,opacity:0
            })
            animation4.start({
                y:100,scale:0,opacity:0
            })
            animation5.start({
                y:100,scale:0,opacity:0
            })
            animation6.start({
                y:100,scale:0,opacity:0
            })
            animation7.start({
                y:100,scale:0,opacity:0
            })
        }
        if(inView){
            animation.start({
            y:0,scale:1,opacity:1,transition:{duration:.1}
            })
            animation2.start({
            y:0,scale:1,opacity:1,transition:{duration:.1}
            })
            animation3.start({
                y:0,scale:1,opacity:1,transition:{duration:.2}
            })
            animation4.start({
                y:0,scale:1,opacity:1,transition:{duration:.4}
            })
            animation5.start({
                y:0,scale:1,opacity:1,transition:{duration:.6}
            })
            animation6.start({
                y:0,scale:1,opacity:1,transition:{duration:.8}
            })
            animation7.start({
                y:0,scale:1,opacity:1,transition:{duration:1.0}
            })
        }
      console.log("hi",inView);
    },[inView])
    
  return (
    <div>
        <div id="Process">
            <div className="upper">
                <img src={logo} alt="" />
                <p>WE WORK HARD TO MAKE IT REAL!</p>
                <h1>Our Work Process</h1>
            </div>
            <div className="cards" ref={ref}>
                <div className="row">
                    <motion.div className="textCarde" animate={animation} ref={ref}>
                        <h2>Research</h2>
                        <p>At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings</p>
                    </motion.div>
                    <div className="l1"></div>
                    <div className="i1"></div>
                    <div className="h"></div>
                    <div className="l2"></div>
                    <motion.div className="imgCard" animate={animation2} ref={ref} ><img src={d} alt="" /></motion.div>
                </div>
                <div className="row">
                    <motion.div className="imgCard"  animate={animation} ref={ref}><img src={b} alt="" /></motion.div>
                    <div className="l1"></div>
                    <div className="i2"></div>
                    <div className="h"></div>
                    <div className="l2"></div>
                    <motion.div className="textCards" animate={animation2} ref={ref}>
                        <h2>Design & Develop</h2>
                        <p>We then build the rich features of the application, and implement automated testing and deployment</p>
                    </motion.div>
                </div>
                <div className="row">
                    <motion.div className="textCarde" animate={animation} ref={ref}>
                        <h2>Improve & Scale</h2>
                        <p>After the initial development phase, we optimise the application to manage for scale, and use the latest technological trends to lower operational costs.</p>
                    </motion.div>
                    <div className="l1"></div>
                    <div className="i3"></div>
                    <div className="h"></div>
                    <div className="l2"></div>
                    <motion.div className="imgCard" animate={animation2} ref={ref}><img src={a} alt="" /></motion.div>
                </div>
                <div className="row">
                    <motion.div className="imgCard" animate={animation} ref={ref}><img src={c} alt="" /></motion.div>
                    <div className="l1"></div>
                    <div className="i4"></div>
                    <div className="h"></div>
                    <div className="l2"></div>
                    <motion.div className="textCards" animate={animation2} ref={ref}>
                        <h2>Support</h2>
                        <p>Finally, we monitor the application and provide insights, along with third line development support to ensure the product functions seamlessly during its lifetime.</p>
                    </motion.div>
                </div>
                <div className="column">
                    <div className="cRow">
                        <div className="i1"></div>
                        <div className="h"></div>
                        <motion.div className="textCard" animate={animation3} ref={ref}>
                            <h2>Research</h2>
                            <p>At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings</p>
                        </motion.div>
                    </div>
                    <div className="cRow">
                        <div className="i2"></div>
                        <div className="h"></div>
                        <motion.div className="textCard" animate={animation4} ref={ref}>
                            <h2>Design & Develop</h2>
                            <p>We then build the rich features of the application, and implement automated testing and deployment</p>
                        </motion.div>
                    </div>
                    <div className="cRow">
                        <div className="i3"></div>
                        <div className="h"></div>
                        <motion.div className="textCard" animate={animation5} ref={ref}>
                            <h2>Improve & Scale</h2>
                            <p>After the initial development phase, we optimise the application to manage for scale, and use the latest technological trends to lower operational costs.</p>
                        </motion.div>
                    </div>
                    <div className="cRow">
                        <div className="i4"></div>
                        <div className="h"></div>
                        <motion.div className="textCard" animate={animation6} ref={ref}>
                            <h2>Support</h2>
                            <p>Finally, we monitor the application and provide insights, along with third line development support to ensure the product functions seamlessly during its lifetime.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process