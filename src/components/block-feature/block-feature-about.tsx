import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon from "@/assets/images/icon/icon_27.svg";
import shape_1 from "@/assets/images/shape/shape_11.svg";
import shape_2 from "@/assets/images/shape/shape_12.svg";
import service_data from "@/data/service-data";

const BlockFeatureAbout = ({ style_2 = false }: { style_2?: boolean }) => {
  const service_items = service_data.filter((s) => s.page === "home-3");
  return (
    <>
      {!style_2 &&
        <div className="block-feature-six position-relative pt-150 lg-pt-80 pb-120 lg-pb-50">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-lg-4 wow fadeInLeft">
                <div className="title-one">
                  <h2 className="text-dark">What we do</h2>
                </div>
                <p className="text-lg text-dark mt-40 md-mt-20 mb-35 md-mb-30">
                  Inciddnt ut labore et dolor magna aliu. ad mim venam, quis
                  nostru{" "}
                </p>
                <Link href="/service-v2"
                  className="btn-eleven d-inline-flex align-items-center"
                >
                  <span className="text">All Services</span>
                  <div className="icon tran3s rounded-circle d-flex align-items-center">
                    <Image src={icon} alt="icon" className="lazy-img" />
                  </div>
                </Link>
              </div>
              <div className="col-lg-8 md-mt-50">
                <div className="row">
                  {service_items.map((item, i) => (
                    <div key={item.id}
                      className="col-md-6 d-flex wow fadeInUp"
                      data-wow-delay={`0.${i}s`}
                    >
                      <div className="card-style-eight position-relative vstack tran3s w-100 mb-30 active">
                        <div className="icon d-flex align-items-center">
                          <Image src={item.icon} alt="icon" className="lazy-img"/>
                        </div>
                        <h4 className="fw-bold mt-30 mb-20">{item.title}</h4>
                        <p>{item.desc}</p>
                        <Link href="/service-details" className="stretched-link"></Link>
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
      }

      {style_2 && 
      <div className="block-feature-six bg-two position-relative pt-150 lg-pt-60 pb-120 lg-pb-40">
        <div className="container">
          <div className="row gx-lg-5">

            <div className="col-lg-12">
              <div className="row">
              <div className="col-lg-4 wow fadeInLeft">
              <div className="title-one">
                <h2>What we do</h2>
              </div>
              <p className="text-lg text-dark mt-40 md-mt-20 mb-35 md-mb-30">We specialize in guiding businesses through the essential pillars of digital transformation:</p>
              <Link href="/contact" className="btn-eleven d-inline-flex align-items-center md-mb-60">
                <span className="text">Contact Us</span>
                <div className="icon tran3s rounded-circle d-flex align-items-center">
                  <Image src={icon} alt="icon" className="lazy-img" />
               </div>
              </Link>
            </div>
                {service_items.map((item, i) => (
                  <div key={item.id} className="col-md-4 d-flex wow fadeInUp" data-wow-delay={`0.${i}s`}>
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className="icon d-flex align-items-center">
                      <Image src={item.icon} alt="icon" className="lazy-img" />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20">{item.title}</h4>
                      <p>{item.desc}</p>
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
      </div>}
    </>
  );
};

export default BlockFeatureAbout;
