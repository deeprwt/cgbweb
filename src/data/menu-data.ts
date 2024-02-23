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
          {link:'/service-v1',title:'Contract Staffing'},
          {link:'/service-v2',title:'Permanent Staffing'},
          {link:'/service-details',title:'Hire-Train-Deploy'},
          {link:'/service-details',title:'RPO'}
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
          {link:'/team-details',title:'Social Media Marketing'},
          {link:'/team-details',title:'Email Marketing'},
          {link:'/team-details',title:'Lead Generation'},
          {link:'/team-details',title:'Branding Services'},
          {link:'/team-details',title:'Startup Consulting'},

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
          {link:'#',title:'SAP'},
          {link:'#',title:'Salesforces'},
          {link:'#',title:'Oracle'},
          {link:'#',title:'Servicenow'},
          {link:'#',title:'Outsystems'},
          {link:'#',title:'Mendix'},
          {link:'#',title:'Low Code No Code'},
    ]
  },
  {
    id:5,
    link:'#',
    title:'Training ',
    dropdown:true,
    dropdown_menus:[
          {link:'#',title:'Corporate Training'},
          {link:'#',title:'Customise Training'},
          {link:'#',title:'Online Courses'},
    ]
  },
  {
    id:6,
    link:'#',
    title:'Company ',
    dropdown:true,
    dropdown_menus:[
          {link:'#',title:'Our Story'},
          {link:'/vision',title:'Vision'},
          {link:'#',title:'Mission'},
          {link:'#',title:'Awards'},
          {link:'#',title:'Recognition'},
          {link:'#',title:'Our Culture'},
          {link:'#',title:'Leadership'},
          {link:'#',title:'Partners'},
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