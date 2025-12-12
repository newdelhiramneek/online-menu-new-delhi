import React, { useState, useMemo } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import { menuData } from "./data/menuData";
import { siteCopy } from "./data/siteCopy";

const App = () => {
  const [language, setLanguage] = useState("de");
  const [activeCategory, setActiveCategory] = useState("starters");

  const { categories, items } = menuData[language] || menuData.de;
  const copy = siteCopy[language] || siteCopy.de;

  const filteredItems = useMemo(
    () => items.filter((item) => item.category === activeCategory),
    [items, activeCategory]
  );

  const activeCategoryMeta = categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <Layout>
      <Header
        language={language}
        onToggleLanguage={() =>
          setLanguage((prev) => (prev === "en" ? "de" : "en"))
        }
      />
      <main className="menu-main">
        <section className="menu-hero">
          <div className="menu-hero-text">
            <p className="menu-hero-tagline">{copy.heroTagline}</p>
            <h1 className="menu-hero-title">New Delhi</h1>
            <p className="menu-hero-subtitle">{copy.heroSubtitle}</p>
            <div className="menu-hero-actions">
              <button className="btn-primary">{copy.ctas.order}</button>
              <button className="btn-secondary">{copy.ctas.reserve}</button>
            </div>
          </div>
        </section>

        <section className="menu-section-wrapper">
          <CategoryTabs
            categories={categories}
            activeId={activeCategory}
            onChange={setActiveCategory}
          />

          <MenuSection
            title={activeCategoryMeta?.title}
            subtitle={activeCategoryMeta?.subtitle}
            items={filteredItems}
            emptyStateText={copy.emptyState}
            addToCartLabel={copy.addToCart}
          />
        </section>
      </main>
      <Footer copy={copy.footer} />
    </Layout>
  );
};

export default App;
