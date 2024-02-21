"use client";
import React,{useState} from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// internal
import portfolio_data from "@/data/portfolio-data";
import ImageLightBox from "../common/image-lightbox";
import Link from "next/link";

// img style
const imgStyle = {
  width:'100%',
  height: "auto",
};
const PortfolioOne = () => {
  const portfolio_items = portfolio_data.filter(
    (p) => p.portfolio === "portfolio-one"
  );
  // images 
  const images = portfolio_items.map(p => p.img.src);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i:number) => {
    setPhotoIndex(i);
    setOpen(true);
  };

  return (
    <>
    <div className="portfolio-one border-100 position-relative pt-150 lg-pt-80 pb-100 lg-pb-60">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-7">
              <div className="title-four mb-80 lg-mb-40">
                <h2>Our Recent Work & Portfolio.</h2>
              </div>
            </div>
          </div>
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

          <div className="section-btn md-mt-10">
            <Link href="/project-v2" className="btn-nine rounded-circle d-inline-flex align-items-center justify-content-center tran3s"
            >
              <i className="bi bi-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
     {/* image light box start */}
     <ImageLightBox
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

export default PortfolioOne;
