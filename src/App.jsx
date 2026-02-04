import React, { useState, useMemo, useEffect, useRef } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import MenuSection from "./components/MenuSection";
import Footer from "./components/Footer";
import ImpressumPage from "./components/ImpressumPage";
import { menuData } from "./data/menuData";
import { siteCopy } from "./data/siteCopy";

const App = () => {
  const [language, setLanguage] = useState("de");
  const [activeCategory, setActiveCategory] = useState("starters");
  const [listItems, setListItems] = useState([]);
  const [isListOpen, setIsListOpen] = useState(false);
  const [activePage, setActivePage] = useState("menu");
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimerRef = useRef(null);

  const { categories, items } = menuData[language] || menuData.de;
  const copy = siteCopy[language] || siteCopy.de;

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        if (Array.isArray(item.category)) {
          return item.category.includes(activeCategory);
        }
        return item.category === activeCategory;
      }),
    [items, activeCategory]
  );

  const activeCategoryMeta = categories.find(
    (cat) => cat.id === activeCategory
  );

  const totalCount = listItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  const addToList = (item) => {
    setListItems((prev) => {
      const existing = prev.find((entry) => entry.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setToastMessage(copy.toastAdded);
    setIsToastVisible(true);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = setTimeout(() => {
      setIsToastVisible(false);
    }, 2000);
  };

  const removeFromList = (id) => {
    setListItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setListItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setListItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleToggleList = () => {
    setActivePage("menu");
    setIsListOpen((prev) => !prev);
  };

  const openImpressum = () => {
    setIsListOpen(false);
    setActivePage("impressum");
  };

  const handleBackToMenu = () => {
    setActivePage("menu");
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  return (
    <Layout>
      <Header
        language={language}
        onToggleLanguage={() =>
          setLanguage((prev) => (prev === "en" ? "de" : "en"))
        }
        onToggleList={handleToggleList}
        onLogoClick={handleBackToMenu}
        listItems={listItems}
      />

      <div
        className={
          "toast-notification" + (isToastVisible ? " toast-notification--visible" : "")
        }
        role="status"
        aria-live="polite"
      >
        {toastMessage}
      </div>

      {activePage === "impressum" ? (
        <main className="menu-main">
          <ImpressumPage
            title={copy.impressumTitle}
            backLabel={copy.impressumBackLabel}
            onBack={handleBackToMenu}
          />
        </main>
      ) : isListOpen ? (
        <main className="menu-main">
          <section className="list-page">
            <div className="list-page-header">
              <h2>My List</h2>
              <p>{totalCount} item(s)</p>
            </div>

            {listItems.length === 0 ? (
              <p className="list-page-empty">No items added yet.</p>
            ) : (
              <ul className="list-page-items">
                {listItems.map((item) => (
                  <li key={item.id} className="list-page-item">
                    <div className="list-page-item-info">
                      <span className="list-item-name">{item.name}</span>
                      <span className="list-item-price">{item.price}</span>
                    </div>
                    <div className="list-page-item-actions">
                      <div className="list-quantity-controls">
                        <button
                          className="btn-ghost list-qty-button"
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          aria-label={`Decrease quantity for ${item.name}`}
                        >
                          -
                        </button>
                        <span className="list-qty-value">{item.quantity}</span>
                        <button
                          className="btn-ghost list-qty-button"
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          aria-label={`Increase quantity for ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn-secondary list-remove"
                        type="button"
                        onClick={() => removeFromList(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <button
              className="btn-outline list-back"
              type="button"
              onClick={() => setIsListOpen(false)}
            >
              Back to menu
            </button>
          </section>
        </main>
      ) : (
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
              onAddToList={addToList}
            />
          </section>
        </main>
      )}
      <Footer copy={copy.footer} onImpressumClick={openImpressum} />
    </Layout>
  );
};

export default App;
