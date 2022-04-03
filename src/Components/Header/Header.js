import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav-style ">
      <div className="header-part container">
        <div className="">
          <h1 className="fw-bold fst-italic">
            Bike<span className="orange">Hub</span>
          </h1>
        </div>
        <div>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/review"
          >
            Review
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/dashBoard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/blogs"
          >
            Blogs
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
