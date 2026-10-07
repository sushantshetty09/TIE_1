const mongoose= require("mongoose");
const Seller = require("./models/seller");
const Order = require("./models/order");
require("dotenv").config();
const Sellers = [
    {
     ownerName: "Priya Sharma",
     shopName: "Priyas Kitchen",
     username: "priya_kitchen",
     password: "priya123",
     phone : "9876543569",
     city: "Mumbai",
     locality:"Andheri-west",
     category: "food",
     description : "home cooked north indian meals",
     upiID:"priya.kitchen@upi",
     verified : true,
     rating: 4.8,
     reviewCount: 134,
     products: [
        {name:"LUNCH TIFFIN" , price:120 , Unit: "perbox"},
         {name:"RAJMA CHAWAL" , price:90 , Unit: "per plate"},
          {name:"Laddo" , price:250 , Unit: "per kg"},
     ],
     reviews: [
         {user:"anjali M" , rating:5 , text: "best tiffin in the area"},
         {user:"Ritu S" , rating:5 , text: "Rajma is just like home"},
        ]
 },
{
   ownerName: "Meera patel",
     shopName: "handmade by meera",
     username: "meera_crafts",
     password: "meera123",
     phone : "9876543568",
     city: "Ahmadabad",
     locality:"Navarangpura",
     category: "craft",
     description : "handcrafted jwellery ",
     upiID:"meera.crafts@upi",
     verified : true,
     rating: 4.6,
     reviewCount: 89,
     products: [
        {name:"Fabric Tote Bag" , price:400 , Unit: "per bag"},
         {name:"earrings" , price:180 , Unit: "per piece"},
          {name:"wall hanging" , price:650 , Unit: "per piece"},
     ],
     reviews: [
         {user:"pooja M" , rating:5 , text: "beautiful quality pieces"},
         {user:"Ritu S" , rating:4 , text: "loved the earrings"},
        ]
    },
{
     ownerName: "Nisha Verma",
    shopName: "Nishas Glow Studio",
    username: "nisha_glow",
    password: "nisha123",
    phone: "9923456789",
    city: "Bangalore",
    locality: "Koramangala",
    category: "beauty",
    description: "Natural skincare made from herbs and essential oils. No chemicals, only care.",
    upiId: "nisha.glow@upi",
    verified: true,
    rating: 4.9,
    reviewCount: 202,
    products: [
      { name: "Rose Face Serum", price: 480, unit: "30ml" },
      { name: "Ubtan Body Scrub", price: 220, unit: "100g" },
      { name: "Herbal Hair Oil", price: 320, unit: "100ml" }
    ],
    reviews: [
      { user: "Kavita L.", rating: 5, text: "My skin has transformed!" },
      { user: "Swati P.", rating: 5, text: "Pure and effective." }
    ]
},
{
    ownerName: "Kavita Singh",
    shopName: "Kavita Boutique",
    username: "kavita_boutique",
    password: "kavita123",
    phone: "9934567890",
    city: "Jaipur",
    locality: "Civil Lines",
    category: "fashion",
    description: "Custom stitched ethnic wear - salwar kameez, blouses and lehengas. Tailored to your fit.",
    upiId: "kavita.boutique@upi",
    verified: false,
    rating: 4.4,
    reviewCount: 56,
    products: [
      { name: "Custom Salwar Kameez", price: 1200, unit: "per set" },
      { name: "Blouse Stitching", price: 400, unit: "each" },
      { name: "Dupatta Embroidery", price: 600, unit: "each" }
    ],
    reviews: [
      { user: "Divya M.", rating: 4, text: "Perfect fitting." }
    ]
}];
 async function seed() {
  await mongoose.connect(process.env.Mongo_URI);
  await Seller.deleteMany({});
  await Order.deleteMany({});
  for (const s of sellers){
    const seller = new Seller(s);
    await seller.save();

  }
  console.log("seed complete");
  process.exit(0);
 }
seed().catch(err => { console.error(err); process.exit(1); });
