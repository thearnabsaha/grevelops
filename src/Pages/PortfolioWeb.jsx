import React from 'react'
import Footer from '../Components/4Footer/Footer'
import Portfolio from '../Components/7Portfolio/Portfolio'
import ProjectsWeb from '../Components/8aProjects/ProjectsWeb'
import {Helmet} from "react-helmet";

const PortfolioWeb = () => {
  return (
    <div>
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
        <Portfolio/>
        <ProjectsWeb/>
        <Footer/>
    </div>
  )
}

export default PortfolioWeb