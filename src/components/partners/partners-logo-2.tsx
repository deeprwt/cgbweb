import React from "react";
import Image from "next/image";
import shape_1 from "@/assets/images/shape/shape_19.svg";
import shape_2 from "@/assets/images/shape/shape_20.svg";

const PartnersLogosTwo = () => {
  return (
    <div className="partner-logo-two position-relative">
      <div className="bg-wrapper">
        <div className="wrapper m-auto d-xl-flex align-items-center">
          <h3 className="title font-magnita d-flex justify-content-center align-items-center m0 lg-pb-30">
            <span className="fw-bold">100+</span> Trusted Partners{" "}
            <span className="ms-4 d-none d-sm-inline-block">
              <Image
                src={shape_1}
                alt="shape"
                className="lazy-img"
              />
            </span>
          </h3>
          <div className="logo-wrapper ps-xl-4 align-items-center d-flex flex-wrap flex-xl-nowrap justify-content-center justify-content-xl-between flex-fill">
            <div className="br-name">Google</div>
            <div className="br-name">
              <Image src={shape_2} alt="shape" className="lazy-img" />
            </div>
            <div className="br-name">Facebook</div>
            <div className="br-name">
              <Image src={shape_2} alt="shape" className="lazy-img" />
            </div>
            <div className="br-name">Insta</div>
            <div className="br-name">
              <Image src={shape_2} alt="shape" className="lazy-img" />
            </div>
            <div className="br-name">Dribbble</div>
            <div className="br-name">
              <Image src={shape_2} alt="shape" className="lazy-img" />
            </div>
            <div className="br-name">Fundbox</div>
            <div className="br-name">
              <Image src={shape_2} alt="shape" className="lazy-img" />
            </div>
            <div className="br-name">Segment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersLogosTwo;
