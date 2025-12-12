import React from "react";

const Header = ({
  onToggleLanguage,
  language,
  onToggleList,
  listItems = []
}) => {
  const isEnglish = language === "en";
  const buttonLabel = isEnglish ? "German Menu" : "English Menu";
  const listCount = listItems.length;

  return (
    <header className="menu-header">
      <div className="menu-header-left">
        <a href="/" className="logo-link">
          <img
            src="/newdelhi_logo.png"
            alt="New Delhi logo"
            className="logo-image"
          />
        </a>
      </div>

      <div className="header-actions">
        <button
          className="btn-ghost list-button"
          type="button"
          onClick={onToggleList}
          aria-label="View list"
        >
          <span className="list-icon" aria-hidden="true">
            📋
          </span>
          <span className="list-count">{listCount}</span>
        </button>

        <button
          className="btn-outline"
          type="button"
          onClick={onToggleLanguage}
          aria-pressed={isEnglish}
        >
          {buttonLabel}
        </button>
      </div>
    </header>
  );
};

export default Header;
