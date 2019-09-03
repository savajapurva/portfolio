import React, { Component } from "react";

const skills = [
  "Git",
  "Semantic UI",
  "Redux",
  "REST",
  "JSX",
  "VS Code",
  "Atom",
  "Sublime",
  "Agile",
  "Scrum",
  "SDLC"
];

export default class SkillsTags extends Component {
  render() {
    const renderTags = skills.map(skill => {
      return (
        <span className="skill-tag" key={skill}>
          {skill}
        </span>
      );
    });

    return <div className="misc-skills">{renderTags}</div>;
  }
}
