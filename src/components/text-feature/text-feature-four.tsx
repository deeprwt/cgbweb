import React from "react";
import Image from "next/image";
import ceo_img from "@/assets/images/media/img_19.jpg";
import shape from "@/assets/images/shape/shape_13.svg";
import CounterUp from "../common/counter-up";

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
      className="counter-block-two text-center text-md-start mt-35 wow fadeInUp"
      data-wow-delay={`0.${delay}s`}
    >
      <div className="main-count fw-500 text-dark d-flex">
        {prev_text && prev_text}
        <span className="counter">
          <CounterUp number={num} text={text} decimal={decimal} />
        </span>
      </div>
      <p className="m0 text-md">{title}</p>
    </div>
  );
}

const TextFeatureFour = () => {
  return (
    <div className="text-feature-four position-relative pt-150 lg-pt-80">
      <div className="container">
        <div className="row">
          <div className="col-md-8 order-md-last wow fadeInRight">
            <p className="quote-text text-dark ps-xl-5">
              <span className="fw-500 text-decoration-underline">7.42m+</span>{" "}
              clients experience banking excellence by us. Trusted services,
              customer focused solutions,{" "}
              <span className="opacity-25">
                and a legacy of financial reliability.
              </span>
            </p>
          </div>
          <div className="col-md-4 order-md-first wow fadeInLeft">
            <div className="d-flex align-items-center mt-10 sm-mt-30">
              <Image
                src={ceo_img}
                alt="ceo_img"
                className="lazy-img avatar rounded-circle"
              />
              <div className="ps-3">
                <div className="name fw-500 text-dark">Musa Jamy.</div>
                <p className="m0">CEO & Head of babun.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="counter-wrapper mt-70 lg-mt-40">
          <div className="row">
            <div className="col-md-3 col-6">
              <CounterBlock num={120} text="+" title="Partner with us" />
            </div>
            <div className="col-md-3 col-6">
              <CounterBlock
                num={1.3}
                text="b+"
                title="Cumulative trading volume"
                prev_text="$"
                delay="1"
                decimal={true}
              />
            </div>
            <div className="col-md-3 col-6">
              <CounterBlock
                num={705}
                text="k"
                title="Successful Projects"
                delay="2"
              />
            </div>
            <div className="col-md-3 col-6">
              <CounterBlock
                num={1.2}
                text="%"
                title="Low interest rate"
                prev_text="$"
                delay="3"
                decimal={true}
              />
            </div>
          </div>
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
      <Image src={shape} alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default TextFeatureFour;
