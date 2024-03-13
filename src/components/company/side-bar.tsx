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

// props type
type IProps = {
active_data : boolean;
active_data1 : boolean;
active_data2 : boolean;
active_data3 : boolean;
active_data4 : boolean;
active_data5 : boolean;
active_data6 : boolean;
active_data7 : boolean;
}

// ServiceNav
function ServiceNav({icon,title,active,link}:{icon:StaticImageData;title:string;active?:boolean;link:string}) {
  return (
    <li>
      <Link href={link} className={`d-flex align-items-center w-100 ${active?'active':''}`}>
        <Image src={icon} alt="icon" className="lazy-img"/>
          <span>{title}</span>
      </Link>
  </li>
  )
}
// style 
const imgStyle = {
  height:'auto'
}
const SideBar = ({
    active_data = false,
    active_data1 = false,
    active_data2 = false,
    active_data3 = false,
    active_data4 = false,
    active_data5 = false,
    active_data6 = false,
    active_data7 = false,

  }: IProps)=> {
  return (

                <ul className="style-none">
                  <ServiceNav icon={icon_1} link="/our-story" title='Our Story' active={active_data}/>
                  <ServiceNav icon={icon_2} link="/vision" title='Vision' active={active_data1}/>
                  <ServiceNav icon={icon_3} link="/mission" title='Mission' active={active_data2}/>
                  {/* <ServiceNav icon={icon_4} link="/awards" title='Awards'active={active_data3}/> */}
                  {/* <ServiceNav icon={icon_5} link="/recognition" title='Recognition'active={active_data4}/> */}
                  <ServiceNav icon={icon_6} link="/our-culture" title='Our Culture'active={active_data5}/>
                  <ServiceNav icon={icon_7} link="/leadership" title='Leadership'active={active_data6}/>
                  <ServiceNav icon={icon_8} link="/partners" title='Partners'active={active_data7}/>
                  {/* <ServiceNav icon={icon_9} title='Consultation'/> */}
                </ul>

  );
};

export default SideBar;