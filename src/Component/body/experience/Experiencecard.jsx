import React from "react";
import "./experienceCard.css";

function Projectcard({ experience}) {
  return (
    <div className="experience-card" >
      <div className="experience-info">
        <label className="experience-title" >{experience.position} | {experience.company} | {experience.start_date}-{experience.end_date}</label>
        <ul className="experience-responsibilities">
          {experience.responsibilities.map((description) => {
            return <li>{description}</li>
          })}
          {/* {project.demo && (
            <a className="experience-link" href={experience.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i> demo
              </div>
            </a>
          )}
          {project.github&& (
          <a className="experience-link" href={experience.github}>
              <div className="link-button"> Github
              <i class="devicon-github-original colored"></i>
              </div>
            </a>
          )} */}
        </ul>
        <div className="experience-tags">
        {experience.tags.map((tag)=>{
            return <label className="project-tag">{tag}</label>
        })}
      </div>
      </div>
      {/* <img src={project.image} alt="" className="project-photo" /> */}
    </div>
    )
    };


export default Projectcard;
