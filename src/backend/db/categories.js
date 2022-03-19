import { v4 as uuid } from "uuid";

export const categories = [
  {
    _id: uuid(),
    imgUrl: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541607/e-commerce/strategicgame_ttzvna.jpg",
    categoryName: "Strategic Games"
  },
  {
    _id: uuid(),
    imgUrl: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541606/e-commerce/fungame_dwgrfs.jpg",
    categoryName: "Fun Games"
  },
  {
    _id: uuid(),
    imgUrl: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541607/e-commerce/groupgame_ewlhun.jpg",
    categoryName: "Multiplayer Games"
  },
  {
    _id: uuid(),
    imgUrl: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541607/e-commerce/twoplayergame_ygt3gn.jpg",
    categoryName: "Two player Games"
  },
  {
    _id: uuid(),
    imgUrl: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541606/e-commerce/cardgame_rktmon.jpg",
    categoryName: "Card Games"
  },
  {
    _id: uuid(),
    imgUrl: "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541607/e-commerce/childrengames_skukyv.jpg",
    categoryName: "Games for children"
  }
];
