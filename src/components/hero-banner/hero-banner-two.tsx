'use client'
import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
// internal images
import bg_1 from "@/assets/images/banners/oracle.jpg"
import bg_2 from "@/assets/images/banners/low_code.jpg"
import bg_3 from "@/assets/images/banners/salesforce.jpg"
import bg_4 from "@/assets/images/banners/service_now.jpg"
import bg_5 from "@/assets/images/banners/hybrid_cloud.jpg"
import bg_6 from "@/assets/images/banners/digital_marketing.jpg"
// import bg_1 from "@/assets/images/media/img_01.jpg";
// import bg_2 from "@/assets/images/media/img_02.jpg";
// import bg_3 from "@/assets/images/media/img_03.jpg";
import icon from "@/assets/images/icon/icon_02.svg";

// slider bg
const slider_bg = [bg_1, bg_2, bg_3, bg_4, bg_5, bg_6];
// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  pauseOnHover: false,
  draggable: false,
  autoplaySpeed: 5000,
};

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  centerPadding: "0px",
  pauseOnHover: false,
  draggable: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 5000,
};



const HeroBannerTwo = () => {
  return (
    <div className="hero-banner-one vh-90 pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative">
      <Slider {...slider_setting} className="hero-slider-one m0">
        {slider_bg.map((bg, i) => (
          <div className="item m0" key={i}>
            <div
              className="hero-img"
              style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        <div>
          <div className="container position-relative">
            <div className="row">
              <div className="col-xl-6 col-lg-7 ms-auto">
                <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
                  Oracle
                </h1>
                <p
                  className="text-xl text-white pt-35 pb-25 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Maximize Oracle&apos;s potential with our tailored services comprehensive offerings from database management to seamless cloud integration, 
                  ensuring unparalleled business performance.
                </p>
                {/* <Link href="/contact"
                  className="btn-two icon-link wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span>Let’s Talk</span>
                  <Image src={icon} alt="icon" className="lazy-img icon ms-2" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container position-relative">
            <div className="row">
              <div className="col-xl-6 col-lg-7 ms-auto">
                <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
                  Low Code No Code
                </h1>
                <p
                  className="text-xl text-white pt-35 pb-25 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Innovate effortlessly with our Low Code No Code solutions. Empower teams, accelerate time-to-market,
                   and achieve groundbreaking solutions with user-friendly platforms.
                </p>
                {/* <Link href="/contact"
                  className="btn-two icon-link wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span>Let’s Talk</span>
                  <Image src={icon} alt="icon" className="lazy-img icon ms-2" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container position-relative">
            <div className="row">
              <div className="col-xl-6 col-lg-7 ms-auto">
                <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
                Salesforce
                </h1>
                <p
                  className="text-xl text-white pt-35 pb-25 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Confidently navigate Salesforce complexities with our expert consulting. From implementation to optimization,
                   propel your business with bespoke solutions, transforming customer relationships.
                </p>
                {/* <Link href="/contact"
                  className="btn-two icon-link wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span>Let’s Talk</span>
                  <Image src={icon} alt="icon" className="lazy-img icon ms-2" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container position-relative">
            <div className="row">
              <div className="col-xl-6 col-lg-7 ms-auto">
                <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
                ServiceNow
                </h1>
                <p
                  className="text-xl text-white pt-35 pb-25 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Optimize efficiency with our ServiceNow solutions. Seamless implementation, 
                  tailored customization, and expert optimization transform IT service management.
                </p>
                {/* <Link href="/contact"
                  className="btn-two icon-link wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span>Let’s Talk</span>
                  <Image src={icon} alt="icon" className="lazy-img icon ms-2" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container position-relative">
            <div className="row">
              <div className="col-xl-6 col-lg-7 ms-auto">
                <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
                Digital Marketing
                </h1>
                <p
                  className="text-xl text-white pt-35 pb-25 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Enhance your brand with our holistic digital marketing—SEO, 
                  social media, content finesse, and analytics—for tangible online success.
                </p>
                {/* <Link href="/contact"
                  className="btn-two icon-link wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span>Let’s Talk</span>
                  <Image src={icon} alt="icon" className="lazy-img icon ms-2" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container position-relative">
            <div className="row">
              <div className="col-xl-6 col-lg-7 ms-auto">
                <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
                Hybrid Cloud Service
                </h1>
                <p
                  className="text-xl text-white pt-35 pb-25 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Confidently navigate Salesforce complexities with our expert consulting. From implementation to optimization,
                   propel your business with bespoke solutions, transforming customer relationships.
                </p>
                {/* <Link href="/contact"
                  className="btn-two icon-link wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span>Let’s Talk</span>
                  <Image src={icon} alt="icon" className="lazy-img icon ms-2" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <Link href="/contact"
        className="more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft"
        target="_blank"
      >
        <i className="bi bi-arrow-up-right"></i>
      </Link>
    </div>
  );
};

export default HeroBannerTwo;
