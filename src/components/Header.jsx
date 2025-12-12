import React from "react";

const Header = ({ onToggleLanguage, language }) => {
  const isEnglish = language === "en";
  const buttonLabel = isEnglish ? "German Menu" : "English Menu";
  return (
    <header className="menu-header">
      <div className="menu-header-left">
        <img
          src="/newdelhi_logo.png"
          alt="New Delhi logo"
          className="logo-image"
        />
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
