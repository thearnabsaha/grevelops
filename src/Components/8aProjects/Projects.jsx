import React from 'react'
import Card from './Card';
import "./Projects.scss"
import a from '../../Assets/a.jpg';
import b from '../../Assets/b.jpg';
import c from '../../Assets/c.jpg';
import d from '../../Assets/d.jpg';

const Projects = () => {
    var arr=[
        {   
            id:1,
            title:"My First Project",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
            img:a
        },
        {
            id:2,
            title:"My First Project",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
            img:b
        },
        {
            id:3,
            title:"My First Project",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
            img:c
        },
        {
            id:4,
            title:"My First Project",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
            img:d
        },
    ]
  return (
    <div>
        <div id="Projects">
            <div className="container">
                <div className="cards">
                    {/* <div className="card">
                        <img src={a} alt="" />
                        <h1>My First Project</h1>
                        <p>Create a free online store with a product catalog and start selling on WhatsApp.</p>
                    </div> */}
              {      arr.map((e)=>{
                        return(
                            <div key={e.id}>
                                <Card title={e.title} desc={e.desc} img={e.img} id={e.id}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects