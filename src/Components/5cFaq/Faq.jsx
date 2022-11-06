import React,{useEffect} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Faq.scss"

import { useAnimation,motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Faq = () => {
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
      console.log("hi",inView);
    },[inView])
  return (
    <div>
        <div id="Faq">
            <div className="container">
                <img src="" alt="" />
                <h3>WE HAVE ALL THE ANSWES</h3>
                <h1>Frequently Asked Questions</h1>
                <motion.div className="box" ref={ref}>
                    <motion.div className="left" ref={ref} animate={animation}>
                        <Accordion className='up'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='i'/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header" 
                                className='s'
                            >
                                <Typography className='c'>How much do you charge?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography  className='cd'>
                                It depends on many things: project scope, time spent on the project and technological issues. We know it sounds vague but its simply honest. Remember that each software project is different, especially if you had a particularly original idea. We do not want to give you an unrealistic estimate, instead we want to provide you with the best quality possible within your budget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion  className='down'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='i'/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header" className='s'
                            >
                                <Typography className='c'>I want to be involved in the app development process, will that be a problem?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='cd'>
                                Not at all! We want you to be sure you'll receive the product you desire. From the planning stage to each finished version, we invite you to evaluate and improve our work. Our philosophy is to work with the client, not merely finish given tasks. We are always ready to listen and communicate.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </motion.div>
                    <motion.div className="right" ref={ref} animate={animation1}>
                        <Accordion className='up'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='i'/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header" className='s'
                                
                            >
                                <Typography className='c'>How much time will it take for you to make my app?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='cd'>
                                To give you a precise answer we must prepare a project scope and create a budget. We shall tell you how much of that scope can be completed within the budget and how long the development process will take. Don't worry, if you're not happy with our work after two weeks you can retract from the project with no penalties, this is our trial period and we believe that any reliable software company should give you one
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className='down'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='i'/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header" className='s'
                            >
                                <Typography className='c'>How do you guarantee product quality?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='cd'>
                                We evaluate the result after every two weeks, we test our work (we conduct both development and acceptance tests), we present it to you, we apply your feedback so you know you get what you are paying for.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    </div>
  )
}

export default Faq