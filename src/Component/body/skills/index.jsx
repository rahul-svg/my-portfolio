import React from "react";
import "./skill.css";
import Seperator from "../../common/seperator";
import SkillCard from "./skill-card";
import {SkillsData} from "../../data/skills"

function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Seperator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill,cnt) => {
                  return <SkillCard key={cnt} skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
