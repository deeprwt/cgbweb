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
import img_2 from "@/assets/images/solutions/outsystems/outsystem1.jpg";
import icon_3 from "@/assets/images/icon/icon_64.svg";
import icon_4 from "@/assets/images/icon/icon_65.svg";
import icon_5 from "@/assets/images/icon/icon_66.svg";
import icon_6 from "@/assets/images/icon/icon_67.svg";
import shape from "@/assets/images/shape/shape_05.svg";


// card item
function CardItem3({
    icon,
    title,
    subtitle,
  }: {
    icon: StaticImageData;
    title: string;
    subtitle: string;
  }) {
    return (
      <div className="card-style-twelve w-100 text-center mt-30">
        <div className="icon m-auto tran3s d-flex align-items-center justify-content-center rounded-circle">
          <Image src={icon} alt="icon" className="lazy-img" />
        </div>
        <h4 className="fw-bold mt-20 mb-15">{title}</h4>
        <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
      </div>
    );
  }


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

const OutsystemsSection = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter((s) => s.page === "outsystems");
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="col-xl-5 col-lg-6 order-2 order-lg-1 wow fadeInRight">
              <div className="ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                <Image
                  src={img_2}
                  alt="cgb aboutus"
                  className="shap-animate"
                  style={{ height: "auto" }}
                ></Image>
                {/* <ul className="style-none">
                        <li>Mobile app easy management & access</li>
                        <li>Ton’s of features for handle the card easily</li>
                        <li>Strong security system.</li>
                    </ul> */}
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 order-1 order-lg-2 wow fadeInLeft">
              <div className="title-one">
                <div className="upper-title">Lightning Speed With an </div>
                <h3>OutSystems</h3>
              </div>
              <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                OutSystems is a high-performance low-code platform that achieves
                serious productivity, creating serious apps with continuous
                innovation. Every aspect of OutSystems is designed from the
                ground up to help organizations develop, deliver, and evolve
                compelling applications that drive innovation at the pace that
                business requires. OutSystems custom development tools and
                automation powered by AI help customers tackle strategic
                challenges such as application modernization, workplace
                innovation, business process automation, and customer experience
                transformation. OutSystems ensures that solutions are secure,
                resilient, Cloud-ready, and built to scale
              </p>
            </div>
            <div className="col-12 wow fadeInUp order-3">
              <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                One of the leading OutSystems partners, CGB Solutions harnesses
                the versatility of the platform and help businesses build
                pixel-perfect, responsive applications that align with their
                current and future market needs. With an aim to deliver
                personalized service, we bring in a wide range of customization
                options to help clients with solutions that work the best for
                them. Our OutSystems consultants combine industry best practices
                with their diversified experience to assist organizations with
                end-to-end solutions from OutSystems consulting to app
                development, support, and maintenance. So, if you are looking to
                build a future-ready digital solution that offers native
                functionalities across environments or modernize a legacy
                application, look no further.
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
                  <h3 className="">OutSystems Services</h3>
                </div>
                <p className="text-lg text-dark mb-35 py-3 md-mb-30">
                  Being one of the reputable OutSystems partners, we help you
                  architect enterprise-grade applications and meet
                  transformation objectives with minimal time and resources.
                </p>
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

      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="col-lg-12 wow fadeInLeft">
              <div className="title-one">
                {/* <div className="upper-title">Lightning Speed With an </div> */}
                <h3>Achieve With OutSystems</h3>
              </div>
              <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                This is not your average low-code. High-performance low-code
                development is an approach to creating software with radical
                productivity and exceptional app experiences for a continuously
                evolving world. <br /> <br /> While low-code is a growing
                software development approach for creating apps,
                high-performance low-code blends power and speed with security
                and scale. It allows IT leaders and developers to build, deploy,
                and manage applications that can transform their businesses.{" "}
                <br /> <br />
                The OutSystems rapid application development platform is
                designed to unleash innovation from across an
                organization.Whether it be a large enterprise or a
                small-to-medium sized business, OutSystems custom development
                experts can build serious applications that solve their biggest
                business challenges. Here&lsquo;s why you can rely on OutSystems:
              </p>
            </div>
            <div className="border-bottom mt-40 pb-50 sm-pb-30">
              <div className="row">
                <div className="col-lg-4 d-flex wow fadeInUp">
                  <CardItem3
                    icon={icon_1}
                    title="Serious Productivity"
                    subtitle="Latest cloud-based technology makes developers 10x more productive"
                  />
                </div>
                <div
                  className="col-lg-4 d-flex wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <CardItem3
                    icon={icon_2}
                    title="Serious Apps"
                    subtitle="Build critical apps that scale to hundreds of millions of users"
                  />
                </div>
                <div
                  className="col-lg-4 d-flex wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <CardItem3
                    icon={icon_3}
                    title="Continuous Innovation"
                    subtitle="Ensuring apps quickly evolve, adapt and update as business imperatives shift"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ends from here  */}

    </>
  );
};

export default OutsystemsSection;
