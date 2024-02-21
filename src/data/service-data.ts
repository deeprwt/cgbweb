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

const service_data:IService[] = [
  // home 1
  {
    id:1,
    icon:icon_1,
    title:'Banking',
    desc:'Effortless payments and transfers with our streamlined banking process.',
    page:'home'
  },
  {
    id:2,
    icon:icon_2,
    title:'Earning',
    desc:'Earning potential grows with dedication, innovation, and continuous improvement.',
    page:'home'
  },
  {
    id:3,
    icon:icon_3,
    title:'Expense Track',
    desc:'Empower your budgeting with accurate and intuitive expense tracking',
    page:'home'
  },
  {
    id:4,
    icon:icon_4,
    title:'Savings',
    desc:'Secure your dreams through disciplined savings & prudent investments.',
    page:'home'
  },
  // home 2
  {
    id:5,
    icon:icon_5,
    title:'Expense Report',
    desc:'Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.',
    page:'home-2'
  },
  {
    id:6,
    icon:icon_6,
    title:'Book keeping',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'home-2'
  },
  {
    id:7,
    icon:icon_7,
    title:'Tax Preparation',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'home-2'
  },
  // home 3
  {
    id:8,
    icon:icon_8,
    title:'Design',
    desc:'Craft bespoke IT and staffing solutions tailored to your needs for unparalleled performance.',
    page:'home-3'
  },
  {
    id:9,
    icon:icon_9,
    title:'Success Criteria',
    desc:'Exceed benchmarks with our innovative strategies, ensuring your success in every endeavor.',
    page:'home-3'
  },
  {
    id:10,
    icon:icon_10,
    title:'Adoption',
    desc:'Seamlessly integrate our solutions into your workflow, guaranteeing swift and effortless implementation.',
    page:'home-3'
  },
  {
    id:11,
    icon:icon_11,
    title:'Governance',
    desc:'Establish stringent frameworks to optimize efficiency and ensure compliance, mitigating risks effectively.',
    page:'home-3'
  },
  // home 4
  {
    id:12,
    icon:icon_12,
    title:'Global Payment',
    desc:'Maximize convenience by paying for ads, subscriptions, and inventory with Mastercard®.',
    page:'home-4'
  },
  {
    id:13,
    icon:icon_13,
    title:'Multiple Currency',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'home-4'
  },
  {
    id:14,
    icon:icon_14,
    title:'Online Payment',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'home-4'
  },
  // home 5
  {
    id:15,
    icon:icon_15,
    title:'Design & Development',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'home-5'
  },
  {
    id:16,
    icon:icon_16,
    title:'Digital Marketing',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'home-5'
  },
  {
    id:17,
    icon:icon_15,
    title:'Design & Development',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'home-5'
  },
  {
    id:18,
    icon:icon_16,
    title:'Digital Marketing',
    desc:'Use receiving accounts in a growing number of currencies and get paid like a local.',
    page:'home-5'
  },
  {
    id:19,
    icon:icon_17,
    title:'Our Mission',
    desc:'Optimize expense tracking across platforms, & product lines using multiple cards.',
    page:'home-5'
  },
  {
    id:20,
    icon:icon_18,
    title:'Our Vision',
    desc:'Elit esse cillum dolore eui fugiat nulla pariatur.',
    page:'home-5'
  },
  {
    id:21,
    icon:icon_11,
    title:'Continuous Improvement',
    desc:'Commit to ongoing refinement, evolving our offerings to stay ahead in a dynamic market landscape.',
    page:'home-3'
  },
  {
    id:22,
    icon:icon_11,
    title:'Continuous Improvement',
    desc:'Commit to ongoing refinement, evolving our offerings to stay ahead in a dynamic market landscape.',
    page:'web-1'
  },
  {
    id:23,
    icon:icon_11,
    title:'Continuous Improvement',
    desc:'Commit to ongoing refinement, evolving our offerings to stay ahead in a dynamic market landscape.',
    page:'web-1'
  },
  {
    id:24,
    icon:icon_11,
    title:'Continuous Improvement',
    desc:'Commit to ongoing refinement, evolving our offerings to stay ahead in a dynamic market landscape.',
    page:'web-1'
  },
  {
    id:25,
    icon:icon_11,
    title:'Continuous Improvement',
    desc:'Commit to ongoing refinement, evolving our offerings to stay ahead in a dynamic market landscape.',
    page:'web-1'
  },
  {
    id:26,
    icon:icon_11,
    title:'Continuous Improvement',
    desc:'Commit to ongoing refinement, evolving our offerings to stay ahead in a dynamic market landscape.',
    page:'web-1'
  },
]

export default service_data;