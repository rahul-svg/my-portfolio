import React from 'react'; 
import "./web.css";

function Web () {
    return (
        <div className="web">
            <div className="web-options">
                <a href="#experience">
                <i class="bi bi-person-lines-fill"></i>Experience</a>
            </div>
            <div className="web-options">
                <a href="#projects">
                <i class="bi bi-stack"></i>Projects</a>
            </div>
            <div className="web-options">
                <a href="#skills">
                <i class="bi bi-gear"></i>Skills</a>
            </div>
            <div className="web-options">
                <a href="#education">
                <i class="bi bi-book"></i>Education</a>
            </div>
            <div className="web-options">
                <a href="#contact">
                <i class="bi bi-person-lines-fill"></i>Contact</a>
            </div>
        </div>
    )
}

export default Web 
