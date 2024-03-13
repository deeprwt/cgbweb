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



// CardItem
function CardItem({icon,title,subtitle}:{icon:StaticImageData;title:string;subtitle:string}) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img"/>
       </div>
      <h4 className="fw-bold mt-35 lg-mt-30 mb-15">{title}</h4>
      <p className="m0">{subtitle}</p>
    </div>
  )
}
// style 
const imgStyle = {
  height:'auto'
}
const OurStorySection = ()=> {
  return (
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-9">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>Story</h2>
              <p>As we forge ahead, the spirit of innovation is not confined to our internal processes alone. We strive to create an ecosystem where our clients experience the tangible benefits of technological advancements, making their interaction with us not just a service but a seamless, convenient experience.</p>
              <p>At CGB India, innovation is not just a commitment; it‘s a way of life. We are driven by the belief that convenience is the cornerstone of exceptional service delivery, and we tirelessly work towards ensuring that our clients not only receive solutions but experience the unparalleled convenience that comes with partnering with a forward-thinking, innovative organization.</p>
              {/* <div className="img-meta mb-60 lg-mb-40">
                <Image src={service_img} alt="service_img" className="lazy-img w-100 rounded-4" 
                style={imgStyle}/>
              </div> */}
            </div>
          </div>
          <div className="col-xxl-3 col-lg-3">
            <aside className="md-mt-40">
              <div className="service-nav-item">
                 <SideBar 
                           active_data={true}
                           active_data1={false}
                           active_data2={false}
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

export default OurStorySection;