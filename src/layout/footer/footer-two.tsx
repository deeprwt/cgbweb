import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@/assets/images/logo/logo_02.svg';
import shape from '@/assets/images/shape/shape_06.svg';
import FooterSocial from './footer-social';

const FooterTwo = () => {
  return (
    <div className="footer-two">
    <div className="container">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 footer-intro mb-30">
              <div className="logo mb-35 md-mb-20">
                <Link href="/">
                  <Image src={logo} alt="logo"/>
                </Link>
              </div> 
              <p className="lh-sm mb-40 md-mb-20">
                2190 Urban Terrace, Mirpur,  link Licensed in 50 states.
              </p>
              {/* social link */}
              <ul className="style-none d-flex align-items-center social-icon">
                <FooterSocial/>
              </ul>
              {/* social link */}
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">Links</h5>
              <ul className="footer-nav-link style-none">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pricing">Pricing Plan</Link></li>
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="/service-v1">Our services</Link></li>
                <li><Link href="/project-v1">Portfolio</Link></li>
                <li><Link href="/blog">Careers</Link></li>
                <li><Link href="/service-v2">Features</Link></li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-nav-link style-none">
                <li><Link href="/about-us-2">About us</Link></li>
                <li><Link href="/blog-grid">Blogs</Link></li>
                <li><Link href="/faq">FAQ’s</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-xxl-2 col-lg-3 col-sm-4 mb-20">
              <h5 className="footer-title">Support</h5>
              <ul className="footer-nav-link style-none">
                <li><Link href="/contact">Terms of use</Link></li>
                <li><Link href="/contact">Terms & conditions</Link></li>
                <li><Link href="/contact">Privacy</Link></li>
                <li><Link href="/contact">Cookie policy</Link></li>
                <li><Link href="/contact">Self-service</Link></li>
              </ul>
            </div>
          </div>
          <div className="copyright text-center">Copyright @{new Date().getFullYear()} babun inc.</div>
        </div>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_01"/>
        <Image src={shape} alt="shape" className="lazy-img shapes shape_02"/>
      </div>
    </div>
  </div>
  );
};

export default FooterTwo;