import React from "react";
import Link from "next/link";
// internal
import faq_data from "@/data/faq-data";
import Image, { StaticImageData } from "next/image";
import service_data from "@/data/service-data";
// images import
import logo_1 from "@/assets/images/solutions/graphic/Logo-Design.svg";
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
import GraphicTechLogo from "../clint-logo/graphic-tech-logo";
import ImgTextOne from "../img-text-feature/img-text-one";

// img style
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
      <p className="m0 fs-5 lh-base">{subtitle}</p>
    </div>
  );
}

const GraphicDesigningSections = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "graphic");
  return (
    <>
      {/* section data start  */}
      <div className="text-feature-one pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-lg-12 py-4  ms-auto d-flex flex-column order-lg-last wow fadeInUp">
              <div className="title-one">
                {/* <div className="upper-title">About us</div> */}
                <h2 className="text-center">
                  We are top-notch Graphic Designing company.
                </h2>
              </div>
              <p className="text-lg my-4">
                Graphic designing is a work of art that captivates one&lsquo;s
                attention and projects one&lsquo;s interest. With the best
                creativity comes the best deals. We at CGB, with all
                professional graphic designers, create graphics that can drive
                your business to success. <br /> <br /> As we are aware of the
                competition and marketing, the correct information is to be
                placed in the required sections. Designs are done in a manner
                that persuades customers for a long time on your site. <br />{" "}
                <br /> Our ultimate goal is to deliver what our clients imagined
                of their websites. As a leading graphic design company, CGB help
                clients carve their brands through our designs. We source
                photographs and infographics that are relevant to your
                industries and create fascinating images. This makes the website
                attractive and drives traffic that leads to products and
                services being sold.
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
      {/* section data end  */}

      {/* card starts from here  */}
      <div className="block-feature-six service-details bg-two position-relative pt-120 lg-pt-60 pb-120 lg-pb-40">
        <div className="container details-meta">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="col-12 col-md-10 m-auto">
                <div className="title-one">
                  <h2 className="text-center">
                    How can your business get benefit from graphic designing?
                  </h2>
                </div>
              </div>
              <div className="row">
                {/* <p className="text-lg text-dark mb-35 md-mb-30">
                  Services We Offer
                </p> */}

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
              </div>
            </div>
          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>
      {/* card end */}

      {/* Section data slider start  */}
      <ImgTextOne
        title="We offer creative graphic design services"
        subtitle="Logo design"
        filter_data="graphic-1"
        img={logo_1}
      />
      <ImgTextOne
        subtitle="Brand identity design"
        filter_data="graphic-2"
        img={logo_1}
        style_2={true}
      />
      <ImgTextOne
        subtitle="Brochure & pamphlet design"
        filter_data="graphic-3"
        cls="d-none"
        img={logo_1}
      />
      <ImgTextOne
        subtitle="Advertising"
        filter_data="graphic-2"
        img={logo_1}
        style_2={true}
      />
      <ImgTextOne
        subtitle="Customized design"
        filter_data="graphic-3"
        cls="d-none"
        img={logo_1}
      />
      <ImgTextOne
        subtitle="Technology-driven solutions"
        filter_data="graphic-2"
        img={logo_1}
        style_2={true}
      />

      {/* Section data slider end  */}

      {/* technolgy logo slider start  */}
      <GraphicTechLogo />
      {/* technolgy logo slider end  */}

      {/* work flow data start  */}

      <div className="block-feature-six project-details-one service-details position-relative pt-80 lg-pb-80">
        <div className="container details-meta">
          <div>
            {/* <div className="upper-title">Process</div> */}
            <h3 className="text-center">
              The flow of graphic designing work we follow
            </h3>
          </div>
          <div className="line-wrapper border-top border-bottom pt-20 pb-60 lg-pb-40 mt-60 lg-mt-40 mb-70 lg-mb-40">
            {/* project details feature start */}
            <div className="row">
              <div className="col-lg-3 wow fadeInUp">
                <CardItem
                  icon={icon_1}
                  title="Collecting project data"
                  subtitle="For any project to get successful, the primary stage of gathering data becomes significant."
                />
              </div>
              <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                <CardItem
                  icon={icon_1}
                  title="Initial wireframe"
                  subtitle="Process of presenting technical specifications and business details to the client if they want any modification. Any suggestions are welcomed"
                />
              </div>
              <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                <CardItem
                  icon={icon_1}
                  title="Shortlist"
                  subtitle="Next comes graphic designing, organizing a brainstorming session with skilled designers to discuss ideas, and adding shades, colors, or shapes to give life to the original idea."
                />
              </div>
              <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                <div className="card-style-sixteen text-center position-relative mt-40">
                  <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <Image src={icon_2} alt="icon" className="lazy-img" />
                  </div>
                  <h4 className="fw-bold mt-35 md-mt-30 mb-15">Start</h4>
                  <p className="m0 fs-5 lh-base">
                    Our job doesn’t end when candidates sign contracts. We
                    provide onboarding and answer all questions. We’re your
                    trusted point of contact throughout a worker’s tenure.
                  </p>
                </div>
              </div>
            </div>
            {/* project details feature end */}
          </div>
        </div>
      </div>
      {/* work flow data end  */}

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
              <p className="text-lg mb-40 lg-mb-20">
                Graphic Designing Services
              </p>
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
