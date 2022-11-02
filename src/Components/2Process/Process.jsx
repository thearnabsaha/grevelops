import React from 'react'
import logo from '../../Assets/logo.png'
import "./Process.scss"
const Process = () => {
  return (
    <div>
        <div id="Process">
            <div className="upper">
                <img src={logo} alt="" />
                <p>WE WORK HARD TO MAKE IT REAL!</p>
                <h1>Our Work Process</h1>
            </div>
            <div className="cards">
                <div className="row">
                    <div className="textCarde">
                        <h2>Research</h2>
                        <p>At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings</p>
                    </div>
                    <div className="l1"></div>
                    <div className="i1"></div>
                    <div className="h"></div>
                    <div className="l2"></div>
                    <div className="imgCard"><img src={logo} alt="" /></div>
                </div>
                <div className="row">
                    <div className="imgCard"><img src={logo} alt="" /></div>
                    <div className="l1"></div>
                    <div className="i2"></div>
                    <div className="h"></div>
                    <div className="l2"></div>
                    <div className="textCards">
                        <h2>Design & Develop</h2>
                        <p>We then build the rich features of the application, and implement automated testing and deployment</p>
                    </div>
                </div>
                <div className="row">
                    <div className="textCarde">
                        <h2>Improve & Scale</h2>
                        <p>After the initial development phase, we optimise the application to manage for scale, and use the latest technological trends to lower operational costs.</p>
                    </div>
                    <div className="l1"></div>
                    <div className="i3"></div>
                    <div className="h"></div>
                    <div className="l2"></div>
                    <div className="imgCard"><img src={logo} alt="" /></div>
                </div>
                <div className="row">
                    <div className="imgCard"><img src={logo} alt="" /></div>
                    <div className="l1"></div>
                    <div className="i4"></div>
                    <div className="h"></div>
                    <div className="l2"></div>
                    <div className="textCards">
                        <h2>Support</h2>
                        <p>Finally, we monitor the application and provide insights, along with third line development support to ensure the product functions seamlessly during its lifetime.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="cRow">
                        <div className="i1"></div>
                        <div className="h"></div>
                        <div className="textCard">
                            <h2>Research</h2>
                            <p>At the first step, we select the tools and the technologies, setup the base architecture, and focus on the core offerings</p>
                        </div>
                    </div>
                    <div className="cRow">
                        <div className="i2"></div>
                        <div className="h"></div>
                        <div className="textCard">
                            <h2>Design & Develop</h2>
                            <p>We then build the rich features of the application, and implement automated testing and deployment</p>
                        </div>
                    </div>
                    <div className="cRow">
                        <div className="i3"></div>
                        <div className="h"></div>
                        <div className="textCard">
                            <h2>Improve & Scale</h2>
                            <p>After the initial development phase, we optimise the application to manage for scale, and use the latest technological trends to lower operational costs.</p>
                        </div>
                    </div>
                    <div className="cRow">
                        <div className="i4"></div>
                        <div className="h"></div>
                        <div className="textCard">
                            <h2>Support</h2>
                            <p>Finally, we monitor the application and provide insights, along with third line development support to ensure the product functions seamlessly during its lifetime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process