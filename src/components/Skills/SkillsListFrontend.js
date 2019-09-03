import React, { Component } from "react";
import SkillsItem from "./SkillsItem";

const items = [
  {
    name: "JavaScript",
    rating: 4,
    level: "Expert",
    description: ``
  },
  {
    name: "React",
    rating: 4,
    level: "Advanced",
    description: ``
  },
  {
    name: "HTML5",
    rating: 4,
    level: "Advanced",
    description: ``
  },
  {
    name: "CSS3",
    rating: 4,
    level: "Advanced",
    description: ""
  },
  {
    name: "SCSS",
    rating: 3,
    level: "Intermediate",
    description: ""
  },
  {
    name: "Reactstrap",
    rating: 2,
    level: "Begineer",
    description: ""
  },
  {
    name: "Bootstrap",
    rating: 3,
    level: "Intermediate",
    description: ``
  },
  {
    name: "Django",
    rating: 2,
    level: "Begineer",
    description: ``
  },
  {
    name: "XML",
    rating: 2,
    level: "Beginner",
    description: ``
  }
];

export default class SkillsList extends Component {
  render() {
    const renderItems = items.map(({ name, rating, level, description }) => {
      return (
        <SkillsItem
          name={name}
          rating={rating}
          key={name}
          level={level}
          description={description}
        />
      );
    });

    return <div className="row">{renderItems}</div>;
  }
}
