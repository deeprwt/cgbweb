"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// internal
import ErrorMsg from "../common/error-msg";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});

const CheckoutLoginForm = () => {
  const {register,handleSubmit,formState: { errors },reset} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-20">
            <input
              id="email"
              {...register("email")}
              type="text"
              placeholder="User email"
            />
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-20">
            <input
              type="password"
              placeholder="Password"
              id="password"
              {...register("password")}
            />
            <ErrorMsg msg={errors.password?.message!} />
          </div>
        </div>
      </div>
      <button type="submit" className="btn-ten tran3s">
        Login
      </button>
    </form>
  );
};

export default CheckoutLoginForm;
