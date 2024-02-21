'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// internal
import Navbar from './navbar';
import logo from '@/assets/images/logo/logo_02.svg';
import icon_1 from '@/assets/images/icon/icon_14.svg';
import icon_2 from '@/assets/images/icon/icon_15.svg';
import icon_3 from '@/assets/images/icon/icon_16.svg';
import LoginModal from '@/components/common/login-modal';
import useSticky from '@/hooks/use-sticky';

const HeaderOne = () => {
  const {sticky} = useSticky();
  return (
    <>
      <header className={`theme-main-menu menu-overlay menu-style-two sticky-menu ${sticky?'fixed':''}`}>
        <div className="gap-fix info-row">
          <div className="d-md-flex justify-content-between">
            <div className="greetings text-center"><span className="opacity-50">Hello!!</span> <span className="fw-500">Welcome to babun.</span></div>
            <ul className="style-none d-none d-md-flex contact-info">
              <li className="d-flex align-items-center">
                <Image src={icon_1} alt="icon" className="lazy-img icon me-2" /> 
                <Link href="mailto:babuninc@company.com" className="fw-500">babuninc@company.com</Link>
                </li>
              <li className="d-flex align-items-center">
                <Image src={icon_2} alt="icon" className="lazy-img icon me-2" /> 
                <Link href="tel:+757 699-4478" className="fw-500">+757 699-4478</Link>
                </li>
            </ul>
          </div>
        </div>
        <div className="inner-content gap-fix">
          <div className="top-header position-relative">
            <div className="d-flex align-items-center">
              <div className="logo order-lg-0">
                <Link href="/" className="d-flex align-items-center">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>

              <div className="right-widget order-lg-3 ms-auto">
                <ul className="d-flex align-items-center style-none">
                  <li className="d-flex align-items-center login-btn-one me-3 me-md-0">
                    <Image src={icon_3} alt="icon" className="lazy-img icon me-2" />
                    <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="fw-500">Login</Link>
                  </li>
                  <li className="d-none d-md-inline-block ms-3 ms-lg-5 me-3 me-lg-0">
                    <Link href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="signup-btn-one icon-link">
                      <span>Signup</span>
                      <div className="icon rounded-circle d-flex align-items-center justify-content-center"><i className="bi bi-arrow-right"></i></div>
                    </Link>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* header navbar start */}
                  <Navbar/>
                  {/* header navbar end */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <LoginModal/>
      {/* login modal end */}
    </>
  );
};

export default HeaderOne;