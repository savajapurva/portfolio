import React, { Component } from "react";
import { faAlignJustify } from "@fortawesome/fontawesome-free-solid";

class About extends Component {
  render() {
    return (
      <section id="about" className="about-section section">
        <h2 className="section-title">
          <span style={{ color: "#009688" }}>Abo</span>ut Me
        </h2>
        <div className="dialog">
          <h5 className="subtitle" style={{ fontWeight: "bold" }}>
            Hi! I'm Apurva
          </h5>
          <h5
            className="subtitle"
            style={{
              lineHeight: "1.5em",
              textAlign: "justify",
              fontSize: "1.3em"
            }}
          >
            I'm pursuing Master of Applied Computing at University of Windsor.
            While working as an intern in a startup company, I have developed
            skills in Javascript and one of it's framework. In addition, to be a
            Full Stack developer is my long term goal and that's the reason of
            being so passionate for coding. During my master's, I keep on
            learning new technologies through online courses which helps me
            strengthen my technical skills in NodeJS and other demanding
            frameworks. I have strong ability in designing dynamic and
            responsive websites and built many projects using <b>HTML5</b>,{" "}
            <b>CSS3</b>, <b>Sass</b>, <b>Bootstrap</b>, <b>React</b>,{" "}
            <b>NodeJS</b> and <b>MongoDB</b>.
            <br />
            <br />
            I'm actively seeking for an internship opportunities starting from
            January 2020. If you think I can stand out at work and might make
            good match for a position or project, feel free to connect with me.
          </h5>
        </div>
      </section>
    );
  }
}

export default About;
