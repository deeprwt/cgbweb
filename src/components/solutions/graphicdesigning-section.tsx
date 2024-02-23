import React from "react";
import Link from "next/link";
// internal
import faq_data from "@/data/faq-data";
import Image from "next/image";
import service_data from "@/data/service-data";
// images import
import screen_1 from "@/assets/images/assets/screen_04.svg";
import img_1 from "@/assets/images/solutions/webdevlopment/1.jpg";
import icon from "@/assets/images/icon/icon_27.svg";
import shape_1 from "@/assets/images/shape/shape_11.svg";
import shape_2 from "@/assets/images/shape/shape_12.svg";
import screen from "@/assets/images/assets/screen_11.png";
import FaqItem from "@/components/faq/faq-item";
import about from "@/assets/images/assets/screen_14.png";
import AppTechLogo from "../clint-logo/app-tech-logo";

// internal
import slider_1 from "@/assets/images/media/img_37.jpg";
import slider_2 from "@/assets/images/media/img_01.jpg";
import slider_3 from "@/assets/images/media/img_02.jpg";
import icon_1 from "@/assets/images/icon/icon_85.svg";
import icon_2 from "@/assets/images/icon/icon_88.svg";
import icon_3 from "@/assets/images/icon/icon_89.svg";

// img style
const imgStyle = {
  height: "auto",
};

const GraphicDesigningSections = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "app-1");
  return (
    <>
      {/* Section data slider start  */}
      <div className="project-details-two light-bg border-top pt-150 lg-pt-80 pb-95 lg-pb-60">
        <div className="container">
          <div className="bg-wrapper">
            <div className="row">
              <div className="col-lg-5">
                <div className="slider-wrapper">
                <div
                  className="h-100 bg-cls"
                  style={{ backgroundImage: `url(${slider_2.src})` }}
                ></div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="title-one mb-40 lg-mb-20">
                    <div className="upper-title">Customer Centric</div>
                    <h2>Global Graphic Design Agency</h2>
                  </div>
                  <p className="text-lg mb-40 lg-mb-20">
                    We are your one-stop solution for your complete digital
                    marketing and graphic design requirements. Uplift your
                    brand's perception through our unmatched creative solutions.
                  </p>
                  {/* <Link href="/contact" className="btn-four mt-15 me-4">
                        Contact us
                    </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section data slider end  */}

      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row details-meta">
            <div className="col-xxl-12 col-lg-12 py-4  ms-auto d-flex flex-column order-lg-last wow fadeInRight">
              <div className="title-one">
                {/* <div className="upper-title">About us</div> */}
                <h3>We are top-notch mobile app development company.</h3>
              </div>
              <p className="text-lg my-4">
                CGB is one of India’s most promising full-service digital
                agency, headquartered in Delhi-NCR. Driven by a strong team of
                seasoned professionals including Conceptualizers, UI/UX Experts,
                Experienced Web & Mobile App Engineers, Frontend & Markup
                Developers, we provide everything that your business might need
                for a complete digital transformation. We construct digital
                presences that convert from the get-go. We work with
                organizations all over the world and in all industries, from
                SMEs right through to corporate goliaths. <br />
                <br />
                At CGB, we have a commitment towards a long-term relationship.
                Though a lot of good can come from a carefully planted idea,
                more yet can come from one that is nourished and maintained.
              </p>
              <div>
                <Link href="/contact" className="btn-four mt-15">
                  Contact us
                </Link>
              </div>
            </div>
            {/* <div className="col-xxl-5 col-lg-5 py-4 d-flex order-lg-first wow fadeInLeft">
              <div className="ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-center">
                        <Image src={img_1} alt="cgb aboutus" className="shap-animate" style={{height:"auto"}} ></Image>
                    </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* card starts from here  */}
      <div className="block-feature-six service-details bg-two position-relative pt-150 lg-pt-60 pb-120 lg-pb-40">
        <div className="container details-meta">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="row">
                {/* <div className="title-one">
                  <h3>Web Development</h3>
                </div>
                <p className="text-lg text-dark mb-35 md-mb-30">
                  Services We Offer
                </p> */}
                <div className="col-lg-4 d-flex  wow fadeInLeft">
                  <div className="ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-center">
                    <Image
                      src={about}
                      alt="cgb aboutus"
                      className="shap-animate"
                      style={{ height: "auto" }}
                    ></Image>
                  </div>
                </div>
                {service_items.map((item, i) => (
                  <div
                    key={item.id}
                    className="col-md-4 d-flex wow fadeInUp"
                    data-wow-delay={`0.${i}s`}
                  >
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className="icon d-flex align-items-center align-self-center">
                        <Image
                          src={item.icon}
                          alt="icon"
                          className="lazy-img"
                        />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20 text-center">
                        {item.title}
                      </h4>
                      <p className="text-center">{item.desc}</p>
                      {/* <Link href="/service-details" className="stretched-link"></Link> */}
                    </div>
                  </div>
                ))}
                <div className="col-lg-4 d-flex  wow fadeInLeft">
                  <div className="ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-center">
                    <Image
                      src={about}
                      alt="cgb aboutus"
                      className="shap-animate"
                      style={{ height: "auto" }}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>
      {/* card end */}

      {/* technolgy logo slider start  */}
      <AppTechLogo />
      {/* technolgy logo slider end  */}

      {/* accordian structure reasone to choose start  */}
      <div
        className={`faq-section-one ${
          cls ? cls : "mt-150 mb-120 lg-mt-120 md-mt-80"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="title-one mb-40 lg-mb-20">
                <h2>Benefits of Outsourcing </h2>
              </div>
              <p className="text-lg mb-40 lg-mb-20">Web Development Services</p>
              <div
                className="accordion accordion-style-one mt-15 md-mt-50"
                id="accordionOne"
              >
                {faq_data
                  .filter((faq) => faq.page === "web-2")
                  .map((faq, i) => (
                    <FaqItem key={i} {...faq} parent="accordionOne" />
                  ))}
              </div>
            </div>
            <div className="col-lg-5 wow fadeInLeft">
              <Image src={screen} alt="screen" className="lazy-img h-auto" />
            </div>
          </div>
        </div>
      </div>
      {/* accordian end */}
    </>
  );
};

export default GraphicDesigningSections;
