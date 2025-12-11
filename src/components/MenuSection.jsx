import React from "react";
import MenuItemCard from "./MenuItemCard";

const MenuSection = ({ title, subtitle, items }) => {
  return (
    <section className="menu-section">
      <div className="menu-section-header">
        <h2 className="menu-section-title">{title}</h2>
        {subtitle && <p className="menu-section-subtitle">{subtitle}</p>}
      </div>

      <div className="menu-items-grid">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
        {items.length === 0 && (
          <p className="empty-state">
            In dieser Kategorie sind aktuell keine Gerichte hinterlegt.
          </p>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
