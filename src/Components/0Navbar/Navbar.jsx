import React,{useState}from 'react'
import {Link} from 'react-router-dom'
import logo from '../../Assets/logo.webp'
import "./Navbar.scss"
import { GoThreeBars } from "react-icons/go";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

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
  window.addEventListener("scroll",change);
  const addClass=()=>{
    setOpen(!open)
  }

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={true?"close mNav":"open mNav"}>
          <div className="logo">
              <img src={logo} alt="" />
              <h1>Grevelops</h1>
          </div>
          <hr />
          <div className="linkas">
            <Link to="/" className='link'>Home</Link>
            <Link to="/portfolio/all" className='link'>Portfolio</Link>
            <Link to="/about" className='link'>About</Link>
            <Link to="/contact" className='link'>Contact</Link>
          </div>
        </div>
    </Box>
  );

  return (
    <div className='a'>
        <div id="Navbar" className={sticky?"sticky":"fixed"}>
            <div className="logo">
                <img src={logo} alt="" />
                <h1>Grevelops</h1>
            </div>
            <div className="links">
                <Link to="/" className='link'>Home</Link>
                <Link to="/portfolio/all" className='link'>Portfolio</Link>
                <Link to="/about" className='link'>About Us</Link>
                <Link to="/contact" className='link contact'>Contact Us</Link>
                <div className="iconBox" onClick={addClass} >
                </div>
                {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <GoThreeBars className='iconf' onClick={toggleDrawer(anchor, true)}>{anchor}</GoThreeBars>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar

