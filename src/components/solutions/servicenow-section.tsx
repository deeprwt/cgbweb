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

const ServicenNowSecton = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter(
    (s) => s.page === "servicenow"
  );
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              <h3 className="text-center">
              ServiceNow® Platform* Services <br /> One Place to Find Them All

              </h3>
              <p className="text-lg text-center px-4 mb-35 md-mb-30">
              ServiceNow consulting encompasses advisory, implementation, customization, testing, and support of ServiceNow solutions. A Specialist ServiceNow Partner and an official ServiceNow Reseller, ScienceSoft shares 13 year-experience in ServiceNow and offers services to cover all platform-related needs.
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
                  <h3 className="text-center pb-50">An Outline of Our A-to-Z ServiceNow Services </h3>
                </div>
                {/* <p className="text-lg text-dark mb-35 py-3 md-mb-30">
                  Right here what you need
                </p> */}
                {service_items.map((item, i) => (
                  <div
                    key={item.id}
                    className="col-md-6 d-flex wow fadeInUp"
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
      {/* card2 starting */}
      <div className="block-feature-ten block-feature-six service-details position-relative bg-two mb-50 mt-50 lg-mt-80 pb-60 pt-60 lg-pb-60">
        <div className="container details-meta">
          <div className="row align-items-center">
            <div className="col-lg-10 wow fadeInUp">
              <div className="title-one lg-mb-20">
                <h3>Automation Anywhere Automation Tools</h3>
                {/* <p>
                  Right here what you need 
                </p> */}
              </div>
            </div>
          </div>
          <div className="line-wrapper position-relative">
            <div className="row gx-lg-5">
              <div className="col-xl-4 col-md-6 wow fadeInUp">
                <CardItem2
                  icon={icon_1}
                  title="Community Edition"
                  subtitle="Complete Digital Workforce at your Fingertips"
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem2
                  icon={icon_2}
                  title="Bot Insight"
                  subtitle="Optimize your automation value cycle by automatically turning data into actionable insights for you."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem2
                  icon={icon_3}
                  title="Discovery Bot"
                  subtitle="dentify the processes in your business that can be automated and create bots"
                />
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp">
                <CardItem2
                  icon={icon_4}
                  title="Bot Store"
                  subtitle="World's leading marketplace for bots and packages"
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem2
                  icon={icon_5}
                  title="IQ Bot"
                  subtitle="IQ BOT to employ AI for intelligent document processing."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem2
                  icon={icon_6}
                  title="AARI"
                  subtitle="Your digital assistant at work to upscale automation."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card2 end */}
      {/* card2 starting */}
      
      {/* card2 end */}
    </>
  );
};

export default ServicenNowSecton;
