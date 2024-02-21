import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import hand from "@/assets/images/assets/hand.png";
import screen from "@/assets/images/assets/screen_14.png";
import shape_1 from "@/assets/images/shape/shape_15.png";
import shape_2 from "@/assets/images/shape/shape_16.svg";

// image style
const imgStyle = {
  height:'auto'
}

const TextFeatureSix = () => {
  return (
    <div className="text-feature-six position-relative mt-200 lg-mt-120">
      <div className="container">
        <div className="position-relative pb-140 xl-pb-100 md-pb-60">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="title-two mb-30">
                <div className="upper-title">Visa & Mastercard</div>
                <h2>Grow financial Digitization.</h2>
              </div>
              <p className="text-lg mb-35 pe-xl-5 me-xl-4">
                Digital agency with top rated talented people provide quality.
              </p>
              <Link href="/contact" className="btn-thirteen tran3s me-5">
                Apply Now
              </Link>
            </div>
            <div className="col-lg-4 ms-auto">
              <div className="ps-xl-5 ms-xxl-2 md-mt-60">
                <div className="card-style-ten border-bottom mb-60 lg-mb-40">
                  <h4 className="fw-bold">Visa</h4>
                  <p>
                    Digital agency with top rated talented people provide
                    quality.
                  </p>
                  <div className="main-count d-inline-block position-relative fw-bold">
                    <span className="counter">1.75</span>m
                  </div>
                  <div>Total Active user</div>
                </div>

                <div className="card-style-ten">
                  <h4 className="fw-bold">Mastercard</h4>
                  <p>
                    Digital agency with top rated talented people provide
                    quality.
                  </p>
                  <div className="main-count d-inline-block position-relative fw-bold">
                    <span className="counter">718</span>m
                  </div>
                  <div>Total Active user</div>
                </div>
              </div>
            </div>
          </div>
          <div className="media-wrapper">
            <Image src={hand} alt="hand-img" className="lazy-img w-100" style={imgStyle} />
            <Image
              src={screen}
              alt="screen-img"
              className="lazy-img shapes screen_01"
              style={imgStyle}
            />
          </div>
          <Image
            src={shape_1}
            alt="shape"
            className="lazy-img shapes shape_01"
            style={imgStyle}
          />
          <Image
            src={shape_2}
            alt="shape"
            className="lazy-img shapes shape_02"
            style={imgStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default TextFeatureSix;
