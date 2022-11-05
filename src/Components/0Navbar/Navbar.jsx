import React,{useState}from 'react'
import {Link} from 'react-router-dom'
import logo from '../../Assets/logo.png'
import "./Navbar.scss"
import { GoThreeBars } from "react-icons/go";
const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)
  const change=()=>{
    if (window.scrollY >=90) {
      setSticky(false)
    } else {
      setSticky(true)
    }
  }
  console.log(open);
  window.addEventListener("scroll",change);
  const addClass=()=>{
    setOpen(!open)
  }
  const handleBlur=()=>{
    // setOpen(false)
    console.log("Pokeomon");
  }
  return (
    <div className='a'>
        <div className={open?"close mNav":"open mNav"}>
          <div className="logo">
              <img src={logo} alt="" />
              <h1>Grevelops</h1>
          </div>
          <div className="linkas">
            <Link to="/" className='link'>Home</Link>
            <Link to="/portfolio" className='link'>Portfolio</Link>
            <Link to="/about" className='link'>About</Link>
            <Link to="/contact" className='link'>Contact</Link>

          </div>
        </div>
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
                <div className="iconBox" onClick={addClass}>
                  <GoThreeBars className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar