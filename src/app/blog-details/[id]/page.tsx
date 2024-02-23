import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/Header";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import blog_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BlogDetailsArea from "@/components/blogs/blog-details/blog-details-area";
import shape from "@/assets/images/shape/shape_35.svg";
import blog_data from "@/data/blog-data";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";
import FooterOne from "@/layout/footer/footer-one";

export const metadata: Metadata = {
  title: "Blog Details Page",
};

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const blog = blog_data.find((b) => Number(b.id) === Number(params.id))!;
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Single Blog Details"
            subtitle="Meet our experts, guiding you through financial intricacies with precision"
            page="Blog"
            bg_img={blog_bg}
            style_2={true}
            // // shape={shape}
          />
          {/* breadcrumb end */}

          {/* blog details area start */}
          {blog ? (
            <BlogDetailsArea blog={blog} />
          ) : (
            <div className="container">
              <div className="mt-80 mb-80 text-center">
                <h3>Not Found Any blog this id {params.id}</h3>
              </div>
            </div>
          )}
          {/* blog details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          {/* <NewsletterBanner /> */}
          {/* news letter end */}
        </main>

        {/* footer start */}
        {/* <FooterThree style_2={true} /> */}
        <FooterOne />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogDetailsPage;
