import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
// internal
import media_bg from '@/assets/images/media/img_36.jpg';
import screen from '@/assets/images/assets/screen_20.svg';
import icon_1 from '@/assets/images/icon/icon_85.svg';
import icon_2 from '@/assets/images/icon/icon_86.svg';
import icon_3 from '@/assets/images/icon/icon_87.svg';
// gallery images
import gallery_1 from '@/assets/images/gallery/img_17.jpg';
import gallery_2 from '@/assets/images/gallery/img_18.jpg';
import gallery_3 from '@/assets/images/gallery/img_19.jpg';
import ProjectDetailsFeature from './project-details-feature';

// list item
function ListItem({ icon, text, sm_text }: { icon: StaticImageData; text: string; sm_text: string }) {
  return (
    <li className="d-flex">
      <Image src={icon} alt="icon" className="lazy-img icon" />
      <div className="ps-4">
        <div className="text1">{text}</div>
        <span>{sm_text}</span>
      </div>
    </li>
  )
}
// img style 
const imgStyle = {
  height:'auto'
}

const ProjectDetailsArea = () => {
  return (
    <div className="project-details-one position-relative pb-150 lg-pb-80">
      <div className="project-info position-relative mb-150 lg-mb-80">
        <div className="inner-wrapper m-auto">
          <div className="d-lg-flex align-items-center">
            <h3>Project <span>Details</span></h3>
            <ul className="style-none d-md-flex flex-fill ps-lg-5">
              <ListItem icon={icon_1} text='Date' sm_text='23 July, 2022' />
              <ListItem icon={icon_2} text='Client Name' sm_text='Mariona Adisson, USA' />
              <ListItem icon={icon_3} text='Project Type' sm_text='Business Consulting' />
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <div className="upper-title">overview</div>
          <h2>Project Overview.</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volupta velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum magna quis nostured.</p>
        <div className="img-gallery mb-60 lg-mb-40">
          <div className="row">
            <div className="col-sm-8">
              <Image src={gallery_1} alt="gallery_img" className="lazy-img" style={imgStyle} />
            </div>
            <div className="col-sm-4">
              <Image src={gallery_2} alt="gallery_img" className="lazy-img" style={imgStyle} />
              <Image src={gallery_3} alt="gallery_img" className="lazy-img" style={imgStyle} />
            </div>
          </div>
        </div>
        <div>
          <div className="upper-title">Process</div>
          <h2>Research & Processing.</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit volupta velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div className="line-wrapper border-top border-bottom pt-20 pb-60 lg-pb-40 mt-60 lg-mt-40 mb-70 lg-mb-40">
          {/* project details feature start */}
          <ProjectDetailsFeature />
          {/* project details feature end */}
        </div>
        <div className="text-feature-three text-feature-seven position-relative mt-120 lg-mt-80">
          <div className="container">
            <div className="row">
              <div className="col-xxl-5 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight">
                <div>
                  <div className="upper-title">Final Result</div>
                  <h2>Find out the Project solution.</h2>
                </div>
                <p className="mb-55">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <ul className="style-none">
                  <li>Find the problem first</li>
                  <li>Make research and find out the solution</li>
                  <li>Finalize the solution & apply.</li>
                </ul>
                <div className="counter-wrapper border-0 mt-10">
                  <div className="row">
                    <div className="col-xl-6 col-sm-5">
                      <div className="counter-block-one mt-20">
                        <div className="main-count fw-bold"><span className="counter">1.2</span>x</div>
                        <p className="m0 fs-5 lh-base">Rapid wealth grow</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-7">
                      <div className="counter-block-one mt-20">
                        <div className="main-count fw-bold">$<span className="counter">1.3</span>b+</div>
                        <p className="m0 fs-5 lh-base">Cumulative trading volume</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-5 d-flex order-lg-first wow fadeInLeft">
                <div className="media-wrapper w-100 position-relative" 
                style={{ backgroundImage: `url(${media_bg.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                  <Image src={screen} alt="screen" className="lazy-img shapes screen_03" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-share mt-130 sm-mt-80 d-flex justify-content-end">
          <ul className="style-none d-flex align-items-center">
            <li>Share: </li>
            <li><Link href="#"><i className="bi bi-facebook"></i></Link></li>
            <li><Link href="#"><i className="bi bi-twitter"></i></Link></li>
            <li><Link href="#"><i className="bi bi-dribbble"></i></Link></li>
            <li><Link href="#"><i className="bi bi-instagram"></i></Link></li>
          </ul>
        </div>
        <div className="pagination-two mt-35">
          <ul className="style-none d-flex justify-content-between">
            <li>
              <Link href="#">
                <span className="d-flex align-items-center align-items-md-end">
                  <i className="bi bi-arrow-left"></i>
                  <span className="ms-3 ms-md-4">
                    <span className="pr-dir text-uppercase d-block">Previous</span>
                    <span className="pr-name d-none d-md-block tran3s fw-500">Market Analysis.</span>
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="d-flex align-items-center text-end align-items-md-end">
                  <span className="me-3 me-md-4">
                    <span className="pr-dir text-uppercase d-block">Next</span>
                    <span className="pr-name d-none d-md-block tran3s fw-500">Online Banking</span>
                  </span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsArea;