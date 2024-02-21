import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CounterUp from "../common/counter-up";

// internal
import icon from "@/assets/images/icon/icon_09.svg";
import icon_2 from "@/assets/images/icon/icon_10.svg";
import icon_3 from "@/assets/images/icon/icon_11.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import ab from "@/assets/images/cgbhome/about.png"

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

// counter block
function CounterBlock({
  num,
  text,
  title,
  prev_text,
  delay,
  decimal = false,
}: {
  num: number;
  text: string;
  title: string;
  delay?: string;
  prev_text?: string;
  decimal?: boolean;
}) {
  return (
    <div
      className="counter-block-two text-center mt-35 mb-35 wow fadeInUp"
      data-wow-delay={`0.${delay}s`}
    >
      <div className="main-count fw-500 text-dark d-flex justify-content-center">
        {prev_text && prev_text}
        <span className="counter">
          <CounterUp number={num} text={text} decimal={decimal} />
        </span>
      </div>
      <p className="m0 text-md">{title}</p>
    </div>
  );
}

const TextFeatureHome = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      {!style_2 && (
        <div className="text-feature-one mt-150 lg-mt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 wow fadeInLeft">
                <div className="title-one">
                  <div className="upper-title">About us</div>
                  <h2>Where Technology meets Excellence</h2>
                </div>
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                Experience the extraordinary with CGB Solutions. We innovate relentlessly, 
                transforming challenges into seamless solutions for unparalleled client excellence. 
                Your journey to success starts here.
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
                  <Link href="/about-us" className="btn-four mt-15 me-4">
                    More About us
                  </Link>
                  {/* <Link href="/contact" className="btn-three icon-link mt-15">
                    <span>Request a Callback</span>
                    <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                  </Link> */}
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 wow fadeInRight">
                {/* <Image src={ab} alt="About us" className="w-100"></Image> */}
                <div className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                  <ul className="style-none">
                    <li>IT Consulting</li>
                    <li>Staffing Solutions for diverse industries</li>
                    <li>Digital Solutions improve efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {style_2 && (
          <div className="container">
            {/* <div className="counter-wrapper lg-mt-20">
              <div className="row">
                <CounterBlock num={160} text="+" title="Clients" delay="0" />
                <CounterBlock num={750} text="+" title="Contractor Pool" delay="1" />
                <CounterBlock num={160} text="+" title="Staffing Team" delay="2" />
                <CounterBlock num={6} text="+" title="Global Delivery Center" delay="3" />
              </div>
            </div> */}
            <div className="counter-wrapper lg-mt-20 lg-mb-20">
              <div className="row">
                <div className="col-md-3 col-6">
                  <CounterBlock num={160} text="+" title="Clients" />
                </div>
                <div className="col-md-3 col-6">
                  <CounterBlock
                    num={750}
                    text="+"
                    title="Contractor Pool"
                    // prev_text="$"
                    delay="1"
                    // decimal={true}
                  />
                </div>
                <div className="col-md-3 col-6">
                  <CounterBlock
                    num={160}
                    text="+"
                    title="Staffing Team"
                    delay="2"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <CounterBlock
                    num={6}
                    text="+"
                    title="Global Delivery Center"
                    // prev_text="$"
                    delay="3"
                    // decimal={true}
                  />
                </div>
              </div>
            </div>
          </div>

      )}
    </>
  );
};

export default TextFeatureHome;
