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
    title:'UI & UX Design',
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
    title:'Full Stack Web Development',
    desc:'System infrastructure, web architecture, and communication protocols - our front end development agency specializes in all these departments, delivering to you interactive front ends along with robust backends.',
    page:'web-1'
  },
  {
    id:23,
    icon:icon_11,
    title:'HTML5/CSS Development',
    desc:'We feed interactive elements using W3C standard & cross-browser compatibility coding standards to put wind in your digital sails.',
    page:'web-1'
  },
  {
    id:24,
    icon:icon_11,
    title:'Custom Web App Development',
    desc:'Our seasoned and pre-vetted front end architects use clean codes and a customized approach to infuse creativity and interactivity into your web portals.',
    page:'web-1'
  },
  {
    id:25,
    icon:icon_11,
    title:'CMS Design and Development',
    desc:'With our comprehensive front end web development services, you can set up best-in-class, responsive and robust content management systems for your business.',
    page:'web-1'
  },
  {
    id:26,
    icon:icon_11,
    title:'Data Migration, Support, and Maintenance',
    desc:'Be it migrating crucial data, resolving post-deployment queries or regular maintenance, obtain watertight solutions from our front-end experts.',
    page:'web-1'
  },
  {
    id:27,
    icon:icon_11,
    title:'Enterprise Mobility Solutions',
    desc:'What is it that makes mobile application development the need of the hour for your business? Businesses from around the world have realized the significance of mobility solutions.',
    page:'app-1'
  },
  {
    id:28,
    icon:icon_11,
    title:'iOS App Development',
    desc:'CGB is one of the leading Mobile App Development Company providing on-time and quality iOS app development services through its team of skilled professionals.',
    page:'app-1'
  },
  {
    id:29,
    icon:icon_11,
    title:'Android App Development',
    desc:'CGB offers custom Android App development services for businesses, because the Android devices comprises of numerous OS versions with diverse sizes of screens leading the development of android applications as the task of specialists.',
    page:'app-1'
  },
  {
    id:30,
    icon:icon_11,
    title:'M-Commerce Development',
    desc:'CGB has been working in mobile commerce industry from several years now. With our demonstrated experience in delivering multiple m-commerce solutions, our proficient team is fully capable',
    page:'app-1'
  },
  {
    id:31,
    icon:icon_11,
    title:'Hire employees during peak times',
    desc:'When your talent needs change throughout the year, flexible placements ensure productivity.',
    page:'contract-staffing'
  },
  {
    id:32,
    icon:icon_11,
    title:'Evaluating talent before longer contracts',
    desc:'Hire with increased certainty by spending longer times evaluating and ensuring the right fit for your business.',
    page:'contract-staffing'
  },
  {
    id:33,
    icon:icon_11,
    title:'Realize cost savings through flexibility',
    desc:'Only pay for staff when you actually need them and maintain the most efficient business output.',
    page:'contract-staffing'
  },
]

export default service_data;