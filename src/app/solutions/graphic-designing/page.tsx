import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeroBannerThree from "@/components/hero-banner/hero-banner-three";
import BlockFeatureSix from "@/components/block-feature/block-feature-six";
import TextFeatureFour from "@/components/text-feature/text-feature-four";
import TextFeatureFive from "@/components/text-feature/text-feature-five";
import BlockFeatureSeven from "@/components/block-feature/block-feature-seven";
import FeedbackThree from "@/components/feedback/feedback-three";
import FancyBannerFour from "@/components/fancy-banner/fancy-banner-four";
import HomeThreeBlogs from "@/components/blogs/home-3-blogs";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterThree from "@/layout/footer/footer-three";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";

import about_bg from "@/assets/images/media/img_26.jpg";
import FooterOne from "@/layout/footer/footer-one";
import SolutionsNav from "@/components/solutions/solutions-nav";
import GraphicDesigningSections from "@/components/solutions/graphicdesigning-section";

export const metadata: Metadata = {
  title: "Graphic Designing",
};

export default function GraphicDesigning() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne
            title="Graphic Designing"
            subtitle="Make your website and brand design look proficient"
            page="Graphic Designing"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* hero banner end */}

          {/* web content section Start */}
           <GraphicDesigningSections />
          {/* web content section end */}

          
          <SolutionsNav 
          pretitle="App Devlopment"
          nextitle="Digital Marketing"
          page1="/solutions/app-development"
          page2="/solutions/digital-marketing"
          />
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
