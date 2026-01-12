import React from "react";

const MenuItemCard = ({ item, addToCartLabel, onAddToList }) => {
  const ctaLabel = addToCartLabel || "Add To List";
  const isToppingsCard = item.id === "bowl-toppings" || item.id === "biryani-toppings";
  const hasSizes = Array.isArray(item.sizes) && item.sizes.length > 0;
  const isWideSizes = hasSizes && item.category === "wein";
  const isVeg =
    item.dietary &&
    item.dietary.some((tag) => {
      const lower = tag.toLowerCase();
      return lower.includes("vegetar") || lower.includes("vegan");
    });
  const cardClass =
    "menu-item-card" +
    (isVeg ? " menu-item-card--veg" : " menu-item-card--nonveg") +
    (isToppingsCard ? " menu-item-card--toppings" : "") +
    (isWideSizes ? " menu-item-card--wide-sizes" : "");

  return (
    <article className={cardClass}>
      {isToppingsCard ? (
        <>
          <div className="toppings-card-header">
            <h3 className="menu-item-name">{item.name}</h3>
            <p className="toppings-card-subtitle">{item.description}</p>
          </div>
          <div className="toppings-card-grid">
            {item.sizes.map(({ label, price }) => (
              <div key={`${item.id}-${label}`} className="toppings-card-row">
                <span className="toppings-card-label">{label}</span>
                <span className="toppings-card-price">{price}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <header className="menu-item-header">
            <div className="menu-item-title">
              <h3 className="menu-item-name">{item.name}</h3>
            </div>
            <div className="menu-item-price-block">
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
            </div>
          </header>

          <div className="menu-item-body">
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
          </div>

          {!isWideSizes && (
            <div className="menu-item-actions">
              <button
                className="btn-ghost"
                type="button"
                onClick={() => onAddToList && onAddToList(item)}
              >
                {ctaLabel}
              </button>
            </div>
          )}
        </>
      )}
    </article>
  );
};

export default MenuItemCard;
