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

// props type
type IProps = {
    pretitle: string;
    nextitle: string;
    page1: string;
    page2: string;
  };

// img style 
const imgStyle = {
  height:'auto'
}

const SolutionsNav = ({
    pretitle,
    nextitle,
    page1,
    page2,
  }: IProps) => {
  return (
    <div className="project-details-one position-relative">

      <div className="container">
        <div className="pagination-two mt-35">
          <ul className="style-none d-flex justify-content-between">
            <li>
              <Link href={page1}>
                <span className="d-flex align-items-center align-items-md-end">
                  <i className="bi bi-arrow-left"></i>
                  <span className="ms-3 ms-md-4">
                    <span className="pr-dir text-uppercase d-block">Previous</span>
                    <span className="pr-name d-none d-md-block tran3s fw-500">{pretitle}</span>
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link href={page2}>
                <span className="d-flex align-items-center text-end align-items-md-end">
                  <span className="me-3 me-md-4">
                    <span className="pr-dir text-uppercase d-block">Next</span>
                    <span className="pr-name d-none d-md-block tran3s fw-500">{nextitle}</span>
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

export default SolutionsNav;