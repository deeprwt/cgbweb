import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";

import FooterThree from "@/layout/footer/footer-three";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";

import about_bg from "@/assets/images/media/img_26.jpg";
import FooterOne from "@/layout/footer/footer-one";
import SolutionsNav from "@/components/solutions/solutions-nav";
import SeoSmoSection from "@/components/solutions/seo-smo-section";

export const metadata: Metadata = {
  title: "SEO & SMO",
};

export default function SeoSmo() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <BreadcrumbOne
            title="SEO & SMO"
            subtitle="Navigating Your Financial Growth With Experience & Insightful Solutions."
            page="SEO & SMO"
            bg_img={about_bg}
            // // shape={shape}
            style_2={true}
          />
          {/* hero banner end */}

          <SeoSmoSection/>
          {/* web content section Start */}
          {/* <WebDevlopmentSection /> */}
          
          {/* web content section end */}


          {/* block feature six start */}
          {/* <BlockFeatureSix /> */}
          {/* block feature six end */}

          {/* text feature four start */}
          {/* <TextFeatureFour /> */}
          {/* text feature four end */}

          {/* text feature five start */}
          {/* <TextFeatureFive /> */}
          {/* text feature five end */}

          {/* block feature seven start */}
          {/* <BlockFeatureSeven /> */}
          {/* block feature seven end */}

          {/* feedback three start */}
          {/* <FeedbackThree /> */}
          {/* feedback three end */}

          {/* fancy banner four start */}
          {/* <FancyBannerFour /> */}
          {/* fancy banner four end */}

          {/* blog item start */}
          {/* <HomeThreeBlogs /> */}
          {/* blog item end */}
          
          <SolutionsNav 
          pretitle="web Developmetn"
          nextitle="App Development"
          page1="/solutions/web-development"
          page2="/solutions/app-development"
          />
        </main>

        {/* footer start */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
