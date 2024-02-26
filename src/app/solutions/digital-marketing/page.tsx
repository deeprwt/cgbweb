import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderSix from "@/layout/header/header-six";
import HeroBannerSix from "@/components/hero-banner/hero-banner-six";
import BlockFeatureEleven from "@/components/block-feature/block-feature-eleven";
import BlockFeatureTwelve from "@/components/block-feature/block-feature-twelve";
import PortfolioTwo from "@/components/portfolio/portfolio-two";
import TextFeatureEight from "@/components/text-feature/text-feature-eight";
import FancyBannerFive from "@/components/fancy-banner/fancy-banner-five";
import FeedbackSix from "@/components/feedback/feedback-six";
import TeamSectionThree from "@/components/team/team-section-three";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterTwo from "@/layout/footer/footer-two";
import FooterThree from "@/layout/footer/footer-three";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import HeaderTwo from "@/layout/header/Header";
import HeaderOne from "@/layout/header/header-one";
import FooterOne from "@/layout/footer/footer-one";

export const metadata: Metadata = {
  title: "Digital Marketing",
};

export default function HomePageSix() {
  return (
    <Wrapper>
      <div className="main-page-wrapper mb-20">
        {/* header start */}
        
        <HeaderTwo/>
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerSix />
          {/* hero banner end */}

          {/* block feature eleven start */}
          <BlockFeatureEleven />
          {/* block feature eleven end */}

          {/* block feature twelve start */}
          <BlockFeatureTwelve />
          {/* block feature twelve end */}

          {/* portfolio two start */}
          <PortfolioTwo />
          {/* portfolio two end */}

          {/* text feature eight start */}
          <TextFeatureEight style_2={true} />
          {/* text feature eight end */}

          {/* fancy banner five start */}
          <FancyBannerFive style_3={true} />
          {/* fancy banner five end */}

          {/* feedback six start */}
          <FeedbackSix />
          {/* feedback six end */}

          {/* team section start */}
          {/* <TeamSectionThree style_2={true} /> */}
          {/* team section end */}

          {/* fancy banner three start */}
          {/* <FancyBannerThree /> */}
          {/* fancy banner three end */}

          {/* newsletter banner start */}
          {/* <NewsletterBanner style_2={true} /> */}
          {/* newsletter banner end */}
        </main>
      </div>
      {/* footer start */}
      <FooterOne />
      {/* footer end */}
    </Wrapper>
  );
}
