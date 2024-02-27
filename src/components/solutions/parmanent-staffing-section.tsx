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

const ParmanentStaffingSection = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter(
    (s) => s.page === "parmanent-staffing"
  );
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              <h3 className="text-center">
                When to choose our permanent recruitment solution
              </h3>
              <p className="text-lg text-center px-4 mb-35 md-mb-30">
                Hiring permanently is a great way to grow your business. We act
                as an extension to your company and handle everything from
                talent acquisition to salary negotiations.
              </p>
            </div>
            <div className="col-xl-5 col-lg-5 wow fadeInRight">
              <Image
                src={img1}
                layout="responsive"
                alt="About us"
                className="w-100 h-auto"
              ></Image>
            </div>
            <div className="col-xl-7 col-lg-7 wow fadeInLeft">
              <div className="mt-2">
                <ul className="style-none list-item pb-20">
                  <li className="lim">
                    When you have a tight deadline to hire, and are struggling
                    to find the right talent
                  </li>
                  <li className="lim">
                    When you need help finding and attracting hard-to-source
                    candidates
                  </li>
                  <li className="lim">
                    When you want a personal consultant with industry experience
                    and a wide network
                  </li>
                  <li className="lim">
                    When you need continual expert support at small or large
                    scales
                  </li>
                  <li className="lim">
                    When you do not have specific expertise in a given field
                  </li>
                  <li className="lim">
                    When you don&lsquo;t have your own in-house dedicated recruiters
                  </li>
                </ul>
              </div>
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
                    Find the perfect permanent fit
                  </h3>
                </div>
                <p className="text-lg text-dark text-center mb-35 px-5 py-3 md-mb-30">
                  We help you directly hire new talent at any scale of business
                  or recruitment volume
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
              Recruiting for permanent placements that last
            </h3>
            <p className="text-center">
              We help you recruit top talent for all your permanent direct-hire
              roles, securing the skills needed for your organization&lsquo;s ongoing
              success. <br /> We utilize our recruiting experts and have direct
              access to a wide range of talent, including hard-to-reach
              professionals who are not actively looking for a new job.
            </p>
          </div>
          <div className="line-wrapper border-top border-bottom pt-20 pb-60 lg-pb-40 mt-60 lg-mt-40 mb-70 lg-mb-40">
            {/* project details feature start */}
            <div className="row">
              <div className="col-lg-3 wow fadeInUp">
                <CardItem
                  icon={icon_1}
                  title="Talent acquisition at scale"
                  subtitle="We have a broad and up-to-date candidate database and use a combination of online as well as offline strategies or attraction campaigns to proactively source potential hires."
                />
              </div>
              <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                <CardItem
                  icon={icon_1}
                  title="Assessing the right fit"
                  subtitle="Each individual is thoroughly screened, and if you require candidates with particular skill sets, we evaluate them to determine if they possess the necessary skills and training."
                />
              </div>
              <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
                <CardItem
                  icon={icon_1}
                  title="Finding the best match"
                  subtitle="We provide you with a selection of the best candidates, having already checked references, negotiated salary, and validated the right to work."
                />
              </div>
              <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                <div className="card-style-sixteen text-center position-relative mt-40">
                  <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <Image src={icon_2} alt="icon" className="lazy-img" />
                  </div>
                  <h4 className="fw-bold mt-35 md-mt-30 mb-15">
                    Delivering to your needs
                  </h4>
                  <p className="m0 fs-5 lh-base">
                    Our job doesn&lsquo;t end when candidates sign contracts. We
                    provide onboarding and answer all questions. We&lsquo;re your
                    trusted point of contact throughout a worker&lsquo;s tenure.
                  </p>
                </div>
              </div>
            </div>
            {/* project details feature end */}
          </div>
        </div>
      </div>

      <div className="block-feature-ten block-feature-six service-details bg-two position-relative mt-150 lg-mt-80 pb-60 pt-60 lg-pb-60">
        <div className="container details-meta">
          <div className="row align-items-center">
            <div className="col-lg-8 wow fadeInUp">
              <div className="title-one mb-50 lg-mb-20">
                <h3>Powered by technology</h3>
                <p>
                  We responsibly use technology to attract, engage, train, and
                  retain top talent for your business.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="line-wrapper position-relative">
            <div className="row gx-lg-5">
              <div className="col-xl-4 col-md-6 wow fadeInUp">
                <CardItem2
                  icon={icon_1}
                  title="Nurture"
                  subtitle="Using our extensive proprietary data, we nurture existing talent, ensuring you have a pool of great candidates ready when you need them."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem2
                  icon={icon_2}
                  title="Attract"
                  subtitle="We use the most in-demand job boards and social media channels use programmatic advertising to source the best candidates."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem2
                  icon={icon_3}
                  title="Engage"
                  subtitle="We use a number of digital channels to engage talent for your business, from email to our branded candidate apps and chatbots."
                />
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp">
                <CardItem2
                  icon={icon_4}
                  title="Assess"
                  subtitle="To make sure we only deliver the best candidates, our digital tools include a large array of tests and assessments, customized based on your needs."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <CardItem2
                  icon={icon_5}
                  title="Hire & Onboard"
                  subtitle="We enable a completely digital onboarding path for candidates so they can sign, upload, and be verified in just a few clicks."
                />
              </div>
              <div
                className="col-xl-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <CardItem2
                  icon={icon_6}
                  title="Insights"
                  subtitle="We provide you with direct labor market intelligence and can advise you on the next best action for your business."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* accordian structure reasone to choose start  */}
      <div
        className={`faq-section-one service-details ${
          cls ? cls : "mt-150 mb-120 lg-mt-120 md-mt-80"
        }`}
      >
        <div className="container  details-meta">
          <div className="row">
            <div className="col-lg-7">
              <div className="title-one mb-40 lg-mb-20">
                <h3>Experience the CGB Difference</h3>
              </div>
              <p className="text-lg mb-40 lg-mb-20">
              Quality connections, quality results.
              </p>
              <div
                className="accordion accordion-style-one mt-15 md-mt-50"
                id="accordionOne"
              >
                {faq_data
                  .filter((faq) => faq.page === "parmanent-staffing")
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

export default ParmanentStaffingSection;
