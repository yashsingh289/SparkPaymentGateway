import React from "react";
import Data1 from "./about_data/Data1";
import Data2 from "./about_data/Data2";
import Data3 from "./about_data/Data3";
import Data4 from "./about_data/Data4";
import Data5 from "./about_data/Data5";

import ad1 from "../images/advisor1.jpg";
import ad2 from "../images/advisor2.jpg";
import ad3 from "../images/advisor3.jpg";
import ad4 from "../images/advisor4.jpg";
import ad5 from "../images/advisor5.jpg";
import ad6 from "../images/advisor6.jpg";
import ad7 from "../images/advisor7.jpg";
import ad8 from "../images/advisor8.jpg";

import tm1 from "../images/member1.jpg";
import tm2 from "../images/member2.jpg";

import p1 from "../images/partner1.png";
import p2 from "../images/partner2.png";
import p3 from "../images/partner3.png";

const Data = ({ id }) => {
  return (
    <div className="mb-4">
      {id === 1 ? (
        <Data1 />
      ) : id === 2 ? (
        <Data2 />
      ) : id === 3 ? (
        <Data3
          ad1={ad1}
          ad2={ad2}
          ad3={ad3}
          ad4={ad4}
          ad5={ad5}
          ad6={ad6}
          ad7={ad7}
          ad8={ad8}
        />
      ) : id === 4 ? (
        <Data4 tm1={tm1} tm2={tm2} />
      ) : id === 5 ? (
        <Data5 p1={p1} p2={p2} p3={p3} />
      ) : (
        <h1
          style={{
            fontWeight: "bold",
            color: "rgb(13, 46, 64)",
          }}>
          Click on the buttons to view the data
        </h1>
      )}
    </div>
  );
};

export default Data;
