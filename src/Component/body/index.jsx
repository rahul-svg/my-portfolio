import React from "react";
import "./body.css";
import About from "./about/index";
import Contact from "./contact/index";
import Education from "./education/index";
import Skills from "./skills/index";
import Projects from "./projects/index";
import Experience from "./experience/index"

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
