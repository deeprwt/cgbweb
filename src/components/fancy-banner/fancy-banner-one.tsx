import React from "react";
import Image from "next/image";
import screen from "@/assets/images/assets/screen_01.png";

const FancyBannerOne = () => {
  return (
    <div className="fancy-banner-one position-relative pt-30 md-pt-20 pb-40 md-pb-20 bg-white">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-end">
          <h2 className="pe-xl-5 pe-md-4 sm-pb-50">
            Let’s <span>Discuss & Start</span>
          </h2>
        </div>
        <div className="col-md-6">
          <div className="ps-xl-5 ps-md-4 pe-xxl-5 d-flex align-items-center justify-content-between">
            <div>
              <h3 className="fw-bold">1.75 million+</h3>
              <p className="text-md m0">Worldwide clients</p>
            </div>
            <Image
              src={screen}
              alt="screen"
              className="lazy-img screen me-xxl-5"
              style={{height:'auto'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerOne;
