import React from 'react'
import logo from '../../Assets/logo.png'
import { BsLaptop,BsPhone } from "react-icons/bs";
import {GiPencilBrush,GiCrossedChains,GiBrain } from "react-icons/gi";
import "./Expertise.scss"
const Expertise = () => {
  return (
    <div>
      <div id="Expertise">
      <div className="upper">
      <img src={logo} alt="" />
        <h2>TECH. PASSION. IMPACT.</h2>
        <h1>Our Expertise</h1>
        <p>We work across multiple industries and can cater to almost every need of our clients</p>
      </div>
        <div className="cards">
          <div className="card">
            <div className="i">
              <div className="ia i1"></div>
              <div className="iconBox i1">
                <BsLaptop className='icon'/>
              </div>
              <div className="ib i1"></div>
            </div>
            <h2>Web Developement</h2>
            <p>We work with the latest tech and frameworks to engineer interactive, robust and scalable web applications that fit your business needs.</p>
          </div>
          <div className="card">
            <div className="i">
              <div className="ia i2"></div>
              <div className="iconBox i2">
                <GiPencilBrush className='icon'/>
              </div>
              <div className="ib i2"></div>
            </div>
            <h2>UI/UX</h2>
            <p>We believe business software deserves the user friendliness and aesthetics of best in class consumer apps, so we combine innovation with optimum usability to create engaging designs.</p>
          </div>
          <div className="card">
            <div className="i">
              <div className="ia i3"></div>
              <div className="iconBox i3">
                <BsPhone className='icon'/>
              </div>
              <div className="ib i3"></div>
            </div>
            <h2>Mobile App Development</h2>
            <p>Our team of experienced mobile app developers and designers can build an app that will live up to your vision, enabling you to leverage mobility to maximize productivity.</p>
          </div>
          <div className="card">
            <div className="i">
              <div className="ia i4"></div>
              <div className="iconBox i4">
                <GiCrossedChains className='icon'/>
              </div>
              <div className="ib i4"></div>
            </div>
            <h2>Blockchain Development</h2>
            <p>We build custom blockchain solutions for companies of any size and industry to help create and scale blockchain products effectively.</p>
          </div>
          <div className="card">
            <div className="i">
              <div className="ia i5"></div>
              <div className="iconBox i5">
                <GiBrain className='icon'/>
              </div>
              <div className="ib i5"></div>
            </div>
            <h2>Artificial Intelligence</h2>
            <p>We provide services to enhance your platforms by using computer vision, deep learning, data visualisation, predictive analysis, object detection, and much more.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise