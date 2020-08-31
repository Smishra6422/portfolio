import React from "react";
import "./sliderCard.style.scss";
import { Link } from "react-router-dom";

function SliderCard({ cardData, isProject, isCertificate }) {
  return (
    <div className="card glide__slide">
      <Link className="card-image-container" to="/">
        <div className="">
          <img src={cardData.image} class="card-img-top" alt="..." />
        </div>
      </Link>
      <div className="card-body card-description-data">
        <h4 className="card-text">{cardData.name}</h4>
        {isProject
          ? cardData.projectUrl.length > 0 && (
              <a
                href={cardData.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-link"></i>
              </a>
            )
          : ""}
        {isProject
          ? cardData.projectUrl.length < 1 && (
              <a
                href={cardData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            )
          : ""}
        {isCertificate
          ? cardData.certficateUrl.length > 0 && (
              <a
                href={cardData.certficateUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-link"></i>
              </a>
            )
          : ""}
      </div>
    </div>
  );
}

export default SliderCard;
