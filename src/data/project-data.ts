import bg_img_1 from '@/assets/images/media/img_01.jpg';
import bg_img_2 from '@/assets/images/media/img_02.jpg';
import bg_img_3 from '@/assets/images/media/img_16.jpg';
import { IProject } from '@/types/project-d-t';

const project_data:IProject[] = [
  {
    id:1,
    title:'1. The Criminal Mind Analysis & Results',
    body_title:'Approach',
    body_desc:'Consultants specializing in strategy support organizations in achieving competitive excellence through deliberate.',
    body_subtitle:'FINAL results',
    body_lists:[
      'Expanded investment via Innovative Solutions.',
      'Improving risk management with advanced analytics.',
      'Grow profit, enhanced clients satisfaction.'
    ],
    bg_img:bg_img_1,
    video_id:'aXFSJTjVjw0',
    parent:'accordionOne',
    page:'home'
  },
  {
    id:2,
    title:'2. Invest the saving fund in proper way to get healthy return.',
    body_title:'Approach',
    body_desc:'Consultants specializing in strategy support organizations in achieving competitive excellence through deliberate.',
    body_subtitle:'FINAL results',
    body_lists:[
      'Expanded investment via Innovative Solutions.',
      'Improving risk management with advanced analytics.',
      'Grow profit, enhanced clients satisfaction.'
    ],
    bg_img:bg_img_2,
    video_id:'DPjYyCcw4Po',
    parent:'accordionOne',
    page:'home'
  },
  {
    id:3,
    title:'3. Digital Transformation Roadmap',
    body_title:'Approach',
    body_desc:'Consultants specializing in strategy support organizations in achieving competitive excellence through deliberate.',
    body_subtitle:'FINAL results',
    body_lists:[
      'Expanded investment via Innovative Solutions.',
      'Improving risk management with advanced analytics.',
      'Grow profit, enhanced clients satisfaction.'
    ],
    bg_img:bg_img_3,
    video_id:'aXFSJTjVjw0',
    isShow:true,
    parent:'accordionOne',
    page:'home'
  },
]

export default project_data;