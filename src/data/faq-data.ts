export type IFaq =  {
  id: number;
  title: string;
  desc: string;
  isShow?: boolean;
  page: string;
}

const faq_data: IFaq[] = [
  {
    id: 1,
    title: "How does the free trial work?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    isShow: true,
    page:'home'
  },
  {
    id: 2,
    title: "How do you find different criteria in your process?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: 3,
    title: "What do you look for in a founding team?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: 4,
    title: "Do you recommend Pay as you go or Pre pay?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: 5,
    title: "What do I get for $0 with my plan?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: 6,
    title: "What do I get for $0 with my plan?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: 7,
    title: "What do I get for $0 with my plan?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: 8,
    title: "Faster time to market",
    desc: "By utilizing rapid and agile application development, you can decrease your time-to-market by 10 times.",
    isShow: true,
    page:'home-1'
  },
  {
    id: 9,
    title: "Accelerate growth",
    desc: "Achieve rapid scaling of your operations by seamlessly connecting people, processes, and systems to enhance efficiency and productivity.",
    page:'home-1'
  },
  {
    id: 10,
    title: "Build ideas into existence",
    desc: "Collaborate on innovation and bring your ideas to fruition by empowering both business and IT teams.",
    page:'home-1'
  },
  {
    id: 11,
    title: "Quick Turnaround Time",
    desc: "Adept at troubleshooting roadblocks and navigating complexities, our experienced team fulfils your requests swiftly and efficiently.",
    isShow: true,
    page:'web-1'
  },
  {
    id: 12,
    title: "Global Client Base",
    desc: "We have had the pleasure of serving 100+ clients around the globe which has helped us get familiar with diverse work cultures.",
    page:'web-1'
  },
  {
    id: 13,
    title: "Ahead of the Curve",
    desc: "Our skilled developers always keep themselves up to speed with all the latest industry trends, updates, and best practices.",
    page:'web-1'
  },
  {
    id: 14,
    title: "Highly Flexible",
    desc: "At CGB, we believe in aligning our processes to the tune and rhythm of your working ecosystem.",
    page:'web-1'
  },
  {
    id: 15,
    title: "Best-in-industry Pricing",
    desc: "We offer a wide range of curated pricing packages along with providing custom quotes.",
    page:'web-1'
  },
  {
    id: 15,
    title: "Commitment to Data Security",
    desc: "We prioritize data security and work toward ensuring the safety and security of your sensitive information.",
    page:'web-1'
  },
  {
    id: 16,
    title: "Access to Experience and Expertise",
    desc: "By outsourcing your projects to a well-established agency, you get a qualified team with the requisite expertise attending to your requirements.",
    isShow: true,
    page:'web-2'
  },
  {
    id: 17,
    title: "Reduced Costs",
    desc: "It is much more cost-efficient to outsource a specific project than to hire an in-house team for the same.",
    page:'web-2'
  },
  {
    id: 18,
    title: "Faster Turnaround",
    desc: "When you outsource your projects to an agency with set processes and workflows in place, you you receive your deliverables well before time.",
    page:'web-2'
  },
  {
    id: 19,
    title: "Custom workforce solutions",
    desc: "Regardless of the current or potential scale of your staffing needs, we build a custom solution with flexible and agile processes that support your business, ensuring your goals are met.",
    page:'parmanent-staffing'
  },
  {
    id: 20,
    title: "Staffing solutions that scale",
    desc: "Our high-touch programs range from onsite services to master vendor programs and beyond. We craft solutions that fit today's needs and achieve tomorrow's goals.",
    page:'parmanent-staffing'
  },
  {
    id: 21,
    title: "Specialized recruiters",
    desc: "Our recruiters specialize in your industry and nothing more. They understand how to navigate changes in the field and which skills are needed to future-proof your business.",
    page:'parmanent-staffing'
  },
  {
    id: 22,
    title: "Advanced technology",
    desc: "To better recruit and hire, we leverage technology to mine our mountain of data on talent, hourly wages, salary figures, and more.",
    page:'parmanent-staffing'
  },
  {
    id: 23,
    title: "Upskilling/Reskilling",
    desc: "Job candidates need training to meet the need for technical skill sets. Our Training Solutions offer programs to upskill, reskill, and cross-skill for future roles.",
    page:'parmanent-staffing'
  },
  {
    id: 24,
    title: "Rapid turnaround",
    desc: "Our proactive recruiting and centralized talent hub allow us to move quickly to connect hundreds of candidates with your opportunities.",
    page:'parmanent-staffing'
  },
  {
    id: 25,
    title: "What is Finacle, and how can it benefit my business?",
    desc: " Finacle is a global banking solution by Infosys that offers a wide range of banking services including core banking, online banking, mobile banking, payments, treasury, origination, liquidity management, and wealth management services. It's designed to help banks and financial institutions transform their business, increase efficiency, and improve customer service. For your business, this means access to state-of-the-art digital banking solutions, faster transaction processing, and enhanced customer experience.",
    page:'finaclefaq'
  },
  {
    id: 26,
    title: " How does Finacle help in digital transformation?",
    desc: "Finacle supports digital transformation by providing a robust, agile, and comprehensive suite of solutions that enable banks to deliver innovative services and a seamless customer experience. It offers advanced analytics, AI-driven insights, and an open banking ecosystem that facilitates easy integration with new fintech applications and services. This ensures your business stays ahead in the competitive digital landscape, offering modern, efficient, and personalized banking services to your customers.",
    page:'finaclefaq'
  },
  {
    id: 27,
    title: "Is Finacle scalable and suitable for all sizes of businesses?",
    desc: "Yes, Finacle is highly scalable and can cater to the needs of various sizes of financial institutions, from small and medium-sized banks to large multinational corporations. Its modular design allows for flexible implementation, enabling businesses to select and customize the solutions they need to meet their specific requirements. Whether your business is experiencing rapid growth or looking to expand its service offerings, Finacle's scalable platform ensures that your banking operations can grow and evolve without constraints.",
    page:'finaclefaq'
  },
  {
    id: 28,
    title: "How does Finacle ensure the security of banking operations?",
    desc: " Security is a top priority in Finacle, which incorporates advanced security measures and complies with international security standards to protect against threats and fraud. It includes features such as multi-factor authentication, encryption, secure APIs, and continuous monitoring of banking operations to ensure data integrity and confidentiality. With Finacle, businesses can assure their customers that their financial transactions and personal information are safe and secure.",
    page:'finaclefaq'
  },
  {
    id: 29,
    title: "What kind of support and maintenance services does Finacle offer?",
    desc: "Finacle provides comprehensive support and maintenance services to ensure smooth and efficient banking operations. This includes 24/7 technical support, regular updates, and enhancements to keep up with the latest technological advancements and regulatory requirements. Additionally, Finacle offers training and consultancy services to help businesses maximize the use of the platform and ensure that their staff is well-equipped to deliver excellent customer service.",
    page:'finaclefaq'
  },
  {
    id: 30,
    title: "What is Mendix, and how can it benefit my business?",
    desc: "Mendix is a comprehensive low-code platform that enables businesses to develop, deploy, and manage applications quickly and with minimal coding. It facilitates rapid application development with tools for visual modeling, a drag-and-drop interface, and reusable components. For businesses, this means significantly reduced development time and costs, enabling you to bring innovative solutions to market faster and adapt to changes in the business environment more efficiently.",
    page:'mendixfaq'
  },
  {
    id: 31,
    title: "How does Mendix support digital transformation initiatives?",
    desc: "Mendix accelerates digital transformation by empowering teams to develop applications that streamline operations, enhance customer experiences, and innovate services. It supports agile development methodologies, allowing for iterative, user-centric design and development. With its low-code approach, Mendix enables cross-functional collaboration between business and IT teams, fostering innovation and ensuring that the final products closely align with business goals and user needs.",
    page:'mendixfaq'
  },
  {
    id: 32,
    title: "Is Mendix scalable and suitable for businesses of all sizes?",
    desc: "Yes, Mendix is designed to be highly scalable, supporting the needs of small businesses to large enterprises. It offers robust cloud-native architecture, ensuring that applications built with Mendix can scale to handle increasing user loads and data volumes seamlessly. Whether you're looking to create simple departmental applications or complex enterprise solutions, Mendix's platform is flexible enough to accommodate your growth and complexity needs.",
    page:'mendixfaq'
  },
  {
    id: 33,
    title: "How does Mendix ensure the security and compliance of applications?",
    desc: "Mendix takes security and compliance very seriously, incorporating best practices and industry standards into its platform. It offers built-in features for data protection, authentication, authorization, and encryption. Mendix applications are designed to be compliant with regulatory standards such as GDPR, HIPAA, and more, depending on the deployment options. The platform also provides tools for monitoring and auditing applications to ensure they adhere to the required compliance and security standards.",
    page:'mendixfaq'
  },
  {
    id: 34,
    title: "What kind of support and resources does Mendix offer for businesses?",
    desc: " Mendix provides a comprehensive range of support and resources to ensure businesses can maximize the benefits of the platform. This includes access to a vast community of developers, extensive documentation, expert training, and certification programs. Additionally, Mendix offers professional support services and a cloud platform with managed services options, ensuring that businesses can focus on innovation while Mendix takes care of the underlying technology.",
    page:'mendixfaq'
  },
];

export default faq_data;