import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import playstore from '@/assets/images/icon/playstore.svg';
import apple from '@/assets/images/icon/apple.svg';
import screen from '@/assets/images/assets/screen_11.png';

// image style 
const imgStyle = {
  height:'auto'
}

const FancyBannerFour = () => {
  return (
    <div className="fancy-banner-four position-relative mt-150 lg-mt-80 pt-80 lg-pt-50 wow fadeInUp">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 order-lg-last">
            <div className="pb-120 xl-pb-100 lg-pb-50 ps-xl-5">
              <div className="title-one mb-30">
                <h2 className="text-dark">Download our bank Mobile App.</h2>
              </div>
              <p className="mb-40">
                Control of all your banking needs needs anywhere, anytime
              </p>
              <ul className="style-none">
                <li>Compare different insurance Item</li>
                <li>Buy, store and share all your policies online</li>
                <li>Email & Live chat</li>
              </ul>
              <div className="d-sm-flex align-items-center platform-button-group mt-50 lg-mt-30">
                <a
                  href="#"
                  className="d-flex align-items-center windows-button"
                >
                  <Image
                    src={playstore}
                    alt="playstore"
                    className="lazy-img icon"
                    style={imgStyle}
                  />
                  <div>
                    <span>Get it on</span>
                    <strong>Google play</strong>
                  </div>
                </a>
                <Link href="#" className="d-flex align-items-center ios-button">
                  <Image
                    src={apple}
                    alt="apple"
                    className="lazy-img icon"
                    style={imgStyle}
                  />
                  <div>
                    <span>Download on the</span>
                    <strong>App store</strong>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Image
              src={screen}
              alt="screen"
              className="lazy-img"
              style={imgStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerFour;
