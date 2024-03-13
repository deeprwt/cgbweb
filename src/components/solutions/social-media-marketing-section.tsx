import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon_1 from "@/assets/images/icon/icon_97.svg";
import icon_2 from "@/assets/images/icon/icon_27.svg";
import shape from "@/assets/images/shape/shape_45.svg";
import arrow from "@/assets/images/icon/icon_09.svg";
import business_man from "@/assets/images/assets/businessman_02.png";
import service_data from "@/data/service-data";
import ImgTextOne from "../img-text-feature/img-text-one";
import Finacle5 from "@/assets/images/solutions/Finacle/Fincale-5.jpg";
import SocialMedia1 from "@/assets/images/solutions/SocialMediaMarketing/socialMedia1.jpg";
import SocialMedia2 from "@/assets/images/solutions/SocialMediaMarketing/socialMedia2.jpg";
import SocialMedia3 from "@/assets/images/solutions/SocialMediaMarketing/socialMedia3.jpg";
import SocialMedia4 from "@/assets/images/solutions/SocialMediaMarketing/socialMedia4.jpg";

// img style
const imgStyle = {
  height: "auto",
};
const SocialMediaMarketingSection = () => {
  const service_items = service_data
    .filter((s) => s.page === "home-5")
    .slice(4, 6);
  return (
    <>

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        title="Social media marketing agency"
        para="Our Financial IT services encompass software development,
        consulting, comprehensive IT support, QA, cybersecurity, and
        data analytics."
        img={SocialMedia1}
        subtitle="Create a secure imprint"
        subpara=" A good impression is what makes people come to you. A recent survey states more than 3 billion people use social media to peruse info on new products. The company or website creating a good impression on social media is certainly a winner. How to create a good impression?"
        filter_data="SMM-1"
      />
      {/*--------------------Img and orderList tag End------------------ */}
      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        /* Main Heading   */
        title="One partner to meet all your Financial IT needs"
        para="Our Financial IT services encompass software development,
        consulting, comprehensive IT support, QA, cybersecurity, and
        data analytics."
        img={SocialMedia2}
        subtitle="Enhanced engagement"
        subpara="You can get aid from one of the best social media marketing companies in Bangalore to keep your customers on their toes. Having a regular interaction interface with the audience creates a more involving environment."
        filter_data="SMM-2"
        style_2={true}
      />
      {/*--------------------Img and orderList tag End------------------ */}
      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        /* Main Heading   */
        title=""
        para=""
        img={SocialMedia3}
        subtitle="Inexpensive business branding"
        subpara="Social media marketing is the best and most budget-friendly way to reach out to your potential customers. Irrespective of the company’s size and scope, it instantly helps you reach millions of people."
        filter_data="SMM-3"
      />
      {/*--------------------Img and orderList tag End------------------ */}

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        /* Main Heading   */
        title="One partner to meet all your Financial IT needs"
        para="Our Financial IT services encompass software development,
        consulting, comprehensive IT support, QA, cybersecurity, and
        data analytics."
        img={SocialMedia4}

        subtitle="Offer 24/7 support"
        subpara="Your company or brand gets projected on how well you are good with your customers when they need you. Make sure when you are engaging content, it‘s important to offer your unlimited 24/7 support."
        filter_data="SMM-4"
        style_2={true}
      />
      {/*--------------------Img and orderList tag End------------------ */}

      <div className="block-feature-twelve position-relative pt-130 lg-pt-80 pb-180 lg-pb-80">
        <div className="container">
          <div className="row gx-xl-5">
            <div className="col-lg-11 my-40">
              <div className="title-one mb-40 lg-mb-20">
                <h2 className="color-deep">
                  Our brand-focused social media marketing services
                </h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Social strategy
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        Webomindapps strategizes everything you desire. From a
                        thorough consultation to planning and delivering it to
                        you. We build an interactive interface to sustain a
                        long-term relationship with our customers. A unique
                        tactic of ours will surely help you reach your goals
                        effectively.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Brand awareness
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        Branding is everything that social media offers and so
                        is our company. With an all-out articulated strategy and
                        tactics, your ultimate goal of reaching your customers
                        becomes easy. Be it any platform, you choose and we plan
                        for your branding.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Content curation
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        Be it any business or brand or platform, how you
                        approach customers is what leaves an imprint. Do not
                        worry! We are here for you. With a team of well-versed
                        bloggers and publishers who will curate the best content
                        for you which gives life to an empty web page and assert
                        services and your B2B and B2C audiences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Platform selection
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        You cannot find your customers on all social media
                        platforms. We track your potential customer&lsquo;s
                        platforms to market your ideas. Platforms should be
                        chosen based on your business, and depending upon the
                        choices of your customers. Be it Facebook or LinkedIn,
                        Instagram, or Twitter, we are here for you.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Community buildingon
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        Once the platform is set, the next is building a
                        community to identify a greater number of customers.
                        With the help of social platforms, we help you get more
                        exposure among the audience and create an extensive base
                        to promote your brand consequently.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Monitoring and analytics{" "}
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        We keep our work transparent. Every meticulous detail of
                        work done on your projects and brand are discussed.Your
                        feedbacks are welcomed. We keep brand credibility as our
                        utmost priority and help you reach new heights with
                        social media marketing techniques and services.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}
        </div>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
      </div>
    </>
  );
};
export default SocialMediaMarketingSection;
