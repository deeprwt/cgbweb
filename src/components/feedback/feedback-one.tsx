'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// internal
import { feedback_one } from "@/data/feedback-data";
import icon from "@/assets/images/icon/icon_12.svg";

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
};

const FeedbackOne = ({cls}:{cls?:string}) => {
  return (
    <div className={`feedback-section-one ${cls?cls:'mt-150 lg-mt-80 pb-80'}`}>
      <div className="container">
        <div className="position-relative">
          <div className="title-one sm-mb-40">
            <h2>
              Words from <br /> clients.
            </h2>
          </div>
          <Slider {...slider_setting} className="feedback-slider-one">
            {feedback_one.map((item, i) => (
              <div key={item.id} className="item">
                <div className="feedback-block-one">
                  <div className="row align-items-end">
                    <div className="col-md-7 ms-auto order-md-last">
                      <blockquote>{item.desc}</blockquote>
                      <div className="d-flex align-items-center">
                        <Image
                          src={item.user}
                          alt="user"
                          className="avatar rounded-circle"
                        />
                        <div className="ps-4">
                          <div className="name fw-bold text-dark">
                            {item.name}
                          </div>
                          <p className="fs-6 m0">{item.location}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 order-md-first">
                      <div className="d-flex align-items-center justify-content-between sm-mt-40">
                        <div className="line"></div>
                        <div className="count fw-500">
                          <span className="text-dark">
                            {item.id < 10 ? `0${item.id}` : item.id}
                          </span>{" "}
                          / {" "}
                          {feedback_one.length < 10
                            ? `0${feedback_one.length}`
                            : feedback_one.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="icon d-flex align-items-center justify-content-center rounded-circle">
            <Image src={icon} alt="icon" className="lazy-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackOne;
