import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Codenames",
    description: "Multiplayer witty game",
    category: ["Multiplayer Games", "Fun Games"],
    newprice: 799,
    actualprice: 1199,
    rating: 3.5
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Splendor",
    description: "Multiplayer witty game",
    category: ["Multiplayer Games", "Strategic Games"],
    newprice: 1999,
    actualprice: 2499,
    rating: 4.4,
    badge: "People's favourite"
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Ticket to ride",
    description: "Multiplayer witty game",
    category: ["Multiplayer Games", "Strategic Games"],
    newprice: 1299,
    actualprice: 1999,
    rating: 4.3
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Lost cities",
    description: "Based on set collection",
    category: ["Two player Games", "Strategic Games", "Card Games"],
    newprice: 2099,
    // actualprice: 2399,
    rating: 3.7,
    badge: "Top 10"
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Tutti Frutti",
    description: "Fun game which requires a good memory",
    category: ["Two player Games", "Fun Games", "Games for children"],
    newprice: 499,
    // actualprice: 499,
    rating: 1.6
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Gheistz",
    description: "Fun game involving fast thinking",
    category: ["Multiplayer Games", "Fun Games"],
    newprice: 2299,
    actualprice: 2999,
    rating: 5,
    outofstock: true
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Lotus",
    description: "Based on set collection",
    category: ["Multiplayer Games", "Fun Games", "Strategic Games", "Card Games"],
    newprice: 2999,
    actualprice: 3299,
    rating: 4.2
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Hanamikoji",
    description: "Based on set collection, strategic thinking",
    category: ["Two player Games", "Strategic Games", "Card Games"],
    newprice: 3199,
    actualprice: 3499,
    rating: 4.9,
    badge: "Best selling"
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Planet",
    description: "Based on area control",
    category: ["Multiplayer Games", "Fun Games", "Card Games"],
    newprice: 3999,
    actualprice: 4099,
    rating: 4.1,
    badge: "Top 10"
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Ooga Booga",
    description: "A game based on memory",
    category: ["Games for children", "Fun Games"],
    newprice: 799,
    actualprice: 999,
    rating: 2.9
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Marrakech",
    description: "Based on area control",
    category: ["Multiplayer Games", "Fun Games"],
    newprice: 1699,
    actualprice: 1999,
    rating: 3.4
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Tsuro",
    description: "Based on area control",
    category: ["Multiplayer Games", "Fun Games"],
    newprice: 2399,
    actualprice: 2599,
    rating: 4.1,
    outofstock: true
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Skulls",
    description: "Based on risk taking",
    category: ["Multiplayer Games", "Fun Games", "Card Games"],
    newprice: 1999,
    actualprice: 2599,
    rating: 3.7
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Bold",
    description: "A game based on memory",
    category: ["Multiplayer Games", "Fun Games", "Card Games"],
    newprice: 399,
    actualprice: 499,
    rating: 2.9
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Jaipur",
    description: "Based on set collection",
    category: ["Two player Games", "Strategic Games"],
    newprice: 1799,
    actualprice: 2099,
    rating: 3.9,
    badge: "Only few products left"
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/200/230",
    name: "Catan",
    description: "Based on area control, trading skills",
    category: ["Multiplayer Games", "Strategic Games"],
    newprice: 2099,
    actualprice: 2399,
    rating: 3.7
  }
];
