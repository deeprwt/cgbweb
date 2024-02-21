import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterTwo from "@/layout/footer/footer-two";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import TextFeatureThree from "@/components/text-feature/text-feature-three";
import TextFeatureTwo from "@/components/text-feature/text-feature-two";
import BlockFeatureFour from "@/components/block-feature/block-feature-four";
import FeedbackFour from "@/components/feedback/feedback-four";
import FancyBannerFive from "@/components/fancy-banner/fancy-banner-five";
import FaqSectionOne from "@/components/faq/faq-section-one";
import HomeBlogs from "@/components/blogs/home-blogs";


export const metadata: Metadata = {
  title: "About Us 2 Page",
};

const AboutUsTwoPage = () => {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="We're Award Winner Finance inc"
            subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
            page="About us"
            style_4={true}
            col="col-xl-8 col-lg-9 m-auto"
          />
          {/* breadcrumb end */}

          {/* text feature three area start */}
          <TextFeatureThree cls="text-feature-seven mt-160 lg-mt-80 pb-200 lg-pb-120"/>
          {/* text feature three area end */}

          {/* text feature three area start */}
          <TextFeatureTwo/>
          {/* text feature three area end */}

          {/* block feature four start */}
          <BlockFeatureFour/>
          {/* block feature four end */}

          {/* feedback section four start */}
          <FeedbackFour spacing="0" />
          {/* feedback section four end */}

          {/* fancy banner five start */}
          <FancyBannerFive/>
          {/* fancy banner five end */}

          {/* faq section start */}
          <FaqSectionOne/>
          {/* faq section end */}

          {/* blogs start */}
          <HomeBlogs cls="mt-150 lg-mt-80 pb-150 lg-pb-80"/>
          {/* blogs end */}

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

export default AboutUsTwoPage;
