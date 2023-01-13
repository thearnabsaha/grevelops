import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Footer from '../Components/4Footer/Footer';

import arr from '../Apis/project'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProjectPage = () => {
    const {id} = useParams();
    useEffect(() => {
        AOS.init({      offset: 200,
            duration: 600,
            easing: 'ease-in-out',
            });
      }, [])

    var arr1=[arr[id-1]]
    console.log(arr1);
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
                                    <div className="imgBox" data-aos="fade-right">
                                        <img src={e.img} alt="" />
                                    </div>
                                    <div className="smBox" data-aos="fade-left">
                                        <div className="about">
                                            <h2>About</h2>
                                            <h3>{e.title}</h3>
                                            <p>{e.desc}</p>
                                        </div>
                                        <div className="technology">
                                            <h2>Technology</h2>
                                            <ul>
                                                {/* <li>Html</li>
                                                <li>Html</li>
                                                <li>Html</li> */}
                                                {
                                                    e.tech.map((e)=>{
                                                        return(
                                                            <li>{e.lang}</li>
                                                        )
                                                    })
                                                }
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