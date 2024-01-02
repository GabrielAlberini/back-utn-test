import fs from "node:fs";
import products from "../database/products.json" assert { type: "json" };

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
    fs.writeFileSync("./src/database/products.json", JSON.stringify(products));
  } catch (error) {
    throw new Error("406 - NOT ACCEPTABLE");
  }
};
