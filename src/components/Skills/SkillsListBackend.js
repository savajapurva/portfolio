import React, { Component } from "react";
import SkillsItem from "./SkillsItem";

const items = [
  {
    name: "NodeJS",
    rating: 4,
    level: "Advanced",
    description: ``
  },
  {
    name: "ExpressJS",
    rating: 4,
    level: "Advanced",
    description: ``
  },
  {
    name: "MongoDB",
    rating: 3,
    level: "Intermediate",
    description: ``
  },
  {
    name: "ECMAScript",
    rating: 4,
    level: "Advanced",
    description: ""
  },
  {
    name: "Java",
    rating: 2,
    level: "Beginner",
    description: ""
  },
  {
    name: "Python",
    rating: 2,
    level: "Beginner",
    description: ""
  },
  {
    name: "ASP.NET",
    rating: 2,
    level: "Begineer",
    description: ""
  },
  {
    name: "Android",
    rating: 2,
    level: "Begineer",
    description: ""
  },
  {
    name: "MS SQL",
    rating: 2,
    level: "Begineer",
    description: ""
  },
  {
    name: "MySQL",
    rating: 2,
    level: "Begineer",
    description: ""
  }
];

export default class SkillsListBackend extends Component {
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
