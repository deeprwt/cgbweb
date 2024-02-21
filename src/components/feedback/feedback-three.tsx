'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
// internal
import media_img from '@/assets/images/media/img_21.jpg';
import icon from '@/assets/images/icon/icon_39.svg';
import shape from '@/assets/images/shape/shape_13.svg';
import PartnersSliderOne from '../partners/partners-slider-one';
import { feedback_three } from '@/data/feedback-data';

// image style 
const imgStyle = {
  height:'auto'
}

// slider setting 
const slider_setting = {
  dots: true,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true,
  autoplay: true,
  autoplaySpeed: 6000
}

const FeedbackThree = ({spacing,bottom_slider=true}:{spacing?:string;bottom_slider?:boolean}) => {
  return (
    <>
      <div className={`feedback-section-three position-relative ${spacing?spacing:'pt-180 lg-pt-100'}`}>
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="title-one mb-85 lg-mb-50 mt-65 md-mt-30">
                  <h2 className="text-dark">Find our Customers kind Words.</h2>
                </div>
                <div className="slider-wrapper position-relative">
                  <Image src={icon} alt="icon" className="lazy-img shapes icon"/>
                    <Slider {...slider_setting} className="feedback-slider-three">
                      {feedback_three.map((item,i) => (
                      <div key={item.id} className="item">
                        <div className="feedback-block-three">
                          <blockquote className="text-lg">{item.desc}</blockquote>
                        </div>
                      </div>
                      ))}
                    </Slider>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5 ms-auto text-center text-lg-end">
                <div className="media-wrapper d-inline-block position-relative md-mt-40">
                  <Image src={media_img} alt="media_img" className="lazy-img" style={imgStyle} />
                  <div className="rating-box text-center">
                    <div className="rating fw-bold text-white">4.8</div>
                    <div className="text-white">avg rating</div>
                  </div>
                </div>
              </div>
            </div>

            {bottom_slider && <div className="partner-logo-one pt-150 md-pt-80">
              <p className="fw-500 text-dark text-lg mb-40 sm-mb-30">
                <span className="text-decoration-underline fs-3">150,000+</span> 
                Client all over the world.
              </p>
              <PartnersSliderOne />
            </div>}
          </div>
        </div>

        <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape} alt="shape" className="lazy-img shapes shape_02" />
      </div>
    </>
  );
};

export default FeedbackThree;