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

const HireTrainDepolySection = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter(
    (s) => s.page === "hire-train-depoly"
  );
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
                <div className="upper-title text-center">  Supercharge your workforce with</div>
              <h3 className="text-center">
               Industry-leading
                Hire-Train-Deploy services
              </h3>
              <p className="text-lg text-center px-4 mb-35 md-mb-30">
                Unlock the full potential of your team with our comprehensive
                Hire-Train-Deploy services at CGB Solutions. We provide
                end-to-end solutions of hiring, training and deploying talented
                individuals who align with your organization&lsquo;s goals.
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
                  <h3 className="text-center">
                    Shake up the way you source tech talent
                  </h3>
                </div>
                <p className="text-lg text-dark text-center mb-35 px-5 py-3 md-mb-30">
                  Get in-demand talent in the chair — while giving diverse tech
                  talent a seat at the table. Hire-Train-Deploy changes the game
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

      <div className="project-details-one service-details position-relative pt-80 lg-pb-80">
        <div className="container details-meta">
          <div>
            {/* <div className="upper-title">Process</div> */}
            <h3 className="text-center">
              A workforce solution that is tailored to your needs
            </h3>
            <p className="text-center">
              Globally unemployment is a huge problem and yet employers complain
              they cannot find the necessary skills for their business needs.
              Lack of experience is one of the main barriers, and India is no
              exception. Employers are under pressure to keep up with the
              growing talent demand — but all too often, the available talent
              lacks the technical training or soft skills employers need now.
            </p>
          </div>
            
        </div>
      </div>

      <div className="block-feature-ten block-feature-six service-details bg-two position-relative mt-150 lg-mt-80 pb-60 pt-60 lg-pb-60">
        <div className="container details-meta">
          <div className="row align-items-center">
            <div className="col-lg-12 wow fadeInUp">
              <div className="title-one mb-50 lg-mb-20">
                <h3 className="text-center">
                  A workforce solution that is tailored to your needs
                </h3>
                <p className="text-center">
                  Globally unemployment is a huge problem and yet employers
                  complain they cannot find the necessary skills for their
                  business needs. Lack of experience is one of the main
                  barriers, and India is no exception. Employers are under
                  pressure to keep up with the growing talent demand — but all
                  too often, the available talent lacks the technical training
                  or soft skills employers need now.
                </p>
              </div>
            </div>
          </div>
          <div className="line-wrapper position-relative">
            <div className="row gx-lg-5">
              <div className="col-xl-4 col-md-6 wow fadeInUp">
                <CardItem2
                  icon={icon_1}
                  title="Faster resource identification and deployment"
                  subtitle="Implementing efficient hiring processes and targeted training programs to swiftly identify and deploy qualified talent for project requirements."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem2
                  icon={icon_2}
                  title="Availability of project-ready talent"
                  subtitle=" Developing a pipeline of skilled individuals through proactive recruitment and comprehensive training, ensuring a readily available pool of talent for immediate project needs."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem2
                  icon={icon_3}
                  title="Reduced hiring expenses"
                  subtitle=" Employing cost-effective hiring methods such as talent development programs and internal promotions to minimize external recruitment costs."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <CardItem2
                  icon={icon_4}
                  title="Cost-effective skilled talent"
                  subtitle="Investing in training initiatives to upskill existing employees, thereby reducing the need for external hires and lowering overall talent acquisition costs."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <CardItem2
                  icon={icon_5}
                  title="Low liability over nonperforming associates"
                  subtitle=" Ensuring rigorous training and performance evaluation processes to mitigate the risk of nonperforming hires, minimizing associated liabilities."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <CardItem2
                  icon={icon_6}
                  title="Higher employee utilization"
                  subtitle="Focusing on effective deployment strategies and workload management to maximize employee productivity and engagement across projects."
                />
              </div>
              {/* <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem2
                  icon={icon_6}
                  title="Long-term sustainability"
                  subtitle="Building a sustainable talent ecosystem by continuously investing in employee development, fostering career growth opportunities, and aligning talent strategies with long-term business objectives."
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default HireTrainDepolySection;
