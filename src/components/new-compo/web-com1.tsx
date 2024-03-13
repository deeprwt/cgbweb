import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import screen from "@/assets/images/assets/screen_15.png";
import icon_1 from "@/assets/images/icon/icon_82.svg";
import icon_2 from "@/assets/images/icon/icon_83.svg";
import icon_3 from "@/assets/images/icon/icon_81.svg";
import icon_4 from "@/assets/images/icon/icon_57.svg";
import icon_5 from "@/assets/images/icon/icon_58.svg";

import service_data from "@/data/service-data";

// image style
const imgStyle = {
  height: "auto",
};

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
    <div className="card-style-twelve mb-40 lg-mb-20">
      <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-20 mb-15">{title}</h4>
      <p>{subtitle}</p>
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
  const services = service_data.filter(
    (s) => s.page === "home-2" || s.page === "home-4"
  );
  return (
    <div className="card-style-sixteen w-100 text-center mt-30 ">
      <div className="icon m-auto tran3s d-flex align-items-center justify-content-center rounded-circle">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-20 mb-15">{title}</h4>
      <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
    </div>
  );
}
const WebCom1 = () => {
  return (
    <>
      <div className="text-feature-seven mt-5  ">
        <div className="container">
          <div className="border-bottom mt-40 pb-50 sm-pb-30">
            <div className="row">
              <div className="col-lg-6 d-flex wow fadeInUp">
                <img
                  src="https://www.uplers.com/wp-content/themes/uplers/assets/images/front-end-development-expertise.jpg"
                  alt=""
                />
              </div>
              <div
                className="col-lg-6 d-flex wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div>
                  <h1>Why Front End Development Is Our Core Expertise</h1>
                  <p>
                    Front end development is a discipline that demands
                    adaptiveness, learning capabilities, and an analytical
                    approach. As a leading front end development company, we
                    understand this sentiment and are committed toward curating
                    visually striking and user-centric front end designs for
                    your business.
                  </p>
                  <Link href="/about-us" className="btn-four mt-15 me-4">
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end  */}
      {/* text feature start */}
      <div className="text-feature-one mt-150 lg-mt-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 d-flex wow fadeInUp shadow-lg  border-1 rounded-5 "> 
              <CardItem2
                icon={icon_2}
                title="Full Stack Web Development"
                subtitle="System infrastructure, web architecture, and communication protocols - our front end development agency specializes in all these departments, delivering to you interactive front ends along with robust backends."
              />
            </div>
            <div className="col-sm-4 d-flex wow fadeInUp shadow-lg  border-1 rounded-5 " data-wow-delay="0.1s">
              <CardItem2
                icon={icon_3}
                title="HTML5/CSS Development"
                subtitle="We feed interactive elements using W3C standard & cross-browser compatibility coding standards to put wind in your digital sails."
              />
            </div>
            <div className="col-sm-4 d-flex wow fadeInUp shadow-lg  border-1  rounded-5" data-wow-delay="0.2s">
              <CardItem2
                icon={icon_4}
                title="Custom Web App Development"
                subtitle="Our seasoned and pre-vetted front end architects use clean codes and a customized approach to infuse creativity and interactivity into your web portals."
              />
            </div>
            <div
              className="col-sm-4 d-flex wow fadeInUp shadow-lg  border-1 rounded-5 my-2 "
              data-wow-delay="0.3s"
            >
<CardItem2
            icon={icon_5}
            title="Data Migration, Support, and Maintenance"
            subtitle="Be it migrating crucial data, resolving post-deployment queries or regular maintenance, obtain watertight solutions from our front-end experts."
          />
              
            </div>
            <div
              className="col-sm-4 d-flex wow fadeInUp shadow-lg  border-1 rounded-5 my-2"
              data-wow-delay="0.3s"
            >
<CardItem2
            icon={icon_5}
            title="CMS Design and Development"
            subtitle="With our comprehensive front end web development services, you can set up best-in-class, responsive and robust content management systems for your business."
          />
              
            </div>
            <div
              className="col-sm-4 d-flex wow fadeInUp shadow-lg  border-1 rounded-5"
              data-wow-delay="0.3s"
            >
<CardItem2
            icon={icon_5}
            title="CMS Design and Development"
            subtitle="With our comprehensive front end web development services, you can set up best-in-class, responsive and robust content management systems for your business."
          />
            </div>
          </div>{" "}
          
        </div>
      </div>
      {/* text feature end */}
    </>
  );
};

export default WebCom1;
