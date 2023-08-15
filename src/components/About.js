import React, { useState } from "react";
import about from "../about.json";
import Data from "./Data";

const About = () => {
  const [dis, setDis] = useState();
  const visible = (id) => {
    setDis(id);
  };

  return (
    <div className="container-fluid about p-3 ">
      <div className="row mb-5">
        <div
          className="col-lg-8 col-md-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {<Data id={dis} />}
        </div>
        <div className="col-auto m-5">
          <div className="col">
            {about.about.map((inf) => (
              <div className="row my-2">
                <p
                  onClick={visible.bind(this, inf.id)}
                  className="btn btn-basic"
                  key={inf.id}
                  style={{
                    fontWeight: "bolder",
                    border: "5px solid rgb(13, 46, 64)",
                    cursor: "pointer",
                    borderRadius: "20px",
                  }}>
                  {inf.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
