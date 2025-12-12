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
          <div className="menu-hero-text hero-center">
            <p className="hero-intro">{copy.hero.intro}</p>
            <p className="hero-connector">{copy.hero.connector}</p>
            <div className="hero-brand-line">
              <span className="hero-flourish" aria-hidden="true">{"\u2766"}</span>
              <span className="hero-brand">{copy.hero.brand}</span>
              <span className="hero-flourish" aria-hidden="true">{"\u2766"}</span>
            </div>
            <p className="hero-outro">{copy.hero.outro}</p>
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
