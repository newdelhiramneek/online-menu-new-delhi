import React from "react";

const Header = () => {
  return (
    <header className="menu-header">
      <div className="menu-header-left">
        <span className="logo-circle">ND</span>
        <div className="logo-text">
          <span className="logo-title">New Delhi</span>
          <span className="logo-subtitle">Indisches Restaurant</span>
        </div>
      </div>

      <nav className="menu-header-nav">
        <a href="#menu" className="menu-nav-link">Speisekarte</a>
        <a href="#allergen" className="menu-nav-link">Allergene</a>
        <a href="#contact" className="menu-nav-link">Kontakt</a>
      </nav>

      <button className="btn-outline">Online bestellen</button>
    </header>
  );
};

export default Header;
