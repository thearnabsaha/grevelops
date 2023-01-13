import React from 'react'
import Card from './Card';
import "./Projects.scss"
import arr from '../../Apis/project'

const ProjectsWeb = () => {
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
        <div id="shadow"></div>
        </div>
    </div>
  )
}

export default ProjectsWeb