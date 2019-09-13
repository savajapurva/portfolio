import React, { Component } from "react";
import classnames from "classnames";

class Testimonials extends Component {
  constructor() {
    super();
    this.dot = this.dot.bind(this);

    this.state = {
      dotActive: false,
      sectionActive: false
    };
  }

  dot = () => {
    this.setState({ dotActive: !this.state.dotActive });
    this.setState({ sectionActive: !this.state.sectionActive });
  };

  firstdot = () => {
    this.setState({ dotActive: !this.state.dotActive });
    this.setState({ sectionActive: !this.state.sectionActive });
  };

  render() {
    const { dotActive, sectionActive } = this.state;

    return (
      <section id="testimonials" className="testimonials-section section">
        <h2 className="section-title">
          <span style={{ color: "#009688" }}>Tes</span>timonials
        </h2>

        <div
          id="testimonials-carousel"
          className="testimonials-carousel carousel slide"
          data-interval="8000"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#testimonials-carousel"
              data-slide-to="0"
              onClick={this.firstdot}
              className={`${dotActive ? "" : "active"}`}
            />
            <li
              data-target="#testimonials-carousel"
              onClick={this.dot}
              className={`${dotActive ? "active" : ""}`}
              data-slide-to="1"
            />
          </ol>

          <div className="carousel-inner">
            <div
              className={classnames("item carousel-item", {
                active: sectionActive
              })}
            >
              <blockquote className="quote">
                <p>
                  <span className="icon-holder">
                    <svg
                      className="svg-inline--fa fa-quote-left fa-w-16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-left"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                      />
                    </svg>
                  </span>
                  Apurva worked as a Web Developer intern in my company. He has
                  a fine sense of intuition and can pick new technologies
                  quickly. He coded an web application in React and Node.js and
                  designed responsive web pages. He also has high learning
                  capacity since he was able to discuss and design what the
                  project needs with the ability to thrive under pressure. I
                  would recommend Apurva for any Web Development team
                </p>
              </blockquote>
              <div className="source">
                <div className="name">Parth Savaj</div>
                <div className="position">CEO, Savaj Infotech</div>
              </div>
            </div>
            <div
              className={classnames("item carousel-item", {
                active: !sectionActive
              })}
            >
              <blockquote className="quote">
                <p>
                  <span className="icon-holder">
                    <svg
                      className="svg-inline--fa fa-quote-left fa-w-16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-left"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                      />
                    </svg>
                  </span>
                  We worked together at Savaj Infotech. He was very efficient
                  and proactive for providing support. He was diligent in
                  checking issues and helping with the root cause. He also
                  picked up API development in short span of time.
                </p>
              </blockquote>
              <div className="source">
                <div className="name">Patel Nikunj</div>
                <div className="position">Senior Developer, Savaj Infotech</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
