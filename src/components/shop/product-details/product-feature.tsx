import React from "react";
import Image, { StaticImageData } from "next/image";
// internal
import icon_1 from "@/assets/images/icon/icon_81.svg";
import icon_2 from "@/assets/images/icon/icon_82.svg";
import icon_3 from "@/assets/images/icon/icon_83.svg";

// card item
function CardItem({ icon, title }: { icon: StaticImageData; title: string }) {
  return (
    <div className="card-style-sixteen text-center mt-25">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4
        className="fw-bold mt-35 lg-mt-30"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h4>
    </div>
  );
}

const ProductFeature = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-sm-6 wow fadeInUp">
        <CardItem icon={icon_1} title="Free Delivery within <br /> 3 days." />
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <CardItem icon={icon_2} title="7 Days refund <br /> policy." />
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
        <CardItem icon={icon_3} title="Secure payment <br /> methods" />
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <CardItem icon={icon_3} title="Store pickup <br /> facility." />
      </div>
    </div>
  );
};

export default ProductFeature;
