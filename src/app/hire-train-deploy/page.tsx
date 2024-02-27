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
import TwoColData from "@/components/two-col/two-col-data";
import MendixFeature from "@/components/solutions/mendix-feature";
import FaqSolutions from "@/components/faq/faq-solutions";
import FooterOne from "@/layout/footer/footer-one";
import SectionSol1 from "@/components/two-col/section-sol1";
import ContractStaffingSection from "@/components/solutions/contract-staffing-section";
import HireTrainDepolySection from "@/components/solutions/hire-train-depoly-sections";

export const metadata: Metadata = {
  title: "Hire Train Deploy - CGB's",
};

export default function HireTrainDeploy() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne 
          title="Hire Train Deploy"
          subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
          page="Hire Train Deploy "
          bg_img={about_bg}
          // // shape={shape}
          style_2={true}
          />
          {/* hero banner end */}

          <HireTrainDepolySection />
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
