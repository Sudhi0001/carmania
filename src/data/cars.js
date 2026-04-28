const cars = [
  {
    id: 1,
    name: "Audi R8",
    image: "audi.jpg",
    price: 27200000,
    displayPrice: "₹2.72 Cr",
    brand: "Audi",
    type: "Supercar",
    fuel: "Petrol",
    mileage: "6-8 km/l",
    seats: 2,
    launchYear: 2021,

    description: "A perfect blend of performance and luxury with a naturally aspirated V10 engine.",

    specs: [
      "Engine: 5.2L V10",
      "Power: 602 hp",
      "Torque: 560 Nm",
      "0-100 km/h: 3.2s",
      "Top Speed: 330 km/h"
    ],

    features: ["Virtual Cockpit", "Carbon Fiber Body"],
    safety: ["ABS + EBD", "Airbags"],
colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],    pros: ["Incredible acceleration"],
    cons: ["Very expensive"]
  },

  {
    id: 2,
    name: "Ford Mustang GT",
    image: "mustang.jpg",
    price: 7460000,
    displayPrice: "₹74.6 L",
    brand: "Ford",
    type: "Muscle",
    fuel: "Petrol",
    mileage: "7-9 km/l",
    seats: 4,
    launchYear: 2020,

    description: "Iconic American muscle car delivering raw power.",
    specs: ["Engine: V8", "Power: 450 hp"],
    features: ["Launch Control"],
    safety: ["ABS"],
colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],    pros: ["Powerful V8"],
    cons: ["Low mileage"]
  },

  {
    id: 3,
    name: "Ferrari 488",
    image: "ferrari.jpg",
    price: 38800000,
    displayPrice: "₹3.88 Cr",
    brand: "Ferrari",
    type: "Supercar",
    fuel: "Petrol",
    mileage: "5-6 km/l",
    seats: 2,
    launchYear: 2019,

    description: "Italian craftsmanship meets blistering speed.",
    specs: ["Power: 661 hp"],
    features: ["Race Mode"],
    safety: ["ABS"],
   colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],
    pros: ["Insane speed"],
    cons: ["Expensive"]
  },

  {
    id: 4,
    name: "Lamborghini Huracán",
    image: "lamborgini.webp",
    price: 40000000,
    displayPrice: "₹4.0 Cr",
    brand: "Lamborghini",
    type: "Supercar",
    fuel: "Petrol",
    mileage: "5 km/l",
    seats: 2,
    launchYear: 2022,

    description: "Exotic design with V10 performance.",
    specs: ["Power: 630 hp"],
    features: ["Drive Modes"],
    safety: ["ABS"],
colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],    pros: ["Very fast"],
    cons: ["Low comfort"]
  },

  {
    id: 5,
    name: "Tesla Model S Plaid",
    image: "tesla.jpg",
    price: 15000000,
    displayPrice: "₹1.5 Cr",
    brand: "Tesla",
    type: "Electric",
    fuel: "Electric",
    mileage: "600 km range",
    seats: 5,
    launchYear: 2023,

    description: "Electric sedan with insane acceleration.",
    specs: ["0-100 km/h: 2.1s"],
    features: ["Autopilot"],
    safety: ["Auto Braking"],
    colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],
    pros: ["Fast EV"],
    cons: ["Charging issue"]
  },
  {
  id: 6,
  name: "Porsche 911 Turbo S",
  image: "porshe.jpg",
  price: 33500000,
  displayPrice: "₹3.35 Cr",
  brand: "Porsche",
  type: "Sports",
  fuel: "Petrol",
  mileage: "8-10 km/l",
  seats: 2,
  launchYear: 2023,
  description: "Precision engineering with insane speed.",
  specs: ["Engine: 3.8L Twin Turbo", "Power: 640 hp"],
  features: ["Sport Chrono"],
  safety: ["ABS"],
  colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],
  pros: ["Super fast"],
  cons: ["Expensive"]
},

{
  id: 7,
  name: "BMW M5 Competition",
  image: "BMW m5.jpg",
  price: 18000000,
  displayPrice: "₹1.8 Cr",
  brand: "BMW",
  type: "Sedan",
  fuel: "Petrol",
  mileage: "9 km/l",
  seats: 5,
  launchYear: 2021,
  description: "Luxury sedan with insane performance.",
  specs: ["Power: 617 hp"],
  features: ["xDrive AWD"],
  safety: ["ABS"],
  colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],
  pros: ["Luxury + speed"],
  cons: ["Fuel consumption"]
},

{
  id: 8,
  name: "Mercedes AMG GT",
  image: "amg.jpg",
  price: 26000000,
  displayPrice: "₹2.6 Cr",
  brand: "Mercedes-Benz",
  type: "Sports",
  fuel: "Petrol",
  mileage: "7 km/l",
  seats: 2,
  launchYear: 2022,
  description: "High-performance coupe with handcrafted V8 power.",
  specs: ["Power: 523 hp"],
  features: ["Sport Suspension"],
  safety: ["ABS"],
colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],  pros: ["Sharp handling"],
  cons: ["Maintenance cost"]
},

{
  id: 9,
  name: "Tesla Model S Plaid",
  image: "tesla.jpg",
  price: 15000000,
  displayPrice: "₹1.5 Cr",
  brand: "Tesla",
  type: "Electric",
  fuel: "Electric",
  mileage: "600 km range",
  seats: 5,
  launchYear: 2023,
  description: "Electric sedan with insane acceleration.",
  specs: ["0-100 km/h: 2.1s"],
  features: ["Autopilot"],
  safety: ["Lane Assist"],
  colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],
  pros: ["Fast EV"],
  cons: ["Charging issue"]
},

{
  id: 10,
  name: "Nissan GTR",
  image: "gtr.avif",
  price: 21000000,
  displayPrice: "₹2.1 Cr",
  brand: "Nissan",
  type: "Sports",
  fuel: "Petrol",
  mileage: "8 km/l",
  seats: 4,
  launchYear: 2021,
  description: "Legendary performance machine.",
  specs: ["Power: 565 hp"],
  features: ["AWD System"],
  safety: ["ABS"],
  colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],
  pros: ["Super fast"],
  cons: ["Old interior"]
},

{
  id: 11,
  name: "Toyota Supra",
  image: "supra.jpg",
  price: 8500000,
  displayPrice: "₹85 L",
  brand: "Toyota",
  type: "Sports",
  fuel: "Petrol",
  mileage: "10 km/l",
  seats: 2,
  launchYear: 2022,
  description: "Iconic sports car reborn.",
  specs: ["Power: 382 hp"],
  features: ["Sport Mode"],
  safety: ["ABS"],
  colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],
  pros: ["Fun to drive"],
  cons: ["Limited practicality"]
},

{
  id: 12,
  name: "McLaren 720S",
  image: "mclaren.jpg",
  price: 45000000,
  displayPrice: "₹4.5 Cr",
  brand: "McLaren",
  type: "Supercar",
  fuel: "Petrol",
  mileage: "6 km/l",
  seats: 2,
  launchYear: 2021,
  description: "Track-focused supercar.",
  specs: ["Power: 710 hp"],
  features: ["Track Mode"],
  safety: ["ABS"],
  colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],
  pros: ["Extremely fast"],
  cons: ["Very expensive"]
},

{
  id: 13,
  name: "Bentley Continental GT",
  image: "bentley.jpg",
  price: 50000000,
  displayPrice: "₹5 Cr",
  brand: "Bentley",
  type: "Luxury",
  fuel: "Petrol",
  mileage: "9 km/l",
  seats: 4,
  launchYear: 2022,
  description: "Ultra-luxury grand tourer.",
  specs: ["Power: 626 hp"],
  features: ["Luxury Interior"],
  safety: ["ADAS"],
  colors: [
  { name: "Red", value: "#ef4444" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Silver", value: "#9ca3af" }
],  
  pros: ["Extreme comfort"],
  cons: ["Very costly"]
}
];

export default cars;