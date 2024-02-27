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
      <div className="block-feature-twelve position-relative pt-130 lg-pt-80 pb-180 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <div className="title-one mb-40 lg-mb-20">
                <h2 className="color-deep">Social media marketing agency</h2>
              </div>
            </div>
          </div>
          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Create a secure imprint
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        <p>
                          A good impression is what makes people come to you. A
                          recent survey states more than 3 billion people use
                          social media to peruse info on new products. The
                          company or website creating a good impression on
                          social media is certainly a winner. How to create a
                          good impression?
                        </p>
                        <ul className="style-none list-item ">
                          <li>
                            Build an active business profile to engage viewers.
                          </li>
                          <li>
                            Create a trustworthy environment for your customers.
                          </li>
                          <li>
                            Sound professional and confident in your work.
                          </li>
                          <li>
                            Know your potential customers and what they are
                            seeking.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <Image
                      src="/img1.webp"
                      width={1000}
                      height={415}
                      alt="icon"
                      className="rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}
          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <Image
                      src="/img2.webp"
                      width={1000}
                      height={415}
                      alt="icon"
                      className="rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Enhanced engagement
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        <p>
                          You can get aid from one of the best social media
                          marketing companies in Bangalore to keep your
                          customers on their toes. Having a regular interaction
                          interface with the audience creates a more involving
                          environment.
                        </p>
                        <ul className="style-none list-item ">
                          <li>
                            Use the most used social media platforms such as
                            Facebook, Twitter, Instagram, Pinterest, and many
                            more.
                          </li>
                          <li>
                            Make maximum use of the engagement concepts in
                            social media to reach your potential viewers such as
                            captions, hashtags, reply buttons, etc.
                          </li>
                          <li>
                            Utilize the idea of likes, comments, and share to
                            understand the desired outcome.
                          </li>
                          <li>
                            Use social media and other online channels to
                            promote your website in your targeted global
                            market.Be quick. If you are not quick enough to
                            answer, your viewer scrolls down!
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}
          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Inexpensive business branding
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        <p>
                          Social media marketing is the best and most
                          budget-friendly way to reach out to your potential
                          customers. Irrespective of the company’s size and
                          scope, it instantly helps you reach millions of
                          people.
                        </p>
                        <ul className="style-none list-item ">
                          <li>
                            Build your brand through social platform ads on
                            Facebook, Instagram, and others.
                          </li>
                          <li>
                            Provide clear and logical content on the screen.
                          </li>
                          <li>
                            Be creative and entertaining while giving out your
                            ads. Nobody wants to visit a plain sight.
                          </li>
                          <li>
                            Deliver engaging content to bring your business up
                            locally with the help of social media marketing
                            agencies in Bangalore.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <Image
                      src="/img2.webp"
                      width={1000}
                      height={415}
                      alt="icon"
                      className="rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}

          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <Image
                      src="/img4.webp"
                      width={1000}
                      height={415}
                      alt="icon"
                      className="rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      Offer 24/7 support
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <p>
                          Your company or brand gets projected on how well you
                          are good with your customers when they need you. Make
                          sure when you are engaging content, it's important to
                          offer your unlimited 24/7 support.
                        </p>
                        <ul className="style-none list-item ">
                          <li>
                            Provide instant solutions in all social media
                            platforms you intend for branding such as Facebook,
                            Instagram, Twitter, and others..
                          </li>
                          <li>
                            Keep track of upcoming genuine comments, queries,
                            and complaints registered on social media channels.
                          </li>
                          <li>
                            Give a positive response to the questioners and make
                            them feel valued at the same time.
                          </li>
                          <li>
                            Offer personal help to communicate with you through
                            private messaging.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                        platforms. We track your potential customers' platforms
                        to market your ideas. Platforms should be chosen based
                        on your business, and depending upon the choices of your
                        customers. Be it Facebook or LinkedIn, Instagram, or
                        Twitter, we are here for you.
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
