import React from "react";
import Link from "next/link";
import Slider from "react-slick";
// internal
import faq_data from "@/data/faq-data";
import Image, { StaticImageData } from "next/image";
import service_data from "@/data/service-data";
import shape_1 from "@/assets/images/shape/shape_11.svg";
import shape_2 from "@/assets/images/shape/shape_12.svg";
import icon_1 from "@/assets/images/icon/icon_82.svg";
import icon_2 from "@/assets/images/icon/icon_83.svg";
import icon_3 from "@/assets/images/icon/icon_64.svg";

import bg_image from "@/assets/images/solutions/mendix.jpg";

const backImg = {
  backgroundImage: `url('${bg_image.src}')`,
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
    <div className="card-style-sixteen text-center mt-40 md-mt-20">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 md-mt-30 mb-15">{title}</h4>
      <p className="m0 fs-5 lh-base">{subtitle}</p>
    </div>
  );
}

const OracleSection = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "oracle");
  return (
    <>
      <div className="text-feature-five service-details position-relative mt-150 lg-mt-80 pb-50">
        <div className="container">
          <div className="bg-wrapper">
            <div className="row">
              <div className="col-lg-7 ms-auto d-flex flex-column order-lg-last">
                <div className="text-wrapper details-meta pt-50 pb-60 lg-pb-40 ps-3 ps-xxl-5 pe-3 pe-xxl-5">
                  <div className="title-one">
                    <h3 className="text-dark">What is Oracle NetSuite</h3>
                  </div>
                  <p className="text-lg text-dark mt-25 mb-35 lg-mb-30">
                    Oracle NetSuite is a leading cloud-based Enterprise Resource
                    Planning (ERP) software that combines financial management,
                    customer relationship management (CRM), inventory and order
                    management, e-commerce, and more into a single, integrated
                    platform. It provides businesses with real-time visibility
                    into their operations, enabling better decision-making,
                    improved efficiency, and enhanced collaboration.
                  </p>
                  {/* <Link href="/about-us"
                    className="btn-eleven d-inline-flex align-items-center mt-40"
                  >
                    <span className="text">More about us</span>
                    <div className="icon tran3s rounded-circle d-flex align-items-center">
                      <Image src={icon_1} alt="icon" className="lazy-img" />
                    </div>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-5 d-flex order-lg-first">
                <div
                  className="media-wrapper w-100 d-flex align-items-center justify-content-center position-relative"
                  style={backImg}
                >
                  {/* <Image
                    src={screen}
                    alt="screen"
                    className="lazy-img shapes screen_01"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              <div className="upper-title text-center">
                Unlock Your Business Potential
              </div>
              <h3 className="text-center">Oracle NetSuite ERP</h3>
              <p className="text-lg text-center px-4 mb-35 md-mb-30">
                Welcome to the world of Oracle NetSuite, a comprehensive
                cloud-based ERP solution designed to streamline your business
                operations and drive growth. With its robust features and
                powerful functionalities, NetSuite empowers businesses across
                various industries to achieve efficiency, agility, and
                scalability.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Ends from here  */}

      {/* card starts from here  */}
      <div className="block-feature-six service-details bg-two position-relative pt-80 lg-pt-60 pb-80 lg-pb-40">
        <div className="container details-meta">
          <div className="row gx-lg-5">
            <div className="col-lg-12">
              <div className="row">
                <div className="title-one">
                  {/* <div className="upper-title">Core aspects of</div> */}
                  <h3 className="mb-80">Challenges that NetSuite Solves</h3>
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
              </div>
            </div>
          </div>
        </div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
      </div>
      {/* card end */}

      <div className="text-feature-seven mt-170 lg-mt-80 service-details">
        <div className="container">
          <div className="border-bottom mt-40 pb-50 sm-pb-30 details-meta">
            <div className="row">
              <div className="title-one lg-mb-10 wow fadeInUp">
                <h3>Benefits of Oracle NetSuite</h3>
              </div>
              <p className="text-xl text-dark mb-30 lg-mb-10">
                There are a plethora of benefits that Oracle NetSuite ERP can
                offer, including:
              </p>
              <div className="col-lg-4 d-flex wow fadeInUp">
                <CardItem
                  icon={icon_1}
                  title="Streamline Financial Processes"
                  subtitle="Automate and streamline your financial operations to enhance efficiency and productivity."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem
                  icon={icon_2}
                  title="Enhance Inventory Visibility"
                  subtitle="Gain real-time visibility into inventory levels, minimizing costs and ensuring timely order fulfillment."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem
                  icon={icon_3}
                  title="Seamless Order Management"
                  subtitle="Streamline and error-proof your order management and procurement processes for flawless operations."
                />
              </div>
              <div
                className="col-lg-6 d-flex wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <CardItem
                  icon={icon_2}
                  title="Optimize the Supply Chain"
                  subtitle="Improve the flow of goods across the entire value chain, from suppliers to customers, for enhanced control and efficiency."
                />
              </div>
              <div
                className="col-lg-6 d-flex wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <CardItem
                  icon={icon_3}
                  title="Improve Warehouse Efficiency"
                  subtitle="Enhance warehouse operations by optimizing the putaway process and reducing errors in picking."
                />
              </div>
              {/* <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.5s">
              <CardItem
                icon={icon_1}
                title="Artificial Intelligence"
                subtitle="Leverage smart applications; seamlessly integrate AI and cognitive services to elevate the effectiveness of your solutions."
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.6s">
              <CardItem
                icon={icon_2}
                title="
                Smart Automation"
                subtitle="Deliver seamless end-to-end process automation with integrated applications that connect people, data, and systems."
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.7s">
              <CardItem
                icon={icon_3}
                title="Data Integration"
                subtitle="Be open and extensible at all levels: platform, models, and apps. Integrate data and logic from any service, system, or source."
              />
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="text-feature-seven mt-60 lg-mt-60 service-details">
        <div className="container">
          <div className="border-bottom mt-40 pb-50 sm-pb-30 details-meta">
            <div className="row">
              {/* <div className="title-one lg-mb-10 wow fadeInUp">
                    <h3>Benefits of Oracle NetSuite</h3>
                </div> */}
              <p className="text-xl text-dark mb-30 lg-mb-10">
                Even better, these benefits are not exclusive to a singular
                industry. Oracle NetSuite offers a wide range of benefits across
                different industries, such as:
              </p>
              <div className="col-lg-4 d-flex wow fadeInUp">
                <CardItem
                  icon={icon_1}
                  title="Manufacturing"
                  subtitle="Streamline production processes, manage complex supply chains, and improve operational efficiency."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem
                  icon={icon_2}
                  title="
                E-commerce"
                  subtitle="Integrate your e-commerce platform with back-end operations for seamless order processing and inventory management."
                />
              </div>
              <div
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem
                  icon={icon_3}
                  title="
                Retail"
                  subtitle="Seamlessly connect online and in-store operations, deliver personalized experiences, and improve inventory management."
                />
              </div>
              <div
                className="col-lg-6 d-flex wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <CardItem
                  icon={icon_2}
                  title="Services"
                  subtitle="Efficiently manage projects, resource allocation, time tracking, and billing for professional services firms."
                />
              </div>
              <div
                className="col-lg-6 d-flex wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <CardItem
                  icon={icon_3}
                  title="Wholesale Distribution"
                  subtitle="Optimize inventory, automate order management, and enhance customer service."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OracleSection;
