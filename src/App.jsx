import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/0Navbar/Navbar'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import PortfolioApp from './Pages/PortfolioApp';
import PortfolioPage from './Pages/PortfolioPage';
import PortfolioWeb from './Pages/PortfolioWeb';
import ProjectPage from './Pages/ProjectPage';
const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/home" element={<HomePage/>}></Route>
            <Route path="/portfolio/all" element={<PortfolioPage/>}></Route>
            <Route path="/portfolio/websites" element={<PortfolioWeb/>}></Route>
            <Route path="/portfolio/apps" element={<PortfolioApp/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
            <Route path="portfolio/all/projects/:id" element={<ProjectPage/>}></Route>
            <Route path="portfolio/websites/projects/:id" element={<ProjectPage/>}></Route>
            <Route path="portfolio/apps/projects/:id" element={<ProjectPage/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App