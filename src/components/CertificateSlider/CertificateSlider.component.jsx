import React, { useEffect, useState, useContext } from "react";
import SliderCard from "../SliderCard/SliderCard.component";

import "./certificateSlider.style.scss";

import Glide from "@glidejs/glide";
import { ThemeContext } from "../../Context/theme.context";

const glideConfig = {
  type: "carousel",
  perView: 4,
  gap: 15,
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

function CertificateSlider() {
  const { certificates } = useContext(ThemeContext);
  const [glider] = useState(new Glide(".certificate", glideConfig));
  useEffect(() => {
    glider.mount();
  }, [glider]);

  return (
    <div className="certificate-slider-container">
      <div className="certificate-heading-container">
        <h4>CERTIFICATES</h4>
      </div>
      <div className="glide certificate">
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {certificates.map((certificate, index) => (
              <SliderCard key={index} cardData={certificate} isCertificate />
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

export default CertificateSlider;
