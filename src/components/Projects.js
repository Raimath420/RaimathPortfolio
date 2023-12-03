import React from 'react'

import Cards from './Cards';
import cardinfo from './cardinfo'

const Projects = () => {
  return (
    <div>
       <section className="projects">
        <div className="projects-section container flex" id="project">
            <h2>PROJECTS</h2>
            <div className="head-box  grid-three">
             { cardinfo.map((Value,id) =>{
                return(<Cards key={id} link={Value.link} image={Value.image} text={Value.text}/>);
              })}
                
            
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default Projects
