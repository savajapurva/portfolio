import React, { Component } from "react";
import ExperiencesItem from "./ExperiencesItem";

const works = [
  {
    place: "University of Windsor",
    location: "Windsor, ON",
    title: "Student",
    timeline: "Jan.2019 - Present",
    description: `<p>Pursuing Master of Applied Computing</p>
          <ul>
            <li>Available for an Internship from Jan 2020</li>
          </ul>`
  },
  {
    place: "Savaj Infotech",
    location: "Surat, GJ",
    title: "Web Developer",
    timeline: "Jun.2018 - Nov.2018",
    description: `<p>Developing various web projects to complete an Internship</p>
          <ul>
            <li>Designed, developed and maintained responsive Single Page Applications(SPA).</li>
            <li>Contributed in developing e-commerce website using ReactJS for frontend development, NodeJS for
            backend development and MongoDB as a database.</li>
            <li>Built RESTful APIs in NodeJS.</li>
            <li>Worked in Agile(Scrum) Development team and delivered regular updates to Team Leader.</li>
          </ul>`
  },
  {
    place: "Apollo Institute of Eng. & Tech.",
    location: "Ahmedabad, GJ",
    title: "Student",
    timeline: "Jan.2014 - Jun. 2018",
    description: `<p>Completed Bachelor in Computer Engineering</p>
          <ul>
            <li>Cumulative GPA: 3.7/4.</li>
          </ul>`
  }
];

class ExperiencesList extends Component {
  render() {
    const renderItems = works.map(
      ({ place, location, title, timeline, description }) => {
        return (
          <ExperiencesItem
            place={place}
            location={location}
            key={place}
            title={title}
            timeline={timeline}
            description={description}
          />
        );
      }
    );
    return <div>{renderItems}</div>;
  }
}

export default ExperiencesList;
