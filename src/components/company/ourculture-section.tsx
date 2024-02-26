import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import service_img from '@/assets/images/media/img_35.jpg';
import awardsimg from "@/assets/images/company/awards/talentlinkedin.svg";
import awardsimg2 from "@/assets/images/company/awards/grat-work.jpg";
import awardsimg3 from "@/assets/images/company/awards/indian-achive-logo.png";
import icon_10 from "@/assets/images/icon/icon_81.svg";
import SideBar from "./side-bar";
import ImgGallery from "../gallery/img-gallery";

// CardItem
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
    <div className="card-style-sixteen text-center mt-40">
      <div className=" m-auto  d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 lg-mt-30 mb-15">{title}</h4>
      <p className="m0">{subtitle}</p>
    </div>
  );
}
// style
const imgStyle = {
  height: "auto",
};
const OurCultureSection = () => {
  return (
    <>
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-9">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>Our Culture</h2>
              <p>
                We aspire to be the visionary of a future where the seamless
                integration of unparalleled talent and cutting-edge technology
                not only redefines success for businesses but sets an entirely
                new standard for global excellence
              </p>
                
              <div className="img-meta mb-60 lg-mb-40">
                <Image src={service_img} alt="service_img" className="lazy-img w-100 rounded-4" 
                style={imgStyle}/>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-3">
            <aside className="md-mt-40">
              <div className="service-nav-item">
                <SideBar
                  active_data={false}
                  active_data1={false}
                  active_data2={false}
                  active_data3={false}
                  active_data4={false}
                  active_data5={true}
                  active_data6={false}
                  active_data7={false}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <ImgGallery />
    </>
  );
};

export default OurCultureSection;
