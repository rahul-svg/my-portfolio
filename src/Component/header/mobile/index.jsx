import React from "react";
import "./mobile.css";

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i class="bi bi-x-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#experience">
          <i class="bi bi-suitcase"></i>Experience
          </a>
        </div>

        <div className="mobile-option">
          <a href="#projects">
          <i class="bi bi-stack"></i>Projects
          </a>
        </div>
        
        <div className="mobile-option">
          <a href="#skills">
          <i class="bi bi-gear"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#education">
          <i class="bi bi-book"></i>Education
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
          <i class="bi bi-person-lines-fill"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
