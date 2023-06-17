import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="container">
        <div className="navbar-section">
          <div className="logo">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="">Partner With Us</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
              <li>
                <button>Download ZET</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
