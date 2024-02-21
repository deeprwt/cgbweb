"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// internal
import ErrorMsg from "../common/error-msg";

type FormData = {
  coupon: string;
};

const schema = yup.object().shape({
  coupon: yup.string().required().label("Coupon"),
});

const CheckoutCouponForm = () => {
  const {register,handleSubmit,formState: { errors },reset} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-20">
        <input type="text" id="coupon" {...register("coupon")} placeholder="Coupon code" />
        <ErrorMsg msg={errors.coupon?.message!} />
      </div>
      <button type="submit" className="btn-ten tran3s">Apply coupon</button>
    </form>
  );
};

export default CheckoutCouponForm;
