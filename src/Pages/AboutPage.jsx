import React from 'react'
import Navbar from '../Components/0Navbar/Navbar'
import Home from '../Components/1Home/Home'
import Footer from '../Components/4Footer/Footer'
import Goals from '../Components/5aGoals/Goals'
import Techs from '../Components/5bTechnologies/Techs'
import Faq from '../Components/5cFaq/Faq'
const AboutPage = () => {
  return (
    <div>
        <Faq/>
        <Goals/>
        <Techs/>
        <Footer/>
    </div>
  )
}

export default AboutPage