'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../common/error-msg';

type FormData = {
  name: string;
  email: string;
  comment: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  comment: yup.string().required().min(10).label("Comment"),
});

const BlogDetailsForm = () => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit} className="mt-30">
      <div className="input-wrapper mb-35">
        <label>Name*</label>
        <input type="text" {...register("name")} id='name' placeholder="Rashed Kabir" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="input-wrapper mb-40">
        <label>Email*</label>
        <input type="email" {...register("email")} id='email' placeholder="rshdkabir@gmail.com" />
        <ErrorMsg msg={errors.email?.message!} />
      </div>
      <div className="input-wrapper mb-30">
        <textarea placeholder="Your Comment" {...register("comment")} id='comment'></textarea>
        <ErrorMsg msg={errors.comment?.message!} />
      </div>
      <button type='submit' className="btn-four tran3s rounded-2">Post Comment</button>
    </form>
  );
};

export default BlogDetailsForm;
