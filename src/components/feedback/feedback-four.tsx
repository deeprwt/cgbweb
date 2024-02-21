'use client'
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
// internal
import icon from "@/assets/images/icon/icon_48.svg";
import PartnersSliderOne from "../partners/partners-slider-one";
import { feedback_four } from "@/data/feedback-data";

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 2,
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

const FeedbackFour = ({spacing}:{spacing?:string}) => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <div className={`feedback-section-four ${spacing?spacing:'mt-180 lg-mt-80'}`}>
      <div className="container">
        <div className="position-relative">
          <div className="title-two">
            <h2>You are in a good hand</h2>
          </div>
          <p className="text-lg mt-30 lg-mt-20 mb-70 lg-mb-40">
            Optimize expense tracking across platforms, & product lines using
            multiple cards.
          </p>
          <Slider {...slider_setting} ref={sliderRef} className="feedback-slider-four">
            {feedback_four.map((item, i) => (
              <div key={i} className="item">
                <div className="feedback-block-four tran3s">
                  <div className="d-flex align-items-center justify-content-between">
                    <ul className="style-none d-flex rating">
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                      <li>
                        <i className="bi bi-star-fill"></i>
                      </li>
                    </ul>
                    <Image src={icon} alt="icon" className="icon" />
                  </div>
                  <blockquote>
                   {item.desc}
                  </blockquote>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="name fw-500 text-dark">{item.name},</div>
                      <p className="m0 opacity-75">{item.location}</p>
                    </div>
                    <Image
                      src={item.user!}
                      alt="user"
                      className="avatar rounded-circle"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <ul className="slider-arrows slick-arrow-one d-flex justify-content-center style-none">
            <li onClick={sliderPrev} className="prev_a slick-arrow">
              <i className="bi bi-chevron-left"></i>
            </li>
            <li onClick={sliderNext} className="next_a slick-arrow">
              <i className="bi bi-chevron-right"></i>
            </li>
          </ul>

          <div className="partner-logo-one pt-80 lg-pt-50 pb-80 lg-pb-50">
            {/* partner slider start */}
            <PartnersSliderOne />
            {/* partner slider end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackFour;
