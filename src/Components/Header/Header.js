import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className="header-part">
        <div>
          <h1>Bike<span className="orange">Hub</span></h1>
        </div>
        <div>
          <Link className="header-link" to="/">
            Home
          </Link>
          <Link className="header-link" to="/orderReview">
            OrderReview
          </Link>
          <Link className="header-link" to="/about">
            About
          </Link>
          <Link className="header-link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="header-link" to="/blogs">
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
