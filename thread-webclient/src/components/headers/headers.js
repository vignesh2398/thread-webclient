import React, { useState } from "react";
import "./headers.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const handleClick=(e)=>{
        e.preventDefault();
        navigate('/login')

    }
    const handleMouseEnter = (e) => {
        setIsHovered(true)
      };
    const handleMouseleave = (e) => {
        setIsHovered(false)
      };
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-links">
          <a href="/">Offers</a>
          <a href="/">Fanbook</a>
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
          <a href="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave} >MEN</a>
          <a>{isHovered ? "!" : ""}</a>
          <a href="/">WOMEN</a>
          <a href="/">MOBILE COVERS</a>
        </nav>
        <div className="navbar-search">
          <input type="text" placeholder="Search by products" />
        </div>
        <div className="navbar-icons">
          <a href="/" onClick={handleClick}>LOGIN</a>
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
