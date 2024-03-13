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

// img style
const imgStyle = {
  height: "auto",
};
const DigitalMarketingSection = () => {
  const service_items = service_data
    .filter((s) => s.page === "home-5")
    .slice(4, 6);
  return (
    <>
      <div className="block-feature-twelve position-relative pt-130 lg-pt-80 pb-180 lg-pb-80">
        <div className="container">
          {/* ---------------------------------Section staring-------------------------------*/}
          <div className="row">
            <div className="col-lg-11">
              <div className="title-one mb-40 lg-mb-20">
                <h2 className="color-deep">
                  Digital marketing services we offer
                </h2>
              </div>
            </div>
          </div>
          {/* ---------------------------------Section End-------------------------------*/}

          <div className="row gx-xl-5">
            {/* ---------------------------------Section staring-------------------------------*/}

            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="p-2 bg-white vstack tran3s w-100 rounded-4">
                <Image
                  src="/img.webp"
                  width={1000}
                  height={415}
                  alt="icon"
                  className="rounded-4 w-100"
                />
              </div>
            </div>
            {/* ---------------------------------Section staring-------------------------------*/}

            <div className="col-lg-8 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      Search Engine Optimizatio (SEO)
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                            Enhancing user experience and improving website
                            ranking.
                          </li>
                          <li>
                            Increasing sales and boosting ROI with our proven
                            SEO services.
                          </li>
                          <li>
                            Help to realize the full potential of digital
                            marketing growing sales and boosting ROI.
                          </li>
                          <li>
                            Expanding online presence and reaching a wider
                            audience.
                          </li>
                          <li>
                            Driving sustained growth and business success
                            through effective optimization.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------Section staring-------------------------------*/}

          <div className="row gx-xl-5">
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="p-2 bg-white vstack tran3s w-100 rounded-4">
                <Image
                  src="/img.webp"
                  width={1000}
                  height={415}
                  alt="icon"
                  className="rounded-4"
                />
              </div>
            </div>
            <div className="col-lg-8 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15 ">
                      Pay Per Click (PPC)
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>Achieving quick outcomes and rapid results.</li>
                          <li>
                            Cost-effective advertising with immediate results.
                          </li>
                          <li>
                            Targeting potential customers directly and reaching
                            relevant audiences.
                          </li>
                          <li>
                            Maximizing visibility and displaying ads across the
                            web.
                          </li>
                          <li>
                            Attaining SEM excellence and promoting business
                            effectively.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------Section staring-------------------------------*/}

          <div className="row gx-xl-5">
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="p-2 bg-white vstack tran3s w-100 rounded-4">
                <Image
                  src="/img.webp"
                  width={1000}
                  height={415}
                  alt="icon"
                  className="rounded-4"
                />
              </div>
            </div>

            <div className="col-lg-8 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      Social Media Optimization (SMO)
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                            Boosting brand visibility and awareness online.
                          </li>
                          <li>
                            Connecting platforms like Facebook, Twitter, and
                            Instagram for a stronger online presence.
                          </li>
                          <li>
                            Targeting specific customer segments and niche
                            markets.
                          </li>
                          <li>
                            Ensuring efficient brand optimization for maximum
                            impact and visibility.
                          </li>
                          <li>
                            Expanding brand visibility, engaging a wider
                            audience, and fostering online influence.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------Section staring-------------------------------*/}

          <div className="row gx-xl-5">
            <div className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="p-2 bg-white vstack tran3s w-100 rounded-4">
                <Image
                  src="/img.webp"
                  width={1000}
                  height={415}
                  alt="icon"
                  className="rounded-4"
                />
              </div>
            </div>

            <div className="col-lg-8 d-flex mt-40 md-mt-20">
              <div className="card-style-nineteen">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      Google My Business (GMB)
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <ul className="style-none list-item ">
                          <li>
                            Empowering online presence and managing business
                            profiles on Google.
                          </li>
                          <li>
                            Gaining valuable customer insights and providing
                            essential information.
                          </li>
                          <li>
                            Enjoying a free and user-friendly service for
                            verifying and editing business information.
                          </li>
                          <li>
                            Improving visibility in local searches and
                            increasing discoverability.
                          </li>
                          <li>
                            Establishing trust and credibility through an
                            official presence on Google platform.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------Section staring-------------------------------*/}
        </div>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
      </div>
    </>
  );
};
export default DigitalMarketingSection;
