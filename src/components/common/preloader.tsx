import React from 'react';
import loader from '@/assets/images/loader.svg';
import Image from 'next/image';

const Preloader = () => {
  return (
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="icon">
          <Image src={loader} alt="loader" className="m-auto d-block" width="60" />
        </div>
        <div className="txt-loading">
          <span data-text-preloader="B" className="letters-loading">
            B
          </span>
          <span data-text-preloader="a" className="letters-loading">
            a
          </span>
          <span data-text-preloader="b" className="letters-loading">
            b
          </span>
          <span data-text-preloader="u" className="letters-loading">
            u
          </span>
          <span data-text-preloader="n" className="letters-loading">
            n
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;