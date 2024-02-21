import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterTwo from "@/layout/footer/footer-two";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import ProjectThreeArea from "@/components/project/project-v3-area";

export const metadata: Metadata = {
  title: "Project v3 Page",
};

const ProjectThreePage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Our Most Recent Projects"
            subtitle="Offering solutions & services to address a of financial issues"
            page="Project"
            style_3={true}
          />
          {/* breadcrumb end */}

          {/* project v3 area start */}
          <ProjectThreeArea />
          {/* project v3 area end */}

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

export default ProjectThreePage;
