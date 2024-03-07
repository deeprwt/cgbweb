"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import img1 from "@/assets/images/TechnologiesImg/Java.svg";
import img3 from "@/assets/images/TechnologiesImg/Kotlin.svg";
import img2 from "@/assets/images/TechnologiesImg/Swift.svg";
import img4 from "@/assets/images/TechnologiesImg/Flutter.svg";
import img5 from "@/assets/images/TechnologiesImg/React.svg";
import img6 from "@/assets/images/TechnologiesImg/Ruby.svg";
import img10 from "@/assets/images/TechnologiesImg/CPP.svg";
import img7 from "@/assets/images/TechnologiesImg/Dart.svg";
import img8 from "@/assets/images/TechnologiesImg/AndroidStudio.svg";
import img9 from "@/assets/images/TechnologiesImg/CS.svg";


// slider setting
const slider_setting = {
  dots: false, 
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};


// slider logos
const slider_logos: StaticImageData[] = [
  img1,
  img2,
  img9,
  img3,
  img4,
  img10,
  img5,
  img6,
  img7,
  img8,
  // img11,
];

const AppTechLogo = () => {
  return (
    <>
      <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40 service-details">
        <div className="container">
          <div className="title-one text-center mb-60 details-meta">
            {/* <div className="upper-title"></div> */}
            <h2 className="">Technologies We Use for App Development</h2>
          </div>
          <Slider {...slider_setting} className="partner-slider-one my-2">
            {slider_logos.map((logo, i) => (
              <div key={i} className="item">
                <div className="cursor-pointer m-2">
                  <Image
                    src={logo}
                    alt="Cgb technolgy Logo"
                    layout="responsive"
                    width={154}
                    height={94}
                    
                  />
                </div>
              </div>
            ))}
          </Slider>

        </div>
      </div>
    </>
  );
};

export default AppTechLogo;
