import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";
import knowhow from "../../img/knowhow.png";
import kungfukarate from "../../img/kungfukarate.png";
import mysafeguard from "../../img/safeguard.png";
import devconnector from "../../img/devconnector.png";
import react_resort from "../../img/react_resort.png";
import ecommerce from "../../img/ecommerce.png";
import homepage from "../../img/homepage.png";

const items = [
  {
    name: "React Shop",
    context: "E-Commerce project",
    githubUrl: "https://github.com/savajapurva/ecommerce-MERN",
    githubLink: "View on Github",
    projectLink: "Preview",
    projectUrl: "https://reactshop.xyz/",
    stack: [
      "React",
      "Redux",
      "Bootstrap 4",
      "Braintree API",
      "Paypal API",
      "JWT",
      "NodeJS",
      "MongoDB",
      "ExpressJS"
    ],
    description: "",
    image: ecommerce
  },
  {
    name: "React Beach Resort",
    context: "Resort App",
    githubUrl: "https://github.com/savajapurva/ResortP",
    githubLink: "View on Github",
    projectLink: "Preview",
    projectUrl: "https://my-react-resort.netlify.com/",
    stack: ["React", "styled-components", "contentful CMS", "react-icons"],
    description: "",
    image: react_resort
  },
  {
    name: "Developer's Network",
    context: "The social network for developers",
    githubUrl: "https://github.com/savajapurva/DevsNetwork-MERN",
    githubLink: "View on Github",
    projectLink: "Preview",
    projectUrl: "https://devnwk.herokuapp.com/",
    stack: [
      "NodeJS",
      "React",
      "Bootstrap 4",
      "MongoDB",
      "ExpressJS",
      "JWT",
      "validator",
      "Passport",
      "Redux",
      "Redux Thunk",
      "bcryptjs"
    ],
    description: "",
    image: devconnector
  },
  {
    name: "React Portfolio",
    context: "Responsive personal portfolio project ",
    githubUrl: "https://github.com/savajapurva/portfolio",
    githubLink: "View on Github",
    projectLink: "Preview",
    projectUrl: "http://www.apurvasavaj.com/",
    stack: [
      "React",
      "Redux",
      "Redux Thunk",
      "Reactstrap",
      "Bootstrap 4",
      "Reactstrap",
      "React-Router-DOM",
      "Formspree API",
      "NodeJS",
      "ExpressJS"
    ],
    description: "",
    image: homepage
  },
  {
    name: "KnowHow",
    context: "E-Learning Portal",
    githubUrl: "https://github.com/savajapurva/E-Learning-MERN",
    githubLink: "View on Github",
    projectLink: "No Preview Available",
    projectUrl: null,
    stack: [
      "Reactstrap",
      "SCSS",
      "Bootstrap 4",
      "MongoDB",
      "JWT",
      "PassportJS",
      "bcryptjs",
      "NodeJS",
      "ExpressJS",
      "React",
      "Redux",
      "validator",
      "canvasjs"
    ],
    description: "",
    image: knowhow
  },
  {
    name: "KungFu Karate Academy",
    context: "Student Management Web Application",
    githubUrl: "https://github.com/savajapurva/KungFu-Karate",
    githubLink: "View on Github",
    projectLink: "No Preview Available",
    projectUrl: null,
    stack: [
      "ASP.NET MVC (version 5)",
      "Entity Framework",
      "Ninject",
      "Automapper",
      "Bootstrap 3",
      "jQuery",
      "Font Awesome"
    ],
    description: "",
    image: kungfukarate
  },
  {
    name: "MySafeGuard",
    context: "Android SOS app for emergency situations",
    githubUrl: "https://github.com/savajapurva/MySafeGuard",
    githubLink: "View on Github",
    projectLink: "No Preview Available",
    projectUrl: null,
    stack: ["Java"],
    description: "",
    image: mysafeguard
  }
];

class PortfolioList extends Component {
  render() {
    const renderItems = items.map(
      ({
        name,
        context,
        githubUrl,
        githubLink,
        projectLink,
        stack,
        image,
        projectUrl,
        description
      }) => {
        return (
          <PortfolioItem
            name={name}
            context={context}
            githubUrl={githubUrl}
            githubLink={githubLink}
            projectLink={projectLink}
            projectUrl={projectUrl}
            stack={stack}
            image={image}
            description={description}
            key={name}
          />
        );
      }
    );
    return <div className="items-wrapper row">{renderItems}</div>;
  }
}

export default PortfolioList;
