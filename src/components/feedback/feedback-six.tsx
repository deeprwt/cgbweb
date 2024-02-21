'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
// internal
import screen_1 from '@/assets/images/assets/screen_24.png';
import screen_2 from '@/assets/images/assets/screen_25.png';
import shape from '@/assets/images/shape/shape_46.svg';
import icon from '@/assets/images/icon/icon_97.svg';
import { feedback_six } from '@/data/feedback-data';

// slider setting
const slider_setting = {
  dots: true,
  arrows: false,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
}

// img style 
const imgStyle = {
  height:'auto'
}

const FeedbackSix = () => {
  return (
    <div className="feedback-section-six position-relative pt-180 xl-pt-150 lg-pt-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 m-auto">
          <div className="title-one text-center mb-90 lg-mb-40">
            <h2 className="color-deep">We help 10k+ Customers to full fill their dream.</h2>
          </div>
        </div>
      </div>
      <div className="row gx-xl-5">
        <div className="col-lg-9 m-auto">
          <div className="icon-container position-relative">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <Image src={icon} alt="icon" className="lazy-img"/>
              </div>
            </div>
            <div className='feedback-slider-five pt-30'>
            <Slider {...slider_setting}>
              {feedback_six.map((item) => (
              <div key={item.id} className="item">
                <div className="feedback-block-six text-center">
                  <p>{item.desc}</p>
                  <h6 className="text-lg position-relative">{item.name}, 
                  <span className="fw-normal">{item.location}</span>
                  </h6>
                </div>
              </div>
              ))}
            </Slider>
            </div>
        </div>
      </div>
    </div>
    <Image src={screen_1} alt="screen" className="lazy-img shapes shape_01" style={imgStyle}/>
    <Image src={screen_2} alt="screen" className="lazy-img shapes shape_02" style={imgStyle}/>
    <Image src={shape} alt="shape" className="lazy-img shapes shape_03" style={imgStyle}/>
  </div>
  );
};

export default FeedbackSix;