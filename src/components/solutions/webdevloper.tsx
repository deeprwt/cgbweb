import React from "react";
import Link from "next/link";
// internal
import faq_data from "@/data/faq-data";
import Image from "next/image";
import service_data from "@/data/service-data";

import screen_1 from "@/assets/images/assets/screen_04.svg";
import img_1 from "@/assets/images/solutions/webdevlopment/1.jpg";
import icon from "@/assets/images/icon/icon_27.svg";
import shape_1 from "@/assets/images/shape/shape_11.svg";
import shape_2 from "@/assets/images/shape/shape_12.svg";

import screen from '@/assets/images/assets/screen_11.png';
import FaqItem from "@/components/faq/faq-item";

const WebDevlopmentSection = ({cls}:{cls?:string}) => {
  const service_items = service_data.filter((s) => s.page === "web-1");
  return (
    <>
      <div className="text-feature-one service-details light-bg pt-120 lg-pt-80 pb-150 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight">
              <div className="title-one">
                <div className="upper-title">About us</div>
                <h2>Guideline for your financial grow.</h2>
              </div>
              <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
                Your success is our mission. As business advisors, we offer
                expert guidance, unlocking your potential for growth and
                profitability
              </p>
              <div>
                <Link href="/about-us" className="btn-four mt-15">
                  More About us
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 col-lg-5 d-flex order-lg-first wow fadeInLeft">
              <Image
                src={img_1}
                alt="screen"
                className="lazy-img screen_01 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* card starts from here  */}
      <div className="block-feature-six bg-two position-relative pt-150 lg-pt-60 pb-120 lg-pb-40">
        <div className="container">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4 wow fadeInLeft">
                  <div className="title-one">
                    <h2>Web Development</h2>
                  </div>
                  <p className="text-lg text-dark mt-40 md-mt-20 mb-35 md-mb-30">
                    Services We Offer
                  </p>
                  <Link
                    href="/contact"
                    className="btn-eleven d-inline-flex align-items-center md-mb-60"
                  >
                    <span className="text">Contact Us</span>
                    <div className="icon tran3s rounded-circle d-flex align-items-center">
                      <Image src={icon} alt="icon" className="lazy-img" />
                    </div>
                  </Link>
                </div>
                {service_items.map((item, i) => (
                  <div
                    key={item.id}
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.${i}s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className="icon d-flex align-items-center align-self-center">
                        <Image
                          src={item.icon}
                          alt="icon"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20 text-center">{item.title}</h4>
                      <p className="text-center">{item.desc}</p>
                      {/* <Link href="/service-details" className="stretched-link"></Link> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>
      {/* card end */}

      {/* accordian structure reasone to choose start  */}
      <div className={`faq-section-one ${cls?cls:'mt-150 mb-120 lg-mt-120 md-mt-80'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInLeft">
            <Image
              src={screen}
              alt="screen"
              className="lazy-img h-auto"
            />
            </div>

            <div className="col-lg-7">
                <div className="title-one mb-40 lg-mb-20">
                    <h2>Reasons to Choose Us </h2>
                </div>
                <p className="text-lg mb-40 lg-mb-20">
                    as Your Web Development Agency
                </p>
              <div
                className="accordion accordion-style-one mt-15 md-mt-50"
                id="accordionOne"
              >
                {faq_data.filter(faq => faq.page === 'web-1')
                .map((faq, i) => (
                  <FaqItem key={i} {...faq} parent="accordionOne" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* accordian end */}
    </>
  );
};

export default WebDevlopmentSection;
