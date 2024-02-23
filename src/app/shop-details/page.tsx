import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import shop_bg from "@/assets/images/media/img_47.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_26.svg";
import ProductDetailsArea from "@/components/shop/product-details/product-details-area";
import product_data from "@/data/product-data";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";

export const metadata: Metadata = {
  title: "Shop Details Page",
};

const ShopDetailsPage = () => {
  const product = product_data[0]
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our Product Showcase"
            subtitle="Meet our products, guiding you through financial intricacies with precision"
            page="Shop"
            bg_img={shop_bg}
            // shape={shape}
          />
          {/* breadcrumb end */}

          {/* shop details area start */}
          <ProductDetailsArea product={product} />
          {/* shop details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default ShopDetailsPage;
