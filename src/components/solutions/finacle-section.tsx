import React from "react";
import Link from "next/link";
import Slider from "react-slick";
// internal
import faq_data from "@/data/faq-data";
import Image, { StaticImageData } from "next/image";
import service_data from "@/data/service-data";
import shape_1 from "@/assets/images/shape/shape_11.svg";
import shape_2 from "@/assets/images/shape/shape_12.svg";
import screen from "@/assets/images/assets/screen_11.png";
import FaqItem from "@/components/faq/faq-item";
import icon_1 from "@/assets/images/icon/icon_82.svg";
import icon_2 from "@/assets/images/icon/icon_83.svg";
import img1 from "@/assets/images/solutions/contract-staffing/contract-staffing1.svg";

import icon_3 from "@/assets/images/icon/icon_64.svg";
import icon_4 from "@/assets/images/icon/icon_65.svg";
import icon_5 from "@/assets/images/icon/icon_66.svg";
import icon_6 from "@/assets/images/icon/icon_67.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import Finacle1 from '@/assets/images/solutions/Finacle/Fincale-1.jpg'
import Finacle2 from '@/assets/images/solutions/Finacle/Fincale-2.jpg'
import Finacle3 from '@/assets/images/solutions/Finacle/Fincale-3.jpg'
import Finacle4 from '@/assets/images/solutions/Finacle/Fincale-4.jpg'
import Finacle5 from '@/assets/images/solutions/Finacle/Fincale-5.jpg'
import Finacle6 from '@/assets/images/solutions/Finacle/Fincale-6.jpg'
import ImgTextOne from "../img-text-feature/img-text-one";

// card item
function CardItem2({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen d-flex mt-60 lg-mt-40 mb-60 lg-mb-10">
      <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <div className="text">
        <h4 className="fw-bold mb-20 sm-mb-10">{title}</h4>
        <p className="m0">{subtitle}</p>
      </div>
    </div>
  );
}

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

const FinacleSecton = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "finacle");
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              <h3 className="text-center">
                Financial IT Services and Solutions
              </h3>
              <p className="text-lg text-center px-4 mb-35 md-mb-30">
                ScienceSoft has been an end-to-end technology partner for
                companies from the finance sector, helping them smoothly
                digitalize their business operations and deliver top-of-the-line
                customer experience without IT budget overruns.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Ends from here  */}

      {/* card starts from here  */}
      <div className="block-feature-six service-details bg-two position-relative pt-50 lg-pt-60 pb-80 lg-pb-40">
        <div className="container details-meta">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="row">
                <div className="title-one">
                  {/* <div className="upper-title">Core aspects of</div> */}
                  <h3 className="text-center pb-50">Whom We Serve </h3>
                </div>
                {/* <p className="text-lg text-dark mb-35 py-3 md-mb-30">
                  Right here what you need
                </p> */}
                {service_items.map((item, i) => (
                  <div
                    key={item.id}
                    className="col-md-3 d-flex wow fadeInUp"
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
                      <h4 className="fw-bold mt-30 mb-30 text-center">
                        {item.title}
                      </h4>
                      {/* <p className="text-center">{item.desc}</p> */}
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
      {/* card2 starting */}

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        /* Main Heading   */
        title="One Partner to Meet All Your Financial IT Needs"
        para="Our financial IT services encompass software development,
        consulting, comprehensive IT support, QA, cybersecurity, and
        data analytics."
        img={Finacle1}
        subtitle="Financial software development"
        subpara="Our financial IT services encompass software development, consulting, comprehensive IT support, QA, cybersecurity, and data analytics."
        filter_data="finacel-1"
      />
      {/*--------------------Img and orderList tag End------------------ */}

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        title="One Partner to Meet All Your Financial IT Needs"
        para="Our financial IT services encompass software development,
        consulting, comprehensive IT support, QA, cybersecurity, and
        data analytics."
        img={Finacle2}
        subtitle="Financial IT solution consulting"
        subpara="We design robust solutions tailored to your needs and deliver a detailed project plan for risk-free implementation."
        filter_data="finacel-2"
        style_2={true}
      />
      {/*--------------------Img and orderList tag Staring------------------ */}

      {/*--------------------Img and orderList tag End------------------ */}
      <ImgTextOne
        title="One Partner to Meet All Your Financial IT Needs"
        para="Our financial IT services encompass software development,
        consulting, comprehensive IT support, QA, cybersecurity, and
        data analytics."
        img={Finacle3}
        subtitle="Financial software product consulting"
        subpara="We assist in idea productization, CX strategy creation, and technical design to help you plan and launch a winning financial solution."
        filter_data="finacel-3"
        cls="d-none"
      />
      {/*--------------------Img and orderList tag End------------------ */}
      {/*--------------------Img and orderList tag Staring------------------ */}
      
    
      {/*--------------------Img and orderList tag End------------------ */}
      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        title="One Partner to Meet All Your Financial IT Needs"
        para="Our financial IT services encompass software development,
        consulting, comprehensive IT support, QA, cybersecurity, and
        data analytics."
        img={Finacle4}
        subtitle="Financial software modernization"
        subpara="We upgrade your existing software to help you get a modern solution at an optimal cost and with minimal disruption to business workflows."
        filter_data="finacel-4"
        style_2={true}
      />
      {/*--------------------Img and orderList tag End------------------ */}
      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        title="One Partner to Meet All Your Financial IT Needs"
        para="Our financial IT services encompass software development,
        consulting, comprehensive IT support, QA, cybersecurity, and
        data analytics."
        img={Finacle5}
        subtitle="Managed financial IT services"
        subpara=" We monitor, troubleshoot, and upgrade all components of your financial IT infrastructure and apps to keep them stable, cost-effective, and relevant to your needs. Our teams adapt to your time zones and business hours."
        filter_data="finacel-6"
        style_2={true}
      />
      {/*--------------------Img and orderList tag End------------------ */}

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        title="One Partner to Meet All Your Financial IT Needs"
        para="Our financial IT services encompass software development,
        consulting, comprehensive IT support, QA, cybersecurity, and
        data analytics."
        img={Finacle6}
        subtitle=" Quality assurance of financial solutions"
        subpara="We offer versatile QA services to ensure top-notch quality
        of financial IT systems."
        filter_data="finacel-7"
        cls="d-none"
      />
      {/*--------------------Img and orderList tag End------------------ */}

      {/* card2 end */}
      {/* card2 starting */}

      {/* card2 end */}
    </>
  );
};

export default FinacleSecton;
