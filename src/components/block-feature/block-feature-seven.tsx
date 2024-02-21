import React from "react";
import Image, { StaticImageData } from "next/image";
// internal
import icon_1 from "@/assets/images/icon/icon_36.svg";
import icon_2 from "@/assets/images/icon/icon_37.svg";
import icon_3 from "@/assets/images/icon/icon_38.svg";
import screen_1 from "@/assets/images/assets/screen_08.svg";
import screen_2 from "@/assets/images/assets/screen_09.svg";
import screen_3 from "@/assets/images/assets/screen_10.svg";
import shape from "@/assets/images/shape/shape_13.svg";

// image style 


// card item
type IProps = {
  icon: StaticImageData;
  title: string;
  desc: string;
  bg_img: StaticImageData;
};
function CardItem({ icon, title, desc, bg_img }: IProps) {
  return (
    <div className="card-style-nine vstack tran3s w-100 mt-30">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div
          className={`icon tran3s rounded-circle d-flex align-items-center justify-content-center order-last`}
        >
          <Image src={icon} alt="icon" className="lazy-img" />
        </div>
        <h3 className="fw-bold m0 text-dark order-first">{title}</h3>
      </div>
      <p className="mt-35 lg-mt-30 mb-60 lg-mb-40">{desc}</p>
      <Image
        src={bg_img}
        alt="bg-img"
        className="lazy-img mt-auto me-auto ms-auto w-100"
      />
    </div>
  );
}

const BlockFeatureSeven = () => {
  return (
    <div className="block-feature-seven position-relative mt-170 lg-mt-80">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-xl-11 wow fadeInLeft">
              <div className="title-one pe-xxl-5 mb-50 lg-mb-30">
                <h2 className="text-dark">
                  We are here to help you build, manage & protect your wealth.
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex wow fadeInUp">
              <CardItem
                icon={icon_1}
                title="Mutual Funds."
                desc="Mutual funds enable collective investment, managed by professionals for potential growth."
                bg_img={screen_1}
              />
            </div>
            <div className="col-lg-7 d-flex wow fadeInUp" data-wow-delay="0.1s">
              <CardItem
                icon={icon_2}
                title="Pension Scheme."
                desc="Pension schemes ensure financial security during retirement years for eligible individuals. Retirement pensions provide financial security for qualifying individuals."
                bg_img={screen_2}
              />
            </div>
            <div className="col-12 d-flex wow fadeInUp" data-wow-delay="0.2s">
              <div className="card-style-nine vstack tran3s w-100 mt-30">
                <div className="row align-items-end">
                  <div className="col-lg-6">
                    <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                      <Image src={icon_3} alt="" className="lazy-img" />
                    </div>
                    <h3 className="fw-bold mt-30 lg-mt-20 text-dark">
                      International Multi-Currency Visa & Master Card.
                    </h3>
                    <p className="mt-35 lg-mt-30 mb-40">
                      International banking provides global financial services,
                      including cross-border transactions, currency exchange,
                      and offshore investments.
                    </p>
                  </div>
                  <div className="col-lg-5 ms-auto">
                    <Image
                      src={screen_3}
                      alt=""
                      className="lazy-img mt-auto me-auto ms-auto w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureSeven;
