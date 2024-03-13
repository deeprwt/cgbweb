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
import Finacle1 from '@/assets/images/solutions/Finacle/Fincale-1.png'
import Finacle2 from '@/assets/images/solutions/Finacle/Fincale-2.png'
import Finacle3 from '@/assets/images/solutions/Finacle/Fincale-3.png'
import Finacle4 from '@/assets/images/solutions/Finacle/Fincale-4.png'
import Finacle5 from '@/assets/images/solutions/Finacle/Fincale-5.png'
import Finacle6 from '@/assets/images/solutions/Finacle/Fincale-6.png'
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
        title="One Partner to Meet all Your Financial IT needs"
        para="Our Financial IT Services Encompass Software Development,
        Consulting, Comprehensive IT Support, QA, Cybersecurity, and
        Data analytics."
        img={Finacle1}
        subtitle="Financial Software Development"
        subpara="Our Financial IT Services Encompass Software Development, Consulting, Comprehensive IT Support, QA, Cybersecurity, and Data analytics."
        filter_data="finacel-1"
      />
      {/*--------------------Img and orderList tag End------------------ */}

      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne 
        img={Finacle2}
        subtitle="Financial IT Solution Consulting"
        subpara="We Design Robust Solutions Tailored to Your Needs and Deliver a Detailed Project Plan for Risk-Free Implementation."
        filter_data="finacel-2"
        style_2={true}
      />
      {/*--------------------Img and orderList tag Staring------------------ */}

      {/*--------------------Img and orderList tag End------------------ */}
      <ImgTextOne
        img={Finacle3}
        subtitle="Financial Software Product Consulting"
        subpara="We Assist in Idea Productization, CX Strategy Creation, and Technical Design to Help You Plan and Launch a Winning Financial Solution."
        filter_data="finacel-3"
        cls="d-none"
      />
      {/*--------------------Img and orderList tag End------------------ */}
      {/*--------------------Img and orderList tag Staring------------------ */}
      
    
      {/*--------------------Img and orderList tag End------------------ */}
      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne
        img={Finacle4}
        subtitle="Financial Software Modernization"
        subpara="We Upgrade Your Existing Software to Help You Get a Modern Solution at an Optimal Cost and with Minimal Disruption to Business Workflows."
        filter_data="finacel-4"
        style_2={true}
      />
      {/*--------------------Img and orderList tag End------------------ */}
      
      {/*--------------------Img and orderList tag Staring------------------ */}
      <ImgTextOne

        img={Finacle6}
        subtitle=" Quality Assurance of Financial Solutions"
        subpara="We Offer Versatile QA Services to Ensure Top-Notch Quality
        of Financial IT Systems."
        filter_data="finacel-7"
        cls="d-none"
      />
      {/*--------------------Img and orderList tag End------------------ */}
       {/*--------------------Img and orderList tag Staring------------------ */}
       <ImgTextOne
        img={Finacle5}
        subtitle="Managed Financial IT Services"
        subpara=" We Monitor, Troubleshoot, and Upgrade All Components of Your Financial IT Infrastructure and Apps to Keep Them Stable, Cost-Effective, and Relevant to Your Needs. Our Teams Adapt to Your Time Zones and Business Hours."
        filter_data="finacel-6"
        style_2={true}
      />
      {/*--------------------Img and orderList tag End------------------ */}
      {/* card2 end */}
      {/* card2 starting */}

      {/* card2 end */}
    </>
  );
};

export default FinacleSecton;
