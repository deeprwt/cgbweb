"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import { IProduct } from "@/types/product-d-t";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_cart_product } from "@/redux/features/cart";
import { getWishlistProducts, remove_wishlist_product } from "@/redux/features/wishlist";

const WishlistArea = () => {
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  // handle remove
  const handleRemove = (item: IProduct) => {
    dispatch(remove_wishlist_product(item));
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      dispatch(getWishlistProducts())
    }
  }, [dispatch]);
  return (
    <div className="cart-section light-bg pt-250 lg-pt-200 pb-100 sm-pb-50">
      <div className="container">
        {wishlist.length === 0 && (
          <div className="text-center pt-50">
            <h3>No Wishlist Items Found</h3>
            <Link
              href="/shop"
              className="btn-ten tran3s update-cart-button mt-20"
            >
              Continue Shipping
            </Link>
          </div>
        )}
        {wishlist.length > 0 && (
          <div className="cart-list-form">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan={2}>Product</th>
                    <th>Price</th>
                    <th>Add Cart</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item, i) => (
                    <tr key={i}>
                      <td className="product-thumbnails">
                        <Link href="#" className="product-img">
                          <Image src={item.img} alt="cart-img" />
                        </Link>
                      </td>
                      <td className="product-info">
                        <Link href="#" className="product-name">
                          {item.title}
                        </Link>
                        <div className="serial">#859632007881</div>
                        <ul className="style-none">
                          <li className="size">Size: 23”</li>
                          <li className="color">Color: Red</li>
                        </ul>
                      </td>
                      <td className="price">
                        <span>${item.price}</span>
                      </td>
                      <td className="cart-btn">
                        <button onClick={() => dispatch(add_cart_product(item))} className="btn-ten tran3s">
                          Add To cart
                        </button>
                      </td>
                      <td>
                        <a onClick={() => handleRemove(item)} className="remove-product cursor-pointer">
                          x
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistArea;
