import products from "../database/products.json" assert { type: "json" };

export const getProducts = () => {
  try {
    return products;
  } catch (error) {
    throw new Error("404 - NOT FOUND");
  }
};

export const getProductById = (id) => {
  try {
    return products.find((prod) => prod.id === id);
  } catch (error) {
    throw new Error("404 - NOT FOUND");
  }
};

export const addProduct = (newProduct) => {
  try {
    products.push(newProduct);
    return newProduct;
  } catch (error) {
    throw new Error("406 - NOT ACCEPTABLE", error);
  }
};
