import React,{useState}from 'react'
import {Link} from 'react-router-dom'
import logo from '../../Assets/logo.png'
import "./Navbar.scss"
const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const change=()=>{
    if (window.scrollY >=90) {
      setSticky(false)
    } else {
      setSticky(true)
    }
  }
  window.addEventListener("scroll",change);
  
  return (
    <div>
        <div id="Navbar" className={sticky?"sticky":"fixed"}>
            <div className="logo">
                <img src={logo} alt="" />
                <h1>Grevelops</h1>
            </div>
            <div className="links">
                <Link to="/" className='link'>Home</Link>
                <Link to="/portfolio" className='link'>Protfolio</Link>
                <Link to="/about" className='link'>About Us</Link>
                <Link to="/contact" className='link contact'>Contact Us</Link>
            </div>
        </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar