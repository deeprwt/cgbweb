import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import icons from "@/assets/images/icon/icon_09.svg";
import icon_2 from "@/assets/images/icon/icon_10.svg";
import icon_3 from "@/assets/images/icon/icon_11.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import about from "@/assets/images/assets/screen_14.png";
import mission from "@/assets/images/icon/mission.svg"
import vision from "@/assets/images/icon/vision.svg"

// card item
function CardItem({
  icon,
  title,
  desc,
  link,
}: {
  icon: StaticImageData;
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div className="card-style-three d-flex pt-75 lg-pt-40 pb-45 lg-pb-20">
      <Image src={icon} alt="icon" className="lazy-img icon" />
      <div className="ps-4">
        <h4 className="fw-bold mb-20">{title}</h4>
        <p> {desc} </p>
        <Link href={link} className="btn-three icon-link mt-15 md-mb-40">
          <span>Read More</span>
          <Image src={icons} alt="icon" className="lazy-img icon ms-1" />
        </Link>
      </div>
    </div>
  );
}

const TextFeatureAbout = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      {!style_2 && (
        <div className="text-feature-one mt-150 lg-mt-100 service-details">
          <div className="container">
            <div className="row align-items-center details-meta">
              <div className="col-xl-5 col-lg-6 order-2 order-lg-1 wow fadeInRight">
                <div className="ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                  <Image
                    src={about}
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
                  <div className="upper-title">About us</div>
                  <h2>What makes the client choose us</h2>
                </div>
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                  At the heart of CGB Solutions ethos lies an unwavering
                  commitment to innovation — a commitment that transcends the
                  ordinary and propels us into the realm of groundbreaking
                  service delivery. <br />
                  Our approach goes beyond meeting expectations; it anticipates
                  and exceeds them through a guiding principle of constant
                  innovation. From streamlining processes to embracing emerging
                  technologies, we aim to provide clients with a transformative
                  journey marked by unparalleled convenience. <br />
                  We&lsquo;ve started as a people solution service provider and
                  moved into technology solutions for companies and businesses
                  which include IT services, solution integrated services and
                  consulting.
                </p>
              </div>
              <div className="col-12 wow fadeInUp order-3">
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                  Innovation, within our framework, transcends being a mere
                  catchphrase; rather, it stands as a guiding principle that
                  intricately represents every aspect of our operations. We
                  strive to be more than service providers, aspiring to be
                  trusted partners in our clients journeys. This involves
                  understanding their unique challenges and tailoring innovative
                  solutions that effectively address their needs.
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
                  {/* <Link href="/contact" className="btn-four mt-15 me-4">
                    Contact us
                  </Link> */}
                  {/* <Link href="/contact" className="btn-three icon-link mt-15">
                        <span>Request a Callback</span>
                        <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                    </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {style_2 && (
        <div className="text-feature-one mt-80 lg-mt-80">
          <div className="container">
            <div className="line-wrapper position-relative">
              <div className="row align-items-center">
                <div className="col-lg-6 wow fadeInLeft">
                  <div className="title-one">
                    {/* <div className="upper-title">About us</div> */}
                    <h2>Our Story</h2>
                  </div>
                  <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
                    As we forge ahead, the spirit of innovation is not confined
                    to our internal processes alone. We strive to create an
                    ecosystem where our clients experience the tangible benefits
                    of technological advancements, making their interaction with
                    us not just a service but a seamless, convenient experience.{" "}
                    <br />
                    At CGB India, innovation is not just a commitment; it&lsquo;s a
                    way of life. We are driven by the belief that convenience is
                    the cornerstone of exceptional service delivery, and we
                    tirelessly work towards ensuring that our clients not only
                    receive solutions but experience the unparalleled
                    convenience that comes with partnering with a
                    forward-thinking, innovative organization.
                  </p>
                  {/* <Link href="/contact" className="btn-three icon-link mt-15 md-mb-40">
                    <span>Request a Callback</span>
                    <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                  </Link> */}
                </div>
                <div className="col-lg-6 ms-auto wow fadeInRight">
                  <CardItem
                    icon={mission}
                    link="/mission"
                    title="Our Mission"
                    desc="We aspire to be the visionary of a future where the seamless integration of unparalleled talent and cutting-edge technology not only redefines success for businesses but sets an entirely new standard for global excellence"
                  />
                  <CardItem
                    icon={vision}
                    link="/vision"
                    title="Our company Vision."
                    desc="We are on a relentless mission to shatter the ordinary, empowering businesses with extraordinary staffing and technology solutions. At CGB Solutions, we don't just adapt to change; we sculpt it, ensuring our clients lead the way in innovation and triumph."
                  />
                </div>
              </div>
              <Image
                src={shape}
                alt="shape"
                className="lazy-img shapes shape_01"
              />
            </div>

            {/* <div className="counter-wrapper mt-80 lg-mt-20">
              <div className="row">

              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default TextFeatureAbout;
