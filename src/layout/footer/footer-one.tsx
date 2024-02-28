"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import logo from "@/assets/images/logo/logome.png";
import FooterSocial from "./footer-social";
import MapWithCountries from "@/components/map/maps";
import icon_1 from '@/assets/images/icon/icon_49.svg';
import icon_2 from '@/assets/images/icon/icon_50.svg';
import map from "@/assets/images/icon/footer-map.svg";

const FooterOne = () => {
  return (
    <div className="footer-one">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-md-5 footer-intro mb-30">
              <div className="logo">
                <Link href="/" className="d-inline-block d-lg-none">
                  <Image width={110} src={logo} alt="logo" />
                </Link>
              </div>
              {/* map start  */}
              <h5 className="footer-title">Global Presence</h5>
              <div className="pb-4">
                <MapWithCountries />
              </div>
              {/* map end  */}
              {/* <p className="text-white lh-sm mb-35">Top-rated <span className="opacity-50">business <br/> consultancy for your success</span></p> */}
              <p className="text-white lh-sm mb-35">Head office <br /> <span className="opacity-50">2nd FLOOR, NO 898/1-2, 80 Feet Main Road Koramagala, Bengaluru, Bengaluru Urban, Karnataka, 560034</span></p>
              <p className="text-white lh-sm mb-35 d-flex flex-wrap"><Link href="#" className="d-flex align-items-center"><Image src={icon_1} alt="icon" className="lazy-img icon me-3"/>info@cgbinda.com | &nbsp;</Link> <span className="opacity-50"> <Link href="#" className="d-flex"> <Image src={icon_2} alt="icon" className="lazy-img icon me-3"/>+91 8287668958</Link> </span></p>
              {/* social link */}
              <ul className="style-none d-flex align-items-center social-icon">
                <FooterSocial />
              </ul>
              {/* social link */}
            </div>
            <div className="col-xl-2 col-md-2 col-sm-4 mb-20">
              <h5 className="footer-title">Links</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                <Link href="/about-us">About us</Link>
                  
                </li>
                <li>
                <Link href="/contact">Contact us</Link>
                </li>
                <li>
                  <Link href="/blog">blogs</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-2 col-sm-4 mb-20">
              <h5 className="footer-title">Tech Solutions</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/solutions/oracle">Oracle</Link>
                </li>
                <li>
                  <Link href="/solutions/finacle">Finacle</Link>
                </li>
                <li>
                  <Link href="/solutions/outsystems">Outsystems</Link>
                </li>
                <li>
                  <Link href="/solutions/mendix">Mendix</Link>
                </li>
                <li>
                  <Link href="/solutions/servicenow">ServiceNow</Link>
                </li>
                <li>
                  <Link href="/solutions/automation-anywhere">Automation Anywhere</Link>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-2 col-sm-4 mb-20">
              <h5 className="footer-title">Support</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <Link href="/contact">Terms of use</Link>
                </li>
                <li>
                  <Link href="/contact">Terms & conditions</Link>
                </li>
                <li>
                  <Link href="/contact">Privacy</Link>
                </li>
                <li>
                  <Link href="/contact">Cookie policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last mb-15">
              <div className="footer-newsletter float-xl-end">
                <h5 className="footer-title">Subscribe Newsletter</h5>
                <form action="#">
                  <input type="email" placeholder="Enter your email address" />
                  <button>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-7 order-lg-first mb-15">
              <Link href="/" className="d-none d-lg-inline-block mb-25">
                <Image width={150} src={logo} alt="logo" />
              </Link>
              <div className="d-xl-flex align-items-center">
                <ul className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                  <li>
                    <Link href="#">Privacy & Terms</Link>
                  </li>
                  <li>
                    <Link href="#">Cookies</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
                <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                  Copyright @{new Date().getFullYear()} CGB Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
