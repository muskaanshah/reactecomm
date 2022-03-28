import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648460961/e-commerce/13045119221790_agcge3.jpg",
    name: "Codenames",
    description: "Multiplayer witty game",
    category: ["Multiplayer Games", "Fun Games"],
    newprice: 799,
    actualprice: 1199,
    rating: 3.5,
    deliveryDays: 5
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648461358/e-commerce/Splendor-Board-Game-1_vmcntl.jpg",
    name: "Splendor",
    description: "Multiplayer witty game",
    category: ["Multiplayer Games", "Strategic Games"],
    newprice: 1999,
    actualprice: 2499,
    rating: 4.4,
    badge: "People's favourite",
    deliveryDays: 8
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648461446/e-commerce/2010021a_waqqrx.jpg",
    name: "Ticket to ride",
    description: "Multiplayer witty game",
    category: ["Multiplayer Games", "Strategic Games"],
    newprice: 1299,
    actualprice: 1999,
    rating: 4.3,
    deliveryDays: 10
  },
  {
    _id: uuid(),
    url: "https://images-na.ssl-images-amazon.com/images/I/91uxP3YJIYL.jpg",
    name: "Lost cities",
    description: "Based on set collection",
    category: ["Two player Games", "Strategic Games", "Card Games"],
    newprice: 2099,
    // actualprice: 2399,
    rating: 3.7,
    badge: "Top 10",
    deliveryDays: 15
  },
  {
    _id: uuid(),
    url: "https://en.gigamic.com/files/catalog/products/images/product/gigamic_gmtu_box_tutti-frutti_box-right_bd.webp",
    name: "Tutti Frutti",
    description: "Fun game which requires a good memory",
    category: ["Two player Games", "Fun Games", "Games for children"],
    newprice: 499,
    // actualprice: 499,
    rating: 1.6,
    deliveryDays: 9
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462042/e-commerce/the_best_ghosts_in_family_board_games_-_Ghost_Blitz_a9qmvv.jpg",
    name: "Geistes Blitz",
    description: "Fun game involving fast thinking",
    category: ["Multiplayer Games", "Fun Games"],
    newprice: 2299,
    actualprice: 2999,
    rating: 5,
    outofstock: true,
    deliveryDays: 9
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462197/e-commerce/81umf-clZOL._SY550__odwzfr.jpg",
    name: "Lotus",
    description: "Based on set collection",
    category: ["Multiplayer Games", "Fun Games", "Strategic Games", "Card Games"],
    newprice: 2999,
    actualprice: 3299,
    rating: 4.2,
    deliveryDays: 3
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462271/e-commerce/HANAMIKOJI-BOX-01_WEB_qhuvas.jpg",
    name: "Hanamikoji",
    description: "Based on set collection, strategic thinking",
    category: ["Two player Games", "Strategic Games", "Card Games"],
    newprice: 3199,
    actualprice: 3499,
    rating: 4.9,
    badge: "Best selling",
    deliveryDays: 4
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462344/e-commerce/51Nwvdcl_rL._AC_SY780__j8kyso.jpg",
    name: "Planet",
    description: "Based on area control",
    category: ["Multiplayer Games", "Fun Games", "Card Games"],
    newprice: 3999,
    actualprice: 4099,
    rating: 4.1,
    badge: "Top 10",
    deliveryDays: 6
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462408/e-commerce/s-l300_mirdyz.jpg",
    name: "Ooga Booga",
    description: "A game based on memory",
    category: ["Games for children", "Fun Games"],
    newprice: 799,
    actualprice: 999,
    rating: 2.9,
    deliveryDays: 2
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462577/e-commerce/f14c5d0c6f8eb33b0ae78ce223ba04a9_t8tja0.jpg",
    name: "Marrakech",
    description: "Based on area control",
    category: ["Multiplayer Games", "Fun Games"],
    newprice: 1699,
    actualprice: 1999,
    rating: 3.4,
    deliveryDays: 8
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462535/e-commerce/71ok54azvIL_owjebi.jpg",
    name: "Tsuro",
    description: "Based on area control",
    category: ["Multiplayer Games", "Fun Games"],
    newprice: 2399,
    actualprice: 2599,
    rating: 4.1,
    outofstock: true,
    deliveryDays: 9
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462657/e-commerce/Skull_lazwmq.jpg",
    name: "Skull",
    description: "Based on risk taking",
    category: ["Multiplayer Games", "Fun Games", "Card Games"],
    newprice: 1999,
    actualprice: 2599,
    rating: 3.7,
    deliveryDays: 20
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462705/e-commerce/204012109_9999_4F4761A0D7634C1E97757499A103BF5F_iruywm.jpg",
    name: "Bold",
    description: "A game based on memory",
    category: ["Multiplayer Games", "Fun Games", "Card Games"],
    newprice: 399,
    actualprice: 499,
    rating: 2.9,
    deliveryDays: 3
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462777/e-commerce/81Dgs7fGEwL._SL1500__xlhjwt.jpg",
    name: "Jaipur",
    description: "Based on set collection",
    category: ["Two player Games", "Strategic Games"],
    newprice: 1799,
    actualprice: 2099,
    rating: 3.9,
    badge: "Only few products left",
    deliveryDays: 5
  },
  {
    _id: uuid(),
    url: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1648462860/e-commerce/81_okm4IpfL._SX679__gidadc.jpg",
    name: "Catan",
    description: "Based on area control, trading skills",
    category: ["Multiplayer Games", "Strategic Games"],
    newprice: 2099,
    actualprice: 2399,
    rating: 3.7,
    deliveryDays: 4
  }
];
