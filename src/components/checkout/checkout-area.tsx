'use client'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dynamic from 'next/dynamic';
// internal
import ErrorMsg from '../common/error-msg';
import CheckoutLoginForm from './checkout-login-form';
import CheckoutCouponForm from './checkout-coupon-form';
import CheckoutOrderReview from './checkout-order-review';


type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  orderNote?: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required().label("First Name"),
  lastName: yup.string().required().label("Last Name"),
  company: yup.string().required().label("Company"),
  country: yup.string().required().label("Country"),
  address: yup.string().required().label("Address"),
  city: yup.string().required().label("City"),
  state: yup.string().required().label("State"),
  zipCode: yup.string().required().label("Zip Code"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().min(4).label("Phone"),
  orderNote: yup.string().label("Order Note"),
});

const CheckoutArea = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openCoupon, setOpenCoupon] = useState<boolean>(false);
  const [openPaymentType, setOpenPaymentType] = useState<string>('direct_bank');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
    reset()
  });


  return (
    <div className="checkout-section light-bg pt-250 lg-pt-200 pb-100 sm-pb-50">
      <div className="container">
        <div className="checkout-toggle-area mb-80 md-mb-60">
          <p>Already have an account?
            <button className="d-inline-block" data-bs-toggle="collapse" data-bs-target="#login-form" onClick={() => setOpenLogin(!openLogin)}>Click here to login.</button>
          </p>
          <div id="login-form" className={`collapse ${openLogin ? 'show' : ''}`}>
            <p>Please enter your details below.</p>
            <CheckoutLoginForm />
          </div>

          <p>Have a promo code?
            <button className="d-inline-block" data-bs-toggle="collapse" data-bs-target="#promo-code" onClick={() => setOpenCoupon(!openCoupon)}>Click to enter your code.</button>
          </p>
          <div id="promo-code" className={`collapse ${openCoupon ? 'show' : ''}`}>
            <p>Please enter your promo code below.</p>
            <CheckoutCouponForm />
          </div>
        </div>
        <form onSubmit={onSubmit} className="checkout-form">
          <div className="row">
            <div className="col-lg-7">
              <h2 className="main-title">Billign Details</h2>
              <div className="user-profile-data">
                <div className="row">
                  <div className="col-lg-6">
                    <div className='mb-55'>
                      <input type="text" id='firstName' {...register("firstName")} placeholder="First Name*" className="single-input-wrapper" />
                      <ErrorMsg msg={errors.firstName?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className='mb-55'>
                      <input type="text" id='lastName' {...register("lastName")} placeholder="Last Name*" className="single-input-wrapper" />
                      <ErrorMsg msg={errors.lastName?.message!} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className='mb-55'>
                      <input type="text" id='company' {...register("company")} placeholder="Company Name*" className="single-input-wrapper" />
                      <ErrorMsg msg={errors.company?.message!} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className='mb-55'>
                      <select className="theme-select-menu" id='country' {...register("country")}>
                        <option value="">Country*</option>
                        <option value="usa">USA</option>
                        <option value="bd">Bangladesh</option>
                        <option value="in">India</option>
                        <option value="je">jerman</option>
                        <option value="sa">saudi arabia</option>
                        <option value="tu">Turky</option>
                        <option value="eg">Egypt</option>
                      </select>
                      <ErrorMsg msg={errors.country?.message!} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className='mb-55'>
                      <input type="text" id='address' {...register("address")} placeholder="Street Address*" className="single-input-wrapper" />
                      <ErrorMsg msg={errors.address?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className='mb-55'>
                      <input type="text" id='city' {...register("city")} placeholder="Town/City*" className="single-input-wrapper" />
                      <ErrorMsg msg={errors.city?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className='mb-55'>
                      <input type="text" id='state' {...register("state")} placeholder="State*" className="single-input-wrapper" />
                      <ErrorMsg msg={errors.state?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className='mb-55'>
                      <input type="text" id='zipCode' {...register("zipCode")} placeholder="Zip Code*" className="single-input-wrapper" />
                      <ErrorMsg msg={errors.zipCode?.message!} />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <input type="email" id='email' {...register("email")} placeholder="Email Address*" className="single-input-wrapper" />
                    <ErrorMsg msg={errors.email?.message!} />
                  </div>
                  <div className="col-lg-6">
                    <div className='mb-55'>
                      <input type="text" id='phone' {...register("phone")} placeholder="Phone Number*" className="single-input-wrapper" />
                      <ErrorMsg msg={errors.phone?.message!} />
                    </div>
                  </div>
                  <div className="col-12">
                    <ul className="checkbox-list style-none">
                      <li>
                        <input type="checkbox" id="new-account" />
                        <label htmlFor="new-account">Create Account?</label>
                      </li>
                      <li>
                        <input type="checkbox" id="shipping" />
                        <label htmlFor="shipping">Ship to Different Address?</label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <div className="other-note-area">
                      <p>Order Note (Optional)</p>
                      <textarea id='orderNote' {...register("orderNote")}></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-lg-5 ms-auto">
              <div className="order-confirm-sheet md-mt-60">
                <h2 className="main-title">Order Details</h2>
                <div className="order-review">
                  {/* order review */}
                  <CheckoutOrderReview/>
                  {/* order review */}
                  <div className="payment-option">
                    <ul className="payment-list style-none">
                      <li>
                        <input onChange={() => setOpenPaymentType('direct_bank')} type="radio" name="paymenttype" className={`payment-radio-button ${openPaymentType === 'direct_bank' ? 'active' : ''}`} checked={openPaymentType === 'direct_bank'} />
                        <label>Direct Bank Transfer</label>
                        <p>Make your payment directly into our account. Plase use your Order ID as payment reference.</p>
                      </li>
                      <li>
                        <input onChange={() => setOpenPaymentType('paypal')} type="radio" name="paymenttype" className="payment-radio-button" checked={openPaymentType === 'paypal'} />
                        <label>PayPal</label>
                      </li>
                      <li>
                        <input onChange={() => setOpenPaymentType('credit_card')} type="radio" name="paymenttype" id="credit-card" className="payment-radio-button" checked={openPaymentType === 'credit_card'} />
                        <label>Credit Card</label>
                      </li>
                      <li className={`credit-card-form ${openPaymentType === 'credit_card'?'show':''}`}>
                        <div className="row">
                          <div className="col-12">
                            <h6>Card number</h6>
                            <input type="text" />
                          </div>
                          <div className="col-8">
                            <h6>Expiry date</h6>
                            <div className="d-flex align-items-center">
                              <input type="tel" placeholder="MM" />
                              <span>/</span>
                              <input type="tel" placeholder="YY" />
                            </div>
                          </div>
                          <div className="col-4 ml-auto">
                            <h6>CVV</h6>
                            <input type="text" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className="policy-text">Your personal data will be use for your order, support your experience through this website & for other purpose described in our privacy policy</p>
                  <div className="agreement-checkbox">
                    <input type="checkbox" id="agreement" />
                    <label htmlFor="agreement">I have read and agree to the website terms and conditions*</label>
                  </div>
                  <button type='submit' className="btn-ten tran3s w-100">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutArea;