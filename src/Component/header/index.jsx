import React, { useState } from "react";
import "./Header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";
import logo from "../../Assets/logoimage.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" className="logoimage" />
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className="bi bi-grid"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
