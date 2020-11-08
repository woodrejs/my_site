import { v4 as uuid } from "uuid";

export const DATA = [
  { name: "start", path: "/", id: uuid() },
  { name: "o mnie", path: "/about", id: uuid() },
  { name: "portfolio", path: "/portfolio", id: uuid() },
  { name: "kontakt", path: "/contact", id: uuid() },
];
