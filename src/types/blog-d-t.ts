import { StaticImageData } from "next/image";

export interface IBlog {
  id: number;
  img: StaticImageData;
  date: string;
  title: string;
  post_info?: string;
  quote_blog?: boolean;
  designation?: string;
  author:string;
  category:string;
  page: string;
}