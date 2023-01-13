import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Card = (props) => {

  useEffect(() => {
    AOS.init({      offset: 200,
        duration: 600,
        easing: 'ease-in-out',
        });
  }, [])
  return (
    <div>
        <div className="cardp" data-aos="zoom-in-up">
                        <img src={props.img} alt="" />
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                        <button className='btn'><Link to={`projects/${props.id}`} className="link">Checkout</Link></button>
                    </div>
    </div>
  )
}

export default Card