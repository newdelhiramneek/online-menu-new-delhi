import React from "react";
import MenuItemCard from "./MenuItemCard";

const MenuSection = ({
  title,
  subtitle,
  items,
  emptyStateText,
  addToCartLabel,
  onAddToList
}) => {
  const resolvedEmptyState =
    emptyStateText || "No dishes are available in this category.";
  const safeItems = items || [];
  return (
    <section className="menu-section">
      <div className="menu-section-header">
        <h2 className="menu-section-title">{title}</h2>
        {subtitle && <p className="menu-section-subtitle">{subtitle}</p>}
      </div>

      <div className="menu-items-grid">
        {safeItems.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            addToCartLabel={addToCartLabel}
            onAddToList={onAddToList}
          />
        ))}
        {safeItems.length === 0 && (
          <p className="empty-state">{resolvedEmptyState}</p>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
