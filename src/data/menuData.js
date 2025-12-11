export const menuCategories = [
  {
    id: "starters",
    title: "Vorspeisen",
    subtitle: "Ein perfekter Start in Ihr New-Delhi-Erlebnis."
  },
  {
    id: "bowls",
    title: "Bowls",
    subtitle: "Modern & leicht – vegetarisch, vegan oder mit Fleisch."
  },
  {
    id: "thalis",
    title: "Thalis (Indische Platter)",
    subtitle: "Komplette Mahlzeit auf einem Teller, traditionell serviert."
  },
  {
    id: "mains",
    title: "Hauptgerichte",
    subtitle: "Klassische Currys & Spezialitäten, serviert mit Reis."
  },
  {
    id: "biryani",
    title: "Biryani Reisgerichte",
    subtitle: "Fein gewürzter, duftender Basmati-Reis mit Kräutern."
  },
  {
    id: "bread",
    title: "Brote & Beilagen",
    subtitle: "Frisch aus dem Tandoor und aus der Küche."
  },
  {
    id: "desserts",
    title: "Dessertkarte",
    subtitle: "Süßer Abschluss mit einem Hauch Indien."
  },
  {
    id: "drinks",
    title: "Getränke",
    subtitle: "Softdrinks, Lassi, Bier, Wein & Cocktails."
  }
];

export const menuItems = [
  // Starters
  {
    id: "starter-1",
    category: "starters",
    name: "Masala Papadam Chips",
    description:
      "Knusprige Papadam-Chips mit hausgemachtem Masala-Salz, dazu Mango-Chutney und Minz-Joghurt.",
    price: "3,80 €",
    dietary: ["vegan"]
  },
  {
    id: "starter-2",
    category: "starters",
    name: "Tandoori Brokkoli & Blumenkohl",
    description:
      "Im Tandoor mariniertes Gemüse mit Joghurt, Garam Masala und frischem Koriander.",
    price: "6,10 €",
    dietary: ["vegetarisch"]
  },
  {
    id: "starter-3",
    category: "starters",
    name: "Samosa",
    description:
      "Hausgemachte Teigtaschen gefüllt mit Kartoffeln, Erbsen & Gewürzen. Serviert mit Chutneys.",
    price: "6,20 €",
    dietary: ["vegan"]
  },

  // Bowls
  {
    id: "bowl-1",
    category: "bowls",
    name: "Avocado Mango Fusion Bowl",
    description:
      "Bunte Bowl mit Quinoa, Avocado, Mango, Babyspinat, Kichererbsen & Minz-Joghurt-Dressing.",
    price: "10,20 €",
    dietary: ["vegetarisch"]
  },
  {
    id: "bowl-2",
    category: "bowls",
    name: "Masala Rainbow Veggie Bowl",
    description:
      "Geröstetes Gemüse, Linsen, Basmati-Reis, Pickles & Cashew-Masala-Sauce.",
    price: "10,20 €",
    dietary: ["vegan"]
  },
  {
    id: "bowl-3",
    category: "bowls",
    name: "Chili Paneer Power Bowl",
    description:
      "Paneer-Würfel, Paprika, Zwiebeln & Chili-Sauce auf Basmati-Reis mit Kräutern.",
    price: "10,50 €",
    dietary: ["vegetarisch"]
  },

  // Thalis
  {
    id: "thali-1",
    category: "thalis",
    name: "Vegetarisches Thali",
    description:
      "Paneer-Curry, Gemüse-Sabji, Dal, Raita, Papadam, Naan & Dessert des Tages.",
    price: "22,50 €",
    dietary: ["vegetarisch"]
  },
  {
    id: "thali-2",
    category: "thalis",
    name: "New Delhi Signature Thali",
    description:
      "Butter Chicken, Lamm Curry, Dal Makhni, Gemüse, Reis, Naan & Dessert.",
    price: "24,60 €"
  },

  // Mains
  {
    id: "main-1",
    category: "mains",
    name: "Aloo Shimla Masala",
    description:
      "Kartoffeln & Paprika in kräftiger Tomaten-Zwiebel-Sauce mit nordindischen Gewürzen.",
    price: "12,40 €",
    dietary: ["vegan"]
  },
  {
    id: "main-2",
    category: "mains",
    name: "Chicken Tikka Masala",
    description:
      "Gegrillte Hähnchenstücke in cremiger Tomaten-Cashew-Sauce mit feiner Würze.",
    price: "15,50 €"
  },
  {
    id: "main-3",
    category: "mains",
    name: "Delhi Lamm Curry",
    description:
      "Zart geschmortes Lamm in aromatischer Curry-Sauce, serviert mit Basmati-Reis.",
    price: "15,90 €"
  },

  // Biryani
  {
    id: "biryani-1",
    category: "biryani",
    name: "Gemüse Biryani",
    description:
      "Basmati-Reis mit Gemüse, Minze, Röstzwiebeln und Biryani-Gewürzen, serviert mit Raita.",
    price: "13,20 €",
    dietary: ["vegetarisch"]
  },
  {
    id: "biryani-2",
    category: "biryani",
    name: "Chicken Biryani",
    description:
      "Mariniertes Hähnchen, Basmati-Reis, Safran & Kräuter, im Dum-Stil gegart.",
    price: "14,90 €"
  },

  // Bread & sides
  {
    id: "bread-1",
    category: "bread",
    name: "Butter Naan",
    description: "Weiches Fladenbrot aus dem Tandoor mit Butter.",
    price: "3,50 €",
    dietary: ["vegetarisch"]
  },
  {
    id: "bread-2",
    category: "bread",
    name: "Garlic Naan",
    description: "Naan mit Knoblauch & Koriander.",
    price: "3,70 €",
    dietary: ["vegetarisch"]
  },
  {
    id: "bread-3",
    category: "bread",
    name: "Basmati Reis",
    description: "Duftender Premium-Basmati-Reis.",
    price: "3,70 €",
    dietary: ["vegan", "glutenfrei"]
  },

  // Desserts
  {
    id: "dessert-1",
    category: "desserts",
    name: "Mango Lassi Panna Cotta",
    description:
      "Panna Cotta mit Mango-Lassi, Kardamom & einem Hauch Rose.",
    price: "4,70 €",
    dietary: ["vegetarisch"]
  },
  {
    id: "dessert-2",
    category: "desserts",
    name: "Gulab Jamun",
    description:
      "Frittierte Milchbällchen in warmem Zuckersirup mit Rosenwasser.",
    price: "5,20 €",
    dietary: ["vegetarisch"]
  },

  // Drinks
  {
    id: "drink-1",
    category: "drinks",
    name: "Mango Lassi",
    description: "Joghurtgetränk mit Mango & Kardamom.",
    price: "3,80 €",
    dietary: ["vegetarisch"]
  },
  {
    id: "drink-2",
    category: "drinks",
    name: "Masala Chai",
    description: "Indischer Gewürztee mit Milch.",
    price: "3,50 €",
    dietary: ["vegetarisch"]
  },
  {
    id: "drink-3",
    category: "drinks",
    name: "Aperol Maracuja / Mango",
    description: "Spritziger Cocktail mit exotischen Früchten.",
    price: "7,50 €",
    dietary: []
  }
];
