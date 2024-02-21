import React from "react";
import Link from "next/link";

const ProjectOneArea = () => {
  return (
    <div className="block-feature-three no-bg position-relative mt-150 lg-mt-80 pb-150 lg-pb-80">
      <div className="container">
        <div className="position-relative">
          <div className="row gx-xxl-5">
            <div className="col-lg-8">
              <div className="block-one pt-45 lg-pt-30 pb-20 ps-3 ps-xl-5 pe-xl-5 pe-3 position-relative border-30 wow fadeInUp">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="tag d-inline-block border-30 fw-500 text-uppercase mb-15">
                      Consulting
                    </div>
                    <div className="date text-dark">
                      <span className="fw-500">Featured -</span> 18 Jul 2023
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <h3 className="block-title d-inline-block position-relative">
                      <Link href="/project-details-v1">
                        Manage your online banking and get rewarded
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="block-two border-30 d-flex mt-45 lg-mt-30 wow fadeInUp">
                <div className="img-wrapper"></div>
                <div className="text-wrapper light-bg-deep">
                  <div className="date">18 Jul 2023</div>
                  <h3 className="block-title d-inline-block position-relative mt-5 mb-40 lg-mb-30">
                    <Link href="/project-details-v1">
                      Gold card user will get priority pass for{" "}
                      <br className="d-none d-lg-block" /> Airport.
                    </Link>
                  </h3>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="tag text-uppercase fw-500">Payments</div>
                    <Link href="/project-details-v1"
                      className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="block-three border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-40 lg-pt-30 pb-30 md-mt-30 wow fadeInUp" data-wow-delay="0.2s">
                <div className="date">3 Aug 2023</div>
                <h3 className="block-title d-inline-block position-relative mt-20 mb-80 lg-mb-50">
                  <Link href="/project-details-v1">
                    Gold card user will get priority pass for Airport.
                  </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="tag text-uppercase fw-500">DESIGN</div>
                  <Link href="/project-details-v1"
                    className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
              
              <div className="block-four border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-15 pb-30 mt-45 lg-mt-30 wow fadeInUp" data-wow-delay="0.2s">
                <h3 className="block-title d-inline-block position-relative mt-20 mb-250 lg-mb-150 sm-mb-100">
                  <Link href="/project-details-v1">
                    Our Travel Card Makes <br className="d-none d-xl-block" />
                    you Happy.
                  </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="tag text-uppercase fw-500">DESIGN</div>
                  <Link href="/project-details-v1"
                    className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="block-three border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-40 lg-pt-30 pb-30 mt-45 lg-mt-30 wow fadeInUp">
                <div className="date">12 Sep 2022</div>
                <h3 className="block-title d-inline-block position-relative mt-20 mb-80 lg-mb-50">
                  <Link href="/project-details-v1">
                    Online and mobile banking for easy, efficient, and secure
                    transactions
                  </Link>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="tag text-uppercase fw-500">Banking</div>
                  <Link href="/project-details-v1"
                    className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="block-five pt-45 lg-pt-30 pb-20 ps-3 ps-xl-5 pe-xl-5 pe-3 mt-45 lg-mt-30 position-relative border-30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="row">
                  <div className="col-lg-5">
                    <div className="tag d-inline-block border-30 fw-500 text-uppercase mb-15">
                      Consulting
                    </div>
                    <div className="date text-dark">
                      <span className="fw-500">Featured -</span> 18 Jul 2023
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <h3 className="block-title d-inline-block position-relative">
                      <Link href="/project-details-v1">
                        It’s easy to buildup your business with us
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pagination-one mt-80 lg-mt-50">
          <ul className="style-none d-flex align-items-center justify-content-center">
            <li>
              <Link href="#">1</Link>
            </li>
            <li>
              <Link href="#" className="active">
                2
              </Link>
            </li>
            <li>
              <Link href="#">3</Link>
            </li>
            <li>
              <Link href="#">4</Link>
            </li>
            <li>...</li>
            <li>
              <Link href="#">
                Last <i className="bi bi-arrow-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectOneArea;
