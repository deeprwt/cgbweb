import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon_1 from "@/assets/images/icon/icon_97.svg";
import icon_2 from "@/assets/images/icon/icon_27.svg";
import shape from "@/assets/images/shape/shape_45.svg";
import arrow from "@/assets/images/icon/icon_09.svg";
import digital_pg from "@/assets/images/solutions/digital-marketing/cta-banner.webp";
import service_data from "@/data/service-data";

//-------------------------------img style----------------------------------------
const imgStyle = {
  height: "auto",
};

const BlockFeatureTwelve = () => {
  const service_items = service_data
    .filter((s) => s.page === "home-5")
    .slice(0, 1);
  return (
    <div className="block-feature-twelve position-relative pt-130 lg-pt-80 pb-40 lg-pb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-11">
            <div className="title-one mb-40 lg-mb-20">
              <h2 className="color-deep">
                CGB Solutions: Unlocking Digital Excellence
              </h2>
            </div>
          </div>
        </div>
        <div className="row gx-xl-5">
          <div className="col-lg-12 d-flex mt-40 md-mt-20">
            <div className="card-style-eighteen position-relative">
              <div className="row h-100">
                <div className="col-lg-7 order-lg-last">
                  <div className="pt-45 pb-40">
                    <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                      <Image src={icon_1} alt="icon" className="lazy-img" />
                    </div>
                    <blockquote>
                      “Discover the keys to digital mastery with CGB Solutions.
                      We specialize in a variety of services tailored to elevate
                      your online presence.”
                    </blockquote>
                    <h6>
                      - Musa Jamy. <span>CEO CGB</span>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-5 d-flex align-items-end justify-content-center order-lg-first">
                  <Image
                    src={digital_pg}
                    alt="man-img"
                    className="lazy-img"
                    style={imgStyle}
                  />
                </div>
              </div>
            </div>
          </div>
          {service_items.map((s, i) => (
            <div key={i} className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="card-style-two bg-white vstack tran3s w-100">
                <Image
                  src={s.icon}
                  alt="icon"
                  className="lazy-img icon2 me-auto"
                />
                <h4 className="fw-bold mt-50 mb-25">Our Mission</h4>
                <p className="mb-20">
                  Optimize expense tracking across platforms, & product lines
                  using multiple cards.
                </p>
                <Link
                  href="/service-details"
                  className="arrow-btn tran3s mt-auto stretched-link"
                >
                  <Image src={arrow} alt="arrow-icon" className="lazy-img" />
                </Link>
              </div>
            </div>
          ))}
          <div className="col-lg-8 d-flex mt-40 md-mt-20">
            <div className="card-style-nineteen">
              <div className="row">
                <div className="col-lg-7">
                  <h2 className="color-deep fw-bold mt-20">We’r CGB </h2>
                  <p className="text-md mt-30 lg-mt-20 mb-35">
                    Your success is our mission. As business advisors, we offer
                    expert guidance, unlocking your potential
                  </p>
                  <Link
                    href="/service-v2"
                    className="btn-seven d-inline-flex align-items-center"
                  >
                    <span className="text">Learn More</span>
                    <div className="icon tran3s rounded-circle d-flex align-items-center">
                      <Image src={icon_2} alt="icon" className="lazy-img" />
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 ms-auto">
                  <div className="counter-block-one md-mt-40">
                    <div className="main-count fw-bold">
                      <span className="counter">100</span>+
                    </div>
                    <p className="m0">Successful Projects</p>
                  </div>
                  <div className="counter-block-one mt-60 md-mt-20">
                    <div className="main-count fw-bold">
                      <span className="counter">1.2</span>x
                    </div>
                    <p className="m0">Rapid wealth grow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default BlockFeatureTwelve;
