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
];

export default faq_data;