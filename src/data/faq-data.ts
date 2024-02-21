export type IFaq =  {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
  page: string;
}

const faq_data: IFaq[] = [
  {
    id: "One",
    title: "How does the free trial work?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    isShow: true,
    page:'home'
  },
  {
    id: "Two",
    title: "How do you find different criteria in your process?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: "Three",
    title: "What do you look for in a founding team?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: "Four",
    title: "Do you recommend Pay as you go or Pre pay?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: "Five",
    title: "What do I get for $0 with my plan?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: "six",
    title: "What do I get for $0 with my plan?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: "seven",
    title: "What do I get for $0 with my plan?",
    desc: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    page:'home'
  },
  {
    id: "eight",
    title: "Faster time to market",
    desc: "By utilizing rapid and agile application development, you can decrease your time-to-market by 10 times.",
    isShow: true,
    page:'home-1'
  },
  {
    id: "nine",
    title: "Accelerate growth",
    desc: "Achieve rapid scaling of your operations by seamlessly connecting people, processes, and systems to enhance efficiency and productivity.",
    page:'home-1'
  },
  {
    id: "ten",
    title: "Build ideas into existence",
    desc: "Collaborate on innovation and bring your ideas to fruition by empowering both business and IT teams.",
    page:'home-1'
  },
];

export default faq_data;