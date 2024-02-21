import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import icon from "@/assets/images/assets/ils_04.svg";

// pricing card item
type IProps = {
  title: string;
  month: string;
  price: string;
  membership: string;
  lists: string[];
};
function PricingCardItem({ title, month, price, membership, lists }: IProps) {
  return (
    <div className="pricing-card-one d-flex flex-column w-100 h-100 text-center">
      <h2 className="fw-bold">{title}</h2>
      <div className="row">
        <div className="col-xxl-9 m-auto">
          <p>
            For individuals and teams. Get{" "}
            <span>1 {month} premium market access</span>
          </p>
        </div>
      </div>
      <div className="price-banner text-lg-start d-lg-flex justify-content-center align-items-center">
        <div className="price">
          <sup>$</sup> {price}
        </div>
        <div className="ps-lg-4">
          <strong className="text-lg fw-500">{membership} membership</strong>
          <span>Starting at $53/mo</span>
        </div>
      </div>

      <ul className="style-none mb-35">
        {lists.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      <div className="action-btn text-center">
        Try us without risk.{" "}
        <Link href="#">
          Choose Plan <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
}

const PricingArea = () => {
  return (
    <div className="pricing-section light-bg border-top pt-120 lg-pt-80 pb-150 lg-pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <div className="title-one">
              <h2>Solo, Agency or team?</h2>
            </div>
            <p className="text-lg pt-10 m0">
              Find out the which plan match with your needs
            </p>
          </div>
          <div className="col-lg-5">
            <nav className="pricing-nav d-flex justify-content-center justify-content-lg-end md-mt-40">
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-month-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-month"
                  type="button"
                  role="tab"
                  aria-controls="nav-month"
                  aria-selected="true"
                  tabIndex={-1}
                >
                  Monthly
                </button>
                <button
                  className="nav-link"
                  id="nav-year-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-year"
                  type="button"
                  role="tab"
                  aria-controls="nav-year"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  Yearly
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="tab-content mt-50 md-mt-30">
          <div
            className="tab-pane show active"
            id="nav-month"
            role="tabpanel"
            aria-labelledby="nav-month-tab"
            tabIndex={0}
          >
            <div className="row gx-xl-5">
              <div className="col-md-6 mb-65 md-mb-30">
                <PricingCardItem
                  title="Business"
                  month="month"
                  price="09"
                  membership="Monthly"
                  lists={[
                    "100% Better results",
                    "Suspe Ndisse Suscipit Sagittis",
                    "Review Credit Reports",
                  ]}
                />
              </div>
              <div className="col-md-6 mb-65 md-mb-30">
                <PricingCardItem
                  title="Agency"
                  month="month"
                  price="12"
                  membership="Monthly"
                  lists={[
                    "100% Better results",
                    "Suspe Ndisse Suscipit Sagittis",
                    "Review Credit Reports",
                  ]}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane"
            id="nav-year"
            role="tabpanel"
            aria-labelledby="nav-year-tab"
            tabIndex={0}
          >
            <div className="row gx-xl-5">
              <div className="col-md-6 mb-65 md-mb-30">
                <PricingCardItem
                  title="Business"
                  month="year"
                  price="99"
                  membership="Yearly"
                  lists={[
                    "100% Better results",
                    "Suspe Ndisse Suscipit Sagittis",
                    "Review Credit Reports",
                  ]}
                />
              </div>
              <div className="col-md-6 mb-65 md-mb-30">
                <PricingCardItem
                  title="Agency"
                  month="year"
                  price="129"
                  membership="Yearly"
                  lists={[
                    "100% Better results",
                    "Suspe Ndisse Suscipit Sagittis",
                    "Review Credit Reports",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="contact-banner position-relative">
          <Image src={icon} alt="icon" className="lazy-img shapes screen_01" />
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              <h2>
                Want a <span>custom pricing</span> plan for your business?
              </h2>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <Link href="/contact" className="btn-four">
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingArea;
