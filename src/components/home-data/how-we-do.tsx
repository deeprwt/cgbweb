import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import screen from "@/assets/images/assets/screen_15.png";
import icon_1 from "@/assets/images/icon/icon_82.svg";
import icon_2 from "@/assets/images/icon/icon_83.svg";
import icon_3 from "@/assets/images/icon/icon_81.svg";

// image style
const imgStyle = {
  height: "auto",
};

// card item
function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center arrow mt-40 md-mt-20">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 md-mt-30 mb-15">{title}</h4>
      <p className="m0 fs-5 lh-base pe-xl-3 ps-xl-3">{subtitle}</p>
    </div>
  );
}

const HowWeDo = () => {
  return (
    <div className="project-details-one service-details position-relative pt-80 lg-pb-80">
      <div className="container details-meta">
        <div>
          <div className="upper-title">Process</div>
          <h3>How We Do</h3>
        </div>
        <p className="text-lg">
          We bring together a team of Technical Architects, Product Experts,
          Coaches, and Industry Experts to provide comprehensive solutions
          tailored to your needs. <br />
          We blend technical prowess with industry insights to deliver
          unparalleled solutions that propel your business forward.
        </p>
        <div className="line-wrapper border-top border-bottom pt-20 pb-60 lg-pb-40 mt-60 lg-mt-40 mb-70 lg-mb-40">
          {/* project details feature start */}
          <div className="row">
            <div className="col-lg-3 wow fadeInUp">
              <CardItem
                icon={icon_1}
                title="Technical Architects"
                subtitle="Craft robust and scalable technical solutions"
              />
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
              <CardItem
                icon={icon_1}
                title="Product Experts"
                subtitle=" Develop innovative products aligned with market demands."
              />
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
              <CardItem
                icon={icon_1}
                title="Coaches"
                subtitle=" Empower your team with guidance and expertise."
              />
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
              <div className="card-style-sixteen text-center position-relative mt-40">
                <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
                  <Image src={icon_2} alt="icon" className="lazy-img" />
                </div>
                <h4 className="fw-bold mt-35 md-mt-30 mb-15">
                  Product Experts
                </h4>
                <p className="m0 fs-5 lh-base pe-xl-3 ps-xl-3">
                  Provide strategic insights to navigate market challenges
                </p>
              </div>
            </div>
          </div>
          {/* project details feature end */}
        </div>
      </div>
    </div>
  );
};

export default HowWeDo;
