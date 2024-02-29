'use client'
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
// internal
import staffing_data from "@/data/staffing-data";
import shape from '@/assets/images/shape/shape_44.svg';

// slider setting
const slider_setting = {
  dots: true,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const StaffingSolutions = () => {
  const service_items = staffing_data.filter((s) => s.page === "staffing-1").slice(0,4);
  return (
    <div className="block-feature-eleven overflow-hidden position-relative mt-80 lg-mt-100 pb-80 lg-pb-100 md-pb-80">
      <div className="container">
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-5 wow fadeInLeft">
            <div className="title-one">
              <h2 className="">Staffing Solutions</h2>
            </div>
            <p className="text-lg text-dark mt-30 md-mt-20 mb-45 md-mb-30">
            We offer a combination of these services tailored to the specific needs of our clients, aiming to streamline their staffing processes and optimize workforce management
            </p>
            {/* <Link href="/contact" className="btn-eighteen tran3s">
              Explore All
            </Link> */}
          </div>
          <div className="col-lg-7">
            <div className="slider-wrapper md-mt-50">
              <Slider {...slider_setting} className="service-slider-one">
                {service_items.map((s) => (
                  <div key={s.id} className="item">
                    <div className="card-style-seventeen d-lg-flex tran3s w-100">
                      <div className="icon tran3s rounded-circle d-flex justify-content-center align-items-center">
                        <Image src={s.icon} alt="icon" />
                      </div>
                      <div className="text">
                        <h4 className="fw-bold mb-25 md-mb-20">
                          {s.title}
                        </h4>
                        <p className="mb-25">
                          {s.desc}
                        </p>
                        <Link href={s.link} className="btn-three">
                          <span>Learn More</span>{" "}
                          <i className="bi bi-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01"/>
    </div>
  );
};

export default StaffingSolutions;
