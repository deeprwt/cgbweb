'use client'
import React from 'react';
import Image from 'next/image';
import shape from '@/assets/images/shape/shape_04.svg';
import shape_2 from '@/assets/images/shape/shape_05.svg';
import shape_3 from '@/assets/images/shape/shape_06.svg';
import screen from '@/assets/images/assets/screen_02.png';
import screen_2 from '@/assets/images/assets/screen_03.png';
import PartnersSliderOne from '../partners/partners-slider-one';

// imageStyle
const imageStyle = {
  height:'auto'
}

const HeroBannerOne = () => {
  // handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="hero-banner-two light-bg pt-200 pb-85 position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <h1 className="hero-heading text-center fw-bold wow fadeInUp mt-10">Your Goals, Our Expertise – <span className="d-inline-block position-relative">Financial 
               <Image src={shape} alt="shape" className="lazy-img" style={imageStyle} />
              </span> Success
              </h1>
              <p className="text-xl text-center pt-35 pb-35 wow fadeInUp" data-wow-delay="0.1s">Finance insights enable smart moves towards wealth & security.</p>
              <form onSubmit={handleSubmit} className="m-auto position-relative wow fadeInUp" data-wow-delay="0.2s">
                <input type="email" placeholder="Your email address..." />
                <button className="btn-four">Connect</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="partner-logo-one pt-80 md-p-70">
                <p className="fw-500 text-dark text-center mb-40"><span className="text-decoration-underline">Join 27,000+</span> companies who’ve reached </p>
                {/* partner slider start */}
                <PartnersSliderOne/>
                {/* partner slider end */}
              </div>
            </div>
          </div>
        </div>
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_01" style={imageStyle} />
        <Image src={shape_3} alt="shape" className="lazy-img shapes shape_02" style={imageStyle} />
        <Image src={screen} alt="screen" className="lazy-img shapes shape_03" style={imageStyle} />
        <Image src={screen_2} alt="screen" className="lazy-img shapes shape_04" style={imageStyle} />
      </div>
    </>
  );
};

export default HeroBannerOne;