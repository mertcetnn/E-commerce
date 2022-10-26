const { Product } = require("../models");

const productData = [
  {
    product_name: "Blue T-Shirt",
    price: 19.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: "Winter Shoes",
    price: 70.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: "Branded Baseball Hat",
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: "Compilation Vinyl Record",
    price: 12.99,
    stock: 0,
    category_id: 3,
  },
  {
    product_name: "Blue Jean",
    price: 29.99,
    stock: 12,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
