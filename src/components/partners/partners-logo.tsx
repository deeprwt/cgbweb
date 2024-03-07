'use client'
import React from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from "@/assets/images/logo/clints/partners/Finacle.png"
import img2 from "@/assets/images/logo/clints/partners/Oracle.png"
import img3 from "@/assets/images/logo/clints/partners/Outsystems.png"
import img4 from "@/assets/images/logo/clints/partners/Servicenow.png"
import img5 from "@/assets/images/logo/clints/partners/Microsoft.png"
import img6 from "@/assets/images/logo/clints/partners/IBM.png"
import img7 from "@/assets/images/logo/clints/partners/Lenovo.png"
import img8 from "@/assets/images/logo/clints/virtusa.png"
import img9 from "@/assets/images/logo/clints/accenture.png"
import img10 from "@/assets/images/logo/clints/Capgemini.png"
import img11 from "@/assets/images/logo/clints/crestron.png"
import img12 from "@/assets/images/logo/clints/dxc.png"
import img13 from "@/assets/images/logo/clints/grant_thronton.png"
import img14 from "@/assets/images/logo/clints/hcl_tech.png"
import img15 from "@/assets/images/logo/clints/hdfc.png"
import img16 from "@/assets/images/logo/clints/intuit.png"
import img17 from "@/assets/images/logo/clints/jio.png"
import img18 from "@/assets/images/logo/clints/lt_infotech.png"
import img19 from "@/assets/images/logo/clints/mphasis.png"
import img20 from "@/assets/images/logo/clints/pwc.png"
import img21 from "@/assets/images/logo/clints/quicken.png"
import img22 from "@/assets/images/logo/clints/samsung.png"
import img23 from "@/assets/images/logo/clints/sbm_bank.png"
import logo_1 from "@/assets/images/logo/media_01.png";
import logo_2 from "@/assets/images/logo/media_02.png";
import logo_3 from "@/assets/images/logo/media_03.png";
import logo_4 from "@/assets/images/logo/media_04.png";
import logo_5 from "@/assets/images/logo/media_05.png";

// slider setting
const slider_setting = {
    dots: false,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  // slider logos
  const slider_logos:StaticImageData[] = [img1, img2, img3, img4, img5, img6, img7];



const PartnerLogo = () => {
  return (
    <>

        <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40 service-details">
            <div className="container px-4 py-4 bo-rd light-bg ">
            <div className="row align-items-center details-meta">
              <div className="col-5 col-sm-4 d-flex justify-content-center col-lg-3 wow fadeInLeft">
                <div className="title-one">
                  {/* <div className="upper-title ">Trusted Global Brands</div> */}
                  <h3 className="m-0 text-center">Partners</h3>
                </div>
                {/* <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                Experience the extraordinary with CGB Solutions. We innovate relentlessly, 
                transforming challenges into seamless solutions for unparalleled client excellence. 
                Your journey to success starts here.
                </p> */}
                <div className="d-inline-flex flex-wrap align-items-center">
                  {/* <Link href="/about-us" className="btn-four mt-15 me-4">
                    More About us
                  </Link> */}
                  {/* <Link href="/contact" className="btn-three icon-link mt-15">
                    <span>Request a Callback</span>
                    <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                  </Link> */}
                </div>
              </div>
              <div className="col-7 col-sm-8 col-lg-9 wow fadeInRight">
                <Slider {...slider_setting} className="partner-slider-one">
                    {slider_logos.map((logo, i) => (
                        <div key={i} className="item">
                        <div className="p-3">
                            <Image src={logo} alt="logo" style={{ height: "auto" }} />
                        </div>
                        </div>
                    ))}
                </Slider>
              </div>
            </div>

            </div>
        </div>
    </>
  );
};

export default PartnerLogo;
