import React from "react";
import Link from "next/link";

import Image, { StaticImageData } from "next/image";
// internal
import icon_1 from "@/assets/images/icon/icon_90.svg";
import icon_2 from "@/assets/images/icon/icon_91.svg";
import icon_3 from "@/assets/images/icon/icon_92.svg";
import icon_4 from "@/assets/images/assets/ils_07.svg";
import ContactForm from "../forms/contact-form";

const maxcontent = {
  width: "max-content",
  "border-radius": "30px",
};

function AddressBlock({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="address-block-one text-center mb-40">
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <Image src={icon} alt="icon" className="lazy-img" />
      </div>
      <h5 className="title">{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
    </div>
  );
}

const LocationTabsData = () => {
  return (
    <>
      {/* starts from here  */}
      <div className="text-feature-one service-details pt-80 lg-pt-80">
        <div className="container">
          <div className="row align-items-center details-meta">
            <div className="title-one">
              <h3 className="text-center">CGB offices around the world</h3>
              <p className="text-lg text-center px-4 mb-35 md-mb-30">
                Join our global team with offices in vibrant cities worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Ends from here  */}
      <div className="faq-section-three  pb-50 lg-pb-80 ">
        <div className="container">
          <nav>
            <div
              className="nav m-auto nav-tabs justify-content-center light-bg py-2 mw-60"
              id="nav-tab"
              role="tablist"
              style={maxcontent}
            >
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#nav-oracle"
                type="button"
                role="tab"
                aria-selected="true"
                tabIndex={-1}
              >
                India
              </button>
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#nav-finacle"
                type="button"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
              >
                United Arab Emirates
              </button>
              {/* <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#nav-servicenow"
                type="button"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
              >
                United States
              </button>
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#nav-lowcode"
                type="button"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
              >
                Japan
              </button>
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#nav-salesforce"
                type="button"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
              >
                Europe
              </button> */}
            </div>
          </nav>
          <div className="tab-content mt-20 lg-mt-40">
            {/* tab 1start form her  */}
            <div
              className="tab-pane fade show active"
              id="nav-oracle"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="accordion accordion-style-one" id="accordionOne">
                <div className="row justify-content-center">
                  {/*----------------------------------------Adding address IND div staring--------------------------------*/}

                  <div className="col-md-4 pt-30 wow fadeInUp">
                    <AddressBlock
                      icon={icon_1}
                      title="Bengaluru"
                      subtitle="46/1, NH 44, Near Krishan Reddy Industrial Area, Kudlu Gate, Hosapalaya, Garvebhavi Palya Bengaluru, Karnataka, 560068"
                    />
                  </div>
                  <div className="col-md-4 pt-30 wow fadeInUp">
                    <AddressBlock
                      icon={icon_1}
                      title="Mumbai"
                      subtitle="Goregaon, Building 4, North Wing, NESCO IT Park, Western Express Highway, Goregaon East, Mumbai, MH 400063"
                    />
                  </div>
                  <div className="col-md-4 pt-30 wow fadeInUp">
                    <AddressBlock
                      icon={icon_1}
                      title="New Delhi"
                      subtitle="
                          GF-28 TDI Center, Jasola, New Delhi-110025"
                    />
                  </div>

                  {/*-------------------------------------------Adding address IND div End-------------------------- */}
                </div>
              </div>
            </div>
            {/* tab 1end form her  */}

            {/* tab 2start form her  */}
            <div
              className="tab-pane fade"
              id="nav-finacle"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="accordion accordion-style-one" id="accordionTwo">
                <div className="row justify-content-center">
                  {/*----------------------------------------Adding address IND div staring--------------------------------*/}
                  <div className="col-md-4 pt-30">
                    <AddressBlock
                      icon={icon_1}
                      title="Dubai"
                      subtitle="ultan Business Centre,Oud Mehta, Dubai,UAE.PO BOX- 554617"
                    />
                  </div>

                  {/*-------------------------------------------Adding address IND div End-------------------------- */}
                </div>
              </div>
            </div>
            {/* tab 2end form her  */}

            {/* tab 3start form her  */}
            <div
              className="tab-pane fade"
              id="nav-servicenow"
              role="tabpanel"
              tabIndex={0}
            >
              <div
                className="accordion accordion-style-one"
                id="accordionThree"
              >
                <div className="row justify-content-center">
                  {/*----------------------------------------Adding address IND div staring--------------------------------*/}
                  <div className="col-md-4 pt-30">
                    <AddressBlock
                      icon={icon_1}
                      title="Dubai"
                      subtitle="ultan Business Centre,Oud Mehta, Dubai,UAE.PO BOX- 554617"
                    />
                  </div>

                  {/*-------------------------------------------Adding address IND div End-------------------------- */}
                </div>
              </div>
            </div>
            {/* tab 3end form her  */}

            {/* tab 4start form her  */}
            <div
              className="tab-pane fade"
              id="nav-lowcode"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="accordion accordion-style-one" id="accordionFour">
                <div className="row align-items-center">
                  {/*----------------------------------------Adding address form here --------------------------------*/}

                  <div className="col-xl-6 col-lg-6">
                    <div className="title-one pt-4">
                      {/* <div className="upper-title">Services</div> */}
                      <h2>Low Code</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tab 4end form her  */}

            {/* tab 5start form her  */}
            <div
              className="tab-pane fade"
              id="nav-salesforce"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="accordion accordion-style-one" id="accordionFive">
                <div className="row align-items-center">
                  {/*----------------------------------------Adding address form here --------------------------------*/}

                  <div className="col-xl-6 col-lg-6">
                    <div className="title-one pt-4">
                      {/* <div className="upper-title">Services</div> */}
                      <h2>Salesforce</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* tab 5end form her  */}
            {/* <div
              className="tab-pane fade"
              id="nav-devops"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="accordion accordion-style-one" id="accordionSix">
                <div className="row align-items-center">
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationTabsData;
