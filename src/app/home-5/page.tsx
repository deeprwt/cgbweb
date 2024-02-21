import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderFive from "@/layout/header/header-five";
import HeroBannerFive from "@/components/hero-banner/hero-banner-five";
import PartnersLogosTwo from "@/components/partners/partners-logo-2";
import BlockFeatureNine from "@/components/block-feature/block-feature-nine";
import PortfolioOne from "@/components/portfolio/portfolio-one";
import FeedbackFive from "@/components/feedback/feedback-five";
import TeamSectionTwo from "@/components/team/team-section-two";
import BlogsHomeFive from "@/components/blogs/home-5-blogs";
import FooterFive from "@/layout/footer/footer-five";

export const metadata: Metadata = {
  title: "Home Page Five",
};

export default function HomePageFive() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderFive />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerFive />
          {/* hero banner end */}

          {/* partner logos start */}
          <PartnersLogosTwo />
          {/* partner logos end */}

          <div className="light-bg-page-wrapper">
            {/* block feature nine start */}
            <BlockFeatureNine />
            {/* block feature nine end */}

            {/* portfolio one start */}
            <PortfolioOne />
            {/* portfolio one end */}

            {/* feedback five start */}
            <FeedbackFive />
            {/* feedback five end */}

            {/* team section start */}
            <TeamSectionTwo />
            {/* team section end */}

            {/* blog item start */}
            <BlogsHomeFive />
            {/* blog item end */}

            {/* footer start */}
            <FooterFive />
            {/* footer end */}
          </div>
        </main>
      </div>
    </Wrapper>
  );
}
