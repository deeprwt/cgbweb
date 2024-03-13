"use client"
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

interface CountType {
  number: number;
  text?: string;
  add_style?: boolean;
  decimal?:boolean;
}

const CounterUp = ({ number, text, add_style,decimal }: CountType) => {
  const [focus, setFocus] = useState<boolean>(false);
  const visibleChangeHandler = (isVisible: boolean) => {
    // console.log("Is visible:", isVisible);
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };

  return (
    <>
      <CountUp start={focus ? 0 : undefined} end={number} duration={5} decimals={decimal ? 1 : 0}>
        {({ countUpRef }) => (
          <div className={`d-flex ${add_style ? "align-items-center justify-content-center" : ""} `}>
            <span ref={countUpRef} />
            <InView
              as="span"
              onChange={(inView: boolean) => visibleChangeHandler(inView)}>
              {text && <span>{text}</span>}
            </InView>
          </div>
        )}
      </CountUp>
    </>
  );
};

export default CounterUp;
