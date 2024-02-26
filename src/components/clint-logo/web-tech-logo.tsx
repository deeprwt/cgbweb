"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import img1 from "@/assets/images/web-tech/1.svg";
import img2 from "@/assets/images/web-tech/2.svg";
import img3 from "@/assets/images/web-tech/3.svg";
import img4 from "@/assets/images/web-tech/4.svg";
import img5 from "@/assets/images/web-tech/5.svg";
import img6 from "@/assets/images/web-tech/6.svg";
import img7 from "@/assets/images/web-tech/7.svg";
import img8 from "@/assets/images/web-tech/8.svg";
import img9 from "@/assets/images/web-tech/9.svg";
import img10 from "@/assets/images/web-tech/10.svg";
import img11 from "@/assets/images/web-tech/11.svg";
import img12 from "@/assets/images/web-tech/12.svg";
import img13 from "@/assets/images/web-tech/13.svg";
import img14 from "@/assets/images/web-tech/14.svg";
import img15 from "@/assets/images/web-tech/15.svg";
import img16 from "@/assets/images/web-tech/16.svg";
import img17 from "@/assets/images/web-tech/17.svg";
import img18 from "@/assets/images/web-tech/18.svg";
import img19 from "@/assets/images/web-tech/19.svg";
import img20 from "@/assets/images/web-tech/20.svg";
import img21 from "@/assets/images/web-tech/21.svg";
import img22 from "@/assets/images/web-tech/22.svg";
import img23 from "@/assets/images/web-tech/23.svg";




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

const slider_setting2 = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  rtl: true, // Right to left mode
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
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];
const slider_logos2: StaticImageData[] = [
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
];

const WebTechLogo = () => {
  return (
    <>
      <div className="partner-logo-one light-bg pt-80 lg-pt-40 pb-80 lg-pb-40 service-details">
        <div className="container">
          <div className="title-one text-center mb-60 details-meta">
            {/* <div className="upper-title"></div> */}
            <h3>Technologies We Use for Web Development</h3>
          </div>
          <Slider {...slider_setting} className="partner-slider-one my-2">
            {slider_logos.map((logo, i) => (
              <div key={i} className="item w-10">
                <div className="cursor-pointer m-2 w-10">
                  <Image
                    src={logo}
                    alt="Cgb technolgy Logo"
                    layout="responsive"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Slider {...slider_setting2} className="partner-slider-one my-2">
            {slider_logos2.map((logo, i) => (
              <div key={i} className="item">
                <div className="cursor-pointer m-2">
                  <Image
                    src={logo}
                    alt="Cgb technolgy Logo"
                    layout="responsive"
                    width={60}
                    height={60}
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

export default WebTechLogo;
