import React from "react";
import d from "./Header.css";
import Scrollspy from "react-scrollspy";

class Header extends React.Component {
  render() {
    return (
      <div className={d.navbar}>
        <ul>
          <Scrollspy
            items={["about-me", "skills", "section-3"]}
            currentClassName="is-current"
          >
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </Scrollspy>
        </ul>
      </div>
    );
  }
}

export default Header;
