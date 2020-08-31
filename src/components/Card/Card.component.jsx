import React from "react";

const Card = ({ cardData, isProject, isCertificate }) => {
  return (
    <div className="card">
      <img src={cardData.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{cardData.name}</h5>
        {isProject && <p class="card-text">{cardData.description}</p>}
        {isProject && (
          <div>
            {isProject && (
              <a
                href={cardData.projectUrl}
                class="btn "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-link"></i>
              </a>
            )}
            {isProject && (
              <a
                href={cardData.githubUrl}
                class="btn "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            )}
          </div>
        )}
        {isCertificate && (
          <a
            href={cardData.certficateUrl}
            class="btn "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-file-download"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
