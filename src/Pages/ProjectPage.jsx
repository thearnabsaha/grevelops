import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Footer from '../Components/4Footer/Footer';
import {Helmet} from "react-helmet";

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
                    <Helmet>
          <meta charset="utf-8" />
          <link rel="icon" href="./logo.webp" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name='keywords' content='Grevelops, arnab, arnab saha, technology solution, software solution, software outsourcing, grevelops, iiest shibpur startup'/>
          <meta name='subject' content='good software outsourcing companies'/>
          <meta name='copyright' content='Grevelops'/>
          <meta name='language' content='ES'/>
          <meta name='author' content='Arnab Saha, thearnabsaha201@gmail.com'/>
          <meta name='url' content='http://www.grevelops.co'/>
          <meta
            name="description"
            content="Welcome to Grevelops Tech Agency, your one-stop shop for all your digital needs. We are a team of experienced professionals dedicated to helping businesses of all sizes succeed in the online world. Our services include web design and development, Android app development, and online marketing. Whether you need a website to showcase your products or a custom app to streamline your operations, we have the expertise to deliver top-notch solutions that meet your unique needs. Contact us today and let us help you take your business to the next level!"
          />
          <meta name="google-site-verification" content="kY_xs_3AF4Z7PUMDDKfG2YOfNGQiymdxJMhLWPcLI3w" />
          <meta name="google-site-verification" content="ikpAq3TQxXPcQb4zCI9uCNwbwXNuDgs3h7HX954p6yM" />
          <meta name='og:title' content='Grevelops'/>
          <meta name='og:url' content='https://grevelops.co/'/>
          <meta name='og:image' content='https://www.google.com/search?q=grevelops&tbm=isch&nfpr=1&rlz=1C5CHFA_enIN979IN979&hl=en&sa=X&ved=2ahUKEwi85uLwzK78AhWDi9gFHc7tCAwQvgV6BAgBEEc&biw=1680&bih=882#imgrc=vgSVdi3RdDJzkM'/>
          <meta name='og:phone_number' content='6296818891'/>
          <meta name='og:street-address' content='56, LNT Rd, Indian Institute of Engineering Science and Technology, Botanical Garden Area, Howrah, West Bengal 711103'/>
          <meta name='og:site_name' content='Grevelops'/>
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
          <link rel="canonical" href="https://www.grevelops.co/" />
          <meta name='og:country-name' content='India'/>
          <meta name='og:email' content='thearnabsaha201@gmail.com'/>
          <title>Grevelops</title>
        </Helmet>
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