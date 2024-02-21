import React from "react";
import Link from "next/link";
// internal
import faq_data from "@/data/faq-data";
import FaqItem from "./faq-item";

const FaqSectionOne = ({cls}:{cls?:string}) => {
  return (
    <>
      <div className={`faq-section-one ${cls?cls:'mt-150 lg-mt-120 md-mt-80'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 wow fadeInLeft">
              <div className="title-one mb-40 lg-mb-20">
                <h2>Questions & Answers</h2>
              </div>
              <p className="text-lg mb-40 lg-mb-20">
                Don’t find the answer? We can help
              </p>
              <Link href="/contact" className="btn-four">
                Contact us
              </Link>
            </div>

            <div className="col-lg-7">
              <div
                className="accordion accordion-style-one mt-15 md-mt-50"
                id="accordionOne"
              >
                {faq_data.map((faq, i) => (
                  <FaqItem key={i} {...faq} parent="accordionOne" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSectionOne;
