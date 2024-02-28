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

const CustomiseTrainingSecton = ({ cls }: { cls?: string }) => {
  const service_items = service_data.filter(
    (s) => s.page === "customisetraining"
  );
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80 pb-80 lg-pb-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              <h3 className="text-center">
                We offer one of the best services for your business related
                needs.
              </h3>
              <p className="text-lg text-center px-4 mb-35 md-mb-30">
                With offering fresh e-learning technologies and innovative
                approaches to deliver you the best solutions which are not only
                impactful but also long- lasting. Our designs are responsive,
                unique and attractive which highlights your business in
                different aspects.
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
      {/* card2 starting */}
      <div className="block-feature-twelve position-relative pt-130 lg-pt-80 pb-180 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <div className="title-one mb-40 lg-mb-20">
                <h2 className="color-deep">
                  Take a step further for your business!
                </h2>
              </div>
            </div>
          </div>
          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Custom e-learning development
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        <p>
                          With customized e-learning development, you can have a
                          closer look towards the accurate movements in the
                          behavior of your business. It is a multidisciplinary
                          concept that deals consistently in terms of designs,
                          techniques, tones and interactions. This gives the
                          client trust that their business can sustain longer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <Image
                      src="/img5.svg"
                      width={1000}
                      height={415}
                      alt="icon"
                      className="rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}
          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <Image
                      src="/img5.svg"
                      width={1000}
                      height={415}
                      alt="icon"
                      className="rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Custom mobile learning
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        <p>
                          Running a business, get to know about strategies with
                          e-learning by not sitting in a classroom or a typical
                          office cabin but on your smartphone. Learn custom
                          mobile learning with your phone anywhere and anytime.
                          All the techniques, principles, parameters and
                          strategies in one compact screen. We offer strategies
                          like VR, AR and micromodules with bite-sized content.
                          You just need to have native mobile app development-
                          IOS and android.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}
          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="color-deep fw-bold mt-8 mb-15">
                      Custom e-learning software development
                    </h3>
                    <div className="service-details">
                      <div className="details-meta ">
                        <p>
                          We designed a custom e-learning course for software
                          development where you can learn to design, create,
                          deploy and maintain software which is a limited
                          edition for special organizations and users. Bespoke
                          software, a software which is also known as customized
                          software is designed to develop in house development
                          and outsourced to a third party. This process includes
                          application customization and modernization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <Image
                      src="/img5.svg"
                      width={1000}
                      height={415}
                      alt="icon"
                      className="rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}

          {/* section start------------------ */}
          <div className="row gx-xl-5">
            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <Image
                      src="/img5.svg"
                      width={1000}
                      height={415}
                      alt="icon"
                      className="rounded-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex mt-40 md-mt-20">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <h2 className="color-deep fw-bold mt-8 mb-15">
                      Gamification
                    </h2>
                    <div className="service-details">
                      <div className="details-meta ">
                        <p>
                          Games, a software which is typically designed to play
                          with our minds and psychology. Phoeniixx added
                          gamification in its process of e-learning which has an
                          agenda of goal setting, social interaction and
                          analysis of different human psychologies. Phoniixx
                          teaches you a whole new learning experience with the
                          help of gamification and added game elements such as
                          leaderboards, points, badges, different levels and
                          backgrounds. Different users has a different
                          experience and satisfaction with gamification but it
                          has a positive ratio of learner engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section End-------------------------------  */}
        </div>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
      </div>
      {/* card2 end */}
    </>
  );
};

export default CustomiseTrainingSecton;
