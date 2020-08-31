import React, { useContext, Fragment } from "react";
import Card from "../Card/Card.component";
import { ThemeContext } from "../../Context/theme.context";

import "./project.style.scss";

function Project() {
  const { projects } = useContext(ThemeContext);
  return (
    <Fragment>
      <div className="container project-heading mt-4">
        <h3>Projects</h3>
      </div>
      <div className="project-card container mt-4">
        {projects.map((project, index) => {
          return <Card cardData={project} isProject />;
        })}
      </div>
    </Fragment>
  );
}

export default Project;
