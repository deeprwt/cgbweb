import React from "react";
import Image, { StaticImageData } from "next/image";
import icon_1 from "@/assets/images/icon/icon_17.svg";
import icon_2 from "@/assets/images/icon/icon_18.svg";
import icon_3 from "@/assets/images/icon/icon_19.svg";
import shape_1 from "@/assets/images/shape/shape_07.svg";
import shape_2 from "@/assets/images/shape/shape_08.svg";
import CounterUp from "../common/counter-up";

// card style
function CardStyle({
  icon,
  num,
  text,
  desc,
  decimal=false
}: {
  icon: StaticImageData;
  num: number;
  text: string;
  desc: string;
  decimal?: boolean;
}) {
  return (
    <div className="card-style-five text-center mt-60">
      <div className="icon d-flex align-content-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <div className="main-count fw-500">
        <CounterUp number={num} text={text} add_style={true} decimal={decimal} />
      </div>
      <p className="ps-xxl-5 ps-xl-3 pe-xxl-5 pe-xl-3">{desc}</p>
    </div>
  );
}

const TextFeatureTwo = () => {
  return (
    <div className="text-feature-two position-relative pt-110 lg-pt-80 pb-110 lg-pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="title-one">
              <h2 className="text-white">
                The Numbers Reflect Our Reputation.
              </h2>
            </div>
          </div>
          <div className="col-lg-5 ms-auto">
            <p className="m0 text-md text-white md-pt-10">
              Efficient problem-solving, insightful market analysis, and
              actionable plans made the consulting invaluable to our business
              success.
            </p>
          </div>
        </div>

        <div className="row gx-0 mt-50 lg-mt-20 md-mt-10">
          <div className="col-lg-4">
            <CardStyle
              icon={icon_1}
              num={120}
              text="mil+"
              desc="We’ve experience more than 10+ years with success."
            />
          </div>
          <div className="col-lg-4">
            <CardStyle
              icon={icon_2}
              num={1.3}
              text="b+"
              desc="We achieve lot for our work from top certified agency."
              decimal={true}
            />
          </div>
          <div className="col-lg-4">
            <CardStyle
              icon={icon_3}
              num={730}
              text="k+"
              desc="We’ve more than happy 3000+ client all over the world."
            />
          </div>
        </div>
      </div>
      <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
      <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default TextFeatureTwo;
