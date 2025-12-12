import React from "react";

const Header = ({ onToggleLanguage, language }) => {
  const isEnglish = language === "en";
  const buttonLabel = isEnglish ? "German Menu" : "English Menu";
  return (
    <header className="menu-header">
      <div className="menu-header-left">
        <span className="logo-circle">ND</span>
        <div className="logo-text">
          <span className="logo-title">New Delhi</span>
          <span className="logo-subtitle">Indisches Restaurant</span>
        </div>
      </div>

      <button
        className="btn-outline"
        type="button"
        onClick={onToggleLanguage}
        aria-pressed={isEnglish}
      >
        {buttonLabel}
      </button>
    </header>
  );
};

export default Header;
