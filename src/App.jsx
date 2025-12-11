import React, { useState, useMemo } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import { menuCategories, menuItems } from "./data/menuData";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const activeCategoryMeta = menuCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <Layout>
      <Header />
      <main className="menu-main">
        <section className="menu-hero">
          <div className="menu-hero-text">
            <p className="menu-hero-tagline">
              Lieferung • Abholung • Digital Menu
            </p>
            <h1 className="menu-hero-title">New Delhi</h1>
            <p className="menu-hero-subtitle">
              Modernes indisches Restaurant – kräftige Aromen, frische Zutaten
              und ein Hauch von Innovation.
            </p>
            <div className="menu-hero-actions">
              <button className="btn-primary">Bestellen</button>
              <button className="btn-secondary">Tisch reservieren</button>
            </div>
          </div>
        </section>

        <section className="menu-section-wrapper">
          <CategoryTabs
            categories={menuCategories}
            activeId={activeCategory}
            onChange={setActiveCategory}
          />

          <MenuSection
            title={activeCategoryMeta?.title}
            subtitle={activeCategoryMeta?.subtitle}
            items={filteredItems}
          />
        </section>
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
