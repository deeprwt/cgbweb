import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import screen from "@/assets/images/assets/screen_15.png";
import icon_1 from "@/assets/images/icon/icon_82.svg";
import icon_2 from "@/assets/images/icon/icon_83.svg";
import icon_3 from "@/assets/images/icon/icon_81.svg";

// image style
const imgStyle = {
  height: "auto",
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
    <div className="card-style-sixteen w-100 text-center mt-30">
      <div className="icon m-auto tran3s d-flex align-items-center justify-content-center rounded-circle">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-20 mb-15">{title}</h4>
      <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
    </div>
  );
}

const MendixFeature = () => {
  return (
    <div className="text-feature-seven mt-170 lg-mt-80">
      <div className="container">
        <div className="border-bottom mt-40 pb-50 sm-pb-30">
          <div className="row">
                <div className="title-one mb-40 lg-mb-10 wow fadeInUp">
                    <h2>Features of Mendix</h2>
                </div>
                <p className="text-xl text-dark mb-30 lg-mb-10">
                    Exploring the Powerful Capabilities and Benefits of Mendix: A Low-Code Development Platform
                </p>
            <div className="col-lg-4 d-flex wow fadeInUp">
              <CardItem
                icon={icon_1}
                title="Visual Modeling"
                subtitle="The platform offers a drag-and-drop visual modeling interface that allows users to easily create data models, workflows, user interfaces, and more."
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.1s">
              <CardItem
                icon={icon_2}
                title="Rapid App Development"
                subtitle="Enable diverse co-creation using a shared visual language and IDEs for efficient, rapid business app development."
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.2s">
              <CardItem
                icon={icon_3}
                title="Cloud Hosting"
                subtitle="WCreate and deploy resilient apps, no expertise needed. Click once to deploy anywhere, with portability and scalability."
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.3s">
              <CardItem
                icon={icon_2}
                title="Cross Model Experience"
                subtitle="Develop visually stunning and smart applications for exceptional cross-modal experiences across touchpoints."
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.4s">
              <CardItem
                icon={icon_3}
                title="Collaboration"
                subtitle="Mendix enables teams to work collaboratively on application development, with features like version control, commenting, and project management."
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.5s">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MendixFeature;
