import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FooterTwo from "@/layout/footer/footer-two";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import TeamTwoArea from "@/components/team/team-v2-area";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import team_bg from "@/assets/images/media/img_32.jpg";
import FooterOne from "@/layout/footer/footer-one";
import HeaderTwo from "@/layout/header/Header";
import TeamDetailsArea from "@/components/team/team-details-area";
import InternshipProgramSection from "@/components/internship/internship-section";

export const metadata: Metadata = {
  title: "Internship",
};

const Internship = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
            <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Internship Program"
            subtitle="Meet our experts, guiding you"
            page="Internship"
            // // shape={shape}
            bg_img={team_bg}
          />
          {/* breadcrumb end */}
          <InternshipProgramSection/>

          {/* <TeamDetailsArea /> */}
          

          {/* team v2 area start */}
          {/* <TeamTwoArea /> */}
          {/* team v2 area end */}

        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default Internship;
