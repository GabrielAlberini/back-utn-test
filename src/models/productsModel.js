import fs from "node:fs";
import products from "../database/products.json" assert { type: "json" };
import { pathfile } from "../database/index.js";

export const getProducts = () => {
  try {
    return products;
  } catch (error) {
    throw new Error("404 - NOT FOUND");
  }
};

export const addProduct = (newProduct) => {
  try {
    products.push(newProduct);
    fs.writeFileSync(pathfile + "/products.json", JSON.stringify(products));
  } catch (error) {
    throw new Error("406 - NOT ACCEPTABLE", error);
  }
};
