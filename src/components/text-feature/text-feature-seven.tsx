import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import screen from "@/assets/images/assets/screen_15.png";
import icon_1 from "@/assets/images/icon/icon_43.svg";
import icon_2 from "@/assets/images/icon/icon_44.svg";
import icon_3 from "@/assets/images/icon/icon_45.svg";

// image style
const imgStyle = {
  height: "auto",
};

// card item
function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-twelve w-100 text-center mt-30">
      <div className="icon m-auto tran3s d-flex align-items-center justify-content-center rounded-circle">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-20 mb-15">{title}</h4>
      <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
    </div>
  );
}

const TextFeatureSeven = () => {
  return (
    <div className="text-feature-seven mt-170 lg-mt-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-last wow fadeInRight">
            <div className="ps-xl-5 ms-xxl-4">
              <div className="title-three mb-35 md-mb-20">
                <div className="upper-title">management</div>
                <h2>Arrange & optimize your payments.</h2>
              </div>
              <p className="text-lg mb-40 lg-mb-30">
                Optimize expense tracking across platforms, & product lines
                using multiple cards.
              </p>
              <ul className="style-none">
                <li>Mobile app easy management & access.</li>
                <li>Ton’s of features for handle the card easily & safely</li>
                <li>Strong security system.</li>
              </ul>
              <div className="d-flex justify-content-between align-items-center mt-65 lg-mt-50">
                <Link href="/about-us"
                  className="btn-thirteen tran3 flex-fill"
                >
                  Learn More
                </Link>
                <Link href="/about-us" className="btn-fourteen tran3s">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
            <div className="media-wrapper md-mt-60">
              <Image
                src={screen}
                alt="screen"
                className="lazy-img"
                style={imgStyle}
              />
            </div>
          </div>
        </div>

        <div className="border-bottom mt-40 pb-50 sm-pb-30">
          <div className="row">
            <div className="col-lg-4 d-flex wow fadeInUp">
              <CardItem
                icon={icon_1}
                title="Instant Transfer - Free"
                subtitle="0% charge for online money transfer from you wallet instant."
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.1s">
              <CardItem
                icon={icon_2}
                title="Google & Apple pay"
                subtitle="Pay google & apple payment with your card without any hassle"
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.2s">
              <CardItem
                icon={icon_3}
                title="Top Security"
                subtitle="World-class security that makes your money safe & secure."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFeatureSeven;
