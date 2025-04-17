import React from 'react'
import "./education.css"
import Seperator from "../../common/seperator"
import { EducationData } from '../../data/education'
import EducationCard from './education-card'


function Education() {
    const data = EducationData;
    return (
        <div classsName="education">
            <Seperator/>
            <label className="section-title">Education</label>
            <div>
                {data.map((education,ed)=>{
                  return <EducationCard key={ed} education={education}/>  
                })}
            </div>

        </div>
    )
}

export default Education
