import React, { useState, useContext } from "react";
import "./mainhead.style.scss";
import MainHeadImage from "../../asset/images/portfolio_head.svg";
// import Typical from "react-typical";
import Typed from "react-typed";
import { ThemeContext } from "../../Context/theme.context";

const MainHead = () => {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "React",
    "Redux",
    "GraphQL",
    "Rest API",
    "Node.JS",
    "Express.JS",
    "MongoDB",
  ]);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="main-head-container">
      <div className="main-head-detail-container">
        <div>
          <h4>SHUBHAM KUMAR</h4>
        </div>

        <div className="developer-category">
          <Typed
            strings={[
              "MERN STACK DEVELOPER",
              "REACT DEVELOPER",
              "FRONTEND DEVELOPER",
              "WEB DEVELOPER",
            ]}
            typeSpeed={80}
            backSpeed={90}
            loop
          >
            <h5 />
          </Typed>
        </div>

        {/* {theme === "dark" && (
          <div>
            <Typical
              loop={Infinity}
              steps={[
                "MERN STACK DEVELOPER",
                1500,
                "REACT DEVELOPER",
                1500,
                "FRONTEND DEVELOPER",
                1500,
                "WEB DEVELOPER",
                1500,
              ]}
              wrapper="h5"
            />
          </div>
        )} */}
        <div>
          <h5 className="skill-title">SKILLS</h5>
        </div>
        <div className="skill-container">
          {skills.map((skill) => (
            <p className="badge ">{skill}</p>
          ))}
        </div>
        <div>
          <a
            className="btn Resume"
            href="https://drive.google.com/file/d/1AcMsnKT46k44laqB7V1F4yeGGpHDF5Kt/view?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            RESUME{" "}
            <span>
              <i class="fas fa-cloud-download-alt"></i>
            </span>
          </a>
        </div>
      </div>

      <div className="main-head-image">
        <img src={MainHeadImage} alt="main_head_image" />
      </div>
    </div>
  );
};

export default MainHead;
