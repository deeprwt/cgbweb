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
  // home Staring ----------------------------------------------------------
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
  // home End ------------------------------------------------------------------------------------
  // home 2 staring ------------------------------------------------------------------------------------

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
  // home 3 staring ------------------------------------------------------------------------------------
  // 
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
  // home 3 end ------------------------------------------------------------------------------------
  // home 4 staring ------------------------------------------------------------------------------------
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
  // home 4 end ------------------------------------------------------------------------------------
  // home 5------------------------------------------------------------------------------------
  {
    id:15,
    icon:icon_15,
    title:'Website Development',
    desc:'Envision, design, and bring to life your digital storefront with our expert website development services. From sleek portfolios to robust e-commerce platforms, we build websites that captivate and convert.',
    page:'home-5'
  },
  {
    id:16,
    icon:icon_16,
    title:'App Development',
    desc:'Step into the realm of mobile with confidence. Our skilled developers create custom mobile applications that engage users, streamline processes, and amplify your brand`s presence on iOS, Android, or cross-platform environments.',
    page:'home-5'
  },
  {
    id:17,
    icon:icon_15,
    title:'Graphic Designing',
    desc:'Enhance your brand identity and captivate your audience with stunning visuals. Our graphic design services cover everything from logos and branding to marketing collateral and UI/UX design.',
    page:'home-5'
  },
  {
    id:18,
    icon:icon_16,
    title:'Paid Ads',
    desc:'Invest wisely in your digital growth with our paid advertising solutions. From Google Ads to social media campaigns, we craft targeted strategies to maximize your ROI and drive measurable results.',
    page:'home-5'
  },
  {
    id:19,
    icon:icon_17,
    title:'SEO & SMO',
    desc:'Navigate the digital landscape with clarity and purpose. Our SEO and SMO services optimize your online presence, ensuring your brand shines bright in search engine results and social media feeds.',
    page:'home-5'
  },
  {
    id:20,
    icon:icon_18,
    title:'Social Media Marketing ',
    desc:'Harness the power of social media to amplify your brand`s voice. Our social media marketing strategies are tailored to your unique goals, driving engagement, building communities, and nurturing relationships across platforms.',
    page:'home-5'
  },
  // home 5 end-----------------------------------------------------------------------------------------
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
  {
    id:34,
    icon:icon_11,
    title:'Manage talent and skill scarcity across your business',
    desc:'Using our extensive talent acquisition resources, we help you hire the best, across any skillset, regardless of scarcity.',
    page:'parmanent-staffing'
  },
  {
    id:35,
    icon:icon_11,
    title:'Tailored recruitment advisory',
    desc:'We advise you across a range of topics from employer branding and organizational changes, to ESG with the goal to attract and retain top talent.',
    page:'parmanent-staffing'
  },
  {
    id:36,
    icon:icon_11,
    title:'Hire quickly and flexibly whenever you need to',
    desc:'We manage your hiring needs efficiently, on budget, and on time, no matter the vacancy, no matter when you need support.',
    page:'parmanent-staffing'
  },
  {
    id:37,
    icon:icon_11,
    title:'Hire',
    desc:'We tap into our diverse roster of 100,000+ alumni, the 5,000+ learners we train every year, and new candidates sourced through community partnerships. Our reach is global — so we source talent when and where you need it.',
    page:'hire-train-depoly'
  },
  {
    id:38,
    icon:icon_11,
    title:'Train',
    desc:'Candidates get a complete job-ready education — from tech skills and soft skills to real-world capstone projects — all built and taught by industry experts.',
    page:'hire-train-depoly'
  },
  {
    id:39,
    icon:icon_11,
    title:'Deploy',
    desc:'We manage your hiring needs efficiently, on budget, and on time, no matter the vacancy, no matter when you need support.',
    page:'hire-train-depoly'
  },
  {
    id:40,
    icon:icon_11,
    title:'Scalability',
    desc:'Our adaptable recruitment solutions are designed to accommodate fluctuations in hiring demands, ensuring that your organization can scale up or down as needed without compromising on efficiency or quality.',
    page:'rpo'
  },
  {
    id:41,
    icon:icon_11,
    title:'Technology Integration',
    desc:'We leverage cutting-edge recruitment tools and technologies to streamline the hiring process, from applicant tracking systems to AI-powered candidate screening tools. Our seamless integration of technology enhances efficiency and enables data-driven decision-making.',
    page:'rpo'
  },
  {
    id:42,
    icon:icon_11,
    title:'Talent Sourcing',
    desc:'With our strategic approach to candidate acquisition, we tap into extensive networks and resources to attract top talent across various industries and roles. We utilize a combination of channels, including job boards, social media platforms, and professional networks, to identify and engage with qualified candidates.',
    page:'rpo'
  },
  {
    id:43,
    icon:icon_11,
    title:'Candidate Engagement and Experience',
    desc:'We prioritize personalized candidate interaction throughout the recruitment process, ensuring a positive experience for every candidate. From initial contact to onboarding, we strive to provide meaningful engagement and support to candidates, enhancing satisfaction and retention.',
    page:'rpo'
  },
  {
    id:44,
    icon:icon_11,
    title:'Compliance and Risk Management',
    desc:'Ethical and legal recruitment practices are at the forefront of our operations. We ensure strict adherence to labor laws, regulations, and industry standards, mitigating risks associated with non-compliance and promoting fair and ethical recruitment practices.',
    page:'rpo'
  },
  {
    id:45,
    icon:icon_11,
    title:'Analytics and Reporting',
    desc:'Our data-driven approach provides valuable insights into recruitment metrics, trends, and performance. Through robust analytics and reporting capabilities, we offer actionable insights that enable continuous improvement and optimization of recruitment strategies.',
    page:'rpo'
  },
  {
    id:46,
    icon:icon_11,
    title:'Customized Solutions',
    desc:'We understand that every organization has unique recruitment needs and challenges. That&lsquo;s why we collaborate closely with our clients to develop tailored recruitment strategies that align with their specific requirements, culture, and business objectives.',
    page:'rpo'
  },
  {
    id:47,
    icon:icon_11,
    title:'Employer Branding',
    desc:'Enhancing your company&lsquo;s reputation as an employer of choice is essential for attracting top talent. We work with our clients to develop and promote their employer brand through effective employer branding strategies, candidate experience management, and positive employer branding initiatives.',
    page:'rpo'
  },
  {
    id:48,
    icon:icon_11,
    title:'Continuous Improvement',
    desc:'We are committed to ongoing innovation and evolution in recruitment practices. By continuously evaluating and refining our processes, technologies, and strategies, we ensure that our clients remain at the forefront of talent acquisition and recruitment excellence.',
    page:'rpo'
  },
  {
    id:49,
    icon:icon_11,
    title:'Sales Training',
    desc:'Revolutionizing sales methodologies, our training equips sales teams with innovative strategies and tools to thrive in competitive markets.',
    page:'corporatetraining'
  },
  {
    id:50,
    icon:icon_11,
    title:'Service Training',
    desc:'We emphasize on nurturing exceptional customer service skills, essential for sustaining long-term client relationships in today’s service-oriented economy.',
    page:'corporatetraining'
  },
  {
    id:51,
    icon:icon_11,
    title:'Soft skills Training',
    desc:'Revolutionizing sales methodologies, our training equips sales teams with innovative strategies and tools to thrive in competitive markets.',
    page:'corporatetraining'
  },
  {
    id:52,
    icon:icon_11,
    title:'Behavioural Training',
    desc:'This focuses on the holistic development of individuals, addressing areas like conflict resolution, stress management, and fostering emotional intelligence.',
    page:'corporatetraining'
  },
  {
    id:53,
    icon:icon_11,
    title:'Leadership Training',
    desc:'Our leadership modules are designed to cultivate visionary leaders and competent managers, instilling skills in strategic thinking and effective team management.',
    page:'corporatetraining'
  },
  {
    id:54,
    icon:icon_11,
    title:'First Time Manager Training',
    desc:'For those new to managerial roles, emphasizing foundational managerial skills.',
    page:'corporatetraining'
  },
  {
    id:55,
    icon:icon_11,
    title:'Technical Skills Training',
    desc:'mparts skills for technical roles, such as IT and engineering.',
    page:'corporatetraining'
  },
  {
    id:56,
    icon:icon_11,
    title:'Compliance Training',
    desc:'Ensures adherence to industry and company-specific regulations.',
    page:'corporatetraining'
  },
  {
    id:57,
    icon:icon_11,
    title:'Our triumphant clients',
    desc:'Our clients are the roots of our e-learning organization. Their satisfaction is our topmost priority and we are working with all our hearts for the same. We provide one of the best-customized e-learning services for the growth of their business and make them leading in the industry.',
    page:'customisetraining'
  },
  {
    id:58,
    icon:icon_11,
    title:'Great solutions',
    desc:'The best e-learning solutions come with great challenges and we are here to provide you with the best. Phoeniixx gives you the best e-learning strategies which make your business different from the competition.',
    page:'customisetraining'
  },
  {
    id:59,
    icon:icon_11,
    title:'Customized solutions',
    desc:'Every business has its own set of rules, principles and parameters and needs different e-learning strategies to successfully run in the industry. With Phoeniixx, you can get a whole new customized e-learning solution for your business.',
    page:'customisetraining'
  },
  {
    id:60,
    icon:icon_11,
    title:'OutSystems Consulting',
    desc:'As a recognized OutSystems consulting partner, we perform an in-depth analysis of your business to determine the scope of your project and devise a strategy for Systems Development Life Cycle (SDLC) Management.',
    page:'outsystems'
  },
  {
    id:61,
    icon:icon_11,
    title:'Web App Development',
    desc:'Our OutSystems development experts build feature-rich web apps that boost user engagement and enhance brand value and update them as or when required.',
    page:'outsystems'
  },
  {
    id:62,
    icon:icon_11,
    title:'Mobile App Development',
    desc:'OutSystems rapid application development platforms enable us to develop mobile apps compatible with Windows, Android, and iOS, in much less time and at lower costs than traditional platforms.',
    page:'outsystems'
  },
  {
    id:63,
    icon:icon_11,
    title:'Integration',
    desc:'We can seamlessly integrate OutSystems with all major database systems, web services, REST APIs, SAP, and Salesforce for better and more optimized results.',
    page:'outsystems'
  },
  {
    id:64,
    icon:icon_11,
    title:'Resource Augmentation',
    desc:'With a team of certified OutSystems consultants, administrators, developers, and project managers – we help you expand your in-house resources to implement and deliver projects in a hassle-free manner.',
    page:'outsystems'
  },
  {
    id:65,
    icon:icon_11,
    title:'Maintenance & Support',
    desc:'Our support team assists you with platform upgrades, security, maintenance, as well as complex integrations, enabling you to keep pace with a dynamic business environment.',
    page:'outsystems'
  },
  {
    id:66,
    icon:icon_11,
    title:'Enhanced Data Accessibility',
    desc:'Effortlessly access up-to-date data throughout the organization, ensuring quick and easy decision-making.',
    page:'oracle'
  },
  {
    id:67,
    icon:icon_11,
    title:'Automation Anywhere Assessmet',
    desc:'Our IT audit will evaluate your company&apos;s infrastructure and processes to determine if Automation Anywhere development and integration is feasible. Well create a roadmap, PoC, and governance design to help you make the best decision for your business.',
    page:'automationanywhere'
  },
  {
    id:68,
    icon:icon_11,
    title:'Streamline Manual Processes',
    desc:'Eliminate time-consuming and resource-draining manual processes through automation and optimization.',
    page:'oracle'
  },
  {
    id:69,
    icon:icon_11,
    title:'Automation Anywhere Consulting',
    desc:'Our skilled and experienced advisors can help you with several different aspects of Automation Anywhere. We&apos;re always using PoC modelling to make sure you get the best value. If you need help for a short project or for an extended period, we can work with your team to get the job done.',
    page:'automationanywhere'
  },
  {
    id:70,
    icon:icon_11,
    title:'Ensured Data Integrity',
    desc:'Eliminate time-consuming and resource-draining manual processes through automation and optimization.',
    page:'oracle'
  },
  {
    id:71,
    icon:icon_11,
    title:'Automation Anywhere Development & Configuration',
    desc:'Development and scale-up of RPA Automation Anywhere bots to achieve business goals – including process standardization/triggers, security, and governance.',
    page:'automationanywhere'
  },
  {
    id:72,
    icon:icon_11,
    title:'Automation Anywhere Development & Configuration',
    desc:'Development and scale-up of RPA Automation Anywhere bots to achieve business goals – including process standardization/triggers, security, and governance.',
    page:'automationanywhere'
  },
  {
    id:73,
    icon:icon_11,
    title:'Actionable Inventory Insights',
    desc:'Strategically plan and balance inventory to meet demand, leveraging valuable insights for optimized inventory management.',
    page:'oracle'
  },
  {
    id:74,
    icon:icon_11,
    title:'Automation Anywhere Implementation',
    desc:'Smart digital workers, or intelligent bots, can be deployed in phases - pilot and full-scale - in order to automate tasks that would normally drain time and resources, leaving them free for strategic business functions that are more important.',
    page:'automationanywhere'
  },
  {
    id:75,
    icon:icon_11,
    title:'Effective Supply & Demand Management',
    desc:'Successfully manage supply chains in the face of rapid changes, rising costs, and evolving buyer behavior.',
    page:'oracle'
  },
  {
    id:76,
    icon:icon_11,
    title:'Automation Anywhere Managed Services',
    desc:'We manage the complete RPA set up and related IT services to help clients with on-demand availability of Automation Anywhere certified developers. This allows for incremental efficiency and user-adoption so that your company can run as smoothly as possible.',
    page:'automationanywhere'
  },
  {
    id:77,
    icon:icon_11,
    title:'Exceed Expectations',
    desc:'Consistently deliver on promised order accuracy, on-time delivery, and cost savings to meet and surpass customer expectations.',
    page:'oracle'
  },
  {
    id:78,
    icon:icon_11,
    title:'Automation Anywhere Support and Maintenance',
    desc:'Our team is here to support you with all your bot training and optimization needs. We also offer continuous maintenance services to help keep your Automation Anywhere licenses up to date, manage tickets, and provide helpdesk support.',
    page:'automationanywhere'
  },
  {
    id:79,
    icon:icon_11,
    title:'ServiceNow consulting',
    desc:'We can always advise you on the best ways to tackle your challenges, be it uncertainty in mapping your needs to ServiceNow functionality, a process malfunction or difficulties in expanding ServiceNow to more areas across your enterprise. We also provide the technical skills to overcome these challenges and work both in terms of one-time consultations and ongoing improvement projects.',
    page:'servicenow'
  },
  {
    id:80,
    icon:icon_11,
    title:'ServiceNow implementation',
    desc:'We can help at any stage of your ServiceNow project. Our ServiceNow implementation services cover platform implementation from scratch, enhancement of your existing platform functionality, integrations (e.g., with IT infrastructure management tools, email services, CRM systems) as well as migration projects (from basic-functionality ticketing tools or legacy ITSM systems).',
    page:'servicenow'
  },

  {
    id:81,
    icon:icon_11,
    title:'Custom ServiceNow app development',
    desc:'Although the existing ServiceNow functionality offering is extremely rich, you can still miss some apps or features. For example, the product you need may be included in the more expensive functionality package and buying it because of one app would be too wasteful. Or you don’t think that using one of your purchased apps is sensible because you are dissatisfied with the concept behind it. A custom ServiceNow application is always a good way out for such occasions. Our certified ServiceNow application developers will analyze your functionality requirements, design and deliver the app in a reasonable time frame.',
    page:'servicenow'
  },
  {
    id:82,
    icon:icon_11,
    title:'ServiceNow testing',
    desc:'To ensure the quality of your ServiceNow solution, our certified team of test engineers can put your system through paces and uncover all there is to fix about it. They thoroughly check ServiceNow functionality, integrations, performance, security, usability and data quality to help you make your solution fully comply with your requirements.',
    page:'servicenow'
  },
  {
    id:83,
    icon:icon_11,
    title:'ServiceNow support',
    desc:'To help you maintain the performance and user convenience of your solution, ScienceSoft’s experts can provide ServiceNow support services. This includes not only basic user support activities but also system parameters monitoring and on-the-fly troubleshooting.',
    page:'servicenow'
  },
  {
    id:84,
    icon:icon_11,
    title:'ServiceNow managed Services',
    desc:'ScienceSoft can become your ServiceNow managed services provider for you to enjoy using ServiceNow without thinking about its performance issues or surfaced defects. We will take over all the worries concerning system administration and performance, security, and ongoing improvements as well as user training and support.',
    page:'servicenow'
  },
  {
    id:85,
    icon:icon_11,
    title:'ServiceNow consulting',
    desc:'ScienceSoft can render you technical aid in making ServiceNow meet your business requirements. We set up and adjust the platform without code changes and also do various code-based customizations, such as back-end and client logic, code-level integrations, and access configuration.',
    page:'servicenow'
  },
  {
    id:86,
    icon:icon_11,
    title:'Banks',
    desc:'',
    page:'finacle'
  },
  {
    id:87,
    icon:icon_11,
    title:'Payment Service Providers',
    desc:'',
    page:'finacle'
  },
  {
    id:88,
    icon:icon_11,
    title:'Lending companies',
    desc:'',
    page:'finacle'
  },
  {
    id:89,
    icon:icon_11,
    title:'Insurance companies',
    desc:'',
    page:'finacle'
  },
  {
    id:90,
    icon:icon_11,
    title:'Investment companies',
    desc:'',
    page:'finacle'
  },
  {
    id:91,
    icon:icon_11,
    title:'DeFi companies',
    desc:'',
    page:'finacle'
  },
  {
    id:92,
    icon:icon_11,
    title:'Fintech startups',
    desc:'',
    page:'finacle'
  },
  {
    id:93,
    icon:icon_11,
    title:'Financial software product companies',
    desc:'',
    page:'finacle'
  },
  {
    id:93,
    icon:icon_11,
    title:'Logo - A professional explainer',
    desc:`Who doesn't want a pictorial presentation of their ideas? Of course, it starts with a logo design. With just one picture of the logo, you can bring your business dream to reality. An effective logo or a webpage gives you a distinct identity and effectively represents your company's value.`,
    page:'graphic'
  },
  {
    id:94,
    icon:icon_11,
    title:'Building trust with the first impression',
    desc:'Wondering how a graphic design or web page can build trust among brands and customers? Pictures speak sharper than words. The more visual evidence the more convincing it is and builds the credibility of the business which is necessary. Also, it persuades the buyers about the quality of products and services you are capable of delivering.',
    page:'graphic'
  },
  {
    id:95,
    icon:icon_11,
    title:'Excellent communicator to carry your message',
    desc:'What knowledge is if we are not adapting ourselves to our fast-forwarding lives? Yes, nobody has time to know what your company offers. However, they invest time in viewing creative graphic designs and aesthetic images. Graphic designs are not only a feast for sore eyes on your website but, also help establish communication with your customer.',
    page:'graphic'
  },
]

export default service_data;