"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import img1 from "@/assets/images/TechnologiesImg/React.svg";
import img2 from "@/assets/images/TechnologiesImg/Wordpress.svg";
import img3 from "@/assets/images/TechnologiesImg/Tailwindcss.svg";
import img4 from "@/assets/images/TechnologiesImg/Aws.svg";
import img5 from "@/assets/images/TechnologiesImg/Bootstrap.svg";
import img6 from "@/assets/images/TechnologiesImg/Css.svg";
import img7 from "@/assets/images/TechnologiesImg/Django.svg";
import img8 from "@/assets/images/TechnologiesImg/Expressjs.svg";
import img9 from "@/assets/images/TechnologiesImg/Figma.svg";
import img10 from "@/assets/images/TechnologiesImg/Firebase.svg";
import img11 from "@/assets/images/TechnologiesImg/Html.svg";
import img12 from "@/assets/images/TechnologiesImg/Java.svg";
import img13 from "@/assets/images/TechnologiesImg/JavaScript.svg";
import img14 from "@/assets/images/TechnologiesImg/Mongodb.svg";
import img15 from "@/assets/images/TechnologiesImg/Nextjs.svg";
import img16 from "@/assets/images/TechnologiesImg/Nodejs.svg";
import img17 from "@/assets/images/TechnologiesImg/Php.svg";
import img18 from "@/assets/images/TechnologiesImg/Python.svg";
import img19 from "@/assets/images/TechnologiesImg/ThreeJs.svg";
import img20 from "@/assets/images/TechnologiesImg/Redux.svg";
import img21 from "@/assets/images/TechnologiesImg/Sass.svg";
import img22 from "@/assets/images/TechnologiesImg/Tailwindcss.svg";
import img23 from "@/assets/images/TechnologiesImg/Vite.svg";




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
            <h2>Technologies We Use for Web Development</h2>
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
