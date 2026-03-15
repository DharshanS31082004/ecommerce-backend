const express = require("express");
const app = express();

app.use(express.json());

/* ------------------ CATEGORY DATA ------------------ */

let categories = [
  { id: 1, categoryName: "Electronics" }
];

/* ------------------ PRODUCT DATA ------------------ */

let products = [
  { id: 1, name: "Laptop", price: 50000, stock: 5 }
];

/* ------------------ ORDER DATA ------------------ */

let orders = [];

/* ------------------ CATEGORY APIs ------------------ */

// GET all categories
app.get("/categories", (req, res) => {
  res.json(categories);
});

// Add new category
app.post("/categories", (req, res) => {
  const newCategory = req.body;

  categories.push(newCategory);

  res.json({
    message: "Category added successfully",
    data: newCategory
  });
});

/* ------------------ PRODUCT APIs ------------------ */

// View all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add product
app.post("/products", (req, res) => {
  const product = req.body;

  products.push(product);

  res.json({
    message: "Product added successfully",
    data: product
  });
});

// Update product
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.stock = req.body.stock;

    res.json({
      message: "Product updated",
      data: product
    });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Delete product
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  products = products.filter(p => p.id !== id);

  res.json({
    message: "Product deleted successfully"
  });
});

/* ------------------ ORDER API ------------------ */

// Create order
app.post("/orders", (req, res) => {

  const { productId, quantity } = req.body;

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (product.stock < quantity) {
    return res.status(400).json({ message: "Not enough stock available" });
  }

  // reduce stock
  product.stock -= quantity;

  const order = {
    orderId: orders.length + 1,
    productId,
    quantity
  };

  orders.push(order);

  res.json({
    message: "Order created successfully",
    order
  });

});

/* ------------------ SERVER ------------------ */

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

