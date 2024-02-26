import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import pa1 from "@/assets/images/logo/clints/partners/Finacle.png";
import pa2 from "@/assets/images/logo/clints/partners/IBM.png";
import pa3 from "@/assets/images/logo/clints/partners/Lenovo.png";
import pa4 from "@/assets/images/logo/clints/partners/Microsoft.png";
import pa5 from "@/assets/images/logo/clints/partners/Oracle.png";
import pa6 from "@/assets/images/logo/clints/partners/Outsystems.png";
import pa7 from "@/assets/images/logo/clints/partners/Servicenow.png";
import icon_10 from "@/assets/images/icon/icon_81.svg";
import SideBar from "./side-bar";

// CardItem
function CardItem({
  icon,
}: {
  icon: StaticImageData;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className=" m-auto  d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
    </div>
  );
}
// style
const imgStyle = {
  height: "auto",
};
const PartnersSection = () => {
  return (
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-9">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>Partners With CGB</h2>
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
                      icon={pa1}
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                      icon={pa2}
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                      icon={pa3}
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.3s">
                    <CardItem
                      icon={pa4}
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.4s">
                    <CardItem
                      icon={pa5}
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                    <CardItem
                      icon={pa6}
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.6s">
                    <CardItem
                      icon={pa7 }
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
                  active_data4={false}
                  active_data5={false}
                  active_data6={false}
                  active_data7={true}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
