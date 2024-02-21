"use client";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { animationCreate } from "@/utils/utils";
import BackToTopCom from "@/components/common/back-to-top-com";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { initialOrderQuantity } from "@/redux/features/cart";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    animationCreate();
  }, []);
  useEffect(() => {
    dispatch(initialOrderQuantity())
  }, [router,dispatch]); 

  return (
    <>
      {children} 
      <BackToTopCom/>
      <ToastContainer/>
    </>
  );
};

export default Wrapper;