import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderFour from "@/layout/header/header-four";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import TextFeatureSix from "@/components/text-feature/text-feature-six";
import BlockFeatureEight from "@/components/block-feature/block-feature-eight";
import TextFeatureSeven from "@/components/text-feature/text-feature-seven";
import TextFeatureEight from "@/components/text-feature/text-feature-eight";
import TextFeatureNine from "@/components/text-feature/text-feature-nine";
import FeedbackFour from "@/components/feedback/feedback-four";
import HomeFourBlogs from "@/components/blogs/home-4-blogs";
import NewsletterBannerTwo from "@/components/newsletter/newsletter-banner-2";
import FooterFour from "@/layout/footer/footer-four";

export const metadata: Metadata = {
  title: "Home Page Four",
};

export default function HomePageFour() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderFour />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerFour />
          {/* hero banner end */}

          {/* text feature six start */}
          <TextFeatureSix />
          {/* text feature six end */}

          {/* block feature seven start */}
          <BlockFeatureEight />
          {/* block feature seven end */}

          {/* text feature seven start */}
          <TextFeatureSeven />
          {/* text feature seven end */}

          {/* text feature eight start */}
          <TextFeatureEight />
          {/* text feature eight end */}

          {/* text feature nine start */}
          <TextFeatureNine />
          {/* text feature nine end */}

          {/* feedback four start */}
          <FeedbackFour />
          {/* feedback four end */}

          {/* blog item start */}
          <HomeFourBlogs />
          {/* blog item end */}
        </main>

        {/* footer area start */}
        <div className="footer-large-wrapper position-relative">
          {/* newsletter area start */}
          <NewsletterBannerTwo />
          {/* newsletter area end */}

          {/* footer start */}
          <FooterFour />
          {/* footer end */}
        </div>
        {/* footer area end */}
      </div>
    </Wrapper>
  );
}
