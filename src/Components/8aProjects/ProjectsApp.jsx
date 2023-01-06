import React from 'react'
import Card from './Card';
import "./Projects.scss"
import a from '../../Assets/a.webp';
import b from '../../Assets/b.webp';
import c from '../../Assets/c.webp';
import d from '../../Assets/d.webp';
const ProjectsApp = () => {
    var arr=[
        {   
            id:1,
            title:"My First Project app",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
            img:a
        },
        {
            id:2,
            title:"My First Project app",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
            img:b
        },
        {
            id:3,
            title:"My First Project app",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
            img:c
        },
        {
            id:4,
            title:"My First Project app",
            desc:"Create a free online store with a product catalog and start selling on WhatsApp.",
            img:d
        },
    ]
  return (
    <div>
        <div id="Projects">
            <div className="container">
                <div className="cards">
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

export default ProjectsApp