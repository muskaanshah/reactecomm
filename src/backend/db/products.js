import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Codenames",
    description: "Multiplayer witty game",
    category: ["MULTIPLAYER_GAMES", "FUN_GAMES"],
    newprice: 799,
    actualprice: 1199,
    rating: 3.5
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Splendor",
    description: "Multiplayer witty game",
    category: ["MULTIPLAYER_GAMES", "STRATEGIC_GAMES"],
    newprice: 1999,
    actualprice: 2499,
    rating: 4.4
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Ticket to ride",
    description: "Multiplayer witty game",
    category: ["MULTIPLAYER_GAMES", "STRATEGIC_GAMES"],
    newprice: 1299,
    actualprice: 1999,
    rating: 4.3
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Lost cities",
    description: "Based on set collection",
    category: ["TWOPLAYER_GAMES", "STRATEGIC_GAMES", "CARD_GAMES"],
    newprice: 2099,
    actualprice: 2399,
    rating: 3.7
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Tutti Frutti",
    description: "Fun game which requires a good memory",
    category: ["TWOPLAYER_GAMES", "FUN_GAMES", "CHILDREN_GAMES"],
    newprice: 399,
    actualprice: 499,
    rating: 1.6
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Gheistz",
    description: "Fun game involving fast thinking",
    category: ["MULTIPLAYER_GAMES", "FUN_GAMES"],
    newprice: 2299,
    actualprice: 2999,
    rating: 5
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Lotus",
    description: "Based on set collection",
    category: ["MULTIPLAYER_GAMES", "FUN_GAMES", "STRATEGIC_GAMES", "CARD_GAMES"],
    newprice: 2999,
    actualprice: 3299,
    rating: 4.2
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Hanamikoji",
    description: "Based on set collection, strategic thinking",
    category: ["TWOPLAYER_GAMES", "STRATEGIC_GAMES", "CARD_GAMES"],
    newprice: 3199,
    actualprice: 3499,
    rating: 4.9
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Planet",
    description: "Based on area control",
    category: ["MULTIPLAYER_GAMES", "FUN_GAMES", "CARD_GAMES"],
    newprice: 3999,
    actualprice: 4099,
    rating: 4.1
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Ooga Booga",
    description: "A game based on memory",
    category: ["CHILDREN_GAMES", "FUN_GAMES"],
    newprice: 799,
    actualprice: 999,
    rating: 2.9
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Marrakech",
    description: "Based on area control",
    category: ["MULTIPLAYER_GAMES", "FUN_GAMES"],
    newprice: 1699,
    actualprice: 1999,
    rating: 3.4
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Tsuro",
    description: "Based on area control",
    category: ["MULTIPLAYER_GAMES", "FUN_GAMES"],
    newprice: 2399,
    actualprice: 2599,
    rating: 4.1
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Skulls",
    description: "Based on risk taking",
    category: ["MULTIPLAYER_GAMES", "FUN_GAMES", "CARD_GAMES"],
    newprice: 1999,
    actualprice: 2599,
    rating: 3.7
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Bold",
    description: "A game based on memory",
    category: ["MULTIPLAYER_GAMES", "FUN_GAMES", "CARD_GAMES"],
    newprice: 399,
    actualprice: 499,
    rating: 2.9
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Jaipur",
    description: "Based on set collection",
    category: ["TWOPLAYER_GAMES", "STRATEGIC_GAMES"],
    newprice: 1799,
    actualprice: 2099,
    rating: 3.9
  },
  {
    _id: uuid(),
    url: "https://picsum.photos/300/200",
    name: "Catan",
    description: "Based on area control, trading skills",
    category: ["MULTIPLAYER_GAMES", "STRATEGIC_GAMES"],
    newprice: 2099,
    actualprice: 2399,
    rating: 3.7
  }
];
