import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import shape_1 from "@/assets/images/assets/ils_01.svg";
import shape_2 from "@/assets/images/assets/ils_02.svg";
import shape_3 from "@/assets/images/shape/shape_05.svg";

// props type
type IProps = {
  title: string;
  subtitle: string;
  page: string;
  tag?: string;
  col?: string;
  style_2?: boolean;
  style_3?: boolean;
  style_4?: boolean;
};

// img style
const imgStyle = {
  height: "auto",
};

const BreadcrumbTwo = ({
  title,
  page,
  subtitle,
  style_2,
  tag,
  col,
  style_3,
  style_4,
}: IProps) => {
  return (
    <div className="inner-banner-two light-bg text-center pt-200 md-pt-150 pb-85 lg-pb-50 position-relative">
      <div className="container position-relative">
        <div className="row">
          {!style_2 && !style_3 && !style_4 && (
            <div className="col-xl-6 m-auto">
              <ul className="style-none d-inline-flex justify-content-center pager">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="#">Pages</Link>
                </li>
                <li>/</li>
                <li>{page}</li>
              </ul>
              <h1 className="hero-heading">{title}</h1>
              <p className="text-lg">{subtitle}</p>
            </div>
          )}
          {style_2 && (
            <div className="col-xl-8 col-lg-9 m-auto">
              <div className="tag">{tag}</div>
              <h1 className="hero-heading">{title}</h1>
              <p className="text-lg">{subtitle}</p>
            </div>
          )}
          {style_3 && (
            <div className="col-lg-8 m-auto">
              <ul className="style-none d-inline-flex justify-content-center pager">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>/</li>
                <li>{page}</li>
              </ul>
              <h1 className="hero-heading">{title}</h1>
              <p className="text-lg">{subtitle}</p>
            </div>
          )}
          {style_4 && (
            <div className={`${col?col:'col-xl-7 m-auto'}`}>
              <ul className="style-none d-inline-flex justify-content-center pager">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="#">Pages</Link>
                </li>
                <li>/</li>
                <li>{page}</li>
              </ul>
              <h1 className="hero-heading">{title}</h1>
              <p className="text-lg">
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
      <Image
        src={shape_1}
        alt="shape"
        className="lazy-img shapes shape_01"
        style={imgStyle}
      />
      <Image
        src={shape_2}
        alt="shape"
        className="lazy-img shapes shape_02"
        style={imgStyle}
      />
      <Image src={shape_3} alt="shape" className="lazy-img shapes shape_03" style={imgStyle} />
      <Image src={shape_3} alt="shape" className="lazy-img shapes shape_04" style={imgStyle} />
    </div>
  );
};

export default BreadcrumbTwo;
