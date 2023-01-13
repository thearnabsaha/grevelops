import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
  const handleClick=()=>{
    // console.log("arnab");
  }
  return (
    <div>
        <div className="cardp" onClick={handleClick}>
                        <img src={props.img} alt="" />
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                        <button className='btn'><Link to={`projects/${props.id}`} className="link">Checkout</Link></button>
                    </div>
    </div>
  )
}

export default Card