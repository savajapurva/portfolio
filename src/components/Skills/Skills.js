import React, { Component } from "react";
import SkillListFrontend from "./SkillsListFrontend";
import SkillsListBackend from "./SkillsListBackend";
import SkillsTags from "./SkillsTags";

class Skills extends Component {
  render() {
    return (
      <section id="skills" className="skills-section section text-center">
        <h2 className="section-title">
          <span style={{ color: "#009688" }}>Ski</span>lls
        </h2>
        <div className="top-skills">
          <h3 className="subtitle">Front-end</h3>
          <SkillListFrontend />
        </div>
        <div className="top-skills">
          <h3 className="subtitle">Back-end</h3>
          <SkillsListBackend />
        </div>

        <div className="other-skills">
          <h3 className="subtitle">Other Skills</h3>
          <SkillsTags />
        </div>
      </section>
    );
  }
}

export default Skills;
