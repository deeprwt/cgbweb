"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import img1 from "@/assets/images/TechnologiesImg/AfterEffects.svg";
import img3 from "@/assets/images/TechnologiesImg/Audition.svg";
import img2 from "@/assets/images/TechnologiesImg/Figma.svg";
import img4 from "@/assets/images/TechnologiesImg/Photoshop.svg";
import img5 from "@/assets/images/TechnologiesImg/XD.svg";
import img6 from "@/assets/images/TechnologiesImg/Illustrator.svg";
import img10 from "@/assets/images/TechnologiesImg/Blender.svg";
import img7 from "@/assets/images/TechnologiesImg/Canva.svg";
// import img8 from "@/assets/images/TechnologiesImg/C.svg";
import img9 from "@/assets/images/TechnologiesImg/Premiere.svg";


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
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
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
//   img8,
  // img11,
];

const GraphicTechLogo = () => {
  return (
    <>
      <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40 service-details">
        <div className="container">
          <div className="title-one text-center mb-60 details-meta">
            {/* <div className="upper-title"></div> */}
            <h3 className="">Technologies We Use for Graphic Designing</h3>
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

export default GraphicTechLogo;
