"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import useCartInfo from "@/hooks/use-cart-info";
import { getCartProducts } from "@/redux/features/cart";

const CheckoutOrderReview = () => {
  const { cart_products } = useAppSelector((state) => state.cart);
  const { total } = useCartInfo();
  const dispatch = useAppDispatch();
  const ship_cost = 13.0;

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      dispatch(getCartProducts())
    }
  }, [dispatch]);
  
  return (
    <>
      {cart_products.length === 0 && (
        <div className="product-review">
          <h4>No cart product</h4>
        </div>
      )}
      {cart_products.length > 0 && (
        <table className="product-review">
          <tbody>
            {cart_products.map((item) => (
              <tr key={item.id}>
                <th>
                  <span>{item.title}</span>
                </th>
                <td>
                  <span>${item.price}</span>
                </td>
              </tr>
            ))}
            <tr>
              <th>
                <span>Subtotal</span>
              </th>
              <td>
                <span>${total.toFixed(2)}</span>
              </td>
            </tr>
            <tr>
              <th>
                <span>Shipping</span>
              </th>
              <td>
                <span>${ship_cost.toFixed(2)}</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>
                <span>Total</span>
              </th>
              <td>
                <span>${(total + ship_cost).toFixed(2)}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};

export default CheckoutOrderReview;
