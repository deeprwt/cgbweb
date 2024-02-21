import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import FooterTwo from "@/layout/footer/footer-two";
import ProjectDetailsTwoArea from "@/components/project-details/project-details-v2-area";

export const metadata: Metadata = {
  title: "Project Details v2 Page",
};

const ProjectDetailsPageTwo = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Tax File Preparation & Consulting"
            subtitle="Offering solutions & services to address a spectrum of financial issues"
            tag="CONSULTING"
            page=""
            style_2={true}
          />
          {/* breadcrumb end */}

          {/* project details area start */}
          <ProjectDetailsTwoArea/>
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

export default ProjectDetailsPageTwo;
