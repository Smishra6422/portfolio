import React, { Fragment, useContext } from "react";
import { ThemeContext } from "../../Context/theme.context";
import Card from "../Card/Card.component";

import "./certificate.style.scss";

function Certificate() {
  const { certificates } = useContext(ThemeContext);
  return (
    <Fragment>
      <div className="container certificate-heading mt-4">
        <h3>Certificates</h3>
      </div>
      <div className="certificate-card container mt-4">
        {certificates.map((certificate, index) => {
          return <Card key={index} cardData={certificate} isCertificate />;
        })}
      </div>
    </Fragment>
  );
}

export default Certificate;
