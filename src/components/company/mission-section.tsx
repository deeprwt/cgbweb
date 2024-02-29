import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
// internal
import service_img from '@/assets/images/media/img_35.jpg';
import icon_1 from '@/assets/images/icon/icon_72.svg';
import icon_2 from '@/assets/images/icon/icon_73.svg';
import icon_3 from '@/assets/images/icon/icon_74.svg';
import icon_4 from '@/assets/images/icon/icon_75.svg';
import icon_5 from '@/assets/images/icon/icon_76.svg';
import icon_6 from '@/assets/images/icon/icon_77.svg';
import icon_7 from '@/assets/images/icon/icon_78.svg';
import icon_8 from '@/assets/images/icon/icon_79.svg';
import icon_9 from '@/assets/images/icon/icon_80.svg';
import icon_10 from '@/assets/images/icon/icon_81.svg';
import icon_11 from '@/assets/images/icon/icon_82.svg';
import icon_12 from '@/assets/images/icon/icon_83.svg';
import icon_13 from '@/assets/images/icon/icon_84.svg';
import ils_icon from '@/assets/images/assets/ils_03.svg';
import SideBar from './side-bar';


// style 
const imgStyle = {
  height:'auto'
}
const MissionSection = ()=> {
  return (
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-9 order-lg-last">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              {/* <div className="upper-title"></div> */}
              <h2>Our Mission</h2>
              <p>We aspire to be the visionary of a future where the seamless integration of unparalleled talent and cutting-edge technology not only redefines success for businesses but sets an entirely new standard for global excellence</p>
              
              {/* <div className="img-meta mb-60 lg-mb-40">
                <Image src={service_img} alt="service_img" className="lazy-img w-100 rounded-4" 
                style={imgStyle}/>
              </div> */}
            </div>
          </div>
          <div className="col-xxl-3 col-lg-3 order-lg-first">
            <aside className="md-mt-40">
              <div className="service-nav-item">
                 <SideBar 
                           active_data={false}
                           active_data1={false}
                           active_data2={true}
                           active_data3={false}
                           active_data4={false}
                           active_data5={false}
                           active_data6={false}
                           active_data7={false}
                 />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;