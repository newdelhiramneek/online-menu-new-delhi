import React from "react";

const MenuItemCard = ({ item, addToCartLabel }) => {
  const ctaLabel = addToCartLabel || "Add to cart";
  return (
    <article className="menu-item-card">
      <header className="menu-item-header">
        <h3 className="menu-item-name">{item.name}</h3>
        <span className="menu-item-price">{item.price}</span>
      </header>

      <p className="menu-item-description">{item.description}</p>

      {item.dietary && item.dietary.length > 0 && (
        <div className="menu-item-tags">
          {item.dietary.map((tag) => (
            <span key={tag} className="menu-item-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <button className="btn-ghost">{ctaLabel}</button>
    </article>
  );
};

export default MenuItemCard;
