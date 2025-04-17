import React from 'react'
import { ExperienceData} from '../../data/experience';
import Experiencecard from './Experiencecard';
import "./Experience.css"
import Seperator from '../../common/seperator';

function Projects() {
    const data = ExperienceData;
    return (
        <div className="projects">
            <Seperator/>
            <label className="section-title">Work Experience</label>
            <div>
                {data.map((experience,idx)=>{
                    return <Experiencecard key={idx} experience={experience}/>
                })}

            </div>
        </div>
    )
}

export default Projects
