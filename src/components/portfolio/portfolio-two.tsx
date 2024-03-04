"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
// internal
import portfolio_data from "@/data/portfolio-data";

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: false,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// img style
const imgStyle = {
  height: "auto",
};

const PortfolioTwo = () => {
  const portfolio_items = portfolio_data.filter(
    (p) => p.portfolio === "portfolio-two"
  );
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <div className="portfolio-two position-relative mt-80 lg-mt-80">
      <div className="container">
        <div className="position-relative mb-80 lg-mb-40">
          {/* ---------------------------------Section staring-------------------------------*/}
          <div className="d-flex justify-content-between align-items-center">
            <div className="title-one">
              <h2 className="color-deep m0">Our Projects.</h2>
            </div>
            <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none">
              <li onClick={sliderPrev} className="prev_b slick-arrow">
                <i className="bi bi-arrow-left"></i>
              </li>
              <li onClick={sliderNext} className="next_b slick-arrow">
                <i className="bi bi-arrow-right"></i>
              </li>
            </ul>
          </div>
          {/* ---------------------------------Section End-------------------------------*/}
        </div>
      </div>
      {/* ---------------------------------Slider section Staring-------------------------------*/}
      <div className="slider-wrapper">
        <Slider
          {...slider_setting}
          ref={sliderRef}
          className="project-slider-one"
        >
          {portfolio_items.map((item) => (
            <div key={item.id} className="item">
              <div className="portfolio-block-two">
                <div className="img-wrapper">
                  <Image
                    src={item.img}
                    alt="image"
                    className="w-100"
                    style={imgStyle}
                  />
                </div>
                <div className="caption d-flex align-items-center justify-content-between flex-wrap">
                  <div>
                    <span className="fw-bold text-uppercase">
                      {item.sub_title}
                    </span>
                    <h3>
                      <Link href="#">{item.title}</Link>
                    </h3>
                  </div>
                  <Link
                    href="#"
                    className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* ---------------------------------Slider Section End-------------------------------*/}
    </div>
  );
};

export default PortfolioTwo;
