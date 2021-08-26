import React from "react";
import "../style/Navbar.css";

function openNav() {
  if (
    document.getElementById("mySidenav")
  ) {
    document.getElementById("mySidenav").style.width = "250px";
  }
}

function closeNav() {
  if (
    document.getElementById("mySidenav") 
  ) {
    document.getElementById("mySidenav").style.width = "0";
  }
}
export default function Navbar() {

  return (
    <>
      <header className="navbar-header" id="navigation-menu">
        <nav className="navbar">
        <span style={{cursor:'pointer'}} onClick={openNav}>Menu</span>
          <ul className="nav-menu">
            <li className="logo-comp">
                Ritual
            </li>
          </ul>
          <div className="hamburger">
            <p className="wrap-who-we-are">Who We Are</p>
            <img src="https://img.icons8.com/dotty/80/000000/clipboard.png" className="clipboard-image"/>
          </div>
        </nav>
      </header>
      <div id="mySidenav" className="sidenav">
      <a className="closebtn"  style={{cursor:'pointer'}}  onClick={closeNav}>&times;</a>
      <div className="navbar-links">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
      </div>
      </div>
    </>   
  );
}
