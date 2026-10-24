export const SEASONAL_FAVOURITES = [
  {
    id: "sf-1",
    name: "Classic Latte",
    category: "Specialty Coffee",
    shortDescription: "Double shot of single-origin espresso with velvety steamed whole milk and delicate microfoam art.",
    price: 4.85,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    calories: "170 kcal",
    rating: 4.9
  },
  {
    id: "sf-2",
    name: "Iced Vanilla",
    category: "Cold Brew & Iced",
    shortDescription: "Cold-extracted espresso poured over artisanal Madagascar bourbon vanilla syrup and creamy oat milk.",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    badge: "Seasonal",
    calories: "190 kcal",
    rating: 4.8
  },
  {
    id: "sf-3",
    name: "Avocado Toast",
    category: "Fresh Kitchen",
    shortDescription: "Crushed Hass avocado on toasted seeded sourdough, pickled shallots, chili flakes, and organic olive drizzle.",
    price: 9.75,
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80",
    badge: "Chef's Pick",
    calories: "340 kcal",
    rating: 4.9
  },
  {
    id: "sf-4",
    name: "Almond Croissant",
    category: "Bakery",
    shortDescription: "Twice-baked French butter pastry stuffed with rich almond frangipane cream and crowned with toasted almonds.",
    price: 5.25,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    badge: "Baked Daily",
    calories: "410 kcal",
    rating: 5.0
  }
];

export const FULL_MENU = [
  ...SEASONAL_FAVOURITES,
  {
    id: "fm-5",
    name: "Pour-Over Ethiopian Yirgacheffe",
    category: "Specialty Coffee",
    shortDescription: "Floral notes of jasmine, bergamot, and sweet stone peach brewed meticulously with Chemex.",
    price: 6.00,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
    calories: "5 kcal",
    rating: 4.9
  },
  {
    id: "fm-6",
    name: "Cortado",
    category: "Specialty Coffee",
    shortDescription: "Equal parts intense ristretto espresso and silky warm milk in a heavy Gibraltar glass.",
    price: 4.25,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    calories: "85 kcal",
    rating: 4.8
  },
  {
    id: "fm-7",
    name: "Caramel Cold Foam Brew",
    category: "Cold Brew & Iced",
    shortDescription: "24-hour slow steeped cold brew topped with thick salted caramel cloud foam.",
    price: 5.85,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    calories: "160 kcal",
    rating: 4.9
  },
  {
    id: "fm-8",
    name: "Matcha Lavender Tonic",
    category: "Cold Brew & Iced",
    shortDescription: "Ceremonial Uji matcha whisked fresh, wild lavender elixir, sparkling spring water and lemon zest.",
    price: 6.25,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    calories: "110 kcal",
    rating: 4.7
  },
  {
    id: "fm-9",
    name: "Smoked Salmon Brioche",
    category: "Fresh Kitchen",
    shortDescription: "House-cured wild salmon, whipped herbed cream cheese, caper berries, and fresh dill on butter brioche.",
    price: 11.50,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    calories: "420 kcal",
    rating: 4.9
  },
  {
    id: "fm-10",
    name: "Pistachio Cardamom Bun",
    category: "Bakery",
    shortDescription: "Swedish braided dough infused with freshly cracked green cardamom and roasted Iranian pistachio paste.",
    price: 4.95,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    calories: "380 kcal",
    rating: 4.9
  }
];

export const MENU_CATEGORIES = [
  "All",
  "Specialty Coffee",
  "Cold Brew & Iced",
  "Bakery",
  "Fresh Kitchen"
];
