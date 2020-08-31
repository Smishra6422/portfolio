import React, { useEffect, useState, useContext } from "react";
import SliderCard from "../SliderCard/SliderCard.component";

import "./projectSlider.style.scss";

import Glide from "@glidejs/glide";
import { ThemeContext } from "../../Context/theme.context";

const glideConfig = {
  type: "carousel",
  perView: 5,
  gap: 10,
  animationDuration: 900,
  breakpoints: {
    800: {
      perView: 2,
    },
    640: {
      perView: 1,
    },
  },
  // autoplay: 2000,
};

function ProjectSlider() {
  const { projects } = useContext(ThemeContext);
  const [glider] = useState(new Glide(".glide", glideConfig));
  useEffect(() => {
    glider.mount();
  }, [glider]);

  return (
    <div className="project-slider-container">
      <div className="project-heading-container">
        <h4>PROJECTS</h4>
      </div>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {projects.map((project, index) => (
              <SliderCard key={index} cardData={project} isProject />
            ))}
          </div>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectSlider;
