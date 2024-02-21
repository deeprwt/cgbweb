'use client'
// external
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// internal
import shape from '@/assets/images/shape/shape_06.svg';
import quote from '@/assets/images/icon/icon_28.svg';
import { feed_back_two } from '@/data/feedback-data';


// slider setting 
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}

const FeedbackTwo = () => {

  return (
   <div className="feedback-section-two position-relative mt-150 lg-mt-80">
			<div className="container">
				<div className="position-relative">
					<div className="row">
						<div className="col-lg-8 m-auto">
							<div className="title-one text-center mb-80 lg-mb-40 wow fadeInUp">
								<h2>We help 10k+ Customers to full fill their dream.</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="slider-wrapper">
				<Slider {...slider_setting} className="feedback-slider-two">
          {feed_back_two.map((f,i) => (
					<div key={i} className="item">
						<div className="feedback-block-two tran3s">
							<div className="d-flex align-items-center">
								<Image src={f.user!} alt="user" className="avatar rounded-circle"/>
								<div className="ps-3">
									<div className="name fw-bold">{f.name}</div>
									<p className="m0">{f.location}</p>
								</div>
							</div>
							<blockquote className="text-lg">{f.desc}</blockquote>
							<div className="bottom-line d-flex align-items-center justify-content-between">
								<ul className="style-none d-flex rating">
									<li><i className="bi bi-star-fill"></i></li>
									<li><i className="bi bi-star-fill"></i></li>
									<li><i className="bi bi-star-fill"></i></li>
									<li><i className="bi bi-star-fill"></i></li>
									<li><i className="bi bi-star-fill"></i></li>
								</ul>
								<Image src={quote} alt="icon" className="icon"/>
							</div>
						</div>
					</div>
          ))}
				</Slider>
			</div>
			<Image src={shape} alt="shape" className="lazy-img shapes shape_01"/>
		</div>
  );
};

export default FeedbackTwo;