import React from "react";

const MenuItemCard = ({ item, addToCartLabel }) => {
  const ctaLabel = addToCartLabel || "Add to cart";
  const isVeg =
    item.dietary &&
    item.dietary.some((tag) => {
      const lower = tag.toLowerCase();
      return lower.includes("vegetar") || lower.includes("vegan");
    });
  const cardClass =
    "menu-item-card" + (isVeg ? " menu-item-card--veg" : " menu-item-card--nonveg");
  return (
    <article className={cardClass}>
      <header className="menu-item-header">
        <h3 className="menu-item-name">{item.name}</h3>
        <span className="menu-item-price">{item.price}</span>
      </header>

      <p className="menu-item-description">{item.description}</p>

      {(item.dietary && item.dietary.length > 0) || !isVeg ? (
        <div className="menu-item-tags">
          {item.dietary &&
            item.dietary.map((tag) => (
              <span
                key={tag}
                className={
                  "menu-item-tag" + (isVeg ? " menu-item-tag--veg" : " menu-item-tag--nonveg")
                }
              >
                {tag}
              </span>
            ))}
          {!isVeg && (
            <span className="menu-item-tag menu-item-tag--nonveg">Non Veg</span>
          )}
        </div>
      ) : null}

      <button className="btn-ghost">{ctaLabel}</button>
    </article>
  );
};

export default MenuItemCard;
