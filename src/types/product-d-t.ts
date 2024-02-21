import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  img: StaticImageData;
  title: string;
  category: string;
  price: number;
  discount: number;
  quantity: number;
  old_price?: number;
  orderQuantity?: number;
  sm_desc: string;
  details: {
    specifications: string;
    main_features: string[];
  };
  related_images:StaticImageData[]
  reviews: {
    id: number;
    user: StaticImageData;
    name: string;
    review_text: string;
    rating: number;
  }[]
}
