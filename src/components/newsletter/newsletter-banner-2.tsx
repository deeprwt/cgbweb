import React from "react";
import Link from "next/link";

const NewsletterBannerTwo = () => {
  return (
    <div className="newsletter-banner white-vr">
      <div className="container">
        <div className="main-wrapper bottom-border">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-white fw-bold">Newsletter.</h2>
              <p className="text-lg text-white opacity-75 md-pb-20">
                Get instant news by subscribe to our daily newsletter
              </p>
            </div>
            <div className="col-lg-6">
              <form action="#" className="m-auto ms-lg-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <input type="email" placeholder="Enter your email address" />
                  <button className="rounded-circle tran3s">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
                <p className="text-center text-lg-end m0 pt-5">
                  Already subscribed?{" "}
                  <Link href="#" className="fw-500">
                    Unsubscribe
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBannerTwo;
