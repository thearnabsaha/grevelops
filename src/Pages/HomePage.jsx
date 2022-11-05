import React,{useState} from 'react'
import Home from '../Components/1Home/Home'
import Expertise from '../Components/3Expertise/Expertise'
import Process from '../Components/2Process/Process'
import Footer from '../Components/4Footer/Footer'
import pre from '../Assets/pre.svg'
const HomePage = () => {
  const [load, upadateLoad] = useState(true);
  setTimeout(() => {
    upadateLoad(false)
  }, 1000);
  return (
    <div>
        <div id={load ? "preloader" : "preloader-none"}>
          <img src={pre} alt="" />
        </div>
        <Home/>
        <Process/>
        <Expertise/>
        <Footer/>
    </div>
  )
}

export default HomePage