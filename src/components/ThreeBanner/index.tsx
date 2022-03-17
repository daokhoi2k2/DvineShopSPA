import React from "react";
import { Link } from "react-router-dom";

const ThreeBanner = () => {
  return (
    <div className="three-banner">
      <div className="grid wide">
        <div className="row">
          <div className="col l-4 m-4 c-12">
            <Link to="#">
              <img src={require("../../assets/images/tao gmail.png")} alt="" width="100%" />
            </Link>
          </div>
          <div className="col l-4 m-4 c-12">
            <Link to="#">
              <img src={require("../../assets/images/gtbm1406.png")} alt="" width="100%" />
            </Link>
          </div>
          <div className="col l-4 m-4 c-12">
            <Link to="#">
              <img src={require("../../assets/images/local1406.png")} alt="" width="100%" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBanner;
