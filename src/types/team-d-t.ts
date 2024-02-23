import { StaticImageData } from "next/image";

export interface ITeam {
  id: number;
  img: StaticImageData;
  name: string;
  designation: string;
  page: string;
  gif: StaticImageData;
}