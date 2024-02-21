import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@/assets/images/logo/logome.png';
import FooterSocial from './footer-social';

const FooterOne = () => {
  return (
    <div className="footer-one">
    <div className="container">
      <div className="inner-wrapper">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-md-3 footer-intro mb-30">
            <div className="logo mb-15">
              <Link href="/" className="d-inline-block d-lg-none">
                <Image width={110} src={logo} alt="logo"/>
              </Link>
            </div> 
            <p className="text-white lh-sm mb-35">Top-rated <span className="opacity-50">business <br/> consultancy for your success</span></p>
            {/* social link */}
            <ul className="style-none d-flex align-items-center social-icon">
             <FooterSocial/>
            </ul>
            {/* social link */}
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
            <h5 className="footer-title">Links</h5>
            <ul className="footer-nav-link style-none">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/pricing">Pricing Plan</Link></li>
              <li><Link href="/about-us">About us</Link></li>
              <li><Link href="/service-v1">Our services</Link></li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
            <h5 className="footer-title">Company</h5>
            <ul className="footer-nav-link style-none">
              <li><Link href="/about-us-2">About us</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/faq">FAQ’s</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
            <h5 className="footer-title">Support</h5>
            <ul className="footer-nav-link style-none">
              <li><Link href="/contact">Terms of use</Link></li>
              <li><Link href="/contact">Terms & conditions</Link></li>
              <li><Link href="/contact">Privacy</Link></li>
              <li><Link href="/contact">Cookie policy</Link></li>
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
                <input type="email" placeholder="Enter your email address"/>
                <button><i className="bi bi-arrow-right"></i></button>
              </form>
            </div>
          </div>
          <div className="col-lg-7 order-lg-first mb-15">
            <Link href="/" className="d-none d-lg-inline-block mb-25">
              <Image width={150} src={logo} alt="logo"/>
            </Link>
            <div className="d-xl-flex align-items-center">
              <ul className="style-none bottom-nav d-flex flex-wrap justify-content-center justify-content-lg-start order-lg-last">
                <li><Link href="#">Privacy & Terms</Link></li>
                <li><Link href="#">Cookies</Link></li>
                <li><Link href="#">Contact Us</Link></li>
              </ul>
              <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                Copyright @{new Date().getFullYear()} babun inc.
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