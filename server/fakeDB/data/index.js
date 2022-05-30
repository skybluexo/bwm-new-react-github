const mongoose = require("mongoose");

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const image1Id = mongoose.Types.ObjectId();
const image2Id = mongoose.Types.ObjectId();
const image3Id = mongoose.Types.ObjectId();

exports.images = [
  {
    _id: image1Id,
    cloudinaryId: "image1_geclbi",
    url: "https://res.cloudinary.com/kaiz/image/upload/v1637782307/image1_geclbi.jpg",
  },
  {
    _id: image2Id,
    cloudinaryId: "image2_vdx07f",
    url: "https://res.cloudinary.com/kaiz/image/upload/v1637782344/image2_vdx07f.jpg",
  },
  {
    _id: image3Id,
    cloudinaryId: "image3_u9clzh",
    url: "https://res.cloudinary.com/kaiz/image/upload/v1637782345/image3_u9clzh.jpg",
  },
];

exports.users = [
  {
    _id: user1Id,
    username: "Test User",
    email: "test@gmail.com",
    password: "testtest",
  },
  {
    _id: user2Id,
    username: "Test User2",
    email: "test2@gmail.com",
    password: "testtest2",
  },
];

exports.rentals = [
  {
    title: "Nice view on ocean",
    city: "San Francisco",
    street: "Main street",
    category: "condo",
    image: image1Id,
    numOfRooms: 4,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 43,
    owner: user1Id,
  },
  {
    title: "Modern apartment in center",
    city: "New York",
    street: "Time Square",
    category: "apartment",
    image: image2Id,
    numOfRooms: 1,
    shared: false,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 11,
    owner: user1Id,
  },
  {
    title: "Old house in nature",
    city: "Bratislava",
    street: "Letna 7",
    category: "house",
    image: image3Id,
    numOfRooms: 5,
    shared: true,
    description: "Very nice apartment in center of the city.",
    dailyPrice: 23,
    owner: user2Id,
  },
];
