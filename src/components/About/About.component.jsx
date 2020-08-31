import React from "react";
import MainHeadImage from "../../asset/images/portfolio_head.svg";
import "./about.style.scss";

function About() {
  return (
    <div className="container about-container ">
      <img src={MainHeadImage} class="img-fluid" alt="Coding_Logo" />
      <div class="card mt-5">
        <h3 class="card-header">Shubham Kumar</h3>
        <div class="card-body">
          <h5 class="card-title">MERN STACK DEVELOPER</h5>
          <p class="card-text">
            I am a full stack developer with node.js and I seeking challenges
            related to web development where I can work on real life projects,
            enhance my knowledge and put my 100 % in organization’s growth .
            Currently I am learning mern stack development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
