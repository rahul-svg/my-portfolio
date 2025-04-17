import React from "react";
import "./projectcard.css";

function Projectcard({ project}) {
  return (
    <div className="project-card" >
      <div className="project-info">
        <label className="project-title" >{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i> demo
              </div>
            </a>
          )}
          {project.github&& (
          <a className="project-link" href={project.github}>
              <div className="link-button"> Github
              <i class="devicon-github-original colored"></i>
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
        {project.tags.map((tag)=>{
            return <label className="project-tag">{tag}</label>
        })}
      </div>
      </div>
      <img src={project.image} alt="" className="project-photo" />
    </div>
    )
    };


export default Projectcard;
