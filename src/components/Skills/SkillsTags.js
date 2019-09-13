import React, { Component } from "react";

const skills = [
  "GIT",
  "Semantic UI",
  "Redux",
  "REST",
  "JSX",
  "GraphQL",
  "Linux/Unix",
  "Shell Scripting",
  "styled components",
  "VS Code",
  "Atom",
  "Postman",
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
