import React from 'react'
import "./education-card.css"

function EducationCard({education}) {
    return (

        <div className="education-card">
            <div className="education-info">
            <div className="education-class">{education.class}</div>
            <div className="education-course">Course/Sepecialization : {education.course}</div>
            <div className="education-percent">Percentage/CGPA : {education.percentage}</div>
            <div className="date">
            <label className="start"> Start Date : {education.dateJoining}</label>
            <label className="end"> End Date : {education.dateEnd}</label>
            </div>
            <div className="education-board">Board : {education.board}</div>
            </div>
            <img src={education.image} alt="" className="education-photo"/>


            
            

            
        </div>
    )
}

export default EducationCard
