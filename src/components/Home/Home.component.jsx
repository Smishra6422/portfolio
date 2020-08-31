import React, { Fragment } from "react";
import MainHead from "../MainHead/MainHead.component";
import ProjectSlider from "../ProjectSilder/ProjectSlider.component";
import CertificateSlider from "../CertificateSlider/CertificateSlider.component";

function Home() {
  return (
    <Fragment>
      <MainHead />
      <ProjectSlider />
      <CertificateSlider />
    </Fragment>
  );
}

export default Home;
