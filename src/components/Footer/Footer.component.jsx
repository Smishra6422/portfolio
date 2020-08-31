import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "./footer.style.scss";

const Footer = () => {
  return (
    <div className="container-fluid footer-container mt-4 p-0">
      <div className="container-fluid contact-title">
        <h2>CONTACT ME</h2>
      </div>
      <div className="container-fluid social-media-buttons ">
        <div className="social-button">
          <a
            href="https://github.com/Smishra6422"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub</span>
            <span className="contact-icon">
              <i class="fab fa-github"></i>
            </span>
          </a>
        </div>
        <div className="social-button">
          <a
            href="https://www.linkedin.com/in/shubham--kumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Linkedin</span>
            <span className="contact-icon">
              <i class="fab fa-linkedin-in"></i>
            </span>
          </a>
        </div>
        <div className="social-button">
          <a
            href="mailto:ks6422@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>E-Mail</span>
            <span className="contact-icon">
              <i class="fa fa-envelope"></i>
            </span>
          </a>
        </div>
        <div className="social-button">
          <a
            href="https://www.instagram.com/shubham_mishra_6422/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">Instagram</span>
            <span>
              <i class="fab fa-instagram"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
