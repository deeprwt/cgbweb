"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon_1 from "@/assets/images/icon/icon_27.svg";
import icon_2 from "@/assets/images/icon/icon_29.svg";
import screen from "@/assets/images/assets/screen_07.svg";
import VideoPopup from "../common/video-popup";
import Link from "next/link";

const TextFeatureFive = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <div className="text-feature-five position-relative mt-150 lg-mt-80 pb-50">
        <div className="container">
          <div className="bg-wrapper">
            <div className="row">
              <div className="col-lg-6 ms-auto d-flex flex-column order-lg-last">
                <div className="text-wrapper pt-50 pb-60 lg-pb-40 ps-3 ps-xxl-5 pe-3 pe-xxl-5">
                  <div className="title-one">
                    <h2 className="text-dark">
                      Let’s get started It’s simple.
                    </h2>
                  </div>
                  <p className="text-lg text-dark mt-25 mb-35 lg-mb-30">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <ul className="style-none">
                    <li>Mobile app easy management & access</li>
                    <li>Ton’s of features for handle the card easily</li>
                    <li>Strong security system.</li>
                  </ul>
                  <Link href="/about-us"
                    className="btn-eleven d-inline-flex align-items-center mt-40"
                  >
                    <span className="text">More about us</span>
                    <div className="icon tran3s rounded-circle d-flex align-items-center">
                      <Image src={icon_1} alt="icon" className="lazy-img" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 d-flex order-lg-first">
                <div className="media-wrapper w-100 d-flex align-items-center justify-content-center position-relative">
                  <a
                    className="fancybox rounded-circle video-icon tran3s text-center d-flex align-items-center justify-content-center cursor-pointer"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <Image src={icon_2} alt="icon" className="lazy-img" />
                  </a>
                  <Image
                    src={screen}
                    alt="screen"
                    className="lazy-img shapes screen_01"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"lLtktmvjFuI"}
      />
      {/* video modal end */}
    </>
  );
};

export default TextFeatureFive;
