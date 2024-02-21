import React from "react";
import Link from "next/link";
// internal
import faq_data from "@/data/faq-data";
import Image from "next/image";
import linkd from "@/assets/images/icon/linkedinicon.png"
import sindhu from "@/assets/images/cgbhome/sindhu.png"
import mendix1 from "@/assets/images/solutions/mendix-studio-pro-image-1.jpg"
import mendix3 from "@/assets/images/solutions/mendix-studio-web-image.jpg"

import screen from '@/assets/images/assets/screen_11.png';



const SectionSol1 = () => {
  return (
    <>
        <div className="text-feature-one service-details light-bg pt-120 lg-pt-80 pb-150 lg-pb-80">
          <div className="container">
            <div className="row align-items-center">
                <div className="details-meta title-one">
                    <h3>Visual Development</h3>
                    <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
                        Allows to sync and control the app development process between business developers using the Mendix Studio and professional developers using the Mendix Studio Pro, each using a visual, model-driven development tool tailored for them. All your application models are automatically shared bi-directionally between Mendix Studio and Mendix Studio Pro.
                    </p>
                </div>
                <div className="col-xl-6 col-lg-6 wow fadeInRight">
                    <Image src={mendix1} layout='responsive' alt="About us" className="w-100 h-auto"></Image>
                    <div className="mt-2 text-center">
                        <h3 className="fw-bold mt-20 mb-15">Studio (Web)</h3>
                        <p className="ps-xl-4 pe-xl-4">
                            Mendix Studio Web is a low-code development platform that allows users to easily create web applications without the need for extensive coding knowledge. Its intuitive interface and drag-and-drop functionality make app development simple and efficient.
                        </p>
                    </div>
                </div>
              <div className="col-xl-6 col-lg-6 wow fadeInLeft">
                <Image src={mendix3} layout='responsive' alt="About us" className="w-100 h-auto"></Image>
                    <div className="mt-2 text-center">
                        <h3 className="fw-bold mt-20 mb-15">Studio Pro</h3>
                        <p className="ps-xl-4 pe-xl-4">
                            Add complex logic and build sophisticated integrations to create enterprise-grade, transactional web and mobile applications. It includes all the capabilities required for software development, including the ability to add custom code when needed.
                        </p>
                    </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default SectionSol1;
