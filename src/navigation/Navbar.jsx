import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="navbar">
      <ul
        className={isMobile ? "link-nav-mobile" : "link-nav"}
        onClick={() => setIsMobile(false)}
      >
        <Link to={"/"} className="links ml-4">
          <li>Home</li>
        </Link>
        <Link to={"/products"} className="links">
          <li>Products</li>
        </Link>
        <Link to={"/about"} className="links">
          <li>About</li>
        </Link>
        <Link to={"/contact"} className="links">
          <li>Contacts</li>
        </Link>
      </ul>
      <div className="px-3">
        <h2 className="logo">CHELOYTEC</h2>
      </div>

      <div className="button">
        <Link to={"/login"}>
          <button
            type="button"
            className="btn btn-outline-primary mx-3 my-3"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa fa-sign-in me-2"></i> Log In
          </button>
        </Link>
        <Link
          to={"/register"}
          className="
       signup btn btn-outline-light ms-2"
        >
          <li>
            <i className="fa fa-user-plus me-1"></i>Register
          </li>
        </Link>
        <Link
          to={"/cart"}
          className="
       signup btn btn-outline-light ms-2"
        >
          <li>
            <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})
          </li>
        </Link>
      </div>
      {/* <div className="button">
       
        <Link href="/register" className="btn btn-outline-light ms-2">
          <i className="fa fa-user-plus me-1"></i> Register
        </Link>
        <Link href="/" className="btn btn-outline-light ms-2">
          <i className="fa fa-shopping-cart me-1"></i> Chat
        </Link>
      </div> */}
      <button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="fa fa-times"></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </button>
    </div>
  );
};

export default Navbar;
