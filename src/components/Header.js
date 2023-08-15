import logo from "../images/logo.png";
import { FcHome } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState("true");
  const show = () => {
    setMenu(!menu);
  };
  return (
    <div className="header card rounded-0 shadow ">
      <div className="container-fluid p-3 hei">
        <div className="row">
          <div className="col-auto">
            <a href="/">
              <img src={logo} alt="logo" width={70} />
            </a>
          </div>
          <div className="col-auto">
            <h2 clas>The Sparks Foundation</h2>
          </div>
          {menu && (
            <div onClick={show} className="col-12 menu-icon text-center">
              <FaBars size="40px" className="menu" />
            </div>
          )}
          {!menu && (
            <div onClick={show} className="col-12 closed text-center">
              <FaRegTimesCircle size="40px" className="close" />
            </div>
          )}
          <span className="desktop-nav col">
            <div className="row">
              <div className="col-lg-auto col-md-12 align-self-center ">
                <Link to="/">
                  <div className=" btn btn-basic">
                    <div className="row px-3">
                      <div className="col px-0 align-self-center">
                        <FcHome />
                      </div>
                      <div className="col-auto px-1 pt-1">
                        <p className="m-0">Home</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-auto col-md-12 align-self-center">
                <Link to="/about">
                  <div className="btn btn-basic">
                    <div className="row px-3">
                      <div className="col px-0 align-self-center">
                        <FcNews />
                      </div>
                      <div className="col-auto px-1 pt-1">
                        <p className="m-0">About</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-auto col-md-12 align-self-center">
                <Link to="/contact">
                  <div className="btn btn-basic">
                    <div className="row px-3">
                      <div className="col px-0 align-self-center">
                        <FcAssistant />
                      </div>
                      <div className="col-auto px-1 pt-1">
                        <p className="m-0">Contact us</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </span>

          {!menu && (
            <div className="mobile-nav">
              <div className="col-lg-auto col-md-12 align-self-center">
                <Link to="/">
                  <div className=" btn btn-basic">
                    <div className="row px-3">
                      <div className="col-5 px-0 text-end">
                        <FcHome />
                      </div>
                      <div className="col-6 px-1 pt-1 text-start">
                        <p className="m-0">Home</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-auto col-md-12 align-self-center">
                <Link to="/about">
                  <div className="btn btn-basic">
                    <div className="row px-3">
                      <div className="col-5 px-0 text-end">
                        <FcNews />
                      </div>
                      <div className="col-6 px-1 pt-1 text-start">
                        <p className="m-0">About</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-auto col-md-12 align-self-center">
                <Link to="/contact">
                  <div className="btn btn-basic">
                    <div className="row px-3">
                      <div className="col-5 px-0 text-end">
                        <FcAssistant />
                      </div>
                      <div className="col-6 px-1 pt-1 text-start">
                        <p className="m-0">Contact us</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
