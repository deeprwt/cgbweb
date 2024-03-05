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
  {
    id: 35,
    title: "What makes Oracle solutions stand out for businesses?",
    desc: "Oracle provides a comprehensive suite of integrated cloud applications and platform services that are designed to perform across all business functions, including finance, human resources, supply chain management, and customer experience. Oracle's solutions stand out due to their scalability, reliability, and security features, making them suitable for businesses of all sizes and industries. Oracle's commitment to innovation, with significant investments in AI, machine learning, and blockchain, ensures that businesses have access to cutting-edge technologies to drive growth and efficiency.",
    page:'oraclefaq'
  },
  {
    id: 36,
    title: "How does Oracle support digital transformation?",
    desc: "Oracle supports digital transformation by offering a complete and integrated stack of cloud applications, platform services, and engineered systems. This enables businesses to modernize their IT infrastructure, streamline business processes, and improve decision-making through advanced analytics and data-driven insights. Oracle Cloud's comprehensive offering facilitates the move to cloud computing, making it easier for businesses to innovate faster, reduce IT complexity, and achieve greater agility in a digital-first world.",
    page:'oraclefaq'
  },
  {
    id: 37,
    title: "Is Oracle scalable and suitable for all types of businesses?",
    desc: " Yes, Oracle's solutions are highly scalable and can be tailored to meet the specific needs of different types of businesses, from small startups to large enterprises. Oracle Cloud, for example, offers flexible computing resources that can be adjusted as a company grows, ensuring that businesses only pay for what they need. This scalability supports business expansion and the ability to handle increasing data volumes and transaction loads without compromising performance.",
    page:'oraclefaq'
  },
  {
    id: 38,
    title: "How does Oracle ensure the security of business data?",
    desc: "Oracle is committed to providing the highest levels of security to its customers. Oracle Cloud infrastructure is designed with security-first architecture, including data encryption at rest and in transit, robust identity and access management, and advanced threat detection capabilities. Oracle continuously invests in security updates and compliance measures to protect against evolving cyber threats, ensuring that business data and applications are secure and compliant with global regulatory standards",
    page:'oraclefaq'
  },
  {
    id: 39,
    title: "What kind of support and services does Oracle offer for businesses?",
    desc: "Oracle offers comprehensive support and services to help businesses maximize the value of their Oracle solutions. This includes 24/7 customer support, professional services, consulting, training, and cloud managed services. Oracle's global network of partners and developers also provides additional resources and expertise to support business innovation and growth. With Oracle's extensive support ecosystem, businesses have access to the tools and assistance they need to successfully implement and use Oracle solutions.",
    page:'oraclefaq'
  },
  {
    id: 39,
    title: "What is OutSystems, and how can it benefit my business?",
    desc: "OutSystems is a modern application platform that allows for rapid application development with minimal coding, thanks to its low-code approach. It enables businesses to build complex systems, mobile and web applications faster than traditional development methods. OutSystems can significantly benefit your business by accelerating digital transformation, facilitating innovation, and reducing the time and cost associated with application development and maintenance.",
    page:'outsystemsfaq'
  },
  {
    id: 40,
    title: "How does OutSystems support digital transformation?",
    desc: "OutSystems supports digital transformation by empowering organizations to develop and deploy applications that address their unique challenges and opportunities quickly. Its visual development environment, coupled with a wide array of pre-built templates and components, allows businesses to automate workflows, improve customer experiences, and bring new services to market with unprecedented speed. This agility is crucial for staying competitive in today's rapidly changing digital landscape.",
    page:'outsystemsfaq'
  },
  {
    id: 41,
    title: "Is OutSystems scalable and suitable for businesses of all sizes?",
    desc: "Yes, OutSystems is highly scalable, catering to the needs of small businesses, large enterprises, and everything in between. The platform is designed to handle a wide range of application complexities and sizes, ensuring that as your business grows, your applications can scale accordingly. OutSystems supports the deployment of applications across various environments, including cloud, on-premises, and hybrid setups, providing the flexibility to meet specific business requirements.",
    page:'outsystemsfaq'
  },
  {
    id: 42,
    title: " How does OutSystems ensure the security of applications?",
    desc: " OutSystems takes application security seriously, incorporating security by design into its platform. It offers a comprehensive set of security features, including built-in security checks, automated vulnerability scanning, and compliance with industry-standard security practices and certifications. The platform also facilitates the development of secure applications by enforcing best practices and providing tools to identify and mitigate potential security risks throughout the application lifecycle.",
    page:'outsystemsfaq'
  },
  {
    id: 43,
    title: " What kind of support and resources does OutSystems offer?",
    desc: " OutSystems provides a robust ecosystem of support and resources to ensure businesses can effectively implement and leverage the platform. This includes access to extensive documentation, a vibrant community of developers, online training through the OutSystems Academy, and professional support services. Additionally, OutSystems offers a marketplace with a wide range of pre-built applications, connectors, and widgets to accelerate development and enhance application functionality.",
    page:'outsystemsfaq'
  },
  {
    id: 44,
    title: "What is ServiceNow, and how can it benefit my business?",
    desc: " ServiceNow is a cloud-based platform that offers digital workflows to optimize business operations and enhance productivity. It enables organizations to automate routine tasks, streamline processes, and integrate various functions across the enterprise. By utilizing ServiceNow, businesses can improve efficiency, reduce costs, and provide better experiences to both employees and customers. It’s particularly beneficial in managing IT services, automating HR processes, securing operations, and delivering customer service solutions.",
    page:'serviceNow'
  },
  {
    id: 45,
    title: "How does ServiceNow support digital transformation?",
    desc: "ServiceNow supports digital transformation by providing a single, unified platform to automate and manage business processes across all departments. It replaces manual, siloed, and inefficient processes with digital workflows that are fast, smart, and more efficient. This accelerates the digitization of manual processes, enhances service delivery, and enables organizations to adapt to changing business needs quickly. ServiceNow's platform also offers insights and analytics to drive decision-making and innovation.",
    page:'serviceNow'
  },
  {
    id: 46,
    title: "Is ServiceNow scalable and suitable for all types of businesses?",
    desc: "Yes, ServiceNow is designed to be highly scalable, making it suitable for businesses of all sizes, from small and medium-sized enterprises to large global corporations. Its flexible architecture allows organizations to start with what they need and expand as their business grows, without compromising performance or user experience. ServiceNow can adapt to any business's evolving needs, ensuring that companies can continue to innovate and improve their operations over time.",
    page:'serviceNow'
  },
  {
    id: 45,
    title: "How does ServiceNow ensure the security and compliance of its platform?",
    desc: "ServiceNow is committed to the highest standards of security and compliance. The platform incorporates robust security features, including data encryption, role-based access control, and comprehensive audit trails. ServiceNow complies with global regulatory standards, such as GDPR, HIPAA, SOC 2, and ISO 27001, ensuring that businesses meet their compliance requirements effortlessly. Regular security assessments and updates ensure that the platform remains secure against emerging threats.",
    page:'serviceNow'
  },
  {
    id: 46,
    title: "What kind of support and resources does ServiceNow offer?",
    desc: " ServiceNow provides extensive support and resources to ensure successful implementation and maximization of the platform. This includes a comprehensive knowledge base, community forums, developer resources, and training and certification programs through the Now Learning platform. Customers also have access to 24/7 support, professional services, and a network of experienced partners to help with strategic planning, implementation, and optimization of ServiceNow solutions.",
    page:'serviceNow'
  },
  {
    id: 47,
    title: "What is Automation Anywhere, and how can it benefit my business?",
    desc: "Automation Anywhere is a state-of-the-art RPA platform that empowers businesses to automate complex and repetitive tasks using software robots, or bots. This technology can streamline operations, reduce manual errors, and free up your employees to focus on more strategic work. By integrating Automation Anywhere into your business processes, you can achieve faster turnaround times, enhanced accuracy, and improved compliance, leading to significant cost savings and increased customer satisfaction.",
    page:'automationsfaq'
  },
  {
    id: 48,
    title: "How does Automation Anywhere support digital transformation?",
    desc: " Automation Anywhere accelerates digital transformation by making it easier for businesses to integrate advanced technologies such as artificial intelligence (AI), machine learning (ML), and analytics into their processes. This convergence of RPA with AI and ML enables the automation of a wider range of tasks, including those that require understanding unstructured data, making decisions, and learning from outcomes. As a result, businesses can drive innovation, enhance agility, and deliver more value to their customers.",
    page:'automationsfaq'
  },
  {
    id: 49,
    title: "Is Automation Anywhere scalable for businesses of all sizes?",
    desc: "Yes, Automation Anywhere is designed to be highly scalable, meeting the needs of businesses of all sizes—from small and medium-sized enterprises to large corporations. The platform's cloud-native architecture allows for easy scaling of RPA solutions across departments and geographies, enabling businesses to expand their automation initiatives as they grow. This scalability ensures that companies can start small, experiment with automating different processes, and then scale quickly based on their specific needs and successes.",
    page:'automationsfaq'
  },
  {
    id: 50,
    title: "How does Automation Anywhere ensure the security and compliance of its RPA solutions?",
    desc: "Automation Anywhere places a strong emphasis on security and compliance, offering a secure RPA platform that adheres to global security standards. The platform includes features such as role-based access control, encryption, and audit logs to ensure that all automated processes are secure and compliant with regulatory requirements. This is particularly important for businesses in industries such as finance, healthcare, and government, where protecting sensitive information and adhering to strict compliance standards is crucial.",
    page:'automationsfaq'
  },
  {
    id: 51,
    title: "What kind of support and resources does Automation Anywhere offer?",
    desc: " Automation Anywhere provides comprehensive support and resources to ensure businesses can successfully implement and optimize their RPA solutions. This includes access to a global network of RPA experts, 24/7 customer support, and a rich online community where users can share insights and best practices. Additionally, Automation Anywhere University offers a wide range of training and certification programs to help businesses build in-house expertise in RPA.",
    page:'automationsfaq'
  },
];

export default faq_data;