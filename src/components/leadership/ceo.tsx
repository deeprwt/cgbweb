import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// internal
import icon from "@/assets/images/icon/icon_09.svg";
import icon_2 from "@/assets/images/icon/icon_10.svg";
import icon_3 from "@/assets/images/icon/icon_11.svg";
import shape from "@/assets/images/shape/shape_05.svg";
import ab from "@/assets/images/cgbhome/about.png";
import linkd from "@/assets/images/icon/linkedinicon.png";
import sindhu from "@/assets/images/cgbhome/sindhuUpdate.png";

const CeoData = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <>
      {!style_2 && (
        <div className="text-feature-one  light-bg pt-120 lg-pt-80 pb-150 lg-pb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 wow fadeInRight d-flex justify-content-center ">
                <Image
                  src={sindhu}
                  // layout="responsive"
                  width={385}
                  height={540}
                  alt="Sindhu profile"
                  // className="w-100"
                ></Image>
              </div>
              <div className="col-xl-7 col-lg-6 wow fadeInLeft">
                <div className="title-one">
                  <h2>Sindhu B.R.J</h2>
                  <div
                    className="upper-title d-flex"
                    style={{ fontSize: "26px" }}
                  >
                    CEO,{" "}
                    <span>
                      <Link
                        href="https://www.linkedin.com/in/sindu-b-r-j-7617891b/"
                        className=""
                      >
                        <Image
                          src={linkd}
                          width={40}
                          height={40}
                          alt="linkedinicon"
                        ></Image>
                      </Link>
                    </span>
                  </div>
                </div>
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                  Sindhu brings over two decades of experience in managing
                  strategic engagements and leverages her vast operational
                  expertise to advise companies on expanding their business by
                  discovering new opportunities and identifying untapped revenue
                  streams, alongside developing leadership capital.
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
                  <Link href="/leadership" className="btn-four mt-15 me-4">
                    Read More
                  </Link>
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
        <div className="text-feature-one mt-150 lg-mt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-6 wow fadeInLeft">
                <div className="title-one">
                  <div className="upper-title">About us</div>
                  <h2>Where Technology meets Excellence</h2>
                </div>
                <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                  Experience the extraordinary with CGB Solutions. We innovate
                  relentlessly, transforming challenges into seamless solutions
                  for unparalleled client excellence. Your journey to success
                  starts here.
                </p>
                <div className="d-inline-flex flex-wrap align-items-center">
                  <Link href="/about-us" className="btn-four mt-15 me-4">
                    More About us
                  </Link>
                  {/* <Link href="/contact" className="btn-three icon-link mt-15">
                    <span>Request a Callback</span>
                    <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                    </Link> */}
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 wow fadeInRight">
                {/* <Image src={ab} alt="About us" className="w-100"></Image> */}
                <div className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
                  <ul className="style-none">
                    <li>IT Consulting</li>
                    <li>Staffing Solutions for diverse industries</li>
                    <li>Digital Solutions improve efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CeoData;
