import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import icon from "@/assets/images/icon/icon_09.svg";
import icon_2 from "@/assets/images/icon/icon_10.svg";
import icon_3 from "@/assets/images/icon/icon_11.svg";
import shape from "@/assets/images/shape/shape_05.svg";

// card item
function CardItem({icon,title,desc}:{icon:StaticImageData;title:string;desc:string}) {
  return (
    <div className="card-style-three d-flex pt-75 lg-pt-40 pb-45 lg-pb-20">
      <Image
        src={icon}
        alt="icon"
        className="lazy-img icon"
      />
      <div className="ps-4">
        <h4 className="fw-bold mb-20">{title}</h4>
        <p> {desc} </p>
      </div>
    </div>
  )
}

function CounterBlock ({num,text,title,delay}:{num:number;text:string;title:string;delay:string}) {
  return (
    <div className="col-md-3 col-6">
      <div className="counter-block-two text-center text-md-start mt-35 wow fadeInUp" 
      data-wow-delay={`0.${delay}s`}>
        <div className="main-count fw-500">
          <span className="counter">{num}</span>{text}
        </div>
        <p className="m0 text-md">{title}</p>
      </div>
    </div>
  )
}

const TextFeatureOne = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      {!style_2 && (
        <div className="text-feature-one mt-150 lg-mt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 wow fadeInLeft">
                <div className="title-one">
                  <div className="upper-title">About us</div>
                  <h2>15k+ Client using Our Services.</h2>
                </div>
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                  Your success is our mission. As business advisors, we offer
                  expert guidance, unlocking your potential for growth and
                  profitability
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
                  <Link href="/about-us" className="btn-four mt-15 me-4">
                    More About us
                  </Link>
                  <Link href="/contact" className="btn-three icon-link mt-15">
                    <span>Request a Callback</span>
                    <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 wow fadeInRight">
                <div className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                  <ul className="style-none">
                    <li>Mobile app easy management & access</li>
                    <li>Ton’s of features for handle the card easily</li>
                    <li>Strong security system.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {style_2 && (
        <div className="text-feature-one mt-150 lg-mt-80">
          <div className="container">
            <div className="line-wrapper position-relative">
              <div className="row align-items-center">
                <div className="col-lg-5 wow fadeInLeft">
                  <div className="title-one">
                    <div className="upper-title">About us</div>
                    <h2>15k+ Client using Our Services.</h2>
                  </div>
                  <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
                    Your success is our mission. As business advisors, we offer
                    expert guidance, unlocking your potential for growth and
                    profitability
                  </p>
                  <Link href="/contact" className="btn-three icon-link mt-15 md-mb-40">
                    <span>Request a Callback</span>
                    <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                  </Link>
                </div>
                <div className="col-lg-6 ms-auto wow fadeInRight">
                  <CardItem icon={icon_2} title="Our Mission" desc="Our mission is to reshape lives by offering financial expertise, faster growth, & securing futures through trusted partnerships & innovation." />
                  <CardItem icon={icon_3} title="Our company vision." desc="Our vision is to create a financially secure future for all, offering innovative solutions & expert guidance to navigate prosperity." />
                </div>
              </div>
              <Image src={shape} alt="shape" className="lazy-img shapes shape_01"/>
            </div>

            <div className="counter-wrapper mt-80 lg-mt-20">
              <div className="row">
                <CounterBlock num={120} text="+" title="Partner with us" delay="0" />
                <CounterBlock num={1.3} text="b+" title="Cumulative trading volume" delay="1" />
                <CounterBlock num={705} text="k" title="Successful Projects" delay="2" />
                <CounterBlock num={1.2} text="%" title="Low interest rate" delay="3" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextFeatureOne;
