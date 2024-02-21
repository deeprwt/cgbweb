import React from 'react';
import Image from 'next/image';
// internal
import icon_1 from '@/assets/images/icon/icon_46.svg';
import icon_2 from '@/assets/images/icon/icon_47.svg';
import shape_1 from '@/assets/images/shape/shape_17.svg';
import shape_2 from '@/assets/images/shape/shape_18.svg';
import screen from '@/assets/images/assets/screen_17.png';

// image style
const imgStyle = {
  height:'auto'
}
const TextFeatureNine = () => {
  return (
    <div className="text-feature-nine position-relative mt-180 lg-mt-80">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="pt-110 lg-pt-80 pb-300 xl-pb-200 md-pb-50 pe-xxl-5">
                <div className="title-two mb-30">
                  <h2 className="text-white">Payments for all <span>hassle-free.</span></h2>
                </div>
                <p className="text-lg text-white opacity-75 mb-50 lg-mb-30">Payments made simple for all and every industry</p>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="block mt-30">
                      <Image src={icon_1} alt="icon" className="lazy-img icon" />
                      <h4 className="fw-500 text-white mt-35 lg-mt-30 mb-25">Management</h4>
                      <p className="text-white opacity-75">Elit esse cillum dolore eutile fugiat nulla pariatur</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="block mt-30">
                      <Image src={icon_2} alt="" className="lazy-img icon" />
                      <h4 className="fw-500 text-white mt-35 lg-mt-30 mb-25">Security</h4>
                      <p className="text-white opacity-75">quis nostrud exercit ullamo ea laboris nisi ut aliqui. quis nos exercit laboris nisi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vertical-text-wrapper">
        <div className="text-list"><span>Shopping</span></div>
        <div className="text-list"><span>Gaming</span></div>
        <div className="text-list"><span>Management</span></div>
        <div className="text-list"><span>Payment</span></div>
        <div className="text-list"><span>Freelancer</span></div>
        <Image src={shape_1} alt="shape" className="lazy-img shapes shape_01" style={imgStyle} />
        <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" style={imgStyle} />
      </div>
      <Image src={shape_2} alt="shape" className="lazy-img shapes shape_03" style={imgStyle} />
      <Image src={screen} alt="screen" className="lazy-img shapes shape_04" style={imgStyle} />
    </div>
  );
};

export default TextFeatureNine;