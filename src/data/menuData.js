export const menuData = {
  de: {
    categories: [
      {
        id: "starters",
        title: "Vorspeisen",
        subtitle: "Ein perfekter Start in Ihr New-Delhi-Erlebnis."
      },
      {
        id: "bowls",
        title: "Bowls",
        subtitle: "Modern & leicht - vegetarisch, vegan oder mit Fleisch."
      },
      {
        id: "thalis",
        title: "Thalis (Indische Platten)",
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
    ],
    items: [
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
        price: "24,60 €",
        dietary: []
      },
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
        price: "15,50 €",
        dietary: []
      },
      {
        id: "main-3",
        category: "mains",
        name: "Delhi Lamm Curry",
        description:
          "Zart geschmortes Lamm in aromatischer Curry-Sauce, serviert mit Basmati-Reis.",
        price: "15,90 €",
        dietary: []
      },
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
        price: "14,90 €",
        dietary: []
      },
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
    ]
  },
  en: {
    categories: [
      {
        id: "starters",
        title: "Starters",
        subtitle: "A perfect start to your New Delhi experience."
      },
      {
        id: "bowls",
        title: "Bowls",
        subtitle: "Modern & light - vegetarian, vegan, or with meat."
      },
      {
        id: "thalis",
        title: "Thalis (Indian platters)",
        subtitle: "Complete meal on one tray, served traditionally."
      },
      {
        id: "mains",
        title: "Mains",
        subtitle: "Classic curries and specialties served with rice."
      },
      {
        id: "biryani",
        title: "Biryani rice dishes",
        subtitle: "Fragrant spiced basmati rice with herbs."
      },
      {
        id: "bread",
        title: "Breads & sides",
        subtitle: "Fresh from the tandoor and the kitchen."
      },
      {
        id: "desserts",
        title: "Desserts",
        subtitle: "A sweet finish with a touch of India."
      },
      {
        id: "drinks",
        title: "Drinks",
        subtitle: "Soft drinks, lassi, beer, wine, and cocktails."
      }
    ],
    items: [
      {
        id: "starter-1",
        category: "starters",
        name: "Masala Papadam Chips",
        description:
          "Crispy papadam chips with house masala salt, served with mango chutney and mint yogurt.",
        price: "3.80 €",
        dietary: ["vegan"]
      },
      {
        id: "starter-2",
        category: "starters",
        name: "Tandoori Broccoli & Cauliflower",
        description:
          "Broccoli and cauliflower marinated for the tandoor with yogurt, garam masala, and fresh coriander.",
        price: "6.10 €",
        dietary: ["vegetarian"]
      },
      {
        id: "starter-3",
        category: "starters",
        name: "Samosa",
        description:
          "Homemade pastry pockets filled with potatoes, peas, and spices. Served with chutneys.",
        price: "6.20 €",
        dietary: ["vegan"]
      },
      {
        id: "bowl-1",
        category: "bowls",
        name: "Avocado Mango Fusion Bowl",
        description:
          "Colorful bowl with quinoa, avocado, mango, baby spinach, chickpeas, and mint yogurt dressing.",
        price: "10.20 €",
        dietary: ["vegetarian"]
      },
      {
        id: "bowl-2",
        category: "bowls",
        name: "Masala Rainbow Veggie Bowl",
        description:
          "Roasted vegetables, lentils, basmati rice, pickles, and cashew masala sauce.",
        price: "10.20 €",
        dietary: ["vegan"]
      },
      {
        id: "bowl-3",
        category: "bowls",
        name: "Chili Paneer Power Bowl",
        description:
          "Paneer cubes with bell pepper, onions, and chili sauce over basmati rice with herbs.",
        price: "10.50 €",
        dietary: ["vegetarian"]
      },
      {
        id: "thali-1",
        category: "thalis",
        name: "Vegetarian Thali",
        description:
          "Paneer curry, vegetable sabji, dal, raita, papadam, naan, and dessert of the day.",
        price: "22.50 €",
        dietary: ["vegetarian"]
      },
      {
        id: "thali-2",
        category: "thalis",
        name: "New Delhi Signature Thali",
        description:
          "Butter chicken, lamb curry, dal makhni, vegetables, rice, naan, and dessert.",
        price: "24.60 €",
        dietary: []
      },
      {
        id: "main-1",
        category: "mains",
        name: "Aloo Shimla Masala",
        description:
          "Potatoes and bell pepper in a bold tomato-onion sauce with North Indian spices.",
        price: "12.40 €",
        dietary: ["vegan"]
      },
      {
        id: "main-2",
        category: "mains",
        name: "Chicken Tikka Masala",
        description:
          "Grilled chicken pieces in creamy tomato-cashew sauce with balanced spices.",
        price: "15.50 €",
        dietary: []
      },
      {
        id: "main-3",
        category: "mains",
        name: "Delhi Lamb Curry",
        description:
          "Tender braised lamb in aromatic curry sauce, served with basmati rice.",
        price: "15.90 €",
        dietary: []
      },
      {
        id: "biryani-1",
        category: "biryani",
        name: "Vegetable Biryani",
        description:
          "Basmati rice with vegetables, mint, crispy onions, and biryani spices; served with raita.",
        price: "13.20 €",
        dietary: ["vegetarian"]
      },
      {
        id: "biryani-2",
        category: "biryani",
        name: "Chicken Biryani",
        description:
          "Marinated chicken, basmati rice, saffron, and herbs, slow-cooked dum style.",
        price: "14.90 €",
        dietary: []
      },
      {
        id: "bread-1",
        category: "bread",
        name: "Butter Naan",
        description: "Soft tandoor flatbread with butter.",
        price: "3.50 €",
        dietary: ["vegetarian"]
      },
      {
        id: "bread-2",
        category: "bread",
        name: "Garlic Naan",
        description: "Naan with garlic and coriander.",
        price: "3.70 €",
        dietary: ["vegetarian"]
      },
      {
        id: "bread-3",
        category: "bread",
        name: "Basmati Rice",
        description: "Fragrant premium basmati rice.",
        price: "3.70 €",
        dietary: ["vegan", "gluten free"]
      },
      {
        id: "dessert-1",
        category: "desserts",
        name: "Mango Lassi Panna Cotta",
        description:
          "Panna cotta with mango lassi, cardamom, and a hint of rose.",
        price: "4.70 €",
        dietary: ["vegetarian"]
      },
      {
        id: "dessert-2",
        category: "desserts",
        name: "Gulab Jamun",
        description:
          "Fried milk dumplings in warm rosewater syrup.",
        price: "5.20 €",
        dietary: ["vegetarian"]
      },
      {
        id: "drink-1",
        category: "drinks",
        name: "Mango Lassi",
        description: "Yogurt drink with mango and cardamom.",
        price: "3.80 €",
        dietary: ["vegetarian"]
      },
      {
        id: "drink-2",
        category: "drinks",
        name: "Masala Chai",
        description: "Indian spiced tea with milk.",
        price: "3.50 €",
        dietary: ["vegetarian"]
      },
      {
        id: "drink-3",
        category: "drinks",
        name: "Aperol Passion / Mango",
        description: "Sparkling cocktail with passion fruit or mango.",
        price: "7.50 €",
        dietary: []
      }
    ]
  }
};
