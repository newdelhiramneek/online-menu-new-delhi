import React from "react";

const MenuItemCard = ({ item, addToCartLabel, onAddToList }) => {
  const ctaLabel = addToCartLabel || "Add To List";
  const isVeg =
    item.dietary &&
    item.dietary.some((tag) => {
      const lower = tag.toLowerCase();
      return lower.includes("vegetar") || lower.includes("vegan");
    });
  const cardClass =
    "menu-item-card" + (isVeg ? " menu-item-card--veg" : " menu-item-card--nonveg");
  const hasSizes = Array.isArray(item.sizes) && item.sizes.length > 0;

  return (
    <article className={cardClass}>
      <header className="menu-item-header">
        <h3 className="menu-item-name">{item.name}</h3>
        {hasSizes ? (
          <div className="menu-item-prices">
            {item.sizes.map(({ label, price }) => (
              <div key={`${item.id}-${label}`} className="menu-item-price-row">
                <span className="menu-item-size">{label}</span>
                <span className="menu-item-price">{price}</span>
              </div>
            ))}
          </div>
        ) : (
          <span className="menu-item-price">{item.price}</span>
        )}
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

      <button
        className="btn-ghost"
        type="button"
        onClick={() => onAddToList && onAddToList(item)}
      >
        {ctaLabel}
      </button>
    </article>
  );
};

export default MenuItemCard;
