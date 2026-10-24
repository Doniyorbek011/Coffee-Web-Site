export const CAFE_NAME = "Qahva House";
export const CAFE_TAGLINE = "Good coffee, great moments.";

export const BRAND_INFO = {
  name: CAFE_NAME,
  tagline: CAFE_TAGLINE,
  shortDescription: "Artisanal roastery and cozy neighborhood gathering space celebrating specialty single-origin coffees, handcrafted brews, and fresh morning bakery.",
  phone: "+1 (555) 724-8269",
  email: "hello@qahvahouse.com",
  instagram: "@qahvahouse",
  address: "428 Artisan Way, Old Town Quarter",
  city: "Seattle, WA 98101",
  hours: [
    { days: "Monday – Friday", time: "06:30 AM – 08:00 PM" },
    { days: "Saturday – Sunday", time: "07:30 AM – 09:00 PM" }
  ],
  stats: [
    { label: "Happy Customers", value: 10, suffix: "K+", prefix: "" },
    { label: "Average Rating", value: 4.8, suffix: "★", prefix: "", decimals: 1 },
    { label: "Locations", value: 3, suffix: "", prefix: "" },
  ],
  locations: [
    {
      name: "Old Town Flagship",
      address: "428 Artisan Way, Old Town Quarter",
      hours: "Mon-Sun: 6:30 AM - 8:30 PM",
      features: "Roastery • Outdoor Patio • Wi-Fi",
      phone: "+1 (555) 724-8269"
    },
    {
      name: "Downtown Botanica",
      address: "812 Pinecrest Blvd, Suite 104",
      hours: "Mon-Sat: 7:00 AM - 7:00 PM",
      features: "Espresso Bar • Meeting Nooks • Rapid Pickup",
      phone: "+1 (555) 724-8270"
    },
    {
      name: "Waterfront Atrium",
      address: "15 Oceanview Promenade",
      hours: "Tue-Sun: 7:30 AM - 9:00 PM",
      features: "Harbor Views • Specialty Bakery • Tasting Room",
      phone: "+1 (555) 724-8271"
    }
  ]
};
