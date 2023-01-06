import React from 'react'
import {useParams} from 'react-router-dom'
import Footer from '../Components/4Footer/Footer';
import a from '../Assets/a.webp';
const ProjectPage = () => {
    const {id} = useParams();
    var arr=[
        {   
            id:1,
            title:"My First Project",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
            tech:[{lang:"HTMl"},{lang:"HTMl"},{lang:"HTMl"},{lang:"HTMl"},{lang:"HTMl"},{lang:"HTMl"},]
        },
        {
            id:2,
            title:"My First Project",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
        },
        {
            id:3,
            title:"My First Project",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
        },
        {
            id:4,
            title:"My First Project",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
        },
    ]
    var arr1=[arr[id]]
  return (
    <div id='pp'>
        {
            arr1.map((e)=>{
                return(
                    <div key={id}>
                        <div id="ProjectReview">
                            <div className="container">
                                <h1>Project Review</h1>
                                <div className="box">
                                    <div className="imgBox">
                                        <img src={a} alt="" />
                                    </div>
                                    <div className="smBox">
                                        <div className="about">
                                            <h2>About</h2>
                                            <h3>{e.title}</h3>
                                            <p>{e.desc}</p>
                                        </div>
                                        <div className="technology">
                                            <h2>Technology</h2>
                                            <ul>
                                                <li>Html</li>
                                                <li>Html</li>
                                                <li>Html</li>
                                            </ul>
                                        </div>
                                        <a href="https://api.whatsapp.com/send?phone=916296818891">Get In Touch</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )
            })
        }
        <Footer/>
    </div>
  )
}

export default ProjectPage