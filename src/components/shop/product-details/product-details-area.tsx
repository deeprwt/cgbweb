'use client'
import React, { useState,useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
// internal
import { IProduct } from "@/types/product-d-t";
import ProductFeature from "./product-feature";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_cart_product, decrement, increment } from "@/redux/features/cart";
import { add_to_wishlist } from "@/redux/features/wishlist";

const ProductDetailsArea = ({ product }: { product: IProduct }) => {
  const { img,related_images,reviews,quantity,price,details,sm_desc,title,old_price } = product || {};
  const { orderQuantity } = useAppSelector((state) => state.cart);
  const [activeImg, setActiveImg] = useState(related_images[0]);
  const dispatch = useAppDispatch();
  // handle image active
  const handleImageActive = (prdImd: StaticImageData) => {
    setActiveImg(prdImd);
  };
  useEffect(() => {
    if (related_images.length > 0) {
      setActiveImg(related_images[0]);
    }
  }, [related_images]);

  return (
    <div className="product-details-one mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div className="tab-content product-img-tab-content h-100">
              <div className="active h-100">
                <a className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <Image src={activeImg} alt="product-img" className="lazy-img" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-1 order-lg-1">
            <ul
              className="nav flex-lg-column product-img-tab">
              {related_images.map((relImg, i) => (
                <li key={i} className="nav-item">
                  <button
                    onClick={() => handleImageActive(relImg)}
                    className={`nav-link ${relImg === activeImg ? "active" : ""}`}
                  >
                    <Image
                      src={relImg}
                      alt="nav-img"
                      className="m-auto lazy-img"
                      width={58}
                      height={76}
                      style={{ objectFit: "cover" }}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6 order-lg-3">
            <div className="product-info ps-xxl-5 md-mt-40">
              <div className="stock-tag">In Stock</div>
              <h2 className="product-name">{title}</h2>
              <ul className="style-none d-flex align-items-center rating">
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star"></i>
                </li>
                <li>
                  <Link href="#">({reviews.length} Customer Reviews)</Link>
                </li>
              </ul>
              <div className="price">
                {old_price && <del>${old_price}</del>} ${price}
              </div>
              <p className="availability">{quantity} Piece Available </p>
              <p className="description-text">
                {sm_desc}
              </p>
              <ul className="product-feature style-none">
                <li>Free delivery available</li>
                <li>Use promo-code and save up to 25%</li>
              </ul>
              <div className="customize-order">
                <div className="quantity d-flex align-items-center mt-40">
                  <h6>Quantity:</h6>
                  <div className="button-group">
                    <ul className="style-none d-flex align-items-center">
                      <li>
                        <button onClick={()=> dispatch(decrement())} className="value-decrease">-</button>
                      </li>
                      <li>
                        <input
                          type="number"
                          value={orderQuantity}
                          readOnly
                          className="product-value val"
                        />
                      </li>
                      <li>
                        <button onClick={()=> dispatch(increment())} className="value-increase">+ </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="button-group mt-30 d-sm-flex align-items-center">
                <button onClick={()=> dispatch(add_cart_product(product))} type="button" className="btn-four mt-15 me-sm-4 d-block">
                  Add To Cart
                </button>
                <button onClick={()=> dispatch(add_to_wishlist(product))} type="button" className="btn-six mt-15 d-block">
                  Add To wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="product-review-tab mt-130 lg-mt-100">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#item1"
                type="button"
                role="tab"
                aria-selected="true"
                tabIndex={-1}
              >
                Description
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#item2"
                type="button"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
              >
                Technical Info
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#item3"
                type="button"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
              >
                Feedback
              </button>
            </li>
          </ul>
          <div className="tab-content mt-50 lg-mt-20">
            <div
              className="tab-pane fade show active" id="item1" role="tabpanel">
              <div className="row gx-5">
                <div className="col-xl-6">
                  <h5>Specifications:</h5>
                  <p>
                   {details.specifications}
                  </p>
                </div>
                <div className="col-xl-6">
                  <h5>Check product main features:</h5>
                  <ul className="style-none product-feature">
                    {details.main_features.map((l,i) => (
                    <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="item2" role="tabpanel">
              <div className="row gx-5">
                <div className="col-xl-6">
                  <h5>Check product main features:</h5>
                  <ul className="style-none product-feature">
                  {details.main_features.map((l,i) => (
                    <li key={i}>{l}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-xl-6">
                  <h5>Specifications:</h5>
                  <p>
                  {details.specifications}
                  </p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="item3" role="tabpanel">
              <div className="row">
                <div className="col-xl-10">
                  <div className="user-comment-area">
                    {reviews.map((r, i) => (
                      <div
                        key={i}
                        className="single-comment d-flex align-items-top"
                      >
                        <Image src={r.user} alt="user" className="user-img" />
                        <div className="user-comment-data">
                          <h6 className="name">{r.name}</h6>
                          <ul className="style-none d-flex rating">
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star-fill"></i>
                            </li>
                            <li>
                              <i className="bi bi-star"></i>
                            </li>
                          </ul>
                          <p>{r.review_text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-80 lg-mt-50">
          <ProductFeature />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsArea;
