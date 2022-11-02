import React from 'react'
import Home from '../Components/1Home/Home'
import Expertise from '../Components/3Expertise/Expertise'
import Process from '../Components/2Process/Process'
import Footer from '../Components/4Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Home/>
        <Process/>
        <Expertise/>
        <Footer/>
    </div>
  )
}

export default HomePage