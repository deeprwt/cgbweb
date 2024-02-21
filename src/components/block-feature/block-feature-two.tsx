import React from 'react';
import Image from 'next/image';
import icon_1 from '@/assets/images/icon/icon_10.svg';
import icon_2 from '@/assets/images/icon/icon_11.svg';

const BlockFeatureTwo = () => {
  return (
    <div className="block-feature-two mt-80">
    <div className="container">
      <div className="wrapper">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="card-style-three pt-45 md-pt-30 pb-35 sm-pb-30">
              <Image src={icon_1} alt="icon" className="lazy-img icon"/>
              <h4 className="fw-bold mt-40 sm-mt-20 mb-20">Our Mission</h4>
              <p>Optimize expense tracking across platforms, & product lines using multiple cards.</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="border-line h-100 ps-lg-5 pe-lg-5 ps-md-3 pe-md-3">
              <div className="card-style-three pt-45 md-pt-30 pb-35 sm-pb-30">
                <Image src={icon_2} alt="icon" className="lazy-img icon"/>
                <h4 className="fw-bold mt-40 sm-mt-20 mb-20">Our company vision.</h4>
                <p>Optimize expense tracking across platforms, & product lines using multiple cards.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ps-lg-5 sm-pb-30 sm-pt-30">
              <div className="numb fw-500"><span className="counter">13</span>+</div>
              <p className="m0">Years Experience <br/> with proud.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default BlockFeatureTwo;