import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// url to a valid topojson file
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";


  const DottedMap = () => {
    return (
      <div>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    );
  };

export default DottedMap; // Ensure that the component is correctly exported
