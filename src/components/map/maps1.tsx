import React from "react";
import { WorldMap } from "react-svg-worldmap";

function Maps() {

  const data = [
    { country: "cn", value: 1 }, // China
    { country: "in", value: 2 }, // India
    { country: "us", value: 3 }, // United States
    { country: "pk", value: 22 }, // United States
    { country: "uae", value: 5 }, // United States
  ];

  return (
    <div className="App my-10">
      <WorldMap
        color="red"
        title=""
        value-suffix="people"
        size="xxl"
        data={data} // Pass the stylingFunction as a prop
      />

    </div>
  );
}

export default Maps;
