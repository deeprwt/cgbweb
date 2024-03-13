import React from "react";
import Image from "next/image";
import Whatsnew from "@/assets/images/cgbhome/whatsnew.png";
import Whatsnew3 from "@/assets/images/cgbhome/leap.png";
import Whatsnew4 from "@/assets/images/cgbhome/techsparks.png";
import Whatsnew2 from "@/assets/images/cgbhome/cloud_world_tour.svg";
import bg_image from "@/assets/images/background/backgroundnew.png";

const backImg = {
  backgroundImage: `url('${bg_image.src}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};


const WhatsNew = () => {
  return (
    <>
      <div className="full position-relative service-details" style={backImg}>
      <div className="overlayStyle"></div>
        <div className="container position-relative" style={{zIndex: "1"}}>
          <div className="counter-wrapper pt-40 pb-40">
            <div className="row details-meta">
              <div className="title-one">
                {/* <div className="upper-title"></div> */}
                <h3 className="text-center">What&apos;s New</h3>
              </div>
              <div
                className="col-md-3 mb-35 mt-35  wow fadeInUp transition delay-150 duration-300 ease-in-out"
                data-wow-delay="0.0s"
              >
                
                <Image
                  src={Whatsnew}
                  alt="what's new"
                  className="w-100 h-100 shadowimg cursor-pointer"
                />
              </div>
              <div
                className="col-md-3 mb-35 mt-35  wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <Image
                  src={Whatsnew2}
                  alt="what's new"
                  className="w-100 h-100 shadowimg cursor-pointer rounded-1"
                />
              </div>
              <div
                className="col-md-3 mb-35 mt-35  wow fadeInUp "
                data-wow-delay="0.2s"
              >
                <Image
                  src={Whatsnew3}
                  alt="what's new"
                  className="w-100 h-100 shadowimg cursor-pointer rounded-1"
                />
              </div>
              <div
                className="col-md-3 mb-35 mt-35  wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <Image
                  src={Whatsnew4}
                  alt="what's new"
                  className="w-100 h-100 shadowimg cursor-pointer rounded-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
