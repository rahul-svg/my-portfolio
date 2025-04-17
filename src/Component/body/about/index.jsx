import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import Imageresume from "../../../Assets/profile.jpeg"

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello I am
          <br /> <span className="info-name"> Rahul Kumar.</span>
          <br /> I’m passionate about software development and constantly experiment to improve performance, architecture, and user experience.
        </div>
        <div className="about-photo">
          <img
            src={Imageresume}
            alt=""
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
