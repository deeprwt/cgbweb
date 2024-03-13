import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import icon_1 from "@/assets/images/icon/icon_97.svg";
import icon_2 from "@/assets/images/icon/icon_27.svg";
import shape from "@/assets/images/shape/shape_45.svg";
import arrow from "@/assets/images/icon/icon_09.svg";
import business_man from "@/assets/images/assets/businessman_02.png";
import service_data from "@/data/service-data";
import ImgTextOne from "../img-text-feature/img-text-one";
import Finacle5 from "@/assets/images/solutions/Finacle/Fincale-5.jpg";
import InternshipComponent from "./internship-component";

// img style
const imgStyle = {
  height: "auto",
};
const InternshipProgramSection = () => {
  const service_items = service_data
    .filter((s) => s.page === "home-5")
    .slice(4, 6);
  return (
    <>
      <div className="block-feature-twelve position-relative pt-10 lg-pt-80 pb-180 lg-pb-80">
        <div className="container">
          {/* ---------------------------------Section staring-------------------------------*/}
          <div className="row">
            <div className="col-lg-11">
              <div className="title-one mb-40 lg-mb-20">
                <h2 className="color-deep">
                  {/* write here something you want to write */}
                </h2>
              </div>
            </div>
          </div>
          {/* ---------------------------------Section End-------------------------------*/}

          <div className="row gx-xl-5">
            {/* ---------------------------------Section staring-------------------------------*/}

            {/* <div className="col-lg-5 d-flex mt-40 md-mt-20">
              <div className="p-2 vstack tran3s w-100 rounded-4">
                <Image
                  src="/img.webp"
                  width={1000}
                  height={415}
                  alt="icon"
                  className="rounded-4 w-100"
                />
              </div>
            </div> */}
            {/* ---------------------------------Section staring-------------------------------*/}
            <div className="col-lg-12 d-flex mt-40 md-mt-20 bg-white rounded-2">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    {/* <h2 className="color-deep fw-bold mt-8 mb-15">
                    Find your team
                    </h2> */}
                    <div className="service-details">
                         {/* impornting  */}
                         <InternshipComponent/>
                      {/* <div className="details-meta ">
                         <h1>New developer </h1>
                      </div>
                      <p>new shi</p>
                      <div><button type="button" className="btn btn-primary">Learn More</button></div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------Section staring-------------------------------*/}
        </div>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
      </div>
    </>
  );
};
export default InternshipProgramSection;
