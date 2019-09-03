import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setUrl, checkTopButton } from "../../actions";
import { Link, scroller } from "react-scroll";
import Sticky from "react-stickynode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faMapMarkerAlt,
  faDownload
} from "@fortawesome/fontawesome-free-solid";
import "../../css/styles.css";
import pic from "../../img/profile2.jpg";
import SocialLinks from "./SocialLinks";
import LinksList from "./LinksList";

class Header extends Component {
  componentDidMount = () => {
    switch (this.props.history.location.pathname) {
      case "/about":
        return this.changeUrlTo("about");
      case "/experience":
        return this.changeUrlTo("experience & education");
      case "/skills":
        return this.changeUrlTo("skills");
      case "/testimonials-section":
        return this.changeUrlTo("testimonials-section");
      case "/projects":
        return this.changeUrlTo("projects");
      case "/contact":
        return this.changeUrlTo("contact");
      default:
        return this.changeUrlTo("");
    }
  };

  changeUrlTo = url => {
    console.log(this.props);
    scroller.scrollTo(url, {
      duration: 180,
      smooth: true,
      offset: -80
    });
  };

  handleSetActive = to => {
    this.props.setUrl(to);
  };

  handleStickyChange = ({ status }) => {
    const { checkTopButton } = this.props;
    if (status === Sticky.STATUS_FIXED) {
      checkTopButton(true);
    } else {
      checkTopButton(false);
    }
  };

  render() {
    return (
      <header id="top" className="header">
        <div className="top-bar container-fluid">
          <div className="actions">
            <Link
              className="nav-link btn d-none d-md-inline-block"
              to="contact"
              spy={false}
              smooth={true}
              offset={-80}
              duration={180}
              onSetActive={this.handleSetActive}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ marginRight: "5px" }}
              />{" "}
              Contact me
            </Link>
            <Link
              className="nav-link btn d-none d-md-inline-block"
              target="_blank"
              onClick={event => {
                event.preventDefault();
                window.open(
                  "https://drive.google.com/file/d/1p8hWoY9lPCoFto53Z25fk8fBBUww42RG/view?usp=sharing"
                );
              }}
            >
              <FontAwesomeIcon
                icon={faDownload}
                style={{ marginRight: "5px" }}
              />{" "}
              Download My Resume
            </Link>
          </div>
          <SocialLinks keyPrefix="header" />
        </div>

        <div className="intro">
          <div className="container text-center">
            <img
              className="profile-image img-thumbnail rounded-circle"
              src={pic}
              alt=""
            />
            <h1 className="name">Apurva G. Savaj</h1>
            <div className="title">Full Stack Developer</div>
            <div className="profile">
              <p>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ marginRight: "10px" }}
                />
                Windsor, ON
              </p>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <div className="container text-center">
            <ul className="list-inline">
              <li className="email list-inline-item">
                <svg
                  className="svg-inline--fa fa-envelope fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  />
                </svg>
                <a href="mailto:savaj@uwindsor.ca">
                  &nbsp;&nbsp;savaj@uwindsor.ca
                </a>
              </li>
              <li className="list-inline-item">
                <svg
                  className="svg-inline--fa fa-phone fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  />
                </svg>{" "}
                <a href="tel: 0123456789">&nbsp;&nbsp;+1 (226) 759 2112</a>
              </li>
              <li className="website list-inline-item">
                <svg
                  className="svg-inline--fa fa-globe fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="globe"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                  />
                </svg>
                <a href="#" target="_blank">
                  &nbsp;&nbsp;savajapurva.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Sticky
          enabled={true}
          innerZ={180}
          onStateChange={this.handleStickyChange}
        >
          <div className="page-nav-space-holder d-none d-md-block">
            <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
              <div className="container">
                <LinksList />
              </div>
            </div>
          </div>
        </Sticky>
      </header>
    );
  }
}

function mapStateToProps({ topButton }) {
  return { topButton };
}

export default withRouter(
  connect(
    mapStateToProps,
    { setUrl, checkTopButton }
  )(Header)
);

Header.propTypes = {
  history: PropTypes.object,
  setUrl: PropTypes.func,
  checkTopButton: PropTypes.func
};
