import React from "react";
import Image from "next/image";
import map from "@/assets/images/icon/footer-map.png";

const MapWithCountries = () => {
  return (
    <div className="position-relative">
      <Image
        src={map}
        width={600}
        height={433}
        className="h-auto w-100"
        alt="map images"
      />
      <div className="dotmap">
        <div className="detailTab">
          <ul className="map-dots">
            <li className="tabing"><div className="line"><span className="text-white m-4">North America</span></div></li>
            <li className="tabing"><div className="line"><span className="text-white m-4">Europe</span></div></li>
            <li className="tabing"><div className="line"><span className="text-white m-4">India</span></div></li>
            <li className="tabing"><div className="line"><span className="text-white m-4">Middle East</span></div></li>
            <li className="tabing"><div className="line"><span className="text-white m-4">Japan</span></div></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapWithCountries;
