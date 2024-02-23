import React from "react";
import Image from "next/image";
// internal
import screen from "@/assets/images/assets/screen_16.png";
import {IFaq2} from "@/data/faq_data_edit";
// import { IFaq2 } from "@/data/faq-data_edit";
import FaqItem from "../faq/faq-item";
import Link from "next/link";

// faq data
const faq_data: IFaq2[] = [
  {
    id: 1,
    title: "Register & Create Account",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
    isShow: true,
  },
  {
    id: 2,
    title: "Manage Your Card",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
  },
  {
    id: 3,
    title: "Atm withdraw & Online Banking",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
  },
];
// faq data 2
const faq_data_2: IFaq2[] = [
  {
    id: 1,
    title: "Quality Services",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
    isShow: true,
  },
  {
    id: 2,
    title: "Fair Pricing",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
  },
  {
    id: 3,
    title: "Trusted & Secure",
    desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
  },
];

// image style
const imgStyle = {
  height: "auto",
};

const TextFeatureEight = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      {!style_2 && (
        <div className="text-feature-eight mt-130 lg-mt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft">
                <div className="pe-xl-5 me-xxl-4 mt-50 lg-mt-10">
                  <div className="title-three mb-50 lg-mb-30">
                    <div className="upper-title">Card</div>
                    <h2>Take control your Money.</h2>
                  </div>
                  <div
                    className="accordion accordion-style-three mb-70 lg-mb-40"
                    id="accordionOne"
                  >
                    {faq_data.map((faq, i) => (
                      <FaqItem key={i} {...faq} parent="accordionOne" />
                    ))}
                  </div>
                  <Link href="/about-us"
                    className="btn-thirteen tran3 flex-fill"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 m-auto wow fadeInRight">
                <div className="media-wrapper md-mt-40">
                  <Image
                    src={screen}
                    alt="screen"
                    className="lazy-img ms-auto"
                    style={imgStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {style_2 && (
        <div className="text-feature-eight mt-160 lg-mt-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 wow fadeInLeft">
                <div className="title-one mt-20">
                  <div className="upper-title">Why Choose Us</div>
                  <h2 className="color-deep">
                    We’ve been helping customer globally.
                  </h2>
                </div>
              </div>
              <div className="col-lg-6 ms-auto wow fadeInRight">
                <div
                  className="accordion accordion-style-three md-mt-40"
                  id="accordionOne"
                >
                  {faq_data_2.map((faq, i) => (
                    <FaqItem key={i} {...faq} parent="accordionOne" cls="fw-bold" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextFeatureEight;
