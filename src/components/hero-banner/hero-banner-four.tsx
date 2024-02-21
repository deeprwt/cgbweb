import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import screen_1 from "@/assets/images/assets/screen_12.png";
import screen_2 from "@/assets/images/assets/screen_13.png";
import screen_3 from "@/assets/images/assets/screen_21.svg";
import shape from "@/assets/images/shape/shape_14.svg";

// image style
const imgStyle = {
  height:'auto'
}

const HeroBannerFour = () => {
  return (
    <div className="hero-banner-four pt-150 sm-pt-130 pb-225 lg-pb-150 position-relative">
      <div className="container position-relative">
        <div className="row">
          <div className="col-xxl-9 col-md-8">
            <h1 className="hero-heading text-white position-relative wow fadeInUp">
              Enhance your <span>financial</span>{" "}
            </h1>
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <p
                  className="text-xl text-white pt-40 md-pt-20 pb-35 md-pb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Digital agency with top rated talented people provide quality
                  services with babun.
                </p>
              </div>
            </div>
            <div
              className="d-lg-inline-flex align-items-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <Link href="/contact" className="btn-twelve tran3s me-3 me-xl-5">
                Get your card
              </Link>
              <div className="d-flex align-items-center md-mt-20">
                <Image
                  src={screen_1}
                  alt="screen"
                  className="lazy-img avatar"
                  style={imgStyle}
                />
                <div className="ps-3">
                  <strong className="text-white d-block text-xl">1.2m+</strong>
                  <span className="text-white opacity-75">
                    Worldwide Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="media-wrapper wow fadeInUp">
        <Image src={screen_2} alt="screen" className="lazy-img w-100" style={imgStyle} />
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" style={imgStyle} />
      <Image
        src={screen_3}
        alt="screen"
        className="lazy-img shapes shape_02 wow fadeInUp"
        style={imgStyle}
      />
    </div>
  );
};

export default HeroBannerFour;
