import React from "react";
import "./headers.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-links">
          <a href="/">Offers</a>
          <a href="/">Fanbook</a>
          <a href="/">Download App</a>
          <a href="/">TriBe Membership</a>
        </div>
        <div className="navbar-contact">
          <a href="/">Contact Us</a>
          <a href="/">Track Order</a>
        </div>
      </div>
      <div className="navbar-main">
        <div className="navbar-logo">
          <h1>Thread</h1>
        </div>
        <nav className="navbar-menu">
          <a href="/">MEN</a>
          <a href="/">WOMEN</a>
          <a href="/">MOBILE COVERS</a>
        </nav>
        <div className="navbar-search">
          <input type="text" placeholder="Search by products" />
        </div>
        <div className="navbar-icons">
          <a href="/">LOGIN</a>
          <a href="/">
            <i className="fa fa-heart"></i>
          </a>
          <a href="/">
            <i className="fa fa-shopping-cart"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
