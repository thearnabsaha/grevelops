import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/0Navbar/Navbar'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import PortfolioPage from './Pages/PortfolioPage';
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/home" element={<HomePage/>}></Route>
            <Route path="/portfolio" element={<PortfolioPage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App