import React from "react";
import logo from "./assets/Logo_FlyEase.png";

export function Header() {
  return (
    <header className="header">
      {/* Logo divs */}
      <div className="logo">
        <img src={logo} alt="FlyEase-logo" />
        <p className="lowfont">FlyEase</p>
      </div>

      {/* Nav divs */}
      <div className="flyease-navs">
        <ul>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
          <li>Lorem ipsum</li>
        </ul>
      </div>
    </header>
  );
}
