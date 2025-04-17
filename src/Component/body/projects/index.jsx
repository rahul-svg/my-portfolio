import React from 'react'
import { ProjectData } from '../../data/projects';
import Projectcard from './Projectcard';
import "./Project.css"
import Seperator from '../../common/seperator';

function Projects() {
    const data = ProjectData;
    return (
        <div className="projects">
            <Seperator/>
            <label className="section-title">Projects</label>
            <div>
                {data.map((project,idx)=>{
                    return <Projectcard key={idx} project={project}/>
                })}

            </div>
        </div>
    )
}

export default Projects
