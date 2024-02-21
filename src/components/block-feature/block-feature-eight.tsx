import React from "react";
import Image from "next/image";
// internal
import icon from "@/assets/images/icon/icon_09.svg";
import shape from "@/assets/images/shape/shape_16.svg";
import service_data from "@/data/service-data";
import Link from "next/link";

// image style
const imgStyle = {
  height:'auto'
}

const BlockFeatureEight = () => {
  const services = service_data.filter((s) => s.page === "home-4");
  return (
    <div className="block-feature-eight position-relative pt-130 lg-pt-80 pb-130 lg-pb-60">
      <div className="container">
        <div className="position-relative">
          <div className="title-two mb-20 lg-mb-10">
            <h2>Card Features</h2>
          </div>
          <p className="text-lg mb-45 lg-mb-10">
            Digital agency with top rated talented people provide quality
          </p>
          <div className="row">
            {services.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay={`0.${i + 1}s`}
              >
                <div className="card-style-eleven vstack tran3s w-100 mt-30">
                  <Image
                    src={item.icon}
                    alt="icon"
                    className="lazy-img icon me-auto"
                  />
                  <h4 className="fw-500 mt-30 mb-15">{item.title}</h4>
                  <p className="mb-25">
                    {item.desc}
                  </p>
                  <Link href="/service-details"
                    className="arrow-btn tran3s mt-auto stretched-link"
                  >
                    <Image src={icon} alt="icon" className="lazy-img" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="section-btn md-mt-40">
            <Link href="/service-v1" className="btn-thirteen tran3">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" style={imgStyle} />
    </div>
  );
};

export default BlockFeatureEight;
