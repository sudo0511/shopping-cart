import React from "react";
import GitHubIcon from "../image/icons8-github.svg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <p>This project was built to learn the use of Context API and React.</p>
      <figure>
        <a href="https://github.com/sudo0511/shopping-cart">
          <img src={GitHubIcon} alt="github" />
        </a>
        <figcaption
          style={{
            textAlign: "center",
          }}
        >
          View on Github
        </figcaption>
      </figure>
    </div>
  );
};

export default About;
