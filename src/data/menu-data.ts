import { IMenu } from "@/types/menu-d-t";

const menu_data:IMenu[] = [
  {
    id:1,
    link:'/',
    title:'Home',
  },
  {
    id:2,
    link:'/about-us',
    title:'About Us'
  },
  {
    id:3,
    link:'/',
    title:'Solutions',
    mega_menu:true,
    mega_menus:[
      {
        id:1,
        menus:[
          {link:'/solutions/oracle',title:'Oracle'},
          {link:'/solutions/finacle',title:'Finacle'},
          {link:'/solutions/outsystems',title:'Outsystems'},
          {link:'/solutions/mendix',title:'Mendix'},
          {link:'/solutions/servicenow',title:'ServiceNow'},
          {link:'/solutions/automation-anywhere',title:'Automation Anywhere'}
        ]
      },
      {
        id:2,
        menus:[
          {link:'/contract-staffing',title:'Contract Staffing'},
          {link:'/permanent-staffing',title:'Permanent Staffing'},
          {link:'/hire-train-deploy',title:'Hire-Train-Deploy'},
          {link:'/rpo',title:'RPO'}
        ]
      },
      {
        id:3,
        menus:[
          {link:'/solutions/web-development',title:'Website Development'},
          {link:'/solutions/app-development',title:'App Development'},
          {link:'/solutions/graphic-designing',title:'Graphic Designing'},
          {link:'/solutions/digital-marketing',title:'Digital Marketing'},
          {link:'/solutions/paid-ads',title:'Paid Ads'},
          {link:'/solutions/seo-smo',title:'SEO & SMO'},
          {link:'/solutions/social-media-marketing',title:'Social Media Marketing'},
          // {link:'/solutions/email-marketing',title:'Email Marketing'},
          // {link:'/solutions/lead-generation',title:'Lead Generation'},
          // {link:'/coming-soon',title:'Branding Services'},
          // {link:'/coming-soon',title:'Startup Consulting'},

        ]
      }
    ]
  },
  {
    id:4,
    link:'#',
    title:'JCOE',
    dropdown:true,
    dropdown_menus:[
          {link:'/coming-soon',title:'SAP'},
          {link:'/coming-soon',title:'Salesforces'},
          {link:'/coming-soon',title:'Oracle'},
          {link:'/coming-soon',title:'Servicenow'},
          {link:'/coming-soon',title:'Outsystems'},
          {link:'/coming-soon',title:'Mendix'},
          {link:'/coming-soon',title:'Low Code No Code'},
    ]
  },
  {
    id:5,
    link:'#',
    title:'Training ',
    dropdown:true,
    dropdown_menus:[
          {link:'/training/corporate-training',title:'Corporate Training'},
          {link:'/training/customise-training',title:'Customise Training'},
          {link:'/coming-soon',title:'Online Courses'},
    ]
  },
  {
    id:6,
    link:'#',
    title:'Company ',
    dropdown:true,
    dropdown_menus:[
          {link:'/our-story',title:'Our Story'},
          {link:'/vision',title:'Vision'},
          {link:'/mission',title:'Mission'},
          {link:'/awards',title:'Awards'},
          {link:'/recognition',title:'Recognition'},
          {link:'/our-culture',title:'Our Culture'},
          {link:'/leadership',title:'Leadership'},
          {link:'/partners',title:'Partners'},
    ]
  },
  {
    id:7,
    link:'/blog',
    title:'Blog',
    dropdown:true,
    dropdown_menus:[
      {link:'/blog',title:'Blogs'},
      {link:'/blog-grid',title:'News & Media'},
      // {link:'/blog-grid',title:'Blog Grid'},
      // {link:'/blog-details',title:'Blog Details'},
    ]
  }
  // {
  //   id:8,
  //   link:'/contact',
  //   title:'Contact'
  // }
]

export default menu_data;