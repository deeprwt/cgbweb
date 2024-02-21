'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// internal
import portfolio_data from "@/data/portfolio-data";
import ImageLightbox from "../common/image-lightbox";

// img style
const imgStyle = {
  width: "100%",
  height: "auto",
};

const ProjectTwoArea = () => {
  const portfolio_items = portfolio_data.filter(
    (p) => p.portfolio === "portfolio-v2-page"
  );
  // images
  const images = portfolio_items.map((p) => p.img.src);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setOpen(true);
  };
  return (
    <>
      <div className="portfolio-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-60">
        <div className="container">
          <div className="position-relative">
            <div id="isotop-gallery-wrapper" className="column-two">
              <div className="grid-sizer"></div>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 0: 1, 572: 2, 992: 2 }}
              >
                <Masonry gutter="40px">
                  {portfolio_items.map((item, i) => (
                    <div key={i} className="portfolio-item">
                      <div className="portfolio-block-one mb-60 lg-mb-40">
                        <div className="img-holder round-border">
                          <Image
                            src={item.img}
                            style={imgStyle}
                            alt="portfolio-img"
                            className="img-meta w-100 tran5s"
                          />
                          <a
                            className="fancybox expend d-flex align-items-center justify-content-center tran3s cursor-pointer"
                            title="Click for large view"
                            onClick={() => handleImagePopup(i)}
                          >
                            <i className="bi bi-plus"></i>
                          </a>
                        </div>
                        <div className="caption">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <ul className="style-none d-flex tag">
                                {item.tags.map((t, i) => (
                                  <li key={i}>{t}</li>
                                ))}
                              </ul>
                              <h6>
                                <Link
                                  href="/project-details-v1"
                                  className="pj-title"
                                >
                                  {item.title}
                                </Link>
                              </h6>
                            </div>
                            <div>
                              <Link
                                href="/project-details-v1"
                                className="arrow tran3s"
                              >
                                <i className="bi bi-arrow-up-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>

            <div className="section-btn text-center mt-30 lg-mt-10">
              <a
                href="#"
                className="btn-nine rounded-circle d-inline-flex align-items-center justify-content-center tran3s"
              >
                <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* image light box start */}
      <ImageLightbox
        images={images}
        visible={open}
        setVisible={setOpen}
        index={photoIndex}
        setIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </>
  );
};

export default ProjectTwoArea;
