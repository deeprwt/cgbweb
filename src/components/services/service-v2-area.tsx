import React from "react";
import BlockFeatureTen from "../block-feature/block-feature-ten";
import BlockFeatureSix from "../block-feature/block-feature-six";
import FancyBannerSix from "../fancy-banner/fancy-banner-six";
import FeedbackFour from "../feedback/feedback-four";

const ServiceTwoArea = () => {
  return (
    <>
      {/* block feature start */}
      <BlockFeatureTen />
      {/* block feature end */}

      {/* block feature six start */}
      <BlockFeatureSix style_2={true} />
      {/* block feature six end */}

      {/* fancy banner start */}
      <FancyBannerSix />
      {/* fancy banner end */}

      {/* feedback section start */}
      <FeedbackFour spacing="mt-150 lg-mt-80" />
      {/* feedback section end */}
    </>
  );
};

export default ServiceTwoArea;
