import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import awardsimg from "@/assets/images/company/awards/talentlinkedin.svg";
import awardsimg2 from "@/assets/images/company/awards/grat-work.jpg";
import awardsimg3 from "@/assets/images/company/awards/indian-achive-logo.png";
import icon_10 from "@/assets/images/icon/icon_81.svg";
import SideBar from "./side-bar";

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
const RecognitionSection = () => {
  return (
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-9">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>Our Recognition</h2>
              <p>
                We aspire to be the visionary of a future where the seamless
                integration of unparalleled talent and cutting-edge technology
                not only redefines success for businesses but sets an entirely
                new standard for global excellence
              </p>
              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem
                      icon={awardsimg}
                      title="Collect Doc"
                      subtitle="We collect require documents & send for check"
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                      icon={awardsimg2}
                      title="Check & Finalize"
                      subtitle="We check the documents & send for final approval"
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                      icon={awardsimg3}
                      title="Approved"
                      subtitle="After approve you ready to use your accounts"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="img-meta mb-60 lg-mb-40">
                <Image src={service_img} alt="service_img" className="lazy-img w-100 rounded-4" 
                style={imgStyle}/>
              </div> */}
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
                  active_data4={true}
                  active_data5={false}
                  active_data6={false}
                  active_data7={false}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionSection;
