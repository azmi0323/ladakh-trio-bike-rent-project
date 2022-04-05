import React from "react";
import "./NotFound.css";
import notFoundPic from "../../Assets/404.png";
const NotFound = () => {
  return (
    <div>
      <div className="d-flex align-content-center justify-content-center">
        <img src={notFoundPic} alt="" />
      </div>
      <div className="d-flex align-content-center justify-content-center">
        <h1 className="text-danger fw-bold mb-5">Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
