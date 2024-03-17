import React, { useState } from "react";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function showMenu(e) {
    e.preventDefault();
    setSidebarOpen(true);
  }
  function closeMenu() {
    setSidebarOpen(false);
  }
  return (
    <>
      <header>
        <img src="teslaImages/logo.svg" alt="Logo" />
        <ul>
          <li>
            <a href="">Model s</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li>
          <li>
            <a href="">Model X</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Model Roof</a>
          </li>
          <li>
            <a href="">Model Panels</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">SHOP</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
          <li>
            <a href="" onClick={showMenu}>
              Menu
            </a>
          </li>
        </ul>
      </header>
      <ul
        className="sidebar"
        style={{ right: sidebarOpen === true ? 0 : "-250px" }}
      >
        <span>
          <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
        </span>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panel</a>
        </li>

        <li>
          <a href="">Existing Inventary</a>
        </li>

        <li>
          <a href="">Trade In</a>
        </li>
        <li>
          <a href="">Test Drive</a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
    </>
  );
}

export default Header;
