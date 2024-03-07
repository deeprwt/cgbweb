import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import icon from "@/assets/images/icon/icon_27.svg";



const TextFeatureAbout = ({ style_2 = false,btntitle,link }: { style_2?: boolean,btntitle:string,link:string, }) => {
  return (
    <>
      {!style_2 && (
         <Link href={link} className="btn-four mt-15 me-4">
         {btntitle}
       </Link> 
      )}
      {style_2 && (
        <Link href={link} className="btn-three icon-link mt-15">
                        <span>{btntitle}</span>
                        <Image src={icon} alt="icon" className="lazy-img icon ms-1"/>
                    </Link>
      )}
    </>
  );
};

export default TextFeatureAbout;
