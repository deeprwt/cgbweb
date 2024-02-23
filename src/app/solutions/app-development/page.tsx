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
import WebDevlopmentSection from "@/components/solutions/webdevloper";
import SolutionsNav from "@/components/solutions/solutions-nav";
import AppDevelopementSection from "@/components/solutions/appdevelopemet-section";

export const metadata: Metadata = {
  title: "App Development",
};

export default function WebDevlopment() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne
            title="App Development"
            subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
            page="App Devlopment"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* hero banner end */}

          {/* web content section Start */}
          <AppDevelopementSection />
          {/* web content section end */}

          
          <SolutionsNav 
          pretitle="Web Devlopment"
          nextitle="Graphic Designing"
          page1="/solutions/web-development"
          page2="/solutions/graphic-designing"
          />
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
