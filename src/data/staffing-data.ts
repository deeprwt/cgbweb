import { StaticImageData } from 'next/image';
// home 1
import icon_1 from '@/assets/images/icon/icon_23.svg';
import icon_2 from '@/assets/images/icon/icon_24.svg';
import icon_3 from '@/assets/images/icon/icon_25.svg';
import icon_4 from '@/assets/images/icon/icon_26.svg';
// home 2
import icon_5 from '@/assets/images/icon/icon_06.svg';
import icon_6 from '@/assets/images/icon/icon_07.svg';
import icon_7 from '@/assets/images/icon/icon_08.svg';
// home 3
import icon_8 from '@/assets/images/icon/icon_32.svg';
import icon_9 from '@/assets/images/icon/icon_33.svg';
import icon_10 from '@/assets/images/icon/icon_34.svg';
import icon_11 from '@/assets/images/icon/icon_35.svg';
// home 4
import icon_12 from '@/assets/images/icon/icon_40.svg';
import icon_13 from '@/assets/images/icon/icon_41.svg';
import icon_14 from '@/assets/images/icon/icon_42.svg';
// home 5
import icon_15 from '@/assets/images/icon/icon_95.svg';
import icon_16 from '@/assets/images/icon/icon_95.svg';
import icon_17 from '@/assets/images/icon/icon_10.svg';
import icon_18 from '@/assets/images/icon/icon_11.svg';


// data type 
interface IService {
    id: number;
    icon: StaticImageData;
    title: string;
    desc: string;
    page: string;
}

interface IStaffing {
  id: number;
  icon: StaticImageData;
  title: string;
  desc: string;
  page: string;
  link: string;
}

const staffing_data:IStaffing[] = [
  // home 1
  {
    id:1,
    icon:icon_16,
    title:'Contract Staffing',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'staffing-1',
    link: '/contract-staffing'
  },
  {
    id:2,
    icon:icon_16,
    title:'Parmanent Staffing',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'staffing-1',
    link: '/parmanent-staffing'
  },
  {
    id:3,
    icon:icon_16,
    title:'Hire Train Deploy',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'staffing-1',
    link: '/hire-train-deploy'
  },
  {
    id:4,
    icon:icon_16,
    title:'RPO',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'staffing-1',
    link: '/rpo'
  },
]

export default staffing_data;