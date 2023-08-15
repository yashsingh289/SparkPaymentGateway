import { Link } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import React, { useState } from "react";

const Home = () => {
  const [display, setDisplay] = useState(false);
  const openWindow = () => {
    setDisplay(!display);
  };

  return (
    <div className="home pt-5">
      <div className="row text-center mt-3">
        {display && (
          <div className="rounded-1 col-lg-12 col-md-12">
            <iframe
              title="myFrame"
              src="https://pages.razorpay.com/pl_JuhDFz9BWlJ8Bx/view"
              width={"120%"}
              height={"400px"}></iframe>
          </div>
        )}
        {!display ? (
          <div>
            <h1
              style={{
                fontSize: "250%",
                fontWeight: "bolder",
                color: "rgb(2, 23, 35)",
              }}
              className="text-center">
              The Sparks Foundation Donation Camp
            </h1>
            <p
              style={{ fontSize: "150%", fontWeight: "bolder", color: "white" }}
              className="text-center">
              GIVE A HAND YOUR CONTRIBUTION <br /> <i>MEANS A LOT</i>
              <br />
            </p>
            <div
              className="btn btn-basic"
              onClick={openWindow}
              style={{
                border: "5px solid rgb(2, 23, 35)",
                fontWeight: "bolder",
                fontSize: "120%",
              }}>
              <div className="row px-3">
                <div className="col px-0 align-self-center">
                  <FcMoneyTransfer />
                </div>
                <div className="col-auto px-1 pt-1">
                  <p className="m-0">Donate</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-lg-12 col-md-12 mb-5">
            <button
              className="btn btn-basic"
              onClick={openWindow}
              style={{
                border: "5px solid rgb(2, 23, 35)",
                fontWeight: "bolder",
                fontSize: "120%",
              }}>
              <h4>Cancel</h4>
            </button>
          </div>
        )}
        <Link to="/donate"></Link>
      </div>
    </div>
  );
};

export default Home;
