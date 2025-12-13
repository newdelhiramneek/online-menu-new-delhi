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
        id: "softdrinks",
        title: "Softdrinks",
        subtitle: "Erfrischende Limonaden & Saefte."
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
        id: "starter-4",
        category: "starters",
        name: "Dhokla Glow Tartine",
        description:
          "Luftiges Dhokla mit zerdrückter Avocado, Kirschtomaten, Limette, Granatapfel, gerösteten Kürbiskernen und etwas Käse – eine farbenfrohe Hommage an die Aromen Indiens.",
        price: "7,30 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "starter-5",
        category: "starters",
        name: "Palak Pop Crunch",
        description:
          "Knusprige Palak-Blätter, frittiert in Kichererbsenmehl, Hartweizengrieß & Maismehl, serviert mit süßem Joghurt, Saunth- & Minz-Chutney, Granatapfelkernen und knusprigem Sev – ein bunter, texturreicher Snack voller Geschmack und Frische.",
        price: "8,20 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "starter-6",
        category: "starters",
        name: "Linsen Suppe oder Lasan Suppe",
        description:
          "Aromatische Wahl: Rote Linsen mit Kreuzkümmel, Kurkuma & Ingwer oder gerösteter Knoblauch mit Zwiebeln & frischen Kräutern. Slogan: Soulful. Aromatic. Comforting.",
        price: "5,90 €",
        dietary: ["vegetarisch"]
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
        id: "bowl-4",
        category: "bowls",
        name: "Tandoori Chicken & Mango Bowl",
        description:
          "Zartes Tandoori-Hähnchen auf Quinoa und Babyspinat, kombiniert mit süßer Mango, gerösteten Kichererbsen und Minz-Joghurt-Dressing. Ein leichter, frischer Twist auf indischen Klassiker.",
        price: "12,70 €",
        dietary: []
      },
      {
        id: "bowl-5",
        category: "bowls",
        name: "Lamb & Quinoa Bowl (Fusion-Style)",
        description:
          "Zartes Lammfilet in leichten Garam-Masala-Aromen, serviert auf Quinoa mit gegrilltem Gemüse, Granatapfelkernen und frischem Koriander. Ein frisches, kreatives Fusion-Gericht mit indischem Flair.",
        price: "14,10 €",
        dietary: []
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
        id: "main-4",
        category: "mains",
        name: "Smoky Baingan Roast",
        description:
          "Geröstete Aubergine mit rauchigem Aroma, leicht gewürzt und modern angerichtet.",
        price: "12,40 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-5",
        category: "mains",
        name: "Mix Sabji",
        description:
          "Bunte Gemüsepfanne mit saisonalem Gemüse in leichter Curry-Sauce, frisch und hausgemacht.",
        price: "12,95 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-6",
        category: "mains",
        name: "Delhi Street Chana",
        description:
          "Kichererbsen in leichter Tomaten-Kokos-Sauce mit Curryblättern, Senfsaat und frischen Kräutern.",
        price: "12,95 €",
        dietary: ["vegan"]
      },
      {
        id: "main-7",
        category: "mains",
        name: "Dal Tadka",
        description:
          "Gelbe Linsen mit Gewürzen und frischen Kräutern, aromatisch und leicht.",
        price: "13,75 €",
        dietary: ["vegan"]
      },
      {
        id: "main-8",
        category: "mains",
        name: "Chili Paneer Stir-Fry / Mushroom & Spinach",
        description:
          "Paneerwürfel mit Paprika, Zwiebeln in leichter Chili-Tomatensauce, kurz gebraten.",
        price: "14,50 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-9",
        category: "mains",
        name: "Palak Paneer",
        description:
          "Paneer in mildem Spinat-Curry, cremig, leicht und schnell zuzubereiten.",
        price: "14,95 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-10",
        category: "mains",
        name: "Methi Malai Kofta",
        description:
          "Gemüse-Klößchen in cremiger Methi-Cashew-Tomaten-Sauce, modern angerichtet.",
        price: "14,95 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-11",
        category: "mains",
        name: "Shahi Paneer",
        description:
          "Cremiger Paneer in leichter Cashew-Tomaten-Sauce, modern interpretiert.",
        price: "15,50 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-12",
        category: "mains",
        name: "Dal Makhni",
        description:
          "Schwarze Linsen & Kidneybohnen in leichter Butter-Cashew-Sauce, cremig aber leicht.",
        price: "15,70 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-13",
        category: "mains",
        name: "Paneer Tikka Light / Sizzler",
        description:
          "Gegrillter Paneer mit Paprika & Zwiebeln, leicht gewürzt, in milder Tomaten-Cashew-Sauce / serviert auf heißem Sizzler mit leichter Masala-Sauce.",
        price: "15,90 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-14",
        category: "mains",
        name: "Chicken Chettinad",
        description:
          "Südindisches Hähnchen-Curry mit Pfeffer, Kokos, Curryblättern und aromatischen Gewürzen, kräftig aber ausgewogen.",
        price: "13,90 €",
        dietary: []
      },
      {
        id: "main-15",
        category: "mains",
        name: "Chicken Jalfrezi",
        description:
          "Hähnchenstücke mit Paprika, Zwiebeln und Tomaten in würziger Sauce gebraten.",
        price: "14,50 €",
        dietary: []
      },
      {
        id: "main-16",
        category: "mains",
        name: "Chicken Madras",
        description:
          "Kräftiges Hähnchen-Curry mit Tomaten, Zwiebeln, Curryblättern und südindischen Gewürzen, angenehm scharf.",
        price: "14,90 €",
        dietary: []
      },
      {
        id: "main-17",
        category: "mains",
        name: "Smoky Tandoori Chicken Sizzler",
        description:
          "Zartes, gegrilltes Hähnchen mit rauchiger Tandoori-Note, serviert auf heißer Platte mit leichter Curry-Sauce.",
        price: "14,90 €",
        dietary: []
      },
      {
        id: "main-18",
        category: "mains",
        name: "Chicken Saagwala",
        description:
          "Zartes Hähnchen in cremigem Spinat-Curry mit Ingwer, Knoblauch und leichten Gewürzen.",
        price: "14,90 €",
        dietary: []
      },
      {
        id: "main-19",
        category: "mains",
        name: "Mango Chicken Curry",
        description:
          "Hähnchenstücke in gelb-fruchtiger Mango-Curry-Sauce mit leichten Gewürzen.",
        price: "14,90 €",
        dietary: []
      },
      {
        id: "main-20",
        category: "mains",
        name: "Chicken Tikka Masala",
        description:
          "Gegrilltes Hähnchen in cremiger, mild-würziger orangefarbener Sauce mit Tomaten und Cashew.",
        price: "15,50 €",
        dietary: []
      },
      {
        id: "main-21",
        category: "mains",
        name: "Butter Chicken",
        description:
          "Zartes Hähnchen in cremiger Tomaten-Cashew-Sauce, fein gewürzt.",
        price: "15,90 €",
        dietary: []
      },
      {
        id: "main-22",
        category: "mains",
        name: "Scampi Masala",
        description:
          "Scampi in kräftiger Tomaten-Zwiebel-Sauce mit Ingwer, Knoblauch und aromatischer Gewürzmischung, leicht pikant.",
        price: "15,50 €",
        dietary: []
      },
      {
        id: "main-23",
        category: "mains",
        name: "Scampi Butter Masala",
        description:
          "Scampi in cremiger Butter-Tomaten-Cashew-Sauce, mild gewürzt und verfeinert mit frischem Koriander.",
        price: "15,90 €",
        dietary: []
      },
      {
        id: "main-24",
        category: "mains",
        name: "Saffron Flame Fish",
        description:
          "Zartes Fischfilet in aromatischer Tomaten-Zwiebel-Sauce mit feinen Gewürzen, leichter Schärfe und einem Hauch Safran.",
        price: "16,50 €",
        dietary: []
      },
      {
        id: "main-25",
        category: "mains",
        name: "Butter Naan",
        description:
          "Weiches, frisch gebackenes Naan-Brot mit leichter Butterglaze, ideal zum Dippen in cremige Currys.",
        price: "3,50 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-26",
        category: "mains",
        name: "Garlic Naan",
        description:
          "Aromatisches Naan mit frischem Knoblauch und Butter, im Tandoor gebacken, duftend & knusprig.",
        price: "3,75 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-27",
        category: "mains",
        name: "Tandoori Roti (Vollkorn)",
        description:
          "Traditionelles, dünnes Vollkornbrot aus dem Tandoor – ohne Butter, leicht & vegan.",
        price: "3,50 €",
        dietary: ["vegan"]
      },
      {
        id: "main-28",
        category: "mains",
        name: "Paneer Naan",
        description:
          "Weiches, im Tandoor gebackenes Naan-Brot, gefüllt mit mild gewürfeltem Paneer und milden indischen Gewürzen – aromatisch & sättigend.",
        price: "4,20 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-29",
        category: "mains",
        name: "Bread Basket (für zwei)",
        description:
          "Auswahl aus Butter Naan, Garlic Naan & Tandoori Roti – perfekt zum Teilen.",
        price: "6,20 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "main-30",
        category: "mains",
        name: "Basmati Reis",
        description:
          "Aromatischer, locker gekochter Premium-Basmati – die klassische Beilage zu allen Currys.",
        price: "3,50 €",
        dietary: ["vegan", "glutenfrei"]
      },
      {
        id: "main-31",
        category: "mains",
        name: "Jeera Rice (Kreuzkümmel-Reis)",
        description:
          "Basmati-Reis mit leicht geröstetem Kreuzkümmel & einem Hauch Ghee – duftend und aromatisch.",
        price: "3,75 €",
        dietary: ["vegetarisch", "glutenfrei"]
      },
      {
        id: "main-32",
        category: "mains",
        name: "Lemon Rice (Südindischer Stil)",
        description:
          "Leichter, gelber Reis mit Zitronensaft, Curryblättern & Senfsamen – erfrischend und farbenfroh.",
        price: "3,75 €",
        dietary: ["vegetarisch"]
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
        id: "dessert-3",
        category: "desserts",
        name: "Pistazien-Cheesecake",
        description:
          "Zarter Cheesecake mit Pistazien-Püree auf knusprigem Boden; cremig, nussig, hellgrün.",
        price: "6,80 €",
        dietary: ["vegetarisch"]
      },
      {
        id: "dessert-4",
        category: "desserts",
        name: "Kokos & Mango Sorbet",
        description:
          "Erfrischendes Sorbet aus Kokos und Mango; fruchtig, exotisch, hellgelb-weiß.",
        price: "5,70 €",
        dietary: ["vegan"]
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
      },
      {
        id: "soft-1",
        category: "softdrinks",
        name: "San Pellegrino / Acqua Panna",
        description:
          "Flasche: 0,75l 5,80 € · 0,25l 2,80 € – Mineralwasser / stilles Mineralwasser.",
        price: "ab 2,80 €",
        dietary: []
      },
      {
        id: "soft-2",
        category: "softdrinks",
        name: "Coca-Cola / Coca-Cola Zero",
        description: "0,5l 4,20 € · 0,3l 2,95 €.",
        price: "ab 2,95 €",
        dietary: []
      },
      {
        id: "soft-3",
        category: "softdrinks",
        name: "Fanta / Sprite / Spezi",
        description: "0,5l 4,20 € · 0,3l 2,95 €.",
        price: "ab 2,95 €",
        dietary: []
      },
      {
        id: "soft-4",
        category: "softdrinks",
        name: "Bitter Lemon / Tonic Water / Ginger Ale",
        description: "0,5l 4,60 € · 0,3l 3,20 €.",
        price: "ab 3,20 €",
        dietary: []
      },
      {
        id: "soft-5",
        category: "softdrinks",
        name: "Red Bull / Red Bull Zero",
        description: "Dose 0,25l 4,20 €.",
        price: "4,20 €",
        dietary: []
      },
      {
        id: "soft-6",
        category: "softdrinks",
        name: "Ice Tea",
        description: "Flasche 0,25l 4,20 € – Granatapfel, Pfirsich, Zitrone.",
        price: "4,20 €",
        dietary: []
      },
      {
        id: "soft-7",
        category: "softdrinks",
        name: "Saft-Nektar oder Saftschorle",
        description:
          "0,5l 4,60 € · 0,3l 3,20 € – Apfel, Orange, Maracuja, Banane, Kiba.",
        price: "ab 3,20 €",
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
        id: "softdrinks",
        title: "Soft drinks",
        subtitle: "Refreshing sodas and juices."
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
        id: "starter-4",
        category: "starters",
        name: "Dhokla Glow Tartine",
        description:
          "Fluffy dhokla topped with smashed avocado, cherry tomatoes, lime, pomegranate, roasted pumpkin seeds, and a touch of cheese—a colorful homage to Indian flavors.",
        price: "7.30 €",
        dietary: ["vegetarian"]
      },
      {
        id: "starter-5",
        category: "starters",
        name: "Palak Pop Crunch",
        description:
          "Crispy spinach leaves fried in chickpea, semolina, and cornmeal batter, served with sweet yogurt, saunth and mint chutney, pomegranate seeds, and crunchy sev for a vibrant, texture-rich snack.",
        price: "8.20 €",
        dietary: ["vegetarian"]
      },
      {
        id: "starter-6",
        category: "starters",
        name: "Lentil Soup or Garlic Soup",
        description:
          "Aromatic choice: red lentils with cumin, turmeric, and ginger, or roasted garlic with onions and fresh herbs. Slogan: Soulful. Aromatic. Comforting.",
        price: "5.90 €",
        dietary: ["vegetarian"]
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
        id: "bowl-4",
        category: "bowls",
        name: "Tandoori Chicken & Mango Bowl",
        description:
          "Tender tandoori chicken on quinoa and baby spinach, paired with sweet mango, roasted chickpeas, and mint yogurt dressing. A light, fresh twist on an Indian classic.",
        price: "12.70 €",
        dietary: []
      },
      {
        id: "bowl-5",
        category: "bowls",
        name: "Lamb & Quinoa Bowl (Fusion-Style)",
        description:
          "Tender lamb fillet with light garam masala notes, served on quinoa with grilled vegetables, pomegranate seeds, and fresh coriander. A fresh, creative fusion bowl with Indian flair.",
        price: "14.10 €",
        dietary: []
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
        id: "main-4",
        category: "mains",
        name: "Smoky Baingan Roast",
        description:
          "Roasted eggplant with a smoky aroma, lightly spiced and plated in a modern style.",
        price: "12.40 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-5",
        category: "mains",
        name: "Mix Sabji",
        description:
          "Colorful seasonal vegetables in a light curry sauce, fresh and homemade.",
        price: "12.95 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-6",
        category: "mains",
        name: "Delhi Street Chana",
        description:
          "Chickpeas in a light tomato-coconut sauce with curry leaves, mustard seeds, and fresh herbs.",
        price: "12.95 €",
        dietary: ["vegan"]
      },
      {
        id: "main-7",
        category: "mains",
        name: "Dal Tadka",
        description:
          "Yellow lentils with spices and fresh herbs, aromatic and light.",
        price: "13.75 €",
        dietary: ["vegan"]
      },
      {
        id: "main-8",
        category: "mains",
        name: "Chili Paneer Stir-Fry / Mushroom & Spinach",
        description:
          "Paneer cubes with bell peppers and onions in a light chili-tomato sauce, quickly stir-fried.",
        price: "14.50 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-9",
        category: "mains",
        name: "Palak Paneer",
        description:
          "Paneer in mild spinach curry—creamy, light, and quick to enjoy.",
        price: "14.95 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-10",
        category: "mains",
        name: "Methi Malai Kofta",
        description:
          "Vegetable dumplings in a creamy fenugreek-cashew-tomato sauce, presented in a modern style.",
        price: "14.95 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-11",
        category: "mains",
        name: "Shahi Paneer",
        description:
          "Rich paneer in a silky cashew-tomato sauce, given a modern touch.",
        price: "15.50 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-12",
        category: "mains",
        name: "Dal Makhni",
        description:
          "Black lentils and kidney beans in a light butter-cashew sauce—creamy yet balanced.",
        price: "15.70 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-13",
        category: "mains",
        name: "Paneer Tikka Light / Sizzler",
        description:
          "Grilled paneer with bell peppers and onions, lightly spiced in mild tomato-cashew sauce, served sizzling with a gentle masala sauce.",
        price: "15.90 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-14",
        category: "mains",
        name: "Chicken Chettinad",
        description:
          "South Indian chicken curry with pepper, coconut, curry leaves, and aromatic spices—bold yet balanced.",
        price: "13.90 €",
        dietary: []
      },
      {
        id: "main-15",
        category: "mains",
        name: "Chicken Jalfrezi",
        description:
          "Chicken pieces stir-fried with bell peppers, onions, and tomatoes in a spicy sauce.",
        price: "14.50 €",
        dietary: []
      },
      {
        id: "main-16",
        category: "mains",
        name: "Chicken Madras",
        description:
          "Robust chicken curry with tomatoes, onions, curry leaves, and South Indian spices; pleasantly hot.",
        price: "14.90 €",
        dietary: []
      },
      {
        id: "main-17",
        category: "mains",
        name: "Smoky Tandoori Chicken Sizzler",
        description:
          "Tender grilled chicken with smoky tandoori notes, served on a hot plate with a light curry sauce.",
        price: "14.90 €",
        dietary: []
      },
      {
        id: "main-18",
        category: "mains",
        name: "Chicken Saagwala",
        description:
          "Tender chicken in creamy spinach curry with ginger, garlic, and mild spices.",
        price: "14.90 €",
        dietary: []
      },
      {
        id: "main-19",
        category: "mains",
        name: "Mango Chicken Curry",
        description:
          "Chicken in a golden mango curry sauce with gentle spices; fruity, aromatic, juicy.",
        price: "14.90 €",
        dietary: []
      },
      {
        id: "main-20",
        category: "mains",
        name: "Chicken Tikka Masala",
        description:
          "Grilled chicken in a creamy, mildly spiced orange-tinted sauce with tomatoes and cashew.",
        price: "15.50 €",
        dietary: []
      },
      {
        id: "main-21",
        category: "mains",
        name: "Butter Chicken",
        description:
          "Tender chicken in a creamy tomato-cashew sauce, delicately spiced.",
        price: "15.90 €",
        dietary: []
      },
      {
        id: "main-22",
        category: "mains",
        name: "Scampi Masala",
        description:
          "Scampi in a robust tomato-onion sauce with ginger, garlic, and aromatic spices; mildly hot.",
        price: "15.50 €",
        dietary: []
      },
      {
        id: "main-23",
        category: "mains",
        name: "Scampi Butter Masala",
        description:
          "Scampi in a creamy butter-tomato-cashew sauce, gently spiced and finished with fresh coriander.",
        price: "15.90 €",
        dietary: []
      },
      {
        id: "main-24",
        category: "mains",
        name: "Saffron Flame Fish",
        description:
          "Delicate fish fillet in aromatic tomato-onion sauce with fine spices, gentle heat, and a touch of saffron.",
        price: "16.50 €",
        dietary: []
      },
      {
        id: "main-25",
        category: "mains",
        name: "Butter Naan",
        description:
          "Soft, freshly baked naan with a light butter glaze—perfect for dipping into creamy curries.",
        price: "3.50 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-26",
        category: "mains",
        name: "Garlic Naan",
        description:
          "Fragrant naan with fresh garlic and butter, tandoor-baked to a crisp, aromatic finish.",
        price: "3.75 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-27",
        category: "mains",
        name: "Tandoori Roti (Whole Wheat)",
        description:
          "Traditional thin whole-wheat bread from the tandoor—no butter, light, and vegan.",
        price: "3.50 €",
        dietary: ["vegan"]
      },
      {
        id: "main-28",
        category: "mains",
        name: "Paneer Naan",
        description:
          "Soft tandoor-baked naan filled with gently spiced paneer cubes; aromatic and satisfying.",
        price: "4.20 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-29",
        category: "mains",
        name: "Bread Basket (for two)",
        description:
          "Selection of butter naan, garlic naan, and tandoori roti—perfect for sharing.",
        price: "6.20 €",
        dietary: ["vegetarian"]
      },
      {
        id: "main-30",
        category: "mains",
        name: "Basmati Rice",
        description:
          "Aromatic, fluffy premium basmati—the classic side for any curry.",
        price: "3.50 €",
        dietary: ["vegan", "gluten free"]
      },
      {
        id: "main-31",
        category: "mains",
        name: "Jeera Rice (Cumin Rice)",
        description:
          "Basmati rice with lightly toasted cumin and a hint of ghee—fragrant and aromatic.",
        price: "3.75 €",
        dietary: ["vegetarian", "gluten free"]
      },
      {
        id: "main-32",
        category: "mains",
        name: "Lemon Rice (South Indian Style)",
        description:
          "Light, yellow rice with lemon juice, curry leaves, and mustard seeds—refreshing and vibrant.",
        price: "3.75 €",
        dietary: ["vegetarian"]
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
        id: "dessert-3",
        category: "desserts",
        name: "Pistachio Cheesecake",
        description:
          "Delicate cheesecake with pistachio purée on a crisp base; creamy, nutty, pale green.",
        price: "6.80 €",
        dietary: ["vegetarian"]
      },
      {
        id: "dessert-4",
        category: "desserts",
        name: "Coconut & Mango Sorbet",
        description:
          "Refreshing sorbet with coconut and mango; fruity, exotic, light yellow-white.",
        price: "5.70 €",
        dietary: ["vegan"]
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
      },
      {
        id: "soft-1",
        category: "softdrinks",
        name: "San Pellegrino / Acqua Panna",
        description:
          "Bottle: 0.75l 5.80 € · 0.25l 2.80 € – sparkling or still mineral water.",
        price: "from 2.80 €",
        dietary: []
      },
      {
        id: "soft-2",
        category: "softdrinks",
        name: "Coca-Cola / Coca-Cola Zero",
        description: "0.5l 4.20 € · 0.3l 2.95 €.",
        price: "from 2.95 €",
        dietary: []
      },
      {
        id: "soft-3",
        category: "softdrinks",
        name: "Fanta / Sprite / Spezi",
        description: "0.5l 4.20 € · 0.3l 2.95 €.",
        price: "from 2.95 €",
        dietary: []
      },
      {
        id: "soft-4",
        category: "softdrinks",
        name: "Bitter Lemon / Tonic Water / Ginger Ale",
        description: "0.5l 4.60 € · 0.3l 3.20 €.",
        price: "from 3.20 €",
        dietary: []
      },
      {
        id: "soft-5",
        category: "softdrinks",
        name: "Red Bull / Red Bull Zero",
        description: "Can 0.25l 4.20 €.",
        price: "4.20 €",
        dietary: []
      },
      {
        id: "soft-6",
        category: "softdrinks",
        name: "Ice Tea",
        description: "Bottle 0.25l 4.20 € – pomegranate, peach, lemon.",
        price: "4.20 €",
        dietary: []
      },
      {
        id: "soft-7",
        category: "softdrinks",
        name: "Juice Nectar or Spritzer",
        description:
          "0.5l 4.60 € · 0.3l 3.20 € – apple, orange, passion fruit, banana, cherry-banana.",
        price: "from 3.20 €",
        dietary: []
      }
    ]
  }
};
