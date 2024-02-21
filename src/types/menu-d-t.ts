export interface IMenu {
  id: number;
  link: string;
  title: string;
  dropdown?: boolean;
  dropdown_menus?: {
      link: string;
      title: string;
  }[];
  mega_menu?: boolean;
  mega_menus?: {
      id:number;
      menus:{
        link: string;
        title: string;
      }[]
  }[];
}