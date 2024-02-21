import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import breadcrumb_bg from "@/assets/images/media/img_26.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterTwo from "@/layout/footer/footer-two";
import ProjectDetailsArea from "@/components/project-details/project-details-v1-area";

export const metadata: Metadata = {
  title: "Project Details v1 Page",
};

const ProjectDetailsPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <div
            className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 lg-pb-70 md-pb-30 position-relative"
            style={{ backgroundImage: `url(${breadcrumb_bg.src})` }}
          >
            <div className="container position-relative">
              <div className="row align-items-center">
                <div className="col-lg-8 m-auto text-center">
                  <div className="tag">Consulting</div>
                  <h1 className="hero-heading no-bg text-white">
                    Tax File Preparation & Consulting
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* breadcrumb end */}

          {/* project details area start */}
          <ProjectDetailsArea/>
          {/* project details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterTwo />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ProjectDetailsPage;
