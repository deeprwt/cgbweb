import { StaticImageData } from "next/image";

export interface IPortfolio {
  id: number;
  img: StaticImageData;
  tags: string[];
  title: string;
  portfolio: string;
  sub_title?: string;
}