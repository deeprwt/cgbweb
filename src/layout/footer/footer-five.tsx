import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import logo from "@/assets/images/logo/logo_03.svg";
import shape_1 from "@/assets/images/shape/shape_40.svg";
import shape_2 from "@/assets/images/shape/shape_41.svg";
import FooterSocial from "./footer-social";

const FooterFive = () => {
  return (
    <div className="footer-five position-relative border-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-11 m-auto">
            <h2 className="text-center text-white font-magnita">
              Work Inquiry? Send us message
            </h2>
            <div className="btn-group d-block d-lg-flex justify-content-between align-items-center">
              <h3>
                Let’s <span>Discuss & Start.</span>
              </h3>
              <Link href="/contact"
                className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
              >
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="bottom-footer">
              <div className="row">
                <div className="col-lg-4 mb-15">
                  <div className="logo text-center text-lg-start mb-25">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 mb-15">
                  <ul className="style-none d-flex align-items-center justify-content-center social-icon">
                    <FooterSocial/>
                  </ul>
                </div>
                <div className="col-lg-4 mb-15">
                  <ul className="style-none bottom-nav d-flex justify-content-center justify-content-lg-end">
                    <li>
                      <Link href="/contact">Terms & Policy</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" />
      <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default FooterFive;
