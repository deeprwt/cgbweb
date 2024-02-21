import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import icon_1 from "@/assets/images/icon/icon_20.svg";
import icon_2 from "@/assets/images/icon/icon_21.svg";
import icon_3 from "@/assets/images/icon/icon_22.svg";
import shape_1 from "@/assets/images/shape/shape_05.svg";
import shape_2 from "@/assets/images/shape/shape_06.svg";
import arrow_icon from "@/assets/images/icon/icon_09.svg";

// card item
function BlockCardItem({
  icon,
  title,
  subtitle,
  isActive,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
  isActive?: boolean;
}) {
  return (
    <div
      className={`card-style-six text-center vstack tran3s w-100 mt-30 ${isActive ? "active" : ""}`}
    >
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-40 md-mt-30 mb-25">{title}</h4>
      <p className="mb-20">{subtitle}</p>
      <Link href="/service-v2"
        className="arrow-btn tran3s m-auto stretched-link"
      >
        <Image src={arrow_icon} alt="icon" className="lazy-img" />
      </Link>
    </div>
  );
}

const BlockFeatureFour = () => {
  return (
    <div className="block-feature-four position-relative mt-150 lg-mt-80 pb-150 lg-pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-9 m-auto wow fadeInUp">
            <div className="title-one text-center mb-50 lg-mb-20">
              <h2>We are here to help you build, & protect your wealth.</h2>
            </div>
          </div>
        </div>
        <div className="row gx-xxl-5">
          <div className="col-lg-4 d-flex wow fadeInUp">
            <BlockCardItem
              icon={icon_1}
              title="Expert Advisor"
              subtitle="Elit esse cillum dolore eu fugiat nulla pariatur"
            />
          </div>

          <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.1s">
            <BlockCardItem
              icon={icon_2}
              title="Highly Secured"
              subtitle="Elit esse cillum dolore eu fugiat nulla pariatur"
              isActive={true}
            />
          </div>
          <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.2s">
            <BlockCardItem
              icon={icon_3}
              title="Management"
              subtitle="Elit esse cillum dolore eu fugiat nulla pariatur"
            />
          </div>
        </div>
      </div>
      <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
      <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default BlockFeatureFour;
