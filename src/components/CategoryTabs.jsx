import React from "react";

const CategoryTabs = ({ categories, activeId, onChange }) => {
  return (
    <div className="category-tabs" id="menu">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={
            "category-tab" + (cat.id === activeId ? " category-tab--active" : "")
          }
          onClick={() => onChange(cat.id)}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
